"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/Wordmark";
import { TransitionLink } from "@/components/TransitionLink";
import { nav, site } from "@/content/site";
import { getLenis } from "@/components/SmoothScroll";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 gutter">
        <div className="flex items-center justify-between py-5 sm:py-6">
          <TransitionLink href="/" aria-label="Lohmont, home" className="block">
            <Wordmark className="text-[13px] sm:text-[14px]" draw delay={0.2} />
          </TransitionLink>

          <p className="label muted hidden md:block absolute left-1/2 -translate-x-1/2">
            {site.descriptor} · {site.location}
          </p>

          <nav aria-label="Primary" className="hidden sm:flex items-center gap-8">
            {nav.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                className="label link-draw"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </TransitionLink>
            ))}
          </nav>

          <button
            type="button"
            className="label sm:hidden"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="menu"
        className={`fixed inset-0 z-40 bg-ink text-paper gutter flex flex-col justify-end pb-10 transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className="title block"
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </TransitionLink>
          ))}
        </nav>
        <p className="label mt-10 opacity-60">
          {site.descriptor} · {site.location}
        </p>
      </div>
    </>
  );
}
