const DIFFERENTIATORS = [
  {
    heading: "Honest scoping",
    body: "Every engagement starts with a plain-language scope: what question you're answering, what data exists to answer it, and what done looks like.",
  },
  {
    heading: "No platform agenda",
    body: "I recommend whatever tool fits the problem — Power BI, Python, SQL, R. The solution follows your needs, not a preferred vendor.",
  },
  {
    heading: "Built to run without me",
    body: "Deliverables are documented and handed off in a way your staff can maintain. No dependency on continued retainers for basic operation.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[color:var(--navy)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <span className="eyebrow" style={{ color: "var(--copper)" }}>
              Why work with me
            </span>
            <h2 className="mt-3 font-serif text-3xl text-[color:var(--cream)] sm:text-4xl leading-tight">
              References available on request
            </h2>
            <p className="mt-5 text-[color:var(--cream)]/60 leading-relaxed text-sm">
              This practice is early-stage. Rather than placeholder quotes, I'd rather you speak
              directly with past clients.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 border border-[color:var(--cream)]/25 px-5 py-2.5 text-sm font-semibold text-[color:var(--cream)]/80 transition hover:border-[color:var(--cream)]/50 hover:text-[color:var(--cream)]"
            >
              Ask for references
              <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div className="grid gap-px bg-[color:var(--cream)]/10 border border-[color:var(--cream)]/10 sm:grid-cols-3">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.heading} className="bg-[color:var(--navy)] p-7">
                <div className="mb-4 h-px w-8 bg-[color:var(--copper)]" />
                <h3 className="font-serif text-lg text-[color:var(--cream)] leading-snug">{item.heading}</h3>
                <p className="mt-3 text-sm text-[color:var(--cream)]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
