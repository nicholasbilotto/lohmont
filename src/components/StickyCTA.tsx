"use client";

import { useEffect, useRef, useState } from "react";

export function StickyCTA({ onCTAClick }: { onCTAClick: () => void }) {
  const [visible, setVisible] = useState(false);
  const hasLeftHeroRef = useRef(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const inView = entry.isIntersecting;
        if (!inView) hasLeftHeroRef.current = true;
        setVisible(hasLeftHeroRef.current && !inView);
      },
      { threshold: 0.2 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <button
        onClick={onCTAClick}
        className="inline-flex items-center justify-center font-semibold text-xs uppercase tracking-[0.18em]"
        style={{
          background: "var(--editorial-accent)",
          color: "var(--editorial-paper)",
          border: "2px solid var(--editorial-accent)",
          padding: "var(--spacing-md) var(--spacing-xl)",
          minHeight: "44px",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
      >
        Book my strategy call
      </button>
    </div>
  );
}
