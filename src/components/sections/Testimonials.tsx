export function Testimonials() {
  return (
    <section className="border-y border-[color:var(--navy)]/10 bg-[color:var(--navy)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--copper) 90%, white)" }}>
              What clients say
            </span>
            <h2 className="mt-3 font-serif text-3xl text-[color:var(--cream)] sm:text-4xl">
              References available on request
            </h2>
            <p className="mt-5 text-[color:var(--cream)]/65 leading-relaxed">
              This practice is early-stage. Rather than placeholder quotes, I'd rather you speak
              directly with past clients. Reach out and I'll connect you with the right person.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--cream)]/25 px-5 py-2.5 text-sm font-medium text-[color:var(--cream)]/80 transition hover:border-[color:var(--cream)]/50 hover:text-[color:var(--cream)]"
            >
              Ask for references
              <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { stat: "< 1 hr", label: "Monthly reporting cycle (was 2 days)" },
              { stat: "3 → 1", label: "Data systems consolidated into one source" },
              { stat: "100%", label: "Human review kept on every AI-assisted decision" },
              { stat: "0", label: "Platforms sold — tools follow the problem" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[color:var(--cream)]/10 bg-[color:var(--cream)]/5 p-6"
              >
                <p className="font-serif text-3xl text-[color:var(--copper)]">{item.stat}</p>
                <p className="mt-2 text-sm text-[color:var(--cream)]/65 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
