import { DoodleStar, DoodleSquiggle } from "@/components/Doodles";
import { RichText } from "@/components/RichText";
import type { Lesson } from "@/lib/content-types";
import { RESOURCE_REGISTRY } from "@/content/resources";

/** Groups consecutive `- ` or `N. ` lines into a single list block. */
function parseBodyBlocks(body: string): Array<{ type: "heading" | "ul" | "ol" | "p"; content: string | string[] }> {
  const rawBlocks = body.split(/\n\n+/).filter(Boolean);
  const result: Array<{ type: "heading" | "ul" | "ol" | "p"; content: string | string[] }> = [];

  for (const block of rawBlocks) {
    if (block.startsWith("## ")) {
      result.push({ type: "heading", content: block.slice(3) });
    } else {
      const lines = block.split("\n");
      const allBullet = lines.every((l) => /^- /.test(l));
      const allNumbered = lines.every((l) => /^\d+\. /.test(l));
      if (allBullet && lines.length > 0) {
        result.push({ type: "ul", content: lines.map((l) => l.replace(/^- /, "")) });
      } else if (allNumbered && lines.length > 0) {
        result.push({ type: "ol", content: lines.map((l) => l.replace(/^\d+\. /, "")) });
      } else {
        result.push({ type: "p", content: block });
      }
    }
  }
  return result;
}

export function LessonBody({ lesson }: { lesson: Lesson }) {
  const blocks = parseBodyBlocks(lesson.body);

  return (
    <article className="prose-lesson mt-8">
      <div className="card-paper p-6 sm:p-10 relative overflow-hidden">
        <DoodleSquiggle className="absolute -top-3 -right-3 w-24 text-[color:var(--periwinkle)]" />
        <div className="space-y-5 max-w-[68ch]">
          {blocks.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="font-serif text-2xl pt-2 text-[color:var(--forest)]">
                  {block.content as string}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-none space-y-1.5 pl-1">
                  {(block.content as string[]).map((item, j) => (
                    <li key={j} className="flex gap-2 text-[color:var(--forest)]/80 leading-relaxed text-[1.05rem]">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--coral)]" />
                      <span><RichText text={item} /></span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "ol") {
              return (
                <ol key={i} className="space-y-1.5 pl-1">
                  {(block.content as string[]).map((item, j) => (
                    <li key={j} className="flex gap-3 text-[color:var(--forest)]/80 leading-relaxed text-[1.05rem]">
                      <span className="shrink-0 font-mono text-sm text-[color:var(--coral)] mt-0.5">{j + 1}.</span>
                      <span><RichText text={item} /></span>
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} className="text-[color:var(--forest)]/80 leading-relaxed text-[1.05rem]">
                <RichText text={block.content as string} />
              </p>
            );
          })}
        </div>
      </div>

      <div className="card-paper mt-6 p-6 sm:p-8">
        <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
          Key Takeaways
        </div>
        <ul className="mt-3 space-y-2">
          {lesson.keyTakeaways.map((t, i) => (
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
          {lesson.resources.map((resourceRef) => {
            const resource = RESOURCE_REGISTRY[resourceRef.resourceId];
            if (!resource) return null;
            return (
            <li key={resource.id}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-[color:var(--paper)] underline decoration-[color:var(--coral)] decoration-2 underline-offset-4 hover:italic"
              >
                {resource.label}
              </a>
              <div className="text-sm text-[color:var(--paper)]/75 mt-1">{resourceRef.note ?? "Free official resource."}</div>
            </li>
          );
          })}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border-2 border-dashed border-[color:var(--forest)]/30 p-5 sm:p-6">
        <div className="text-xs uppercase tracking-widest text-[color:var(--forest)]/60">
          Try This Today
        </div>
        <p className="mt-2 font-serif text-xl text-[color:var(--forest)]"><RichText text={lesson.tryThisToday} /></p>
      </div>
    </article>
  );
}
