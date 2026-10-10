import type { Metadata } from "next";
import { Geist_Mono, Martian_Mono, Sometype_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Type specimen",
  robots: { index: false, follow: false },
};

// Internal type comparison. Removed before launch.
const martian = Martian_Mono({ subsets: ["latin"], axes: ["wdth"], variable: "--sp-martian" });
const geist = Geist_Mono({ subsets: ["latin"], variable: "--sp-geist" });
const sometype = Sometype_Mono({ subsets: ["latin"], variable: "--sp-sometype" });

const candidates = [
  { name: "Martian Mono", note: "weight 100–800, width 75–112.5", cls: martian.className, stretch: true },
  { name: "Geist Mono", note: "weight 100–900", cls: geist.className, stretch: false },
  { name: "Sometype Mono", note: "weight 400–700, has italics. The reference site's face.", cls: sometype.className, stretch: false },
];

export default function Specimen() {
  return (
    <div className="gutter pt-32 pb-24 flex flex-col gap-32">
      {candidates.map((c) => (
        <section key={c.name} className={c.cls}>
          <p className="label faint mb-10">
            {c.name} — {c.note}
          </p>
          <h2 className="display" style={{ fontStretch: c.stretch ? "87.5%" : undefined }}>
            Made to be noticed.
          </h2>
          {c.stretch && (
            <div className="mt-8 flex flex-col gap-2">
              {[75, 100, 112.5].map((w) => (
                <p key={w} className="title" style={{ fontStretch: `${w}%` }}>
                  Width {w} — Start a project
                </p>
              ))}
            </div>
          )}
          <p className="statement mt-12 max-w-[30ch]">
            Most things are made to function. Few are made to be looked at.
          </p>
          <p className="body-lg mt-10 max-w-[52ch]">
            We care about the first second. The weight of a line. The space around a word. The way a
            plate looks at seven in bad light.
          </p>
          <p className="label mt-8">Creative studio · Newport Beach, CA · 01 / Studio · nick@lohmont.com</p>
        </section>
      ))}
    </div>
  );
}
