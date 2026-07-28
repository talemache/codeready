import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProgressRing, ProgressBar } from "@/components/ProgressRing";
import { TrackIcon, DoodleArrow } from "@/components/Doodles";
import { TRACKS, getModule } from "@/lib/tracks";
import {
  useProgress,
  useHydrated,
  overallCompletion,
  trackCompletion,
  exportProgress,
  importProgress,
  resetProgress,
} from "@/lib/progress";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your dashboard — CodeReady" },
      { name: "description", content: "Track your progress through all 8 CodeReady learning tracks." },
      { property: "og:title", content: "Your CodeReady dashboard" },
      { property: "og:description", content: "See your progress across the full engineer's field guide." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const hydrated = useHydrated();
  const { state } = useProgress();
  const overall = overallCompletion(state);
  const allModules = TRACKS.flatMap((track) =>
    track.modules.map((module) => getModule(track.id, module.id)).filter(Boolean),
  );
  const lastInfo = state.lastOpenedModuleKey
    ? allModules.find((info) => `${info?.track.id}/${info?.module.id}` === state.lastOpenedModuleKey) ?? null
    : state.lastOpenedModuleId
      ? allModules.find((info) => info?.module.id === state.lastOpenedModuleId) ?? null
      : null;

  // Find first untouched track for "Start next" suggestion (shown when no lastInfo)
  const nextTrack = hydrated && !lastInfo
    ? TRACKS.find((t) => trackCompletion(state, t.id).done === 0)
    : null;

  // Export/import/reset state
  const [resetConfirm, setResetConfirm] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleExport() {
    const json = exportProgress();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "codeready-progress.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const result = importProgress(text);
      if (!result.ok) setImportError(result.error ?? "Import failed");
      else setImportError(null);
    };
    reader.readAsText(file);
    // Reset input so same file can be re-selected
    e.target.value = "";
  }

  function handleReset() {
    if (!resetConfirm) {
      setResetConfirm(true);
      return;
    }
    resetProgress();
    setResetConfirm(false);
  }

  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-10 sm:py-14" tabIndex={-1}>
        <div className="grid gap-6 md:grid-cols-[auto_1fr] items-center panel p-6 sm:p-10">
          <ProgressRing pct={hydrated ? overall.pct : 0} label="complete" />
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--coral)]">
              Your progress
            </div>
            <h1 className="mt-1 font-serif text-3xl sm:text-4xl text-[color:var(--paper)]">
              {overall.pct === 0
                ? "Ready when you are."
                : overall.pct === 100
                  ? "You did the thing."
                  : "Keep going — you're building it."}
            </h1>
            <p className="mt-2 text-[color:var(--paper)]/80">
              {hydrated ? overall.done : 0} of {overall.total} modules complete across 8 tracks.
            </p>
          </div>
        </div>

        {hydrated && lastInfo ? (
          <Link
            to="/track/$trackId/$moduleId"
            params={{ trackId: lastInfo.track.id, moduleId: lastInfo.module.id }}
            className="card-paper mt-6 p-5 flex items-center gap-4 group"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--coral)]/25 text-[color:var(--forest)]">
              <DoodleArrow className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
                Continue where you left off
              </div>
              <div className="font-serif text-lg truncate">{lastInfo.module.title}</div>
              <div className="text-sm text-[color:var(--forest)]/60">{lastInfo.track.name}</div>
            </div>
            <span aria-hidden className="text-2xl text-[color:var(--forest)] group-hover:translate-x-1 transition">→</span>
          </Link>
        ) : hydrated && nextTrack ? (
          <Link
            to="/track/$trackId"
            params={{ trackId: nextTrack.id }}
            className="card-paper mt-6 p-5 flex items-center gap-4 group"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--periwinkle)]/40 text-[color:var(--forest)]">
              <TrackIcon name={nextTrack.icon} className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
                Start your next track
              </div>
              <div className="font-serif text-lg truncate">{nextTrack.name}</div>
              <div className="text-sm text-[color:var(--forest)]/60">{nextTrack.tagline}</div>
            </div>
            <span aria-hidden className="text-2xl text-[color:var(--forest)] group-hover:translate-x-1 transition">→</span>
          </Link>
        ) : null}

        <h2 className="mt-14 font-serif text-2xl sm:text-3xl">Tracks</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => {
            const c = hydrated ? trackCompletion(state, t.id) : { done: 0, total: t.modules.length, pct: 0 };
            const complete = hydrated && c.pct === 100;
            return (
              <Link
                key={t.id}
                to="/track/$trackId"
                params={{ trackId: t.id }}
                className={`card-paper p-6 flex flex-col ${complete ? "ring-2 ring-[color:var(--forest)]/40" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-[color:var(--forest)] ${complete ? "bg-[color:var(--forest)] text-[color:var(--paper)]" : "bg-[color:var(--paper-deep)]"}`}>
                    <TrackIcon name={t.icon} className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
                        Track {t.number}
                      </div>
                      {complete && (
                        <span className="rounded-full bg-[color:var(--forest)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[color:var(--paper)]">
                          Completed
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg leading-tight mt-0.5">{t.name}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[color:var(--forest)]/70 flex-1">{t.description}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-[color:var(--forest)]/70">
                  <span>{c.done}/{c.total} modules</span>
                  <span>{c.pct}%</span>
                </div>
                <div className="mt-2"><ProgressBar pct={c.pct} /></div>
              </Link>
            );
          })}
        </div>

        {/* Progress management */}
        <div className="mt-14 border-t border-[color:var(--forest)]/10 pt-10">
          <h2 className="font-serif text-xl text-[color:var(--forest)]/80">Your data</h2>
          <p className="mt-1 text-sm text-[color:var(--forest)]/60">
            Progress is stored only on this device. Export to back it up or move it to another browser.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button onClick={handleExport} className="btn-outline text-sm">
              Export progress
            </button>
            <label className="btn-outline text-sm cursor-pointer">
              Import progress
              <input
                ref={fileRef}
                type="file"
                accept=".json,application/json"
                className="sr-only"
                onChange={handleImportFile}
              />
            </label>
            <button
              onClick={handleReset}
              onBlur={() => setResetConfirm(false)}
              aria-label={resetConfirm ? "Confirm: reset all progress" : "Reset all progress"}
              className="text-sm rounded-full px-4 py-1.5 border border-[color:var(--coral)]/50 text-[color:var(--coral)] hover:bg-[color:var(--coral)]/10 transition"
            >
              {resetConfirm ? "Click again to confirm reset" : "Reset all progress"}
            </button>
          </div>
          <div aria-live="polite" className="sr-only">
            {resetConfirm ? "Click the reset button again to confirm resetting all progress." : ""}
          </div>
          {importError && (
            <p className="mt-2 text-sm text-[color:var(--coral)]" role="alert">Import failed: {importError}</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
