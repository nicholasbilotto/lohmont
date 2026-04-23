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
      {/* <VSLSection /> */}
      <TrustSection />
      <ConversionClose />
      <FAQ />
      <footer
        className="px-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
        style={{
          paddingTop: "var(--spacing-xl)",
          paddingBottom: "var(--spacing-xl)",
          borderTop: "2px solid var(--editorial-accent)",
          background: "var(--editorial-dark-bg)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.12em] font-medium uppercase"
            style={{ color: "var(--editorial-dark-muted)" }}
          >
            © {new Date().getFullYear()} Lohmont Agency
          </p>
        </div>
      </footer>
      <StickyCTA />
    </div>
  );
}
