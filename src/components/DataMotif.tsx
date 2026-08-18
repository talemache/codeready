type LineProps = { className?: string };

/**
 * A restrained, abstract line-chart accent used behind the hero and a few
 * section dividers. Deliberately not a literal dashboard mockup — just a
 * suggestion of analytical rigor.
 */
export function LineChartMotif({ className }: LineProps) {
  return (
    <svg
      viewBox="0 0 600 220"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M0 170 L70 150 L140 178 L210 110 L280 130 L350 60 L420 90 L490 40 L560 66 L600 30"
        stroke="var(--copper)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M0 200 L70 195 L140 205 L210 175 L280 185 L350 150 L420 165 L490 130 L560 145 L600 115"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.22"
      />
      {[
        [0, 170],
        [140, 178],
        [280, 130],
        [420, 90],
        [560, 66],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="var(--copper)" opacity="0.6" />
      ))}
    </svg>
  );
}
