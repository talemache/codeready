import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
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

const KEY = "northal-progress-v1";
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
  // Always keep localStorage in sync as an offline fallback
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  // If signed in, also write to Firestore (fire-and-forget per-track)
  const user = auth.currentUser;
  if (user) {
    void writeAllTracksToFirestore(user.uid, next);
  }
  listeners.forEach((l) => l());
}

// ── Firestore helpers ────────────────────────────────────────────────────────

function progressDocRef(userId: string, trackId: string) {
  return doc(db, "users", userId, "progress", trackId);
}

/** Persist every track's progress slice into Firestore. */
async function writeAllTracksToFirestore(userId: string, state: ProgressState) {
  const trackIds = [...new Set(
    Object.keys(state.moduleStatus)
      .concat(Object.keys(state.quizScores))
      .concat(Object.keys(state.challengeChecklist))
      .map((k) => k.split("/")[0])
  )];
  await Promise.all(
    trackIds.map((trackId) =>
      setDoc(
        progressDocRef(userId, trackId),
        {
          moduleStatus: filterByTrack(state.moduleStatus, trackId),
          quizScores: state.quizScores[trackId] ?? null,
          challengeChecklist: filterByTrack(state.challengeChecklist, trackId),
          lastOpenedModuleId: state.lastOpenedModuleId ?? null,
          lastOpenedModuleKey: state.lastOpenedModuleKey ?? null,
        },
        { merge: true },
      ),
    ),
  );
}

function filterByTrack<T>(record: Record<string, T>, trackId: string): Record<string, T> {
  return Object.fromEntries(
    Object.entries(record).filter(([k]) => k.startsWith(`${trackId}/`)),
  );
}

/** Load all Firestore progress for a user and merge into a single ProgressState. */
async function loadFirestoreProgress(userId: string): Promise<ProgressState> {
  const trackIds = TRACKS.map((t) => t.id);
  const docs = await Promise.all(
    trackIds.map((trackId) => getDoc(progressDocRef(userId, trackId))),
  );
  const merged: ProgressState = { ...emptyState, moduleStatus: {}, quizScores: {}, challengeChecklist: {} };
  for (const snap of docs) {
    if (!snap.exists()) continue;
    const d = snap.data();
    Object.assign(merged.moduleStatus, d.moduleStatus ?? {});
    Object.assign(merged.challengeChecklist, d.challengeChecklist ?? {});
    const trackId = snap.ref.id;
    if (d.quizScores) merged.quizScores[trackId] = d.quizScores;
    if (d.lastOpenedModuleKey && !merged.lastOpenedModuleKey) {
      merged.lastOpenedModuleKey = d.lastOpenedModuleKey;
      merged.lastOpenedModuleId = d.lastOpenedModuleId ?? undefined;
    }
  }
  return merged;
}

// ── Auth-state listener: migrate + live-sync on sign-in ──────────────────────

let firestoreUnsub: Unsubscribe | null = null;

if (typeof window !== "undefined" && auth) {
  onAuthStateChanged(auth, async (user) => {
    // Clean up any previous Firestore listener
    if (firestoreUnsub) {
      firestoreUnsub();
      firestoreUnsub = null;
    }

    if (!user) {
      // Revert to localStorage state
      cache = read();
      listeners.forEach((l) => l());
      return;
    }

    // Signed in: load Firestore progress
    const remote = await loadFirestoreProgress(user.uid);
    const local = read();

    // Migrate any local progress that isn't already in Firestore
    const hasMigratableLocal = Object.keys(local.moduleStatus).length > 0;
    const hasRemote = Object.keys(remote.moduleStatus).length > 0;

    let merged: ProgressState;
    if (hasMigratableLocal && !hasRemote) {
      // First sign-in with existing local progress: push local → Firestore
      merged = local;
      await writeAllTracksToFirestore(user.uid, merged);
    } else if (hasRemote) {
      merged = remote;
    } else {
      merged = emptyState;
    }

    cache = merged;
    listeners.forEach((l) => l());

    // Subscribe to live updates from the first track as a heartbeat
    // (full multi-doc live sync would require a listener per track;
    //  for now we rely on write() keeping Firestore in sync eagerly)
  });
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
