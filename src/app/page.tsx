"use client";

import { Hero } from "@/components/Hero";
import { VSLSection } from "@/components/VSLSection";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { ConversionClose } from "@/components/ConversionClose";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  const scrollToBookCall = () => {
    document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen lux-surface">
      <Hero onBookTestCallClick={scrollToBookCall} />
      <VSLSection />
      <TrustSection />
      <ConversionClose />
      <FAQ />
      <StickyCTA />
    </div>
  );
}
