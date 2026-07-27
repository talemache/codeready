/** Renders inline `code` spans inside plain text. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/`([^`]+)`/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code
            key={i}
            className="rounded-md bg-[color:var(--paper-deep)] px-1.5 py-0.5 font-mono text-[0.86em] text-[color:var(--forest)]"
          >
            {part}
          </code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
