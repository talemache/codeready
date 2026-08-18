import { LineChartMotif } from "@/components/DataMotif";

const TRUST_ITEMS = [
  { label: "Power BI" },
  { label: "Tableau" },
  { label: "LegalServer" },
  { label: "Python" },
  { label: "SQL" },
  { label: "Power Automate" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[color:var(--navy)]/10">
      <div className="data-grid absolute inset-0 opacity-[0.35] pointer-events-none" />
      {/* Warm gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,color-mix(in_oklab,var(--copper)_8%,transparent),transparent)]" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative">
        <div>
          <span className="eyebrow">Data &amp; AI consulting</span>
          <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Ryan Levels
          </h1>
          <p className="mt-3 font-serif text-xl text-[color:var(--navy)]/80 sm:text-2xl">
            Data, AI, and software consulting for nonprofits and mission-driven organizations.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--navy)]/80 sm:text-lg">
            I build reporting systems and LegalServer dashboards that hold up under a funder's
            scrutiny, and I bring AI into workflows carefully — where it actually saves staff time,
            not where it's trendy.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-accent text-base">
              Start a conversation
              <span aria-hidden>&rarr;</span>
            </a>
            <a href="#services" className="btn-outline text-base">
              See what I do
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[color:var(--navy)]/10 pt-6">
            <div>
              <dt className="eyebrow">Focus</dt>
              <dd className="mt-1 text-sm text-[color:var(--navy)]/80">
                Nonprofit &amp; legal aid data
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Core tools</dt>
              <dd className="mt-1 text-sm text-[color:var(--navy)]/80">
                Power BI, Tableau, SQL, Python, R
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Based</dt>
              <dd className="mt-1 text-sm text-[color:var(--navy)]/80">
                Kent, Ohio &middot; remote
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative pt-6 pr-6">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(12,22,38,0.18)]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop"
              alt="Laptop showing a data dashboard on a clean desk workspace"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-2 -right-2 hidden w-56 rounded-xl bg-[color:var(--navy)] p-4 text-[color:var(--cream)] shadow-xl sm:block">
            <LineChartMotif className="h-16 w-full text-[color:var(--cream)]" />
            <p className="mt-2 text-xs text-[color:var(--cream)]/70">
              Reporting time cut from two days to under an hour, per month.
            </p>
          </div>
        </div>
      </div>

      {/* Tool trust bar */}
      <div className="border-t border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)]/60">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--navy)]/40">
              Tools I work in
            </span>
            {TRUST_ITEMS.map((item) => (
              <span
                key={item.label}
                className="text-sm font-medium text-[color:var(--navy)]/55"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
