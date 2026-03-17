"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { VSLSection } from "@/components/VSLSection";
import { TrustSection } from "@/components/TrustSection";
import { ConversionClose } from "@/components/ConversionClose";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  const [calendarUnlocked, setCalendarUnlocked] = useState(false);

  const scrollToBook = () => {
    document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen lux-surface">
      <Hero onCTAClick={scrollToBook} />
      <VSLSection onCTAClick={scrollToBook} onVSLUnlock={() => setCalendarUnlocked(true)} />
      <TrustSection />
      <ConversionClose showCalendar={calendarUnlocked} />
      <StickyCTA onCTAClick={scrollToBook} />
    </div>
  );
}
