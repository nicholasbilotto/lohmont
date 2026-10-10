"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, SplitText, reducedMotion } from "@/lib/gsap";
import { stills } from "@/content/blur";

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const kicker = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!section.current || !frame.current || !img.current || !h1.current) return;
    if (reducedMotion()) {
      gsap.set([frame.current, h1.current, kicker.current], { opacity: 1 });
      return;
    }
    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      // Entrance: the still unshutters from the bottom while settling in scale.
      gsap.set(frame.current, { opacity: 1, clipPath: "inset(100% 0 0 0)" });
      gsap.set(img.current, { scale: 1.12 });
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(frame.current, { clipPath: "inset(0% 0 0 0)", duration: 1.6, ease: "power4.inOut" }, 0.1)
        .to(img.current, { scale: 1, duration: 2.2 }, 0.1);

      // Statement: glyphs arrive out of blur, then the width axis relaxes.
      document.fonts.ready.then(() => {
        if (!h1.current) return;
        split = SplitText.create(h1.current, { type: "chars,words", charsClass: "inline-block" });
        gsap.set(h1.current, { opacity: 1 });
        gsap.from(split.chars, {
          opacity: 0,
          yPercent: 40,
          filter: "blur(16px)",
          fontStretch: "112%",
          duration: 1.3,
          stagger: { each: 0.028, from: "start" },
          delay: 0.75,
          ease: "power3.out",
          clearProps: "filter",
        });
        gsap.fromTo(kicker.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1, delay: 1.3 });
      });

      // Scroll: parallax the still, let the statement drift and fade.
      gsap.to(img.current, {
        yPercent: 14,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to([h1.current, kicker.current], {
        yPercent: -30,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "40% top", end: "bottom top", scrub: true },
      });
    });
    return () => {
      ctx.revert();
      split?.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={section} className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <div ref={frame} className="absolute inset-0 hero-mask will-reveal">
        <div ref={img} className="absolute inset-0 will-change-transform">
          <Image
            src={stills.hero.src}
            alt="A hazy coastline at dusk. Pale sea, dark rocks, warm sky."
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={stills.hero.blur}
            className="object-cover"
            style={{ objectPosition: "50% 62%" }}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 gutter pb-8 sm:pb-10">
        <p ref={kicker} className="label mb-5 sm:mb-6 will-reveal">
          Websites · Apps · Social
        </p>
        <h1 ref={h1} className="display will-reveal max-w-[14ch]">
          Made to be noticed.
        </h1>
      </div>
    </section>
  );
}
