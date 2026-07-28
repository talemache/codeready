import { describe, expect, it } from "vitest";
import { highlight, search } from "./search";

describe("search index", () => {
  it("finds modules by title", () => {
    const hits = search("naming");

    expect(hits.length).toBeGreaterThan(0);
    expect(hits.some((h) => h.title.toLowerCase().includes("naming"))).toBe(true);
  });

  it("highlights matches", () => {
    const [before, match, after] = highlight("Reading Error Messages Without Panicking", "panicking");

    expect(before).toContain("Reading Error Messages");
    expect(match.toLowerCase()).toBe("panicking");
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
