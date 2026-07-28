/** Inline formatted text: `code`, **bold**, plain. */
export function RichText({ text }: { text: string }) {
  // Split on backtick code spans and **bold** markers
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded-md bg-[color:var(--paper-deep)] px-1.5 py-0.5 font-mono text-[0.86em] text-[color:var(--forest)]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
