import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { TRACKS, TOTAL_MODULES } from "./tracks";

export type Status = "not-started" | "in-progress" | "complete";

export type QuizResult = { score: number; total: number; passed: boolean; at: number };

type ProgressState = {
  modules: Record<string, Status>; // key: `${trackId}/${moduleId}`
  quizzes: Record<string, QuizResult>; // key: trackId
  checklists: Record<string, number[]>; // key: `${trackId}/${moduleId}` -> checked step indexes
  lastOpened?: { trackId: string; moduleId: string; at: number };
};

const KEY = "codeready.progress.v1";

const emptyState: ProgressState = { modules: {}, quizzes: {}, checklists: {} };

function read(): ProgressState {
  if (typeof window === "undefined") return emptyState;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyState;
    return { ...emptyState, ...JSON.parse(raw) };
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
      const modules = { ...current.modules, [key]: status };
      write({ ...current, modules });
    },
    [],
  );

  const markOpened = useCallback((trackId: string, moduleId: string) => {
    const key = `${trackId}/${moduleId}`;
    const current = getSnapshot();
    const modules = { ...current.modules };
    if (modules[key] !== "complete") modules[key] = "in-progress";
    write({
      ...current,
      modules,
      lastOpened: { trackId, moduleId, at: Date.now() },
    });
  }, []);

  const getStatus = useCallback(
    (trackId: string, moduleId: string): Status =>
      state.modules[`${trackId}/${moduleId}`] ?? "not-started",
    [state],
  );

  return { state, setStatus, markOpened, getStatus };
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
    (m) => state.modules[`${trackId}/${m.id}`] === "complete",
  ).length;
  return {
    done,
    total: t.modules.length,
    pct: Math.round((done / t.modules.length) * 100),
  };
}

export function overallCompletion(state: ProgressState) {
  const done = Object.values(state.modules).filter(
    (s) => s === "complete",
  ).length;
  return {
    done,
    total: TOTAL_MODULES,
    pct: Math.round((done / TOTAL_MODULES) * 100),
  };
}
