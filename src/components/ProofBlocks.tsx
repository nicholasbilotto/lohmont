const stats = [
  { value: "94%", label: "Reduces missed inbound service and sales call rates by 94% during peak weekend hours." },
  { value: "< 30s", label: "Accelerates lead-to-appointment times to under 30 seconds via CRM API integration." },
  { value: "14 Days", label: "Rapid onboarding. The full cinematic promotional trailer and the AI voice agent are fully deployed within 14 days of contract signing." },
];

export function ProofBlocks({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "var(--editorial-dark-surface)" : "var(--editorial-paper)";
  const text = dark ? "var(--editorial-dark-text)" : "var(--editorial-ink-muted)";

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1px",
        background: dark ? "var(--editorial-dark-hairline)" : "var(--editorial-hairline)",
      }}
    >
        {stats.map((stat, i) => (
          <div key={i} className="p-8 text-left" style={{ background: bg }}>
          <div
            className="font-serif font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-editorial), serif",
              fontSize: "clamp(2rem, 2.8vw, 2.75rem)",
              color: "var(--editorial-accent)",
              marginBottom: "var(--spacing-md)",
              lineHeight: 1.1,
            }}
          >
            {stat.value}
          </div>
          <div style={{ color: text, fontSize: "0.9375rem", lineHeight: 1.55, fontWeight: dark ? 500 : 400 }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
