"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, reducedMotion } from "@/lib/gsap";

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

export function SmoothScroll() {
  useEffect(() => {
    if (reducedMotion()) return;

    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, autoRaf: false });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
