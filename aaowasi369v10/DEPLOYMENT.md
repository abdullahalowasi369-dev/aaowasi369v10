# Deployment

## Safest Cloudflare Pages setup

- Framework preset: **None**
- Build command: *(blank)*
- Build output directory: `.`

This serves the root `index.html` and does not run any dependency install or build step.

## Next.js Cloudflare Pages setup

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`
- Node.js: `22.x`

## Vercel

- Framework: **Next.js**
- Build command: `npm run build`
- Output directory: `out`
- Node.js: `22.x`

## Local checks

```bash
npm install
npm run check
npm run build
npm start
```

If you choose no-build static hosting, no npm command is required.
