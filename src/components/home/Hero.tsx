"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, SplitText, reducedMotion } from "@/lib/gsap";
import { stills } from "@/content/blur";

const SOURCES = { wide: "/video/hero-1080.mp4", narrow: "/video/hero-720.mp4" };

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const kicker = useRef<HTMLParagraphElement>(null);
  const [playing, setPlaying] = useState(false);

  // Load the loop only when motion is welcome and data isn't constrained.
  useEffect(() => {
    const v = video.current;
    if (!v || reducedMotion()) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;
    v.muted = true;
    v.src = window.innerWidth < 768 ? SOURCES.narrow : SOURCES.wide;
    v.load();
    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!section.current || !frame.current || !media.current || !h1.current) return;
    if (reducedMotion()) {
      gsap.set([frame.current, h1.current, kicker.current], { opacity: 1 });
      return;
    }
    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      gsap.set(frame.current, { opacity: 1, clipPath: "inset(100% 0 0 0)" });
      gsap.set(media.current, { scale: 1.12 });
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(frame.current, { clipPath: "inset(0% 0 0 0)", duration: 1.6, ease: "power4.inOut" }, 0.1)
        .to(media.current, { scale: 1, duration: 2.2 }, 0.1);

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

      gsap.to(media.current, {
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
        <div ref={media} className="absolute inset-0 will-change-transform">
          <Image
            src={stills.poster.src}
            alt="A coastline at dusk. Pale sea, dark rocks, slow waves."
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={stills.poster.blur}
            className="object-cover"
            style={{ objectPosition: "50% 60%" }}
          />
          <video
            ref={video}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out"
            style={{ objectPosition: "50% 60%", opacity: playing ? 1 : 0 }}
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
