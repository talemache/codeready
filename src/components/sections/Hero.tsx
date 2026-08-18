import { LineChartMotif } from "@/components/DataMotif";

const TRUST_ITEMS = ["Power BI", "Tableau", "LegalServer", "Python", "SQL", "Power Automate"];

const HERO_FACTS = [
  { label: "Focus", value: "Nonprofit & legal aid data" },
  { label: "Core tools", value: "Power BI, Tableau, SQL, Python, R" },
  { label: "Based", value: "North Canton, Ohio · remote" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--navy)]">
      {/* Faint analytical grid under a subtle top-right ambient glow */}
      <div className="data-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_-5%,color-mix(in_oklab,var(--copper)_10%,transparent),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="eyebrow-invert">Ryan Levels &middot; Data &amp; AI Consulting</span>
          <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-[color:var(--cream)] sm:text-5xl lg:text-[3.75rem]">
            Reporting your funders trust, run by staff who aren&rsquo;t analysts.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed copy-invert sm:text-lg">
            I build reporting systems and LegalServer dashboards that hold up under a funder&rsquo;s
            scrutiny, and I bring AI into workflows carefully — where it actually saves staff time,
            not where it&rsquo;s trendy.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-accent">
              Start a conversation
              <span aria-hidden>&rarr;</span>
            </a>
            <a href="#services" className="btn-quiet">
              See what I do
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg gap-6 border-t border-[color:var(--cream)]/12 pt-6 sm:grid-cols-3">
            {HERO_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow-invert">{fact.label}</dt>
                <dd className="mt-1.5 font-serif text-base leading-snug copy-invert-strong">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Brand panel — an abstract analytical motif rather than stock photography */}
        <div className="relative hidden lg:block" aria-hidden>
          <div className="relative overflow-hidden border border-[color:var(--cream)]/12 bg-[color:var(--navy-deep)] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="data-grid-dark absolute inset-0 opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_0%,color-mix(in_oklab,var(--copper)_16%,transparent),transparent)]" />
            <div className="relative aspect-[4/3] w-full p-8">
              <LineChartMotif className="h-full w-full text-[color:var(--cream)]" />
            </div>
            <div className="relative flex items-center justify-between border-t border-[color:var(--cream)]/10 px-8 py-4 text-xs font-semibold uppercase tracking-widest copy-invert-muted">
              <span>Monthly grant reporting</span>
              <span className="text-[color:var(--copper)]">Automated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tool trust bar */}
      <div className="relative border-t border-[color:var(--cream)]/10 bg-[color:var(--cream)]/4">
        <div className="mx-auto max-w-6xl px-5 py-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--copper)]">
              Tools I work in
            </span>
            {TRUST_ITEMS.map((label, index) => (
              <span
                key={label}
                className={`text-sm font-medium copy-invert ${
                  index === 0 ? "" : "border-l border-[color:var(--cream)]/15 pl-6"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
