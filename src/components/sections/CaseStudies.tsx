import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CASE_STUDIES } from "@/lib/content";

export function CaseStudies() {
  return (
    <section id="work" style={{ padding: "84px 0 56px" }}>
      <span className="kicker">Selected work</span>
      <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-end gap-x-[clamp(24px,5vw,80px)] gap-y-7 max-[720px]:grid-cols-1">
        <h2 className="m-0 text-4xl leading-[42px] tracking-[-0.015em]">
          Three projects, told plainly
        </h2>
        <p
          className="m-0 text-[15.5px] leading-7"
          style={{
            maxWidth: "52ch",
            textAlign: "justify",
            hyphens: "auto",
            color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
          }}
        >
          Selected work from my current role and prior engineering career — the real work this
          practice is built on.
        </p>
      </div>

      <div
        className="mt-14 grid gap-x-[clamp(28px,4vw,64px)] gap-y-14"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {CASE_STUDIES.map((study) => (
          <article key={study.title}>
            <figure className="m-0 mb-5">
              <ImagePlaceholder alt={study.slotHint} className="halftone" aspect="4/3" />
            </figure>
            <span
              className="mb-2 block text-[11px] uppercase tracking-[0.1em]"
              style={{ color: "var(--color-accent-700)" }}
            >
              {study.sector}
            </span>
            <h3 className="m-0 text-[22px] leading-7">{study.title}</h3>
            <p
              className="mt-3.5 text-[15.5px] leading-7"
              style={{
                textAlign: "justify",
                hyphens: "auto",
                color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
              }}
            >
              {study.body}
            </p>
            <p className="mt-3.5 text-[15.5px] leading-7">
              <span className="font-serif font-semibold">Result — </span>
              {study.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
