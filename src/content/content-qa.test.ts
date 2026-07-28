import { describe, expect, it } from "vitest";
import { CONTENT } from "@/content";
import { RESOURCE_REGISTRY } from "@/content/resources";
import { TRACKS } from "@/lib/tracks";

describe("content QA", () => {
  it("ensures each lesson follows key schema constraints", () => {
    const violations: string[] = [];

    for (const [trackId, trackContent] of Object.entries(CONTENT)) {
      for (const [moduleId, lesson] of Object.entries(trackContent.lessons)) {
        const words = lesson.body.trim().split(/\s+/).length;
        const track = TRACKS.find((t) => t.id === trackId);
        if (!track) {
          violations.push(`${trackId}/${moduleId} unknown track`);
          continue;
        }
        const [minWords, maxWords] = track.audience === "teen" ? [150, 300] : [300, 500];
        if (words < minWords || words > maxWords) {
          violations.push(`${trackId}/${moduleId} body words=${words} (expected ${minWords}-${maxWords})`);
        }

        if (lesson.keyTakeaways.length < 3 || lesson.keyTakeaways.length > 5) {
          violations.push(`${trackId}/${moduleId} takeaways=${lesson.keyTakeaways.length}`);
        }

        if (lesson.resources.length < 3 || lesson.resources.length > 4) {
          violations.push(`${trackId}/${moduleId} resources=${lesson.resources.length}`);
        }

        for (const resourceRef of lesson.resources) {
          if (!RESOURCE_REGISTRY[resourceRef.resourceId]) {
            violations.push(`${trackId}/${moduleId} unknown resource id=${resourceRef.resourceId}`);
          }
        }

        if (lesson.tryThisToday.trim().length <= 10) {
          violations.push(`${trackId}/${moduleId} tryThisToday too short`);
        }
      }
    }

    expect(violations, violations.join("\n")).toHaveLength(0);
  });

  it("ensures each track quiz meets structure requirements", () => {
    for (const [trackId, trackContent] of Object.entries(CONTENT)) {
      const quiz = trackContent.quiz;
      expect(quiz.moduleId, `${trackId} quiz moduleId`).toBe("track-quiz");
      expect(quiz.passThreshold, `${trackId} passThreshold`).toBe(4);
      expect(quiz.questions.length, `${trackId} questions`).toBe(5);

      for (const [index, question] of quiz.questions.entries()) {
        expect(question.choices.length, `${trackId} question ${index + 1} choices`).toBe(4);
        expect(question.correctIndex, `${trackId} question ${index + 1} correctIndex`).toBeGreaterThanOrEqual(0);
        expect(question.correctIndex, `${trackId} question ${index + 1} correctIndex`).toBeLessThanOrEqual(3);
        expect(question.explanation.trim().length, `${trackId} question ${index + 1} explanation`).toBeGreaterThan(10);
      }
    }
  });

  it("ensures challenge coverage and checklist size for all tracks", () => {
    const challengeTracks = new Set(TRACKS.map((track) => track.id));

    for (const trackId of challengeTracks) {
      const challenge = CONTENT[trackId]?.challenge;
      expect(challenge, `${trackId} challenge missing`).toBeTruthy();
      expect(challenge?.moduleId, `${trackId} challenge moduleId`).toBe("track-challenge");
      expect(challenge?.checklist.length, `${trackId} checklist size`).toBeGreaterThanOrEqual(4);
      expect(challenge?.checklist.length, `${trackId} checklist size`).toBeLessThanOrEqual(7);
    }
  });
});
