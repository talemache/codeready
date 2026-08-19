export function Quote() {
  return (
    <section style={{ padding: "14px 0 98px" }}>
      <blockquote
        className="m-0 font-serif italic max-[720px]:[text-indent:0]"
        style={{
          fontWeight: 400,
          fontSize: "clamp(24px, 2.6vw, 34px)",
          lineHeight: "42px",
          letterSpacing: "-0.01em",
          maxWidth: "34ch",
          textIndent: "-0.475em",
        }}
      >
        &ldquo;The deliverable isn't a dashboard. It's a dashboard someone can open in a board
        meeting and explain without me in the room.&rdquo;
      </blockquote>
    </section>
  );
}
