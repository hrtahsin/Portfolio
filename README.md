# Hasan Rohan Tahsin Portfolio

Clean, static-first software engineering portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Commands

```bash
npm install
npm run lint
npm run build
npm run dev
```

The production build script uses `next build --webpack` because the local sandbox blocks Turbopack's CSS worker port binding during `next build`.

## Content

Editable portfolio content lives in `src/data/portfolio.ts`. Site-wide metadata and contact links live in `src/lib/site.ts`.

Do not add project repository links, live demos, credential URLs, metrics, or completion claims unless they are verified and public.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the final canonical production URL before building on Vercel, for example:

```text
NEXT_PUBLIC_SITE_URL=https://<your-domain>
```

Then deploy through the Vercel dashboard using:

- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output: Next.js default

## Owner-Supplied Items

These can be supplied or expanded before public launch:

- final résumé PDF, if the generated minimal PDF at `/resume/hasan-rohan-resume.pdf` should be replaced with the owner's full version;
- final custom domain for `NEXT_PUBLIC_SITE_URL`;
- approved project screenshots, if available;
- public repository or live-demo URLs, only when valid;
- exact credential dates and credential URLs, if the owner chooses to display them.
