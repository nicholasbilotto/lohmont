import { Reveal, SplitLines } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";

export function ManifestoExcerpt() {
  return (
    <section className="gutter py-28 sm:py-40 grid grid-cols-12 gap-x-6">
      <p className="label faint col-span-12 md:col-span-3 mb-8 md:mb-0">03 / Point of view</p>
      <div className="col-span-12 md:col-span-9 lg:col-span-8">
        <SplitLines className="statement">
          Taste is not a finish. It is the first decision, and every one after it.
        </SplitLines>
        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3">
          <p className="label muted">Nick Bilotto, Founder</p>
          <TransitionLink href="/studio" className="label link-draw">
            Read the studio →
          </TransitionLink>
        </Reveal>
      </div>
    </section>
  );
}
