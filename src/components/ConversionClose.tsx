"use client";

export function ConversionClose({ showCalendar = false }: { showCalendar?: boolean }) {
  return (
    <>
      <section
        id="book-call"
        className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6"
        style={{
          paddingTop: "var(--spacing-5xl)",
          paddingBottom: "var(--spacing-5xl)",
          background: "var(--editorial-dark-bg)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--editorial-accent)" }} />
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-editorial), serif",
              color: "var(--editorial-dark-text)",
              marginBottom: "var(--spacing-lg)",
              lineHeight: 1.22,
            }}
          >
            Stop bleeding revenue. Book your strategy call now.
          </h2>
          <p
            className="mx-auto"
            style={{
              color: "var(--editorial-dark-muted)",
              fontSize: "1.125rem",
              lineHeight: 1.6,
              marginBottom: "var(--spacing-2xl)",
              fontWeight: 500,
            }}
          >
            Live in 14 days. Pick a time below—see if your dealership qualifies.
          </p>

          {!showCalendar ? (
            <div
              className="flex flex-col items-center justify-center text-left sm:text-center"
              style={{
                border: "2px solid var(--editorial-accent)",
                minHeight: "320px",
                padding: "var(--spacing-2xl)",
                background: "var(--editorial-dark-surface)",
              }}
            >
              <p className="font-semibold tracking-tight" style={{ color: "var(--editorial-dark-text)", marginBottom: "var(--spacing-sm)" }}>
                Strategy call locked
              </p>
              <p className="max-w-md" style={{ color: "var(--editorial-dark-muted)", fontSize: "1.125rem", lineHeight: 1.55 }}>
                Complete the video above (12–20 min) to unlock your custom dealership audit.
              </p>
            </div>
          ) : (
            <div
              className="overflow-hidden"
              style={{
                border: "2px solid var(--editorial-dark-hairline)",
                minHeight: "680px",
                background: "var(--editorial-paper)",
              }}
            >
              <iframe className="w-full" style={{ height: "680px" }} src="https://cal.com/your-handle/lohmont-audit" title="Book an audit" />
            </div>
          )}

          {showCalendar && (
            <p className="text-xs mt-4" style={{ color: "var(--editorial-dark-muted)" }}>
              Replace the Cal.com URL in <code>src/components/ConversionClose.tsx</code> with your live booking link.
            </p>
          )}
        </div>
      </section>

      <footer
        className="px-6"
        style={{
          paddingTop: "var(--spacing-xl)",
          paddingBottom: "var(--spacing-xl)",
          borderTop: "2px solid var(--editorial-accent)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-[0.02em] font-medium" style={{ color: "var(--editorial-ink-muted)" }}>
            © {new Date().getFullYear()} Lohmont Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs tracking-[0.02em]">
            <a href="#" className="transition-colors hover:opacity-80 font-medium" style={{ color: "var(--editorial-ink-muted)" }}>
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:opacity-80 font-medium" style={{ color: "var(--editorial-ink-muted)" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
