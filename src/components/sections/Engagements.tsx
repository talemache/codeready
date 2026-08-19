import { ENGAGEMENT_TIERS } from "@/lib/content";

export function Engagements() {
  return (
    <section id="engagements" style={{ padding: "0 0 84px" }}>
      <span className="kicker">How engagements are priced</span>
      <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-end gap-x-[clamp(24px,5vw,80px)] gap-y-7 max-[720px]:grid-cols-1">
        <h2 className="m-0 text-4xl leading-[42px] tracking-[-0.015em]">Three ways to start</h2>
        <p
          className="m-0 text-[15.5px] leading-7"
          style={{
            maxWidth: "52ch",
            textAlign: "justify",
            hyphens: "auto",
            color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
          }}
        >
          Every quote is fixed before work begins, so you know the number and I know the scope.
          Ranges below are typical; nonprofit and legal-aid budgets get an honest conversation, not
          a surcharge.
        </p>
      </div>

      <hr className="mt-11 h-0 border-0 border-t border-[color:var(--color-text)]" />

      {ENGAGEMENT_TIERS.map((tier) => (
        <div
          key={tier.name}
          className="grid grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,2fr)] items-start gap-x-[clamp(24px,4vw,64px)] gap-y-3.5 border-b py-7 max-[720px]:grid-cols-1"
          style={{ borderColor: "color-mix(in srgb, var(--color-text) 16%, transparent)" }}
        >
          <div>
            <h3 className="m-0 text-2xl leading-7">{tier.name}</h3>
            <p
              className="mt-1 text-[13px] leading-6 uppercase tracking-[0.06em]"
              style={{ color: "var(--color-accent-700)" }}
            >
              {tier.best}
            </p>
          </div>
          <p
            className="m-0 text-[15.5px] leading-7"
            style={{
              textAlign: "justify",
              hyphens: "auto",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            {tier.body}
          </p>
          <p className="m-0 text-right font-serif text-xl font-semibold leading-7 max-[720px]:text-left">
            {tier.price}
            <span
              className="block font-sans text-[13px] font-normal"
              style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
            >
              {tier.unit}
            </span>
          </p>
        </div>
      ))}

      <p className="mt-7 text-[15.5px] leading-7">
        <a href="#contact">Ask for a fixed quote</a> — I'll give you a number after one call, not a
        discovery invoice.
      </p>
    </section>
  );
}
