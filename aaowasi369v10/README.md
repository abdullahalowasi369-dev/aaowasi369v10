# aaowasi369 Portfolio — Static-First Production Package

This package intentionally includes two deployment paths:

1. **No-build static fallback**: `index.html`, `assets/styles.css`, `assets/app.js`, and career assets at repository root. This works on Cloudflare Pages with framework preset **None**, blank build command, output directory `.`.
2. **Next.js static export**: `app/`, `next.config.mjs`, and `package.json`. This works with `npm run build` and output directory `out`.

The site has no Tailwind, no Lenis, no Recharts, no D3, no Motion/Framer imports, and no TypeScript files. Interactive charts and UI are native HTML/CSS/SVG/JavaScript to remove the previous build-failure surface.
