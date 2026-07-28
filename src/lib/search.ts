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

let index: SearchDoc[] | null = null;

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
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  if (!index) index = buildIndex();

  const hits: (SearchHit & { score: number })[] = [];
  for (const d of index) {
    const titleIdx = d.title.toLowerCase().indexOf(q);
    const textIdx = d.text.toLowerCase().indexOf(q);
    if (titleIdx === -1 && textIdx === -1) continue;
    let snippet = "";
    if (textIdx !== -1) {
      const start = Math.max(0, textIdx - 60);
      snippet =
        (start > 0 ? "…" : "") + d.text.slice(start, textIdx + q.length + 80).trim() + "…";
    }
    hits.push({
      ...d,
      snippet,
      matchInTitle: titleIdx !== -1,
      score: (titleIdx !== -1 ? 100 - titleIdx : 0) + (textIdx !== -1 ? 10 : 0),
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
