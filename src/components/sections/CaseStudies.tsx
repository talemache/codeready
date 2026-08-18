export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">Selected work</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Representative engagements</h2>
      </div>

      <div className="mt-12 border-t border-[color:var(--navy)]/10 pt-12">
        <p className="text-[color:var(--navy)]/55 leading-relaxed max-w-xl">
          Case studies are published here as engagements close and clients sign off on sharing them.
          Check back, or{" "}
          <a
            href="#contact"
            className="text-[color:var(--copper-deep)] underline underline-offset-2 hover:text-[color:var(--copper)]"
          >
            reach out
          </a>{" "}
          to ask about specific experience.
        </p>
      </div>
    </section>
  );
}
