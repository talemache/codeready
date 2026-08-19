import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { DASHBOARD_SHOTS } from "@/lib/content";

export function Dashboards() {
  return (
    <section style={{ padding: "0 0 84px" }}>
      <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-end gap-x-[clamp(24px,5vw,80px)] gap-y-7 max-[720px]:grid-cols-1">
        <h2 className="m-0 text-[32px] leading-[42px] tracking-[-0.015em]">
          What you actually receive
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
          A working dashboard, the query behind it, and documentation your staff can actually read —
          not a slide deck. Screens below are from real work, with identifying details removed.
        </p>
      </div>

      <div
        className="mt-11 grid gap-x-[clamp(20px,3vw,40px)] gap-y-7"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {DASHBOARD_SHOTS.map((shot) => (
          <figure key={shot.caption} className="m-0">
            <ImagePlaceholder
              src={shot.image}
              alt={shot.hint}
              className="halftone"
              aspect="16/10"
            />
            <figcaption
              className="mt-2 text-[13px] leading-6"
              style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
            >
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
