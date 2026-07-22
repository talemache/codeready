// Hand-drawn monoline doodle set. All strokes use currentColor.

type Props = { className?: string; strokeWidth?: number };

const base = "stroke-current fill-none";

export function DoodleArrow({ className, strokeWidth = 2 }: Props) {
  return (
    <svg viewBox="0 0 80 40" className={`${base} ${className ?? ""}`} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22 C 20 8, 40 34, 74 18" />
      <path d="M66 10 L 74 18 L 66 26" />
    </svg>
  );
}

export function DoodleSquiggle({ className, strokeWidth = 2 }: Props) {
  return (
    <svg viewBox="0 0 100 20" className={`${base} ${className ?? ""}`} strokeWidth={strokeWidth} strokeLinecap="round">
      <path d="M2 10 Q 12 -2, 22 10 T 42 10 T 62 10 T 82 10 T 100 10" />
    </svg>
  );
}

export function DoodleStar({ className, strokeWidth = 2 }: Props) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className ?? ""}`} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4 L 24 16 L 36 18 L 27 26 L 30 38 L 20 31 L 10 38 L 13 26 L 4 18 L 16 16 Z" />
    </svg>
  );
}

export function DoodleUnderline({ className, strokeWidth = 3 }: Props) {
  return (
    <svg viewBox="0 0 200 12" className={`${base} ${className ?? ""}`} strokeWidth={strokeWidth} strokeLinecap="round">
      <path d="M4 8 C 60 -2, 140 -2, 196 6" />
    </svg>
  );
}

export function TrackIcon({ name, className }: { name: string; className?: string }) {
  const common = { className: `${base} ${className ?? ""}`, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "book":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M6 10 C 16 6, 24 10, 24 10 L 24 40 C 24 40, 16 36, 6 40 Z" />
          <path d="M42 10 C 32 6, 24 10, 24 10 L 24 40 C 24 40, 32 36, 42 40 Z" />
        </svg>
      );
    case "tree":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <circle cx="24" cy="10" r="4" />
          <circle cx="10" cy="28" r="4" />
          <circle cx="38" cy="28" r="4" />
          <circle cx="18" cy="42" r="3" />
          <circle cx="30" cy="42" r="3" />
          <path d="M24 14 L 12 25 M24 14 L 36 25 M12 31 L 17 39 M38 31 L 31 39" />
        </svg>
      );
    case "branch":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <circle cx="12" cy="10" r="4" />
          <circle cx="12" cy="38" r="4" />
          <circle cx="36" cy="24" r="4" />
          <path d="M12 14 L 12 34" />
          <path d="M12 20 C 12 24, 20 24, 32 24" />
        </svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M8 20 L 22 6 L 32 16 L 18 30 Z" />
          <path d="M18 30 L 8 40 L 4 36 L 14 26" />
          <path d="M28 20 L 40 32" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M24 6 C 32 10, 40 10, 40 10 L 40 24 C 40 34, 32 40, 24 42 C 16 40, 8 34, 8 24 L 8 10 C 8 10, 16 10, 24 6 Z" />
          <path d="M16 22 L 22 28 L 32 18" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <circle cx="24" cy="24" r="8" />
          <path d="M24 4 L 24 10 M24 38 L 24 44 M4 24 L 10 24 M38 24 L 44 24 M10 10 L 15 15 M33 33 L 38 38 M38 10 L 33 15 M15 33 L 10 38" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M24 6 L 27 20 L 42 24 L 27 28 L 24 42 L 21 28 L 6 24 L 21 20 Z" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M24 4 C 32 12, 34 22, 34 30 L 14 30 C 14 22, 16 12, 24 4 Z" />
          <path d="M14 30 L 8 42 L 18 36 M34 30 L 40 42 L 30 36" />
          <circle cx="24" cy="18" r="3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <circle cx="24" cy="24" r="16" />
        </svg>
      );
  }
}
