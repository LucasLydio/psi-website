# Psicologa Link Tree

Static link tree for a Brazilian psychologist, served from `public/` and prepared for Netlify Functions with a TypeScript backend.

## Structure

```text
public/
  index.html
  homepage.html
  assets/
    css/
      base/          shared tokens, reset, typography
      components/    splash, link cards, music player
      pages/         page-level layout
    images/home/     visual assets
    js/
      components/    focused behavior modules
      core/          shared frontend config
      pages/home/    page bootstrap
      services/      reserved for future API calls

backend/
  prisma/            Prisma schema and migrations
  src/
    config/          backend configuration
    modules/         feature modules
    shared/          shared HTTP helpers

netlify/functions/
  api.ts             TypeScript API entrypoint for `/api/*`
```

## Commands

```bash
npm install
npm run build
npm run dev
```

Local URL after `npm run dev`:

```text
http://localhost:8888
```

## Next Content Points

- Replace placeholder psychologist name, link text, and URLs directly in `public/index.html` and `public/homepage.html`.
- Replace placeholder Instagram and WhatsApp URLs.
- Replace the loader flower at `public/assets/images/home/sunflower.webp` if the brand illustration changes.
- The current minimalist player uses `Peaceful.ogg` from Wikimedia Commons through a native audio element.
