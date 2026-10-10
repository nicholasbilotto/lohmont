"use client";

import { useEffect, useRef } from "react";
import { gsap, reducedMotion } from "@/lib/gsap";

// Bespoke LOHMONT lettering. Monoline, square-cut strokes, two pill O's.
// Built on a 700x100 grid, seven cells of 96 with a 12-unit stroke.
const PATHS = [
  "M32 6V94H92",                       // L
  "M158 6h0a30 30 0 0 1 30 30v28a30 30 0 0 1 -30 30h0a30 30 0 0 1 -30 -30V36a30 30 0 0 1 30 -30z", // O
  "M224 6V94M280 6V94M224 50H280",     // H
  "M320 94V6L352 58L384 6V94",         // M
  "M446 6h0a30 30 0 0 1 30 30v28a30 30 0 0 1 -30 30h0a30 30 0 0 1 -30 -30V36a30 30 0 0 1 30 -30z", // O
  "M512 94V6L568 94V6",                // N
  "M602 6H674M638 6V94",               // T
];

export function Wordmark({
  className,
  draw = false,
  delay = 0,
  title = "Lohmont",
}: {
  className?: string;
  draw?: boolean;
  delay?: number;
  title?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!draw || !ref.current || reducedMotion()) return;
    const paths = Array.from(ref.current.querySelectorAll<SVGPathElement>("path"));
    const ctx = gsap.context(() => {
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
      });
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.4,
        stagger: 0.09,
        delay,
        ease: "power3.inOut",
      });
    });
    return () => ctx.revert();
  }, [draw, delay]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 700 100"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={12}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={4}
      style={{ overflow: "visible" }}
    >
      {PATHS.map((d, i) => (
        <path key={i} d={d} style={draw ? { opacity: 0 } : undefined} />
      ))}
    </svg>
  );
}
