import { LineChartMotif } from "@/components/DataMotif";

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
    <section className="relative overflow-hidden bg-[color:var(--navy)]">
      <div className="data-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      {/* The line motif bleeds off the panel edge as a quiet brand signature */}
      <LineChartMotif className="pointer-events-none absolute -bottom-8 right-0 hidden h-56 w-[38rem] text-[color:var(--cream)] opacity-30 lg:block" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <span className="eyebrow-invert">Why work with me</span>
            <span className="section-rule mt-3" aria-hidden />
            <h2 className="font-serif text-3xl leading-tight text-[color:var(--cream)] sm:text-4xl">
              Scoped honestly, built to outlast me
            </h2>
            <p className="mt-5 text-sm leading-relaxed copy-invert">
              Three commitments that shape every engagement — and the reason most of this work
              arrives by referral.
            </p>
            <a href="#contact" className="btn-quiet mt-7">
              Ask for references
              <span aria-hidden>&rarr;</span>
            </a>
            <p className="mt-4 text-xs leading-relaxed copy-invert-muted">
              This practice is early-stage, so rather than placeholder quotes I&rsquo;d rather you
              speak with past clients directly.
            </p>
          </div>

          <div className="grid gap-px border border-[color:var(--cream)]/10 bg-[color:var(--cream)]/10 sm:grid-cols-3">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.heading} className="bg-[color:var(--navy)] p-7">
                <div className="mb-4 h-px w-8 bg-[color:var(--copper)]" />
                <h3 className="font-serif text-lg leading-snug text-[color:var(--cream)]">
                  {item.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed copy-invert">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
