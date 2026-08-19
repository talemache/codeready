import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section id="services" style={{ padding: "56px 0 84px" }}>
      <span className="kicker">What I do</span>
      <h2 className="m-0 text-4xl leading-[42px] tracking-[-0.015em]" style={{ maxWidth: "24ch" }}>
        Five kinds of work, one way of doing them
      </h2>

      <div
        className="mt-11 grid gap-x-[clamp(28px,4vw,64px)] gap-y-11"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        {SERVICES.map((service) => (
          <div key={service.num}>
            <span
              className="font-serif text-[17px] font-semibold"
              style={{ color: "var(--color-accent-2)" }}
            >
              {service.num}
            </span>
            <h3 className="mt-2 text-2xl leading-7 tracking-[-0.01em]">{service.name}</h3>
            <p
              className="mt-3.5 text-[15.5px] leading-7"
              style={{
                textAlign: "justify",
                hyphens: "auto",
                color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
              }}
            >
              {service.description}
            </p>
            <p
              className="mt-3.5 text-[13px] leading-6 tracking-[0.02em]"
              style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
            >
              {service.tools}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
