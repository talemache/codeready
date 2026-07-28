import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DoodleArrow, DoodleSquiggle, DoodleStar, DoodleUnderline, TrackIcon } from "@/components/Doodles";
import { TRACKS, type AudienceBand, getTracksByAudience } from "@/lib/tracks";

const AUDIENCE_KEY = "codeready-audience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeReady — Everything they don't teach you in class" },
      { name: "description", content: "A free, structured path to build coding confidence through real projects." },
      { property: "og:title", content: "CodeReady — Everything they don't teach you in class" },
      { property: "og:description", content: "A free, structured path to build coding confidence through real projects." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState<AudienceBand | null>(null);
  const [checkedAudience, setCheckedAudience] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(AUDIENCE_KEY);
    if (saved === "teen" || saved === "college") setAudience(saved);
    setCheckedAudience(true);
  }, []);

  const [pendingAudience, setPendingAudience] = useState<AudienceBand | null>(null);

  const confirmAudience = (selected: AudienceBand) => {
    window.localStorage.setItem(AUDIENCE_KEY, selected);
    setAudience(selected);
    void navigate({ to: "/dashboard" });
  };

  if (checkedAudience && !audience) {
    return (
      <div className="min-h-screen bg-[color:var(--paper)] text-[color:var(--forest)]">
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="tag mb-6">Pick your learning path</span>
            <h1 className="font-serif text-4xl sm:text-6xl leading-[1.04] tracking-tight">
              Start with the track set built for you.
            </h1>
            <p className="mt-6 text-lg text-[color:var(--forest)]/80">
              Choose an audience to personalize your dashboard.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => setPendingAudience("teen")}
              aria-pressed={pendingAudience === "teen"}
              className={`card-paper p-6 text-left rounded-3xl hover:-translate-y-0.5 transition ${pendingAudience === "teen" ? "ring-2 ring-[color:var(--forest)]" : ""}`}
            >
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">Audience</div>
              <div className="mt-2 font-serif text-2xl">I'm in high school (ages 13 to 18)</div>
              <p className="mt-2 text-sm text-[color:var(--forest)]/75">5 short tracks focused on exploration and project confidence.</p>
            </button>
            <button
              onClick={() => setPendingAudience("college")}
              aria-pressed={pendingAudience === "college"}
              className={`card-paper p-6 text-left rounded-3xl hover:-translate-y-0.5 transition ${pendingAudience === "college" ? "ring-2 ring-[color:var(--forest)]" : ""}`}
            >
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">Audience</div>
              <div className="mt-2 font-serif text-2xl">I'm in college or beyond</div>
              <p className="mt-2 text-sm text-[color:var(--forest)]/75">8 deeper tracks covering software engineering and career launch skills.</p>
            </button>
          </div>

          {pendingAudience && (
            <div className="mt-6">
              <button
                onClick={() => confirmAudience(pendingAudience)}
                className="btn-primary text-base"
              >
                Continue
                <span aria-hidden>→</span>
              </button>
            </div>
          )}
        </main>
        <SiteFooter />
      </div>
    );
  }

  const displayTracks = audience ? getTracksByAudience(audience) : TRACKS;

  return (
    <div className="min-h-screen bg-[color:var(--paper)] text-[color:var(--forest)]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
      <section className="relative overflow-hidden">
        <div className="paper-grain absolute inset-0 opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <span className="tag mb-6">A free field guide for learners</span>
            <h1 className="font-serif text-5xl sm:text-7xl leading-[1.02] tracking-tight">
              Everything they{" "}
              <span className="relative inline-block italic">
                don't teach
                <DoodleUnderline className="absolute -bottom-2 left-0 w-full text-[color:var(--coral)]" />
              </span>{" "}
              you in class.
            </h1>
            <p className="mt-8 text-lg sm:text-xl max-w-2xl text-[color:var(--forest)]/80 leading-relaxed">
              A free, structured path to build coding confidence through real projects,
              technical skills, and practical career growth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/dashboard" className="btn-primary text-base">
                Open your dashboard
                <span aria-hidden>→</span>
              </Link>
              <div className="flex items-center gap-2 text-sm text-[color:var(--forest)]/70">
                <DoodleStar className="h-5 w-5 text-[color:var(--coral)]" />
                No login. No paywall. Ever.
              </div>
            </div>
          </div>

          <DoodleSquiggle className="absolute right-6 top-16 hidden md:block w-40 text-[color:var(--periwinkle)]" />
          <DoodleArrow className="absolute right-16 bottom-8 hidden md:block w-24 text-[color:var(--forest)]/60 rotate-12" />
        </div>
      </section>

      <section id="tracks" className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">The {displayTracks.length} tracks</h2>
            <p className="mt-2 text-[color:var(--forest)]/70 max-w-xl">
              Short lessons, real projects, and visible progress in every module.
            </p>
          </div>
          <Link to="/dashboard" className="btn-outline text-sm">Open dashboard</Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayTracks.map((t) => (
            <div key={t.id} className="card-paper p-6 flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--paper-deep)] text-[color:var(--forest)]">
                <TrackIcon name={t.icon} className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
                  Track {t.number}
                </div>
                <h3 className="font-serif text-xl mt-0.5">{t.name}</h3>
                <p className="mt-1 text-sm text-[color:var(--forest)]/75">{t.tagline}</p>
                <div className="mt-3 text-xs text-[color:var(--forest)]/60">
                  {t.modules.length} modules
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-serif text-3xl sm:text-4xl">What you'll learn</h2>
        <p className="mt-2 text-[color:var(--forest)]/70 max-w-2xl">
          Plain-language summaries for each track.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {displayTracks.map((t) => (
            <div key={`${t.id}-parent`} className="card-paper p-5">
              <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">Track {t.number}</div>
              <h3 className="font-serif text-xl mt-1">{t.name}</h3>
              <p className="mt-2 text-sm text-[color:var(--forest)]/75">{t.parentSummary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="panel p-8 sm:p-12 relative overflow-hidden">
          <DoodleStar className="absolute -top-4 -right-4 w-24 text-[color:var(--coral)]/70 rotate-12" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--coral)] mb-3">
                Why free?
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[color:var(--paper)] leading-tight">
                Built by a mentor who wants learners to make real things.
              </h2>
              <p className="mt-4 text-[color:var(--paper)]/80 max-w-xl leading-relaxed">
                No paywall, no upsell, ever. Just a guided path from curiosity to capability.
              </p>
            </div>
            <Link to="/dashboard" className="justify-self-start md:justify-self-end inline-flex items-center gap-2 rounded-full bg-[color:var(--coral)] px-6 py-3 font-medium text-[color:var(--forest)] hover:brightness-95 transition">
              Jump in
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
