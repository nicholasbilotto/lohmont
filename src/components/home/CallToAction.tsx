import { Reveal } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";
import { site } from "@/content/site";

export function CallToAction() {
  return (
    <section className="hairline gutter pt-20 pb-6 sm:pt-28">
      <Reveal>
        <p className="label faint mb-8">04 / Next</p>
        <TransitionLink href="/start" className="display block w-fit group">
          <span className="block transition-[font-stretch] duration-700 ease-[var(--ease)] group-hover:[font-stretch:100%]">
            Start a project
          </span>
        </TransitionLink>
        <p className="body-lg muted mt-8 max-w-[44ch]">
          Tell us what you&apos;re building. We reply within a day, from{" "}
          <a href={`mailto:${site.email}`} className="link-draw text-ink">
            {site.email}
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
