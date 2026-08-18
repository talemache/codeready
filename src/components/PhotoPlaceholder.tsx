type Props = {
  /** What a real photo here should show — used as the accessible alt text. */
  alt: string;
  /** Short shot-list note for whoever sources the final photography. */
  brief: string;
  className?: string;
  shape?: "rect" | "portrait";
};

/**
 * Stands in for real photography until licensed images are sourced and
 * dropped in. Deliberately not a gray box: styled to preview the intended
 * tone (muted navy/cream, natural light) so the layout reads correctly,
 * with a visible caption naming exactly what to shoot or source.
 *
 * Replace with an <img alt={alt} src="..." /> once real photography is
 * available — see the shot brief in `brief` for direction (grounded,
 * unstaged, muted natural light; no stock handshake/skyline/meeting shots).
 */
export function PhotoPlaceholder({ alt, brief, className, shape = "rect" }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`data-grid relative overflow-hidden border border-[color:var(--navy)]/10 bg-[linear-gradient(155deg,var(--cream-deep),var(--cream))] ${
        shape === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"
      } ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/10 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="rounded-md bg-[color:var(--navy)]/90 px-2.5 py-1.5 text-[11px] leading-snug text-[color:var(--cream)]">
          <span className="font-semibold">Photo placeholder — </span>
          {brief}
        </p>
      </div>
    </div>
  );
}
