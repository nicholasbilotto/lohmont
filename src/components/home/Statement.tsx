import { SplitLines } from "@/components/Reveal";

export function Statement() {
  return (
    <section className="gutter py-28 sm:py-40 grid grid-cols-12 gap-x-6">
      <p className="label faint col-span-12 md:col-span-3 mb-8 md:mb-0">01 / Studio</p>
      <SplitLines className="statement col-span-12 md:col-span-9 lg:col-span-8">
        Most things are made to function. Few are made to be looked at. We make the
        second kind, and we have noticed that it works harder.
      </SplitLines>
    </section>
  );
}
