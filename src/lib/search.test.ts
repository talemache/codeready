import { describe, expect, it } from "vitest";
import { highlight, search } from "./search";

describe("search index", () => {
  it("finds modules by title", () => {
    const hits = search("debugging");

    expect(hits.length).toBeGreaterThan(0);
    expect(hits.some((h) => h.title.toLowerCase().includes("debugging"))).toBe(true);
  });

  it("highlights matches", () => {
    const [before, match, after] = highlight("Debugging Like a Detective", "detective");

    expect(before).toContain("Debugging");
    expect(match.toLowerCase()).toBe("detective");
    expect(after).toBe("");
  });

  it("returns results within 50ms for full index", () => {
    const started = performance.now();
    const hits = search("code");
    const elapsed = performance.now() - started;

    expect(hits.length).toBeGreaterThan(0);
    expect(elapsed).toBeLessThan(50);
  });
});
