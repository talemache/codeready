type Props = { className?: string; mark?: "navy" | "cream" };

/**
 * Typography-based wordmark — "Ryan Levels" set in the site's serif display
 * face with a copper full stop as the only mark. No icon.
 */
export function Logo({ className, mark = "navy" }: Props) {
  const color = mark === "cream" ? "var(--cream)" : "var(--navy)";
  return (
    <span className={className} style={{ color }} aria-label="Ryan Levels">
      <span className="font-serif text-xl tracking-tight sm:text-2xl">
        Ryan Levels
        <span aria-hidden style={{ color: "var(--copper)" }}>
          .
        </span>
      </span>
    </span>
  );
}
