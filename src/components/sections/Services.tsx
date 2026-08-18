import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">What I do</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Four kinds of work, one way of doing it
        </h2>
        <p className="mt-4 text-[color:var(--navy)]/75">
          Specific tools, specific outcomes. If it doesn't fit neatly into one of these, tell me
          what you're stuck on — most engagements start as a conversation, not a package.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.id} className="card-editorial p-7">
            <h3 className="font-serif text-xl">{service.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--navy)]/78">
              {service.description}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[color:var(--copper-deep)]">
              {service.tools}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
