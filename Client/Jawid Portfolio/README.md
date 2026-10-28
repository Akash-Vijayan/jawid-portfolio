# Jawid Sulthan J — Portfolio

A clean, sharp, light-theme portfolio site built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

- Fully static prerender — every route is generated at build time
- Zero client-side animation libraries (CSS + a ~1KB IntersectionObserver)
- Self-hosted fonts via `next/font` (no render-blocking third-party requests)
- Responsive from 320px → 1920px+, verified at 360 / 390 / 768 / 1440 widths
- Accessible: skip link, semantic landmarks, focus states, reduced-motion support
- SEO: metadata, OpenGraph, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- Lighthouse: Accessibility 100 · Best Practices 100 · SEO 100

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Where to edit content

Everything you will want to change lives in two files:

| File | Contains |
| --- | --- |
| `src/data/resume.ts` | Name, contact details, summary, skills, experience, education, projects |
| `src/data/site.ts` | Site URL, copyright year, last-updated date, tagline |

Each project supports:

```ts
{
  index: "01",
  accent: "#ff4d1a",                                  // card hover colour
  kind: "Company project",                            // or "Academic project"
  href: "https://orangematt.vercel.app",              // optional — renders the "Live ↗" pill
  title, summary, stack, points,
}
```

> **Before deploying:** update `SITE.url` in `src/data/site.ts` with your real domain — it is used for the canonical URL, OpenGraph tags, `robots.txt`, and `sitemap.xml`.

## Design system

Defined once in `src/app/globals.css`:

- **Palette** — warm off-white paper `#fbfbf9`, ink `#0a0a0b`, hairlines `#e4e4de`, plus six accents
  (orange `#ff4d1a`, indigo `#4f46e5`, teal `#0d9488`, violet `#7c3aed`, rose `#e11d48`, amber `#d97706`).
  Every accent is paired with a darker "ink" mix for small text so contrast stays AA.
- **Type** — Geist Sans for copy, Geist Mono for micro-labels (`.label`), tight tracking on headings
- **Layout** — `.container-page` (max 78rem), `.hair-grid` (1px-gap grid that draws its own grid lines)
- **Components** — `.btn` / `.btn-solid` / `.btn-ghost`, `.chip`, `.nav-link`, `[data-reveal]` scroll reveal

## Colour + hover system

Set `--tint` on any element (`style={{ "--tint": "#4f46e5" }}`) and it automatically gets:

- `.tint` — colour bar sweeps across the top on hover + a soft colour wash fills the card
- `.tint-index` / `.tint-dot` / `.tint-bullet` — accent-tinted numbers, markers, and list dashes
- `.chip` — fills with ink and lifts on hover
- `.stat` — colour underline sweeps in, number tints
- `.timeline-row` — soft wash + date colour shift on hover
- `.channel` — each contact card has its own accent (email orange, phone teal, LinkedIn indigo)
- `.btn svg` — icons nudge on hover (`.btn-arrow-down`, `.btn-arrow-out`)
- `.hero-wash` — soft multi-colour radial wash behind the hero
- `.marquee` — pauses on hover, separators cycle through the palette

## Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, JSON-LD, JS-gate script
│   ├── page.tsx          # assembles the sections
│   ├── globals.css       # theme tokens + design system
│   ├── robots.ts         # /robots.txt
│   ├── sitemap.ts        # /sitemap.xml
│   └── icon.svg          # favicon
├── components/           # Header, Hero, About, Skills, Experience, Projects, Contact, Reveal, Icons
└── data/                 # resume.ts (content) + site.ts (site config)
```

## Deploy (Vercel)

```bash
npm i -g vercel
vercel
```

Or push the repository to GitHub and import it in the Vercel dashboard — no configuration needed.
