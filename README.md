# Lohmont Agency Website

Conversion-focused B2B single-page landing page for luxury automotive AI arbitrage offering. Built per Implementation Guideline and Grand Slam Offer specifications.

## Stack

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS v4

## Get Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- **Hero** — Headline, subheadline, auto-playing video background, primary CTA
- **VSL** — Video embed, delayed CTA (revealed after 2 min), audio demo widget
- **Trust** — Integration marquee (VinSolutions, DriveCentric, AutoFi), proof blocks, Grand Slam guarantee
- **Conversion Close** — Calendar placeholder, minimal footer
- **Sticky CTA** — Floating action button after scroll

## Replace Placeholders

1. **Hero video** — Swap `src` in `src/components/Hero.tsx` with your AI-generated exotic car clip
2. **VSL** — Replace YouTube embed URL in `src/components/VSLSection.tsx`
3. **Audio demo** — Add your AI voice sample URL in `src/components/AudioDemo.tsx`
4. **Calendar** — Add Calendly/Cal.com iframe in `src/components/ConversionClose.tsx`
5. **Integration logos** — Add VinSolutions, DriveCentric, AutoFi logos to `src/components/IntegrationMarquee.tsx`
