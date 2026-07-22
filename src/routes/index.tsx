import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { DoodleArrow, DoodleSquiggle, DoodleStar, DoodleUnderline, TrackIcon } from "@/components/Doodles";
import { TRACKS } from "@/lib/tracks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeReady — Everything they don't teach you in class" },
      { name: "description", content: "A free, structured path from CS student to confident software engineer." },
      { property: "og:title", content: "CodeReady — Everything they don't teach you in class" },
      { property: "og:description", content: "A free, structured path from CS student to confident software engineer." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-[color:var(--paper)] text-[color:var(--forest)]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="paper-grain absolute inset-0 opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <span className="tag mb-6">A free field guide for CS students</span>
            <h1 className="font-serif text-5xl sm:text-7xl leading-[1.02] tracking-tight">
              Everything they{" "}
              <span className="relative inline-block italic">
                don't teach
                <DoodleUnderline className="absolute -bottom-2 left-0 w-full text-[color:var(--coral)]" />
              </span>{" "}
              you in class.
            </h1>
            <p className="mt-8 text-lg sm:text-xl max-w-2xl text-[color:var(--forest)]/80 leading-relaxed">
              A free, structured path from CS student to confident software engineer —
              technical skills, career skills, and everything in between.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/dashboard" className="btn-primary text-base">
                Start Learning — It's Free
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

      {/* Tracks */}
      <section id="tracks" className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">The 8 tracks</h2>
            <p className="mt-2 text-[color:var(--forest)]/70 max-w-xl">
              A complete curriculum, drawn from what actually matters on the job.
            </p>
          </div>
          <Link to="/dashboard" className="btn-outline text-sm">Open dashboard</Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => (
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

      {/* Why free */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="panel p-8 sm:p-12 relative overflow-hidden">
          <DoodleStar className="absolute -top-4 -right-4 w-24 text-[color:var(--coral)]/70 rotate-12" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--coral)] mb-3">
                Why free?
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[color:var(--paper)] leading-tight">
                Built by an engineer who remembers what it was like.
              </h2>
              <p className="mt-4 text-[color:var(--paper)]/80 max-w-xl leading-relaxed">
                No paywall, no upsell, ever. Just the guide you needed on day one —
                open to every student who wants it.
              </p>
            </div>
            <Link to="/dashboard" className="justify-self-start md:justify-self-end inline-flex items-center gap-2 rounded-full bg-[color:var(--coral)] px-6 py-3 font-medium text-[color:var(--forest)] hover:brightness-95 transition">
              Jump in
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:var(--forest)]/10 py-8 text-center text-sm text-[color:var(--forest)]/60">
        Made with care · CodeReady
      </footer>
    </div>
  );
}
