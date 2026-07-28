import { useState } from "react";
import type { Quiz } from "@/lib/content-types";
import { useProgress } from "@/lib/progress";
import { celebrateIfTrackComplete } from "@/lib/celebrate";

export function QuizView({ quiz, trackId }: { quiz: Quiz; trackId: string }) {
  const { state, saveQuizResult } = useProgress();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const prior = state.quizScores?.[trackId];
  const total = quiz.questions.length;
  const score = quiz.questions.reduce(
    (n, q, i) => n + (answers[i] === q.correctIndex ? 1 : 0),
    0,
  );
  const allAnswered = Object.keys(answers).length === total;

  const submit = () => {
    setSubmitted(true);
    const passed = score >= quiz.passThreshold;
    const wasComplete = state.moduleStatus[`${trackId}/track-quiz`] === "complete";
    saveQuizResult(trackId, { score, total, passed, at: Date.now() });
    if (passed) celebrateIfTrackComplete(trackId, wasComplete);
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="mt-8">
      {prior && !submitted ? (
        <div className="card-paper p-5 mb-6 text-[color:var(--forest)]/80">
          Last attempt: <strong>{prior.score}/{prior.total}</strong>{" "}
          {prior.passed ? "— passed" : "— not passed yet"}
        </div>
      ) : null}

      <ol className="space-y-5">
        {quiz.questions.map((q, qi) => {
          const chosen = answers[qi];
          return (
            <li key={qi} className="card-paper p-5 sm:p-6">
              <div className="font-serif text-xl leading-snug">
                {qi + 1}. {q.prompt}
              </div>
              <div className="mt-4 space-y-2">
                {q.choices.map((opt, oi) => {
                  const selected = chosen === oi;
                  const isCorrect = oi === q.correctIndex;
                  let cls =
                    "border-[color:var(--forest)]/20 hover:border-[color:var(--forest)]/60";
                  if (submitted && isCorrect)
                    cls = "border-[color:var(--forest)] bg-[color:var(--forest)]/10";
                  else if (submitted && selected)
                    cls = "border-[color:var(--coral)] bg-[color:var(--coral)]/20";
                  else if (selected)
                    cls = "border-[color:var(--forest)] bg-[color:var(--forest)]/5";
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={submitted}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                      className={`w-full text-left rounded-xl border-2 px-4 py-3 min-h-11 transition ${cls}`}
                    >
                      <span className="text-[color:var(--forest)]/50 mr-2">
                        {String.fromCharCode(65 + oi)}.
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted ? (
                <p className="mt-3 text-sm text-[color:var(--forest)]/75">
                  <strong>{chosen === q.correctIndex ? "Correct." : "Not quite."}</strong>{" "}
                  {q.explanation}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {submitted ? (
          <>
            <div className="font-serif text-2xl">
              {score}/{total} — {score >= quiz.passThreshold ? "Passed!" : `Need ${quiz.passThreshold} to pass`}
            </div>
            {score >= quiz.passThreshold ? null : (
              <button onClick={retry} className="btn-primary">
                Try again
              </button>
            )}
          </>
        ) : (
          <button onClick={submit} disabled={!allAnswered} className="btn-primary disabled:opacity-50">
            Submit answers
          </button>
        )}
      </div>
    </div>
  );
}
