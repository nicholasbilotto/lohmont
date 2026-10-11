import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, SplitLines } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";
import { manifesto, site, team } from "@/content/site";
import { stills } from "@/content/blur";

export const metadata: Metadata = {
  title: "Studio",
  description: "Who Lohmont is, what we believe, and the people who make the work.",
};

export default function StudioPage() {
  return (
    <>
      <section className="gutter pt-36 pb-20 sm:pt-44 sm:pb-28">
        <Reveal as="p" immediate className="label muted mb-8">
          The studio — {site.location}
        </Reveal>
        <SplitLines as="h1" immediate delay={0.15} className="display max-w-[12ch]">
          People who notice.
        </SplitLines>
      </section>

      <section className="gutter grid grid-cols-12 gap-x-6 gap-y-12 pb-24 sm:pb-36">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <Image
              src={stills.pianoMan.src}
              width={stills.pianoMan.width}
              height={stills.pianoMan.height}
              alt="A man in white sunglasses at a piano, in low warm light."
              placeholder="blur"
              blurDataURL={stills.pianoMan.blur}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="w-full h-auto"
            />
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-8 sm:gap-10">
          {manifesto.map((para, i) => (
            <SplitLines key={i} className={i === 0 ? "statement" : "body-lg"}>
              {para}
            </SplitLines>
          ))}
          <Reveal className="mt-4">
            <p className="label muted">Nick Bilotto, Founder</p>
          </Reveal>
        </div>
      </section>

      <section className="hairline gutter py-20 sm:py-28 grid grid-cols-12 gap-x-6">
        <p className="label faint col-span-12 md:col-span-3 mb-8 md:mb-0">People</p>
        <div className="col-span-12 md:col-span-9 lg:col-span-8">
          <ul className="flex flex-col">
            {team.map((person, i) => (
              <Reveal as="li" key={person.instagram} delay={i * 0.08} y={14}>
                <a
                  href={`https://instagram.com/${person.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hairline-b grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-5 group"
                >
                  <span className="statement group-hover:[font-stretch:100%] transition-[font-stretch] duration-700">
                    {person.name}
                  </span>
                  <span className="label muted whitespace-nowrap">
                    {"role" in person ? person.role : `@${person.instagram}`}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10">
            <p className="body-lg muted max-w-[46ch]">
              Design, development, photography, and content. Small on purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline gutter pt-20 pb-6 sm:pt-28">
        <Reveal>
          <p className="label faint mb-8">Next</p>
          <TransitionLink href="/start" className="display block w-fit group">
            <span className="block transition-[font-stretch] duration-700 group-hover:[font-stretch:100%]">
              Start a project
            </span>
          </TransitionLink>
        </Reveal>
      </section>
    </>
  );
}
