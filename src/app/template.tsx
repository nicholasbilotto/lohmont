"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, reducedMotion } from "@/lib/gsap";
import { isCovered, reveal } from "@/lib/transition";
import { getLenis } from "@/components/SmoothScroll";

// Remounts on every route change: resets scroll, pulls the curtain, eases content in.
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    if (reducedMotion()) return;
    const wasCovered = isCovered();
    reveal();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, delay: wasCovered ? 0.35 : 0, ease: "power2.out" }
      );
    });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => {
      ctx.revert();
      window.clearTimeout(id);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
