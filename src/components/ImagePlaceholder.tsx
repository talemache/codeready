type Props = {
  /** What a real photo/screenshot here should show — used as the accessible alt text. */
  alt: string;
  className?: string;
  /** Omit when a parent element already owns the aspect ratio (e.g. figure.cmyk .print). */
  aspect?: string;
};

/**
 * An empty drop slot for real photography — styled as the halftone frame's
 * resting surface (`--color-surface`, the token reserved for exactly this)
 * rather than a mocked-up gray box. Swap for a real <img alt={alt} .../>
 * once photography is sourced; the caption states the shot to source.
 */
export function ImagePlaceholder({ alt, className, aspect }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-[color:var(--color-surface)] p-4 text-center ${className ?? ""}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <p className="m-0 text-[13px] leading-5 text-[color:var(--color-text)]/70">{alt}</p>
    </div>
  );
}
