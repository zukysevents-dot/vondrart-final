# Vondrart Studio premium redesign

Clean Next.js static export rebuild for Vondrart Studio.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npx serve@latest out -l 3012
```

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `out`

## Content

- Project data: `src/data/projects.ts`
- Main UI sections: `src/components`
- Images and logos: `public/images`
- Local fonts: `public/fonts`
