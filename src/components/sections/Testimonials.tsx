export function Testimonials() {
  return (
    <section className="border-y border-[color:var(--navy)]/10 bg-[color:var(--navy)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="max-w-2xl">
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
      </div>
    </section>
  );
}
