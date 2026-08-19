import { DotLeader } from "@/components/DotLeader";
import { CERTIFICATIONS, MEMBERSHIPS, TOOL_LINE } from "@/lib/content";

export function Credentials() {
  return (
    <section style={{ padding: "0 0 84px" }}>
      <span className="kicker">Certified, and in the room</span>
      <div className="grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-start gap-x-[clamp(24px,5vw,96px)] gap-y-11 max-[720px]:grid-cols-1">
        <div>
          <h2 className="m-0 text-[32px] leading-[42px] tracking-[-0.015em]">
            Current where it counts
          </h2>
          <p
            className="mb-7 mt-3.5 text-[15.5px] leading-7"
            style={{
              maxWidth: "52ch",
              textAlign: "justify",
              hyphens: "auto",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            The certifications behind this are recent and specific — Anthropic's AI fluency track
            written for nonprofits, plus agent and Model Context Protocol work from OpenAI and
            Anthropic.
          </p>
          <hr className="m-0 h-0 border-0 border-t border-[color:var(--color-text)]" />
          {CERTIFICATIONS.map((cert) => (
            <DotLeader
              key={cert.name}
              variant="index"
              label={cert.name}
              value={cert.issuer}
              nowrapValue
            />
          ))}
        </div>

        <div>
          <h3 className="m-0 text-2xl leading-7">Where I show up</h3>
          <p
            className="mb-5 mt-3.5 text-[15.5px] leading-7"
            style={{ color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}
          >
            The organizations where I stay active, not just listed.
          </p>
          {MEMBERSHIPS.map((org) => (
            <p key={org.name} className="mb-3.5 text-[15.5px] leading-7">
              <span className="block font-serif font-semibold">{org.name}</span>
              <span style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>
                {org.role}
              </span>
            </p>
          ))}
          <p
            className="mt-5 text-[13px] leading-6 tracking-[0.02em]"
            style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
          >
            {TOOL_LINE}
          </p>
        </div>
      </div>
    </section>
  );
}
