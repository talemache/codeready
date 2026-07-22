type Props = { pct: number; size?: number; stroke?: number; label?: string };

export function ProgressRing({ pct, size = 140, stroke = 10, label }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.max(0, Math.min(100, pct)) / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          className="fill-none stroke-[color:var(--forest)]/15"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className="fill-none stroke-[color:var(--forest)] transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl text-[color:var(--forest)]">{pct}%</span>
        {label ? <span className="text-xs text-[color:var(--forest)]/70">{label}</span> : null}
      </div>
    </div>
  );
}

export function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-[color:var(--forest)]/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-[color:var(--coral)] transition-all duration-500"
        style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
      />
    </div>
  );
}
