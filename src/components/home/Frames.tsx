"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, reducedMotion } from "@/lib/gsap";
import { Reveal } from "@/components/Reveal";
import { stills } from "@/content/blur";

const frames = [
  { still: stills.cliff, caption: "Still 001", speed: -6, className: "col-span-7 md:col-span-4 md:row-span-2" },
  { still: stills.rocks, caption: "Still 002", speed: 5, className: "col-span-12 md:col-span-7 md:col-start-6" },
  { still: stills.waves, caption: "Still 003", speed: -3, className: "col-span-6 col-start-6 md:col-span-4 md:col-start-7" },
] as const;

export function Frames() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = Number(el.dataset.speed);
        gsap.fromTo(
          el,
          { yPercent: -speed },
          {
            yPercent: speed,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="gutter py-24 sm:py-36 grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
      {frames.map((f, i) => (
        <Reveal key={f.caption} delay={i * 0.1} className={f.className}>
          <figure data-speed={f.speed}>
            <Image
              src={f.still.src}
              width={f.still.width}
              height={f.still.height}
              alt=""
              placeholder="blur"
              blurDataURL={f.still.blur}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-auto"
            />
            <figcaption className="label faint mt-3">{f.caption}</figcaption>
          </figure>
        </Reveal>
      ))}
    </section>
  );
}
