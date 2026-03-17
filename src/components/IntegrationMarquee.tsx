const logos = [
  { name: "VinSolutions", label: "VinSolutions" },
  { name: "DriveCentric", label: "DriveCentric" },
  { name: "AutoFi", label: "AutoFi" },
];

export function IntegrationMarquee() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background: "var(--editorial-paper)",
        paddingTop: "var(--spacing-xl)",
        paddingBottom: "var(--spacing-xl)",
        borderTop: "1px solid var(--editorial-hairline)",
        borderBottom: "1px solid var(--editorial-hairline)",
      }}
    >
      <h3
        className="text-center uppercase font-semibold tracking-[0.2em]"
        style={{ color: "var(--editorial-ink)", fontSize: "0.875rem", marginBottom: "var(--spacing-xl)" }}
      >
        Plugs into your existing stack.
      </h3>
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="px-8 sm:px-14">
            <div
              className="inline-flex items-center justify-center"
              style={{
                height: "3rem",
                minWidth: "9rem",
                border: "1px solid var(--editorial-hairline-strong)",
                padding: "0 1.25rem",
                color: "var(--editorial-ink-muted)",
                background: "transparent",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "var(--editorial-ink)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--editorial-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "var(--editorial-ink-muted)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--editorial-hairline-strong)";
              }}
            >
              <span className="font-medium text-sm tracking-[0.02em]">{logo.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
