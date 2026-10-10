import { gsap, reducedMotion } from "@/lib/gsap";

// A single ink curtain lives in the root layout. Links cover the page with it,
// navigate, then the new route's template pulls it away.
let curtain: HTMLElement | null = null;
let covered = false;

export function registerCurtain(el: HTMLElement | null) {
  curtain = el;
}

export function cover(then: () => void) {
  if (!curtain || reducedMotion()) {
    then();
    return;
  }
  covered = true;
  // Clear the CSS resting transform so GSAP works in percent only.
  gsap.set(curtain, { y: 0, yPercent: 100, display: "block" });
  gsap.to(curtain, {
    yPercent: 0,
    duration: 0.6,
    ease: "power4.inOut",
    onComplete: then,
  });
}

export function reveal() {
  if (!curtain || !covered) return;
  covered = false;
  gsap.to(curtain, {
    yPercent: -100,
    duration: 0.7,
    ease: "power4.inOut",
    delay: 0.08,
    onComplete: () => gsap.set(curtain, { y: 0, yPercent: 100, display: "none" }),
  });
}

export function isCovered() {
  return covered;
}
