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
    <section id="top" className="relative overflow-hidden bg-[color:var(--navy)]">
      {/* Subtle top-right ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_-5%,color-mix(in_oklab,var(--copper)_10%,transparent),transparent)]" />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-28 lg:grid-cols-[1fr_1fr] lg:items-center relative">
        <div>
          <span className="eyebrow" style={{ color: "var(--copper)" }}>Data &amp; AI Consulting</span>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-[color:var(--cream)] sm:text-6xl lg:text-[4.25rem]">
            Ryan Levels
          </h1>
          <p className="mt-4 font-serif text-xl text-[color:var(--cream)]/70 sm:text-2xl leading-snug">
            Data, AI, and software consulting for nonprofits and mission-driven organizations.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--cream)]/60 sm:text-lg">
            I build reporting systems and LegalServer dashboards that hold up under a funder's
            scrutiny, and I bring AI into workflows carefully — where it actually saves staff time,
            not where it's trendy.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-accent">
              Start a conversation
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--cream)]/70 tracking-wide transition hover:text-[color:var(--cream)]"
            >
              See what I do
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[color:var(--cream)]/12 pt-6">
            <div>
              <dt className="eyebrow" style={{ color: "var(--copper)" }}>Focus</dt>
              <dd className="mt-1 text-sm text-[color:var(--cream)]/65">
                Nonprofit &amp; legal aid data
              </dd>
            </div>
            <div>
              <dt className="eyebrow" style={{ color: "var(--copper)" }}>Core tools</dt>
              <dd className="mt-1 text-sm text-[color:var(--cream)]/65">
                Power BI, Tableau, SQL, Python, R
              </dd>
            </div>
            <div>
              <dt className="eyebrow" style={{ color: "var(--copper)" }}>Based</dt>
              <dd className="mt-1 text-sm text-[color:var(--cream)]/65">
                Kent, Ohio &middot; remote
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=900&q=80&auto=format&fit=crop"
              alt="Professional working at a desk reviewing data on a laptop"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Tool trust bar */}
      <div className="border-t border-[color:var(--cream)]/10 bg-[color:var(--cream)]/4">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--cream)]/35">
              Tools I work in
            </span>
            {TRUST_ITEMS.map((item) => (
              <span
                key={item.label}
                className="text-sm font-medium text-[color:var(--cream)]/50"
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
