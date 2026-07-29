type Props = { size?: number; className?: string };

export function Logo({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="22"
        cy="22"
        r="21"
        fill="var(--forest)"
        stroke="var(--paper)"
        strokeWidth="1"
      />
      <g transform="translate(9,8) scale(0.68)">
        <path
          d="M20 4 L 24 16 L 36 18 L 27 26 L 30 38 L 20 31 L 10 38 L 13 26 L 4 18 L 16 16 Z"
          fill="var(--paper)"
        />
      </g>
    </svg>
  );
}
