import { describe, expect, it } from "vitest";
import { overallCompletion, trackCompletion } from "./progress";

describe("progress calculations", () => {
  it("calculates overall completion from moduleStatus", () => {
    const state = {
      moduleStatus: {
        "programming-foundations-teen/naming-things-well": "complete",
        "programming-foundations-teen/reading-error-messages-without-panicking": "in_progress",
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
        "git-working-with-others/why-save-points-matter": "complete",
        "git-working-with-others/making-a-change-and-saving-it": "complete",
      },
      quizScores: {},
      challengeChecklist: {},
    };

    const completion = trackCompletion(state as any, "git-working-with-others");

    expect(completion.done).toBe(2);
    expect(completion.total).toBeGreaterThanOrEqual(7);
    expect(completion.pct).toBeGreaterThan(0);
  });
});
