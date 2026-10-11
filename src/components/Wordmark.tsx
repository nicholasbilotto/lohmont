"use client";

import { useEffect, useRef } from "react";
import { gsap, reducedMotion } from "@/lib/gsap";

export function Wordmark({
  className = "",
  draw = false,
  delay = 0,
  giant = false,
}: {
  className?: string;
  /** Fade and settle in on mount. */
  draw?: boolean;
  delay?: number;
  giant?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!draw || !ref.current || reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, letterSpacing: giant ? "0.2em" : "0.4em", filter: "blur(6px)" },
        { opacity: 1, letterSpacing: giant ? "0.08em" : "0.22em", filter: "blur(0px)", duration: 1.4, delay, ease: "power3.out", clearProps: "filter" }
      );
    });
    return () => ctx.revert();
  }, [draw, delay, giant]);

  return (
    <span
      ref={ref}
      className={`wordmark block ${giant ? "wordmark-giant" : ""} ${className}`}
      style={draw ? { opacity: 0 } : undefined}
      aria-label="Lohmont"
    >
      Lohmont
    </span>
  );
}
