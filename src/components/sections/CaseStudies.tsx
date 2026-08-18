export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid gap-3 lg:grid-cols-[1fr_2fr] lg:items-end border-b border-[color:var(--navy)]/10 pb-10 mb-12">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight">Representative engagements</h2>
        </div>
        <p className="text-[color:var(--navy)]/55 leading-relaxed lg:max-w-xl lg:mb-1">
          Case studies are published here as engagements close and clients sign off on sharing them.
          Check back, or{" "}
          <a
            href="#contact"
            className="text-[color:var(--copper-deep)] font-medium hover:underline underline-offset-2"
          >
            reach out
          </a>{" "}
          to ask about specific experience.
        </p>
      </div>
    </section>
  );
}
