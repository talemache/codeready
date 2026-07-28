import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { search, highlight, type SearchHit } from "@/lib/search";

function Highlighted({ text, q }: { text: string; q: string }) {
  const [a, m, b] = highlight(text, q);
  if (!m) return <>{text}</>;
  return (
    <>
      {a}
      <mark className="rounded bg-[color:var(--coral)]/50 text-[color:var(--forest)] px-0.5">
        {m}
      </mark>
      {b}
    </>
  );
}

export function SearchBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const hits = useMemo(() => search(q), [q]);

  const grouped = useMemo(() => {
    const groups: { trackId: string; trackName: string; hits: SearchHit[] }[] = [];
    for (const h of hits) {
      let g = groups.find((x) => x.trackId === h.trackId);
      if (!g) {
        g = { trackId: h.trackId, trackName: h.trackName, hits: [] };
        groups.push(g);
      }
      g.hits.push(h);
    }
    return groups;
  }, [hits]);

  const flat = useMemo(() => grouped.flatMap((g) => g.hits), [grouped]);

  useEffect(() => setActive(0), [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el as HTMLElement | null)?.isContentEditable;
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
        requestAnimationFrame(() => inputRef.current?.focus());
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  const go = (h: SearchHit) => {
    setOpen(false);
    setQ("");
    navigate({
      to: "/track/$trackId/$moduleId",
      params: { trackId: h.trackId, moduleId: h.moduleId },
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flat[active]) {
      e.preventDefault();
      go(flat[active]);
    }
  };

  let counter = -1;

  return (
    <div ref={wrapRef} className="relative">
      <label className="sr-only" htmlFor="site-search">
        Search lessons
      </label>
      <div className="relative flex items-center">
        <input
          id="site-search"
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search lessons…"
          role="combobox"
          aria-expanded={open && hits.length > 0}
          aria-controls="search-results"
          aria-autocomplete="list"
          className="w-32 sm:w-48 rounded-full border border-[color:var(--forest)]/25 bg-[color:var(--paper)] pl-4 pr-10 py-1.5 text-sm text-[color:var(--forest)] placeholder:text-[color:var(--forest)]/45 focus:w-44 sm:focus:w-72 focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]/30 transition-all"
          aria-label="Search lessons (press / to focus)"
        />
        {!q && (
          <kbd
            className="pointer-events-none absolute right-3 rounded border border-[color:var(--forest)]/20 bg-[color:var(--paper-deep)] px-1.5 py-0.5 font-mono text-[11px] text-[color:var(--forest)]/50 leading-none"
            title="Press / to search"
          >
            /
          </kbd>
        )}
      </div>
      {open && q.trim().length >= 2 ? (
        <div
          id="search-results"
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-[min(92vw,28rem)] max-h-[70vh] overflow-auto rounded-2xl border border-[color:var(--forest)]/15 bg-[color:var(--paper)] p-2 shadow-xl"
        >
          {flat.length === 0 ? (
            <div className="p-4 text-sm text-[color:var(--forest)]/60">
              No matches for “{q}”. Try a different word.
            </div>
          ) : (
            grouped.map((g) => (
              <div key={g.trackId} className="mb-2">
                <div className="px-3 py-1 text-xs uppercase tracking-widest text-[color:var(--forest)]/50">
                  {g.trackName}
                </div>
                {g.hits.map((h) => {
                  counter += 1;
                  const idx = counter;
                  return (
                    <button
                      key={h.trackId + h.moduleId}
                      role="option"
                      aria-selected={idx === active}
                      onMouseEnter={() => setActive(idx)}
                      onClick={() => go(h)}
                      className={`w-full rounded-xl px-3 py-2 text-left ${
                        idx === active ? "bg-[color:var(--forest)]/10" : ""
                      }`}
                    >
                      <div className="font-serif text-base text-[color:var(--forest)]">
                        <Highlighted text={h.title} q={q} />
                      </div>
                      {h.snippet ? (
                        <div className="mt-0.5 text-xs text-[color:var(--forest)]/65 line-clamp-2">
                          <Highlighted text={h.snippet} q={q} />
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
