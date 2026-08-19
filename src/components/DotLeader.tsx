type Props = {
  label: React.ReactNode;
  value: React.ReactNode;
  /** "rail" — dateline stat row (baseline, no border). "index" — About/Credentials row (bordered, padded). */
  variant?: "rail" | "index";
  valueColor?: "default" | "accent";
  nowrapValue?: boolean;
};

/**
 * A label, a flexing dotted leader, and a value — the front-page furniture
 * pattern used by the dateline stats and the About/Credentials indexes.
 */
export function DotLeader({
  label,
  value,
  variant = "index",
  valueColor = "default",
  nowrapValue,
}: Props) {
  if (variant === "rail") {
    return (
      <p className="m-0 flex items-baseline gap-2 text-[15.5px] leading-7">
        <span>{label}</span>
        <span className="dot-leader mb-[0.34em]" />
        <span
          className="font-serif text-[17px] font-semibold"
          style={{ color: valueColor === "accent" ? "var(--color-accent-700)" : undefined }}
        >
          {value}
        </span>
      </p>
    );
  }

  return (
    <p className="m-0 flex items-baseline gap-2 border-b border-[color:var(--color-text)]/12 text-[15.5px] leading-7">
      <span className="py-2">{label}</span>
      <span className="dot-leader mb-[0.9em]" />
      <span
        className={`py-2 font-serif text-[15px] font-semibold text-[color:var(--color-text)]/70 ${nowrapValue ? "whitespace-nowrap" : ""}`}
      >
        {value}
      </span>
    </p>
  );
}
