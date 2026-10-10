import { Hero } from "@/components/home/Hero";
import { Statement } from "@/components/home/Statement";
import { Services } from "@/components/home/Services";
import { Frames } from "@/components/home/Frames";
import { ManifestoExcerpt } from "@/components/home/ManifestoExcerpt";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <Frames />
      <ManifestoExcerpt />
      <CallToAction />
    </>
  );
}
