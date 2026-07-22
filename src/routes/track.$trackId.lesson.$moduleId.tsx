import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { SiteHeader } from "@/components/SiteHeader";
import { DoodleStar, DoodleSquiggle } from "@/components/Doodles";
import { getModule } from "@/lib/tracks";
import { useProgress, useHydrated, trackCompletion } from "@/lib/progress";

export const Route = createFileRoute("/track/$trackId/lesson/$moduleId")({
  head: ({ params }) => {
    const info = getModule(params.trackId, params.moduleId);
    const title = info ? `${info.module.title} — CodeReady` : "Lesson — CodeReady";
    const desc = info ? `${info.module.title} · ${info.track.name}` : "A CodeReady lesson.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const info = getModule(params.trackId, params.moduleId);
    if (!info) throw notFound();
    return info;
  },
  component: LessonPage,
});

function LessonPage() {
  const { track, module: mod, index, prev, next } = Route.useLoaderData();
  const { state, setStatus, markOpened, getStatus } = useProgress();
  const hydrated = useHydrated();
  const wasCompleteRef = useRef<boolean | null>(null);

  useEffect(() => {
    markOpened(track.id, mod.id);
  }, [track.id, mod.id, markOpened]);

  const status = getStatus(track.id, mod.id);
  const done = status === "complete";

  const toggleComplete = () => {
    const prevPct = trackCompletion(state, track.id).pct;
    setStatus(track.id, mod.id, done ? "not-started" : "complete");
    if (!done) {
      // check if this completes the track
      requestAnimationFrame(() => {
        const raw = window.localStorage.getItem("codeready.progress.v1");
        if (!raw) return;
        try {
          const parsed = JSON.parse(raw);
          const allDone = track.modules.every(
            (m: { id: string }) => parsed.modules?.[`${track.id}/${m.id}`] === "complete",
          );
          if (allDone && prevPct < 100) {
            confetti({
              particleCount: 140,
              spread: 80,
              origin: { y: 0.6 },
              colors: ["#1E3A2C", "#E8A595", "#B7BDE0", "#FAF6EF"],
            });
          }
        } catch { /* ignore */ }
      });
    }
    wasCompleteRef.current = !done;
  };

  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
        <div className="text-sm text-[color:var(--forest)]/70">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <span className="mx-2">/</span>
          <Link to="/track/$trackId" params={{ trackId: track.id }} className="hover:underline">
            {track.name}
          </Link>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-[color:var(--forest)]/60">
          <span>Module {index + 1} of {track.modules.length}</span>
          <span>·</span>
          <span className="tag">{mod.type}</span>
          <span>· {mod.minutes} min</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl mt-3 leading-[1.1] tracking-tight">
          {mod.title}
        </h1>

        <article className="prose-lesson mt-8">
          <div className="card-paper p-6 sm:p-10 relative overflow-hidden">
            <DoodleSquiggle className="absolute -top-3 -right-3 w-24 text-[color:var(--periwinkle)]" />
            <p className="font-serif text-xl text-[color:var(--forest)]/80 leading-relaxed">
              Lesson content coming soon.
            </p>
            <p className="mt-4 text-[color:var(--forest)]/70 leading-relaxed">
              This is where the full walkthrough for{" "}
              <span className="italic">{mod.title}</span> will live — practical
              explanations, code examples, and a short exercise to test what you learned.
            </p>
          </div>

          <div className="panel mt-6 p-6 sm:p-8 relative overflow-hidden">
            <DoodleStar className="absolute -top-2 -right-2 w-14 text-[color:var(--coral)]" />
            <div className="text-xs uppercase tracking-widest text-[color:var(--coral)]">
              Curated Free Resources
            </div>
            <h3 className="mt-2 font-serif text-2xl text-[color:var(--paper)]">
              Handpicked reading & watching
            </h3>
            <p className="mt-2 text-[color:var(--paper)]/80">
              A short list of the very best free resources on this topic will appear here soon.
            </p>
          </div>
        </article>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={toggleComplete}
            className={done ? "btn-outline" : "btn-primary"}
            disabled={!hydrated}
          >
            {done ? "✓ Completed — undo" : "Mark Complete"}
          </button>
          <div className="text-sm text-[color:var(--forest)]/60">
            Progress saves automatically on this device.
          </div>
        </div>

        <nav className="mt-12 flex items-center justify-between gap-4 border-t border-[color:var(--forest)]/10 pt-6">
          {prev ? (
            <Link
              to="/track/$trackId/lesson/$moduleId"
              params={{ trackId: track.id, moduleId: prev.id }}
              className="group min-w-0"
            >
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">← Previous</div>
              <div className="font-serif text-base truncate group-hover:italic">{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/track/$trackId/lesson/$moduleId"
              params={{ trackId: track.id, moduleId: next.id }}
              className="group min-w-0 text-right"
            >
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">Next →</div>
              <div className="font-serif text-base truncate group-hover:italic">{next.title}</div>
            </Link>
          ) : (
            <Link to="/track/$trackId" params={{ trackId: track.id }} className="btn-outline text-sm">
              Back to track
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}
