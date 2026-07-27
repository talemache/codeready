import { DoodleStar, DoodleSquiggle } from "@/components/Doodles";
import { RichText } from "@/components/RichText";
import type { LessonContent } from "@/lib/content-types";

export function LessonBody({ lesson }: { lesson: LessonContent }) {
  return (
    <article className="prose-lesson mt-8">
      <div className="card-paper p-6 sm:p-10 relative overflow-hidden">
        <DoodleSquiggle className="absolute -top-3 -right-3 w-24 text-[color:var(--periwinkle)]" />
        <div className="space-y-5 max-w-[68ch]">
          {lesson.body.map((block, i) =>
            block.startsWith("## ") ? (
              <h2
                key={i}
                className="font-serif text-2xl pt-2 text-[color:var(--forest)]"
              >
                {block.slice(3)}
              </h2>
            ) : (
              <p
                key={i}
                className="text-[color:var(--forest)]/80 leading-relaxed text-[1.05rem]"
              >
                <RichText text={block} />
              </p>
            ),
          )}
        </div>
      </div>

      <div className="card-paper mt-6 p-6 sm:p-8">
        <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
          Key Takeaways
        </div>
        <ul className="mt-3 space-y-2">
          {lesson.takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-[color:var(--forest)]/85">
              <span aria-hidden className="text-[color:var(--coral)]">◆</span>
              <span><RichText text={t} /></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel mt-6 p-6 sm:p-8 relative overflow-hidden">
        <DoodleStar className="absolute -top-2 -right-2 w-14 text-[color:var(--coral)]" />
        <div className="text-xs uppercase tracking-widest text-[color:var(--coral)]">
          Curated Free Resources
        </div>
        <ul className="mt-4 space-y-4">
          {lesson.resources.map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-[color:var(--paper)] underline decoration-[color:var(--coral)] decoration-2 underline-offset-4 hover:italic"
              >
                {r.title}
              </a>
              <div className="text-sm text-[color:var(--paper)]/75 mt-1">{r.note}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border-2 border-dashed border-[color:var(--forest)]/30 p-5 sm:p-6">
        <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
          Try This Today
        </div>
        <p className="mt-2 font-serif text-xl text-[color:var(--forest)]"><RichText text={lesson.tryThis} /></p>
      </div>
    </article>
  );
}
