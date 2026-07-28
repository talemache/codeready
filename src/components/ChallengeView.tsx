import type { Challenge } from "@/lib/content-types";
import { RichText } from "@/components/RichText";
import { useProgress } from "@/lib/progress";
import { celebrateIfTrackComplete } from "@/lib/celebrate";

export function ChallengeView({
  challenge,
  trackId,
}: {
  challenge: Challenge;
  trackId: string;
}) {
  const { state, toggleChecklistStep } = useProgress();
  const key = `${trackId}/track-challenge`;
  const checked = state.challengeChecklist?.[key] ?? [];
  const total = challenge.checklist.length;

  const onToggle = (i: number) => {
    const wasComplete = state.moduleStatus[key] === "complete";
    toggleChecklistStep(trackId, "track-challenge", i, total);
    const willBeComplete = !checked.includes(i) && checked.length + 1 >= total;
    if (willBeComplete) celebrateIfTrackComplete(trackId, wasComplete);
  };

  return (
    <div className="mt-8">
      <div className="panel p-6 sm:p-8">
        <div className="text-xs uppercase tracking-widest text-[color:var(--coral)]">
          Project Brief
        </div>
        <p className="mt-3 text-[color:var(--paper)]/90 leading-relaxed max-w-[68ch]">
          {challenge.brief}
        </p>
      </div>

      <div className="mt-6 card-paper p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl">Checklist</h2>
          <span className="text-sm text-[color:var(--forest)]/60">
            {checked.length}/{total}
          </span>
        </div>
        <ul className="mt-4 space-y-2">
          {challenge.checklist.map((s, i) => {
            const on = checked.includes(i);
            return (
              <li key={i}>
                <button
                  onClick={() => onToggle(i)}
                  className="w-full flex items-start gap-3 rounded-xl px-3 py-3 min-h-11 text-left hover:bg-[color:var(--forest)]/5"
                >
                  <span
                    aria-hidden
                    className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 ${
                      on
                        ? "bg-[color:var(--forest)] border-[color:var(--forest)] text-[color:var(--paper)]"
                        : "border-[color:var(--forest)]/40 text-transparent"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12 L10 17 L20 7" />
                    </svg>
                  </span>
                  <span className={on ? "line-through text-[color:var(--forest)]/50" : ""}>
                    <RichText text={s} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-sm text-[color:var(--forest)]/60">
          Tick every box to mark this challenge complete.
        </p>
      </div>
    </div>
  );
}
