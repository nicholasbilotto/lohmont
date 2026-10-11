import { Wordmark } from "@/components/Wordmark";
import { TransitionLink } from "@/components/TransitionLink";
import { site, team } from "@/content/site";

export function Footer() {
  return (
    <footer className="gutter pt-28 pb-8 sm:pt-40">
      <Wordmark giant />

      <div className="hairline mt-6 pt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="label faint mb-3">Contact</p>
          <a href={`mailto:${site.email}`} className="link-draw block w-fit">
            {site.email}
          </a>
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="link-draw block w-fit"
          >
            @{site.instagram}
          </a>
        </div>

        <div>
          <p className="label faint mb-3">Studio</p>
          <p>{site.location}</p>
          <p className="muted">Websites, apps, social.</p>
        </div>

        <div>
          <p className="label faint mb-3">People</p>
          {team.map((person) => (
            <a
              key={person.instagram}
              href={`https://instagram.com/${person.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="link-draw block w-fit"
            >
              {person.name}
            </a>
          ))}
        </div>

        <div>
          <p className="label faint mb-3">Next</p>
          <TransitionLink href="/start" className="link-draw block w-fit">
            Start a project
          </TransitionLink>
          <TransitionLink href="/studio" className="link-draw block w-fit">
            The studio
          </TransitionLink>
        </div>
      </div>

      <p className="label faint mt-16">
        © {new Date().getFullYear()} Lohmont
      </p>
    </footer>
  );
}
