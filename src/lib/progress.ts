import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { TRACKS, TOTAL_MODULES } from "./tracks";

export type Status = "not_started" | "in_progress" | "complete";

export type QuizResult = { score: number; total: number; passed: boolean; at: number };

type ProgressState = {
  moduleStatus: Record<string, Status>; // key: `${trackId}/${moduleId}`
  quizScores: Record<string, QuizResult>; // key: trackId
  challengeChecklist: Record<string, number[]>; // key: `${trackId}/${moduleId}` -> checked step indexes
  lastOpenedModuleId?: string;
  lastOpenedModuleKey?: string;
};

const KEY = "codeready-progress-v1";
const LEGACY_KEY = "codeready.progress.v1";

const emptyState: ProgressState = {
  moduleStatus: {},
  quizScores: {},
  challengeChecklist: {},
};

function read(): ProgressState {
  if (typeof window === "undefined") return emptyState;
  try {
    const raw = window.localStorage.getItem(KEY) ?? window.localStorage.getItem(LEGACY_KEY);
    if (!raw) return emptyState;
    const parsed = JSON.parse(raw);
    return {
      ...emptyState,
      moduleStatus: parsed.moduleStatus ?? parsed.modules ?? {},
      quizScores: parsed.quizScores ?? parsed.quizzes ?? {},
      challengeChecklist: parsed.challengeChecklist ?? parsed.checklists ?? {},
      lastOpenedModuleId: parsed.lastOpenedModuleId ?? parsed.lastOpened?.moduleId,
      lastOpenedModuleKey: parsed.lastOpenedModuleKey,
    };
  } catch {
    return emptyState;
  }
}

const listeners = new Set<() => void>();
let cache: ProgressState | null = null;

function getSnapshot(): ProgressState {
  if (cache === null) cache = read();
  return cache;
}

function getServerSnapshot(): ProgressState {
  return emptyState;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = read();
      listeners.forEach((l) => l());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function write(next: ProgressState) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function useProgress() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setStatus = useCallback(
    (trackId: string, moduleId: string, status: Status) => {
      const key = `${trackId}/${moduleId}`;
      const current = getSnapshot();
      const moduleStatus = { ...current.moduleStatus, [key]: status };
      write({ ...current, moduleStatus });
    },
    [],
  );

  const markOpened = useCallback((trackId: string, moduleId: string) => {
    const key = `${trackId}/${moduleId}`;
    const current = getSnapshot();
    const moduleStatus = { ...current.moduleStatus };
    if (moduleStatus[key] !== "complete") moduleStatus[key] = "in_progress";
    write({
      ...current,
      moduleStatus,
      lastOpenedModuleKey: key,
      lastOpenedModuleId: moduleId,
    });
  }, []);

  const saveQuizResult = useCallback(
    (trackId: string, result: QuizResult) => {
      const current = getSnapshot();
      const quizScores = { ...current.quizScores, [trackId]: result };
      const moduleStatus = { ...current.moduleStatus };
      if (result.passed) moduleStatus[`${trackId}/track-quiz`] = "complete";
      write({ ...current, quizScores, moduleStatus });
    },
    [],
  );

  const toggleChecklistStep = useCallback(
    (trackId: string, moduleId: string, step: number, totalSteps: number) => {
      const key = `${trackId}/${moduleId}`;
      const current = getSnapshot();
      const prev = current.challengeChecklist[key] ?? [];
      const next = prev.includes(step)
        ? prev.filter((s) => s !== step)
        : [...prev, step].sort((a, b) => a - b);
      const challengeChecklist = { ...current.challengeChecklist, [key]: next };
      const moduleStatus = { ...current.moduleStatus };
      moduleStatus[key] = next.length >= totalSteps ? "complete" : "in_progress";
      write({ ...current, challengeChecklist, moduleStatus });
    },
    [],
  );

  const getStatus = useCallback(
    (trackId: string, moduleId: string): Status =>
      state.moduleStatus[`${trackId}/${moduleId}`] ?? "not_started",
    [state],
  );

  return { state, setStatus, markOpened, getStatus, saveQuizResult, toggleChecklistStep };
}

export function isTrackComplete(trackId: string) {
  const s = getSnapshot();
  const t = TRACKS.find((x) => x.id === trackId);
  if (!t) return false;
  return t.modules.every((m) => s.moduleStatus[`${trackId}/${m.id}`] === "complete");
}

// Ensures client-only render after hydration (avoids SSR mismatch for progress UI)
export function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}

export function trackCompletion(state: ProgressState, trackId: string) {
  const t = TRACKS.find((x) => x.id === trackId);
  if (!t) return { done: 0, total: 0, pct: 0 };
  const done = t.modules.filter(
    (m) => state.moduleStatus[`${trackId}/${m.id}`] === "complete",
  ).length;
  return {
    done,
    total: t.modules.length,
    pct: Math.round((done / t.modules.length) * 100),
  };
}

export function overallCompletion(state: ProgressState) {
  const done = Object.values(state.moduleStatus).filter(
    (s) => s === "complete",
  ).length;
  return {
    done,
    total: TOTAL_MODULES,
    pct: Math.round((done / TOTAL_MODULES) * 100),
  };
}

export function exportProgress(): string {
  return JSON.stringify(getSnapshot(), null, 2);
}

export function importProgress(json: string): { ok: boolean; error?: string } {
  try {
    const parsed = JSON.parse(json);
    if (typeof parsed !== "object" || parsed === null) throw new Error("Invalid format");
    const next: ProgressState = {
      moduleStatus: parsed.moduleStatus ?? {},
      quizScores: parsed.quizScores ?? {},
      challengeChecklist: parsed.challengeChecklist ?? {},
      lastOpenedModuleId: parsed.lastOpenedModuleId,
      lastOpenedModuleKey: parsed.lastOpenedModuleKey,
    };
    write(next);
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

export function resetProgress() {
  write(emptyState);
}
