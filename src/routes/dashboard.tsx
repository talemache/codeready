import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProgressRing, ProgressBar } from "@/components/ProgressRing";
import { TrackIcon, DoodleArrow } from "@/components/Doodles";
import { TRACKS, getModule } from "@/lib/tracks";
import { useProgress, useHydrated, overallCompletion, trackCompletion } from "@/lib/progress";

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
  const lastInfo = state.lastOpenedModuleId
    ? TRACKS.flatMap((track) =>
        track.modules.map((module) => getModule(track.id, module.id)).filter(Boolean),
      ).find((info) => info?.module.id === state.lastOpenedModuleId) ?? null
    : null;

  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
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
        ) : null}

        <h2 className="mt-14 font-serif text-2xl sm:text-3xl">Tracks</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => {
            const c = hydrated ? trackCompletion(state, t.id) : { done: 0, total: t.modules.length, pct: 0 };
            return (
              <Link
                key={t.id}
                to="/track/$trackId"
                params={{ trackId: t.id }}
                className="card-paper p-6 flex flex-col"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--paper-deep)] text-[color:var(--forest)]">
                    <TrackIcon name={t.icon} className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
                      Track {t.number}
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
      </main>
      <SiteFooter />
    </div>
  );
}
