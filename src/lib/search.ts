import { TRACKS } from "./tracks";
import { CONTENT } from "@/content";

export type SearchDoc = {
  trackId: string;
  trackName: string;
  moduleId: string;
  title: string;
  type: string;
  text: string;
};

const index: SearchDoc[] = buildIndex();

function buildIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const t of TRACKS) {
    for (const m of t.modules) {
      const lesson = CONTENT[t.id]?.lessons[m.id];
      const text = lesson
        ? [lesson.body, ...lesson.keyTakeaways, lesson.tryThisToday].join(" ").replace(/## /g, "")
        : "";
      docs.push({
        trackId: t.id,
        trackName: t.name,
        moduleId: m.id,
        title: m.title,
        type: m.type,
        text,
      });
    }
  }
  return docs;
}

export type SearchHit = SearchDoc & { snippet: string; matchInTitle: boolean };

export function search(query: string, limit = 20): SearchHit[] {
  const raw = query.trim().toLowerCase();
  if (raw.length < 2) return [];

  // Support multi-word AND queries: every term must appear somewhere in the doc.
  const terms = raw.split(/\s+/).filter((t) => t.length > 0);

  const hits: (SearchHit & { score: number })[] = [];
  for (const d of index) {
    const titleLower = d.title.toLowerCase();
    const textLower = d.text.toLowerCase();

    // Every term must match in either title or text.
    const allMatch = terms.every((t) => titleLower.includes(t) || textLower.includes(t));
    if (!allMatch) continue;

    // Snippet uses the first term for anchor context.
    const firstTerm = terms[0];
    let snippet = "";
    const textIdx = textLower.indexOf(firstTerm);
    if (textIdx !== -1) {
      const start = Math.max(0, textIdx - 60);
      snippet =
        (start > 0 ? "…" : "") + d.text.slice(start, textIdx + firstTerm.length + 80).trim() + "…";
    }

    // Score: title matches score higher; more terms matching in title scores even higher.
    const titleMatches = terms.filter((t) => titleLower.includes(t)).length;
    const textMatches = terms.filter((t) => textLower.includes(t)).length;
    hits.push({
      ...d,
      snippet,
      matchInTitle: titleMatches > 0,
      score: titleMatches * 100 + textMatches * 10,
    });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Splits text into [before, match, after] parts for highlighting. */
export function highlight(text: string, q: string) {
  const i = text.toLowerCase().indexOf(q.trim().toLowerCase());
  if (i === -1 || !q.trim()) return [text, "", ""] as const;
  return [text.slice(0, i), text.slice(i, i + q.trim().length), text.slice(i + q.trim().length)] as const;
}
