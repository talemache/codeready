export function Hero() {
  return (
    <section id="top" style={{ padding: "112px 0 84px" }}>
      <h1
        style={{
          fontSize: "clamp(42px, 6vw, 80px)",
          lineHeight: "clamp(45.5px, 6.5vw, 86.5px)",
          letterSpacing: "-0.02em",
          margin: "0 0 0 -0.035em",
        }}
      >
        <span className="block">Your numbers, finally</span>
        <span className="block">worth showing someone.</span>
      </h1>
      <p
        className="text-[19px] leading-8"
        style={{
          maxWidth: "56ch",
          marginTop: 42,
          color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
        }}
      >
        I'm Ryan — Data &amp; Evaluation Manager at Community Legal Aid by day, independent data and
        software consultant the rest of the time. I build the reporting your board, your funders, or
        your leadership team actually reads, and I bring AI into the workflow only where it
        genuinely saves your staff an afternoon. Small teams, real deadlines, no platform agenda.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-[15px]">
        <a href="#contact" className="btn-primary min-h-10 px-[22px]">
          Tell me what's not working
        </a>
        <a href="#work" className="btn-secondary min-h-10 px-[22px]">
          See the work
        </a>
      </div>
    </section>
  );
}
