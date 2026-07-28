import { describe, expect, it } from "vitest";
import { overallCompletion, trackCompletion } from "./progress";

describe("progress calculations", () => {
  it("calculates overall completion from moduleStatus", () => {
    const state = {
      moduleStatus: {
        "programming-foundations/writing-clean-code": "complete",
        "programming-foundations/language-mastery-pick-your-primary-language": "in_progress",
      },
      quizScores: {},
      challengeChecklist: {},
    };

    const overall = overallCompletion(state as any);

    expect(overall.done).toBe(1);
    expect(overall.total).toBeGreaterThan(1);
    expect(overall.pct).toBeGreaterThan(0);
  });

  it("calculates per-track completion", () => {
    const state = {
      moduleStatus: {
        "git/git-fundamentals": "complete",
        "git/branching-merging": "complete",
      },
      quizScores: {},
      challengeChecklist: {},
    };

    const completion = trackCompletion(state as any, "git");

    expect(completion.done).toBe(2);
    expect(completion.total).toBeGreaterThanOrEqual(6);
    expect(completion.pct).toBeGreaterThan(0);
  });
});
