import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProgressBar } from "@/components/ProgressRing";
import { TrackIcon, DoodleSquiggle } from "@/components/Doodles";
import { getTrack } from "@/lib/tracks";
import { useProgress, useHydrated, trackCompletion } from "@/lib/progress";

export const Route = createFileRoute("/track/$trackId/")({
  loader: ({ params }) => {
    const t = getTrack(params.trackId);
    if (!t) throw notFound();
    return { track: t };
  },
  component: TrackIndexPage,
});

const tagStyle: Record<string, string> = {
  Lesson: "bg-[color:var(--paper-deep)] text-[color:var(--forest)]",
  Resources: "bg-[color:var(--periwinkle)]/50 text-[color:var(--forest)]",
  Quiz: "bg-[color:var(--coral)]/40 text-[color:var(--forest)]",
  Challenge: "bg-[color:var(--forest)] text-[color:var(--paper)]",
};

function TrackIndexPage() {
  const { track } = Route.useLoaderData();
  const { state, setStatus } = useProgress();
  const hydrated = useHydrated();
  const c = hydrated ? trackCompletion(state, track.id) : { done: 0, total: track.modules.length, pct: 0 };

  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
        <Link to="/dashboard" className="text-sm text-[color:var(--forest)]/70 hover:underline">
          ← Dashboard
        </Link>

        <div className="mt-6 flex items-start gap-5">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-[color:var(--forest)] text-[color:var(--paper)]">
            <TrackIcon name={track.icon} className="h-9 w-9" />
          </div>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
              Track {track.number}
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl mt-1 leading-tight">{track.name}</h1>
            <p className="mt-3 text-lg text-[color:var(--forest)]/75 max-w-2xl">{track.tagline}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1"><ProgressBar pct={c.pct} /></div>
          <div className="text-sm text-[color:var(--forest)]/70">
            {c.done}/{c.total} · {c.pct}%
          </div>
        </div>

        <div className="mt-10 relative">
          <DoodleSquiggle className="absolute -top-6 right-0 w-24 text-[color:var(--coral)]" />
          <h2 className="font-serif text-2xl">Modules</h2>
          <ol className="mt-4 space-y-3">
            {track.modules.map((m: any, i: number) => {
              const key = `${track.id}/${m.id}`;
              const status = hydrated ? state.moduleStatus[key] ?? "not_started" : "not_started";
              const done = status === "complete";
              return (
                <li key={m.id} className="card-paper p-4 sm:p-5 flex items-center gap-4">
                  <button
                    aria-label={done ? "Mark incomplete" : "Mark complete"}
                    onClick={(e) => {
                      e.preventDefault();
                      setStatus(track.id, m.id, done ? "not_started" : "complete");
                    }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 transition ${
                      done
                        ? "bg-[color:var(--forest)] border-[color:var(--forest)] text-[color:var(--paper)]"
                        : "border-[color:var(--forest)]/40 text-transparent hover:border-[color:var(--forest)]"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12 L10 17 L20 7" />
                    </svg>
                  </button>
                  <Link
                    to="/track/$trackId/$moduleId"
                    params={{ trackId: track.id, moduleId: m.id }}
                    className="flex-1 min-w-0 flex items-center gap-3"
                  >
                    <span className="text-sm text-[color:var(--forest)]/40 tabular-nums w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={`font-serif text-lg leading-tight ${done ? "line-through text-[color:var(--forest)]/50" : ""}`}>
                        {m.title}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-[color:var(--forest)]/60">
                        <span className={`rounded-full px-2 py-0.5 ${tagStyle[m.type]}`}>{m.type}</span>
                        <span>· {m.minutes} min</span>
                        {status === "in_progress" ? <span className="tag">In progress</span> : null}
                      </div>
                    </div>
                    <span aria-hidden className="text-xl text-[color:var(--forest)]/50">→</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
