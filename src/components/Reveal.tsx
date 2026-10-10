"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, reducedMotion } from "@/lib/gsap";

type Common = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Play immediately on mount instead of waiting for scroll. */
  immediate?: boolean;
};

/** Fades a block up out of a soft blur when it scrolls into view. */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  immediate = false,
  y = 28,
}: Common & { y?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      gsap.set(el, { opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.3,
          delay,
          ease: "power3.out",
          clearProps: "filter",
          scrollTrigger: immediate
            ? undefined
            : { trigger: el, start: "top 88%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, immediate, y]);

  return (
    <Tag ref={ref} className={`will-reveal ${className}`}>
      {children}
    </Tag>
  );
}

/** Splits text into lines and raises each line out of a mask. */
export function SplitLines({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
  immediate = false,
  stagger = 0.09,
}: Common & { stagger?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      gsap.set(el, { opacity: 1 });
      return;
    }
    let split: SplitText | undefined;
    let cancelled = false;
    const ctx = gsap.context(() => {});

    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx.add(() => {
        split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.2,
              stagger,
              delay,
              ease: "power3.out",
              scrollTrigger: immediate
                ? undefined
                : { trigger: el, start: "top 86%", once: true },
            }),
        });
        gsap.set(el, { opacity: 1 });
      });
    });

    return () => {
      cancelled = true;
      ctx.revert();
      split?.revert();
    };
  }, [delay, immediate, stagger]);

  return (
    <Tag ref={ref} className={`will-reveal ${className}`}>
      {children}
    </Tag>
  );
}
