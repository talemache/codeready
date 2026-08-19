type Props = {
  /** Accessible description for the image. */
  alt: string;
  src?: string;
  className?: string;
  /** Omit when a parent element already owns the aspect ratio. */
  aspect?: string;
};

export function ImagePlaceholder({ alt, src, className, aspect }: Props) {
  return (
    <div
      className={`overflow-hidden bg-[color:var(--color-surface)] ${className ?? ""}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {src ? (
        <img src={src} alt={alt} className="block h-full w-full object-cover" loading="lazy" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full items-center justify-center p-4 text-center"
        >
          <p className="m-0 text-[13px] leading-5 text-[color:var(--color-text)]/70">{alt}</p>
        </div>
      )}
    </div>
  );
}
