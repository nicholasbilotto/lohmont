import type { Metadata } from "next";
import { Reveal, SplitLines } from "@/components/Reveal";
import { BriefForm } from "./BriefForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell Lohmont what you're building. A short brief, a reply within a day.",
};

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  return (
    <>
      <section className="gutter pt-36 pb-16 sm:pt-44 sm:pb-24">
        <Reveal as="p" immediate className="label muted mb-8">
          Start a project
        </Reveal>
        <SplitLines as="h1" immediate delay={0.15} className="display max-w-[12ch]">
          Tell us what you&apos;re building.
        </SplitLines>
      </section>

      <section className="gutter grid grid-cols-12 gap-x-6 gap-y-12 pb-28 sm:pb-40">
        <div className="col-span-12 md:col-span-3">
          <Reveal immediate delay={0.4}>
            <p className="body-lg muted max-w-[28ch]">
              Five questions. We read every one and reply within a day.
            </p>
            <p className="label muted mt-8">
              Or write to{" "}
              <a href={`mailto:${site.email}`} className="link-draw text-ink">
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <Reveal immediate delay={0.5}>
            <BriefForm preselect={service} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
