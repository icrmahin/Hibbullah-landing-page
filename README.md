# Hibbullah Landing Page

Premium, minimal product showcase landing page for the Hibbullah Android pharmacy shopping application.

## Tech Stack

- Vite
- React 19
- TypeScript
- Tailwind CSS v4
- Pure client-side SPA (static deployable)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces a static `dist/` directory ready for any static host (Netlify, Vercel static, GitHub Pages, Cloudflare Pages, S3, etc.).

## Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI (Logo, Navbar, PhoneMockup, Icons)
├── sections/       # Page sections (Hero, Showcase, Features, Download, Footer)
├── App.tsx
├── main.tsx
└── index.css       # Tailwind + custom theme
public/
└── downloads/      # Place hibbullah.apk here
```

## Brand Colors

- Primary Green: `#023719`
- Gold: `#A97104`
- White / Black for contrast

## Notes

- Download APK link points to `/downloads/hibbullah.apk`
- Place the real APK file in `public/downloads/` before deploying
- Fully responsive from 320px to 1920px+
- Accessible, keyboard-friendly, respects `prefers-reduced-motion`
