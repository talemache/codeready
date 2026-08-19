type Props = { className?: string };

/**
 * Typography-based wordmark — "Ryan Levels" in the site's single serif face
 * with a magenta full stop as the only mark. No icon.
 */
export function Logo({ className }: Props) {
  return (
    <span
      className={`font-serif text-lg font-semibold no-underline ${className ?? ""}`}
      style={{ color: "var(--color-text)" }}
    >
      Ryan&nbsp;Levels
      <span aria-hidden style={{ color: "var(--color-accent-2)" }}>
        .
      </span>
    </span>
  );
}
