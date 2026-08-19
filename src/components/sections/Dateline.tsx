import { DotLeader } from "@/components/DotLeader";

const DATELINE_ITEMS = ["Northal LLC", "North Canton, Ohio", "Remote-first, U.S. hours"];

export function Dateline() {
  return (
    <section aria-label="Practice at a glance" style={{ padding: "0 0 70px" }}>
      <hr
        className="m-0 border-0"
        style={{
          height: 5,
          borderTop: "2px solid var(--color-text)",
          borderBottom: "1px solid var(--color-text)",
        }}
      />
      <p
        className="m-0 flex flex-wrap justify-between gap-x-7 gap-y-3.5 py-3.5 text-[13px] leading-[14px] uppercase tracking-[0.08em]"
        style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
      >
        {DATELINE_ITEMS.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </p>
      <hr className="m-0 h-0 border-0 border-t border-[color:var(--color-text)]" />
      <div
        className="grid gap-x-[70px] gap-y-3.5 py-3.5 pb-7"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        <DotLeader
          variant="rail"
          label="First reply, every inquiry"
          value="48 hrs"
          valueColor="accent"
        />
        <DotLeader variant="rail" label="Typical build, start to handoff" value="2–4 wks" />
      </div>
      <hr className="m-0 h-0 border-0 border-t border-[color:var(--color-text)]" />
    </section>
  );
}
