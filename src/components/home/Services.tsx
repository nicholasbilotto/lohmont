import { Reveal } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";
import { services } from "@/content/site";

export function Services() {
  return (
    <section className="py-16 sm:py-24">
      <div className="gutter grid grid-cols-12 gap-x-6 mb-10 sm:mb-14">
        <p className="label faint col-span-12 md:col-span-3">02 / What we do</p>
        <Reveal as="h2" className="title col-span-12 md:col-span-9 lg:col-span-8 mt-6 md:mt-0">
          Three things, done properly.
        </Reveal>
      </div>

      <ul className="hairline">
        {services.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={i * 0.08} y={16}>
            <TransitionLink
              href={`/start?service=${s.slug}`}
              className="row-invert hairline-b gutter grid grid-cols-12 gap-x-6 items-baseline py-7 sm:py-9"
            >
              <span className="label col-span-2 md:col-span-1">{s.index}</span>
              <span className="title col-span-10 md:col-span-4">{s.name}</span>
              <span className="body-lg col-span-10 col-start-3 md:col-span-6 md:col-start-6 mt-3 md:mt-0">
                {s.line}
              </span>
              <span className="label col-span-12 md:col-span-1 text-right mt-4 md:mt-0" aria-hidden="true">
                →
              </span>
            </TransitionLink>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
