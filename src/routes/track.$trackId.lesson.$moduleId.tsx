import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LessonBody } from "@/components/LessonBody";
import { QuizView } from "@/components/QuizView";
import { ChallengeView } from "@/components/ChallengeView";
import { ProgressBar } from "@/components/ProgressRing";
import { getModule } from "@/lib/tracks";
import { getLesson, getQuiz, getChallenge } from "@/content";
import { useProgress, useHydrated, trackCompletion } from "@/lib/progress";
import { celebrateIfTrackComplete } from "@/lib/celebrate";

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
    return {
      track: info.track,
      module: info.module,
      index: info.index,
      prev: info.prev,
      next: info.next,
      lesson: getLesson(params.trackId, params.moduleId),
      quiz: params.moduleId === "track-quiz" ? getQuiz(params.trackId) : null,
      challenge:
        params.moduleId === "track-challenge" ? getChallenge(params.trackId) : null,
    };
  },
  component: LessonPage,
});

function LessonPage() {
  const { track, module: mod, index, prev, next, lesson, quiz, challenge } =
    Route.useLoaderData();
  const { state, setStatus, markOpened, getStatus } = useProgress();
  const hydrated = useHydrated();

  useEffect(() => {
    markOpened(track.id, mod.id);
  }, [track.id, mod.id, markOpened]);

  const status = getStatus(track.id, mod.id);
  const done = status === "complete";
  const c = hydrated
    ? trackCompletion(state, track.id)
    : { done: 0, total: track.modules.length, pct: 0 };

  const toggleComplete = () => {
    const wasComplete = done;
    setStatus(track.id, mod.id, done ? "not_started" : "complete");
    if (!done) celebrateIfTrackComplete(track.id, wasComplete);
  };

  const isInteractive = Boolean(quiz || challenge);

  return (
    <div className="min-h-screen bg-[color:var(--paper)] flex flex-col">
      <SiteHeader />

      {/* Sticky progress strip */}
      <div className="sticky top-[57px] sm:top-[65px] z-30 border-b border-[color:var(--forest)]/10 bg-[color:var(--paper)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-2">
          <Link
            to="/track/$trackId"
            params={{ trackId: track.id }}
            className="truncate text-xs text-[color:var(--forest)]/70 hover:underline"
          >
            {track.name}
          </Link>
          <div className="flex-1"><ProgressBar pct={c.pct} /></div>
          <span className="shrink-0 text-xs tabular-nums text-[color:var(--forest)]/60">
            {c.done}/{c.total}
          </span>
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-8 sm:py-12">
        <div className="text-sm text-[color:var(--forest)]/70">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <span className="mx-2">/</span>
          <Link to="/track/$trackId" params={{ trackId: track.id }} className="hover:underline">
            {track.name}
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[color:var(--forest)]/60">
          <span>Module {index + 1} of {track.modules.length}</span>
          <span>·</span>
          <span className="tag">{mod.type}</span>
          <span>· {mod.minutes} min</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl mt-3 leading-[1.1] tracking-tight">
          {mod.title}
        </h1>

        {quiz ? (
          <>
            <p className="mt-4 text-[color:var(--forest)]/75 max-w-[68ch]">
              Five questions drawn from this track. Score 4 or better to pass and mark the
              track complete.
            </p>
            <QuizView quiz={quiz} trackId={track.id} />
          </>
        ) : challenge ? (
          <ChallengeView challenge={challenge} trackId={track.id} />
        ) : lesson ? (
          <LessonBody lesson={lesson} />
        ) : (
          <div className="card-paper mt-8 p-8 text-center">
            <p className="font-serif text-xl text-[color:var(--forest)]/80">
              Lesson content coming soon.
            </p>
            <p className="mt-2 text-[color:var(--forest)]/65">
              This module is still being written. In the meantime, keep going with the rest
              of the track.
            </p>
          </div>
        )}

        {isInteractive ? null : (
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
        )}

        <nav className="mt-12 flex items-center justify-between gap-4 border-t border-[color:var(--forest)]/10 pt-6">
          {prev ? (
            <Link
              to="/track/$trackId/$moduleId"
              params={{ trackId: track.id, moduleId: prev.id }}
              className="group min-w-0"
            >
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">← Previous</div>
              <div className="font-serif text-base truncate group-hover:italic">{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/track/$trackId/$moduleId"
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
      <SiteFooter />
    </div>
  );
}
