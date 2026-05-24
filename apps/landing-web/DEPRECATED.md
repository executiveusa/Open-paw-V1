# DEPRECATED — apps/landing-web

This Astro app has been superseded by `apps/web` (Next.js).

**Do not deploy this app.** It cannot share a Vercel URL space with `apps/dashboard-web`,
and maintaining two separate web apps for one product was the root cause of the broken
routing (/ and /app served from incompatible frameworks).

## What replaced it

All public pages have been ported to `apps/web`:

| Old (Astro) | New (Next.js) |
|---|---|
| `src/pages/index.astro` | `apps/web/src/app/page.tsx` |
| `src/pages/blog/index.astro` | `apps/web/src/app/blog/page.tsx` |
| `src/pages/blog/[slug].astro` | `apps/web/src/app/blog/[slug]/page.tsx` |
| `src/pages/funding-radar.astro` | `apps/web/src/app/funding/page.tsx` |
| `src/pages/security.astro` | `apps/web/src/app/security/page.tsx` |
| `src/pages/download.astro` | `apps/web/src/app/download/page.tsx` |
| `src/pages/docs.astro` | `apps/web/src/app/docs/page.tsx` |

Blog content (`src/content/blog/*.mdx`) has been consolidated into
`apps/web/src/lib/blog.ts`.

## Safe to remove

This directory (`apps/landing-web`) can be deleted once the team confirms
`apps/web` is the canonical frontend.
