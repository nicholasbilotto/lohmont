# Lohmont

Site for Lohmont, a creative studio in Newport Beach. Websites, apps, social.
The design and build brief lives in [docs/brief.md](docs/brief.md). Read it before changing direction.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with design tokens in `src/app/globals.css`
- GSAP 3 (ScrollTrigger, SplitText) + Lenis for motion
- Vercel Analytics + Speed Insights

## Run

```bash
npm install
npm run dev -- --webpack
```

Turbopack's file watcher silently stops picking up edits in this checkout (the folder path
contains a space, and Turbopack logs "Failed to benchmark file I/O" at startup). The webpack
flag uses a different watcher and hot reload works. Production builds still use Turbopack and
are unaffected. Renaming the parent folder to remove the space would likely fix Turbopack dev.

## Structure

- `src/app/` routes: `/` home, `/studio`, `/start` (project brief), `/specimen` (internal type comparison, remove before launch)
- `src/components/` shared pieces: `Wordmark` (bespoke SVG), `Nav`, `Footer`, `Reveal` + `SplitLines`, `TransitionLink` + `Curtain`
- `src/components/home/` home page sections
- `src/content/site.ts` all copy, services, team, links. Edit copy here, not in components.
- `src/lib/gsap.ts` plugin registration and the reduced-motion check
- `src/lib/transition.ts` the ink curtain used between routes

## Stills

Source images live in `assets/stills/` (raw `.dng` files and the camera's original drops in
`Images/` are ignored by git). Copy a new still into `assets/stills/` with a short name, add it to
`scripts/prep-stills.mjs`, and run the script.
Derivatives in `public/stills/` and blur placeholders in `src/content/blur.ts` are generated:

```bash
node scripts/prep-stills.mjs
```

To convert a DNG on macOS first: `sips -s format jpeg -s formatOptions 95 in.dng --out assets/stills/out.jpg`

## Form

`/start` posts to a server action in `src/app/start/actions.ts`, which delivers the brief through
Resend (`src/lib/email.ts`). Env vars are documented in `.env.example`. `RESEND_API_KEY` is set by
the Resend integration on the Vercel project. If delivery fails, the lead is logged server-side and
the visitor is asked to email directly, so nothing is silently lost.

## Hero video

Source footage lives in `assets/video/` (ignored by git). The site serves two muted, seamless-loop
encodes from `public/video/` (1080p for desktop, 720p for phones). To re-encode a new clip, see the
ffmpeg command in `scripts/encode-hero.sh`.

## Motion rules

- Every animated element carries `will-reveal` and is revealed by GSAP. A `noscript` style and the
  `prefers-reduced-motion` rule restore visibility without JS.
- Lenis and all reveals are disabled when the visitor prefers reduced motion.
