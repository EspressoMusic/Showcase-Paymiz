# Bizmi — Interactive Investor Pitch

One-page pitch deck for investors. Built with Next.js, Tailwind CSS, and Framer Motion.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

All copy is in **`src/data/pitchContent.ts`** — product name, headlines, Hebrew body text, investment terms, MVP list, etc.

## Sections (11)

1. Hero · 2. Problem · 3. Solution · 4. Simplicity · 5. How it works · 6. Business modes · 7. Customer · 8. Owner dashboard · 9. vs Custom app · 10. Differentiation · 11. Opportunity & investment

## Structure

- `src/components/sections/` — one component per section
- `src/lib/sections.ts` — section IDs for nav & progress
- `src/data/pitchContent.ts` — all editable text
