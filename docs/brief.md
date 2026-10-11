# Lohmont rebrand — design and build brief

Decided 2026-10-04 in an interview with Nick. This file is the source of truth for the rebuild.
If a decision changes, change it here first.

## 1. Positioning

- **What Lohmont is:** a general creative studio. Three services: web, apps, social.
- **Who it's for:** owners who buy on taste. Hospitality is the hero case (restaurants, cafes;
  Paloma is the first social client). Custom app and dashboard builds are the second track.
- **Proof status:** no case studies yet. The site itself is the portfolio. No invented
  testimonials, logos, or metrics, ever. Work section fills as Paloma and later clients land.
- **Not on the site:** any self-initiated projects stay private until they exist.
- **Who "we" is:** Nick Bilotto as the named founder with a point of view, plus a small studio
  (camera, media, developers). Teammates named only if they want to be.

## 2. Identity (start from zero)

- **Name:** `LOHMONT` wordmark alone. One-line descriptor where context is needed:
  "Creative studio. Web, apps, social." (draft, refine in copy pass)
- **Wordmark:** bespoke SVG lettering, not a typed word.
- **Type:** one monospace family at every size, including giant display statements.
  Open-source variable mono. Candidates to compare on a `/specimen` route:
  Martian Mono (weight + width axes), Geist Mono, Sometype Mono. Pick on real screens.
  "Custom" feel comes from in-app treatment: blur-to-sharp reveals, fades, per-glyph
  entrances, animating the variable axes on scroll.
- **Color:** paper + ink only. No accent. Imagery is the only color.
  - paper `#f4f2ec` range (warm off-white), ink `#0e0e0c` range. Exact values set in tokens.
  - Links and buttons are ink. Focus ring is ink.
- **Imagery:** stills supplied by Nick. Treated with scroll-scaled crops, clip-path reveals,
  subtle parallax, film grain overlay. B&W or muted color grade for consistency.
- **Reference:** coolnvintage.com for restraint, scale, manifesto voice, mono type,
  founder signature. We add cinematic motion on top. No WebGL for v1.

## 3. Voice

- Manifesto. Short declarative lines. No hype, no urgency, no exclamation points,
  no dollar figures. Statements about craft, attention, taste.
- The Studio page manifesto is signed "Nick Bilotto, Founder."
- Services described by outcome and what's included. No public pricing.

## 4. Architecture

Multi-page with a cinematic home. Page transitions between routes.

| Route | Purpose | Launch wave |
|---|---|---|
| `/` | Scroll journey: wordmark + statement, hero still, services strip, image set, manifesto excerpt, call to action | 1 |
| `/studio` | Full manifesto, who we are, founder signature | 1 |
| `/start` | "Start a project" brief form + thank-you | 1 |
| `/work` | Selected work. Existing sites + Paloma as content lands | 2 |
| `/services` | Web, Apps, Social: what, for whom, what's included | 2 |
| `/specimen` | Internal type comparison, removed before launch | dev only |

Mobile-first. Restaurant owners browse on phones.

## 5. Conversion

- One action: **Start a project**. Fields: name, business, what you need (web / app / social,
  multi), budget band, Instagram handle, short note. Honeypot for spam.
- Delivered by transactional email to nickbilotto@gmail.com. Thank-you page offers a call link
  (optional, add when a scheduling link exists).
- Footer: email and Instagram.

## 6. Tech

- Keep: Next.js 16 App Router, React 19, TypeScript, Tailwind v4, Vercel.
- Add: Lenis (smooth scroll), GSAP 3 with ScrollTrigger + SplitText (free since 3.13),
  a transactional email provider chosen via the Vercel Marketplace, Vercel Analytics +
  Speed Insights.
- Content lives in typed TS files under `src/content`. No CMS for v1.
- Images via `next/image`, AVIF/WebP, blur placeholders. Large originals to Vercel Blob
  (a store is already configured in `next.config.ts`) if `public/` gets heavy.
- Reduced motion respected globally: `prefers-reduced-motion` disables smooth scroll and
  reveal animations, content is always readable without JS.
- SEO: per-route metadata, generated OG image, sitemap, robots.

## 7. Quality bar

- Lighthouse mobile: Performance 90+, Accessibility 100, SEO 100.
- LCP under 2.5s on a mid-range phone. No layout shift. Fonts preloaded.
- JS budget under 150 KB gzipped on the home route.
- Every still exported at 1920w max, under 250 KB. Grain as a CSS overlay, not baked in.
- Keyboard-navigable, visible focus, contrast AA on all text.

## 8. Timeline: one week to a lean launch, then iterate

| Day | Deliverable |
|---|---|
| 1 | Foundation: strip old components, tokens, specimen route, wordmark, Lenis + GSAP + reduced-motion guard, nav, footer, transition layer |
| 2 | Home page complete with motion |
| 3 | Studio page, Start a project form + email + thank-you |
| 4 | Mobile pass, performance, SEO/OG, analytics, accessibility audit |
| 5 | Preview review with Nick, fixes, promote to lohmont.com |
| 6–7 | Wave 2: Work and Services pages |

## 9. Risks

- **Stills are the critical path.** Quality and quantity decide how good the home page can be.
  Need them by day 2.
- **Email domain verification** needs DNS records added at the lohmont.com DNS host.
- **Thin Work section** at launch. Mitigated by making the site itself the proof.

## 10. Open inputs still needed from Nick

- Stills (drop into `assets/stills/`)
- Instagram handle(s) for the footer
- Permission to name Paloma on the site
- URLs of the existing DJ, events, and med spa sites, to judge which make the Work page
- Teammate first names and roles, or confirm "unnamed studio"
- Location line for the footer (Orange County, CA assumed from the old site)
- Confirm the old dealership page is retired entirely
