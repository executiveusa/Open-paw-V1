# DEPRECATED — apps/dashboard-web

This React + Vite app has been superseded by `apps/web` (Next.js).

**Do not deploy this app.** It served `/app` from a separate Vite origin, making it
impossible to share a single Vercel URL with the landing page. Its router also redirected
`/` → `/app`, making the dashboard the public entry point — the primary UX failure this
repair corrects.

## What replaced it

All dashboard pages have been ported to `apps/web`:

| Old (Vite/React Router) | New (Next.js App Router) |
|---|---|
| `src/router.tsx` | `apps/web/src/app/app/layout.tsx` |
| `src/components/layout/AppShell.tsx` | `apps/web/src/components/layout/AppShell.tsx` |
| `src/pages/DashboardHome.tsx` | `apps/web/src/app/app/page.tsx` |
| `src/pages/AnimalsPage.tsx` | `apps/web/src/app/app/animals/page.tsx` |
| `src/pages/AnimalDetailPage.tsx` | `apps/web/src/app/app/animals/[id]/page.tsx` |
| `src/pages/NewAnimalPage.tsx` | `apps/web/src/app/app/animals/new/page.tsx` |
| `src/pages/LostFoundPage.tsx` | `apps/web/src/app/app/lost-found/page.tsx` |
| `src/pages/GrantsPage.tsx` | `apps/web/src/app/app/funding/page.tsx` |
| `src/pages/ReportsPage.tsx` | `apps/web/src/app/app/reports/page.tsx` |
| `src/pages/SettingsPage.tsx` | `apps/web/src/app/app/settings/page.tsx` |
| `src/data/mock.ts` | `apps/web/src/lib/api/mockClient.ts` |
| `src/types/index.ts` | `apps/web/src/lib/api/types.ts` |
| `src/api/client.ts` | `apps/web/src/lib/api/client.ts` (stub) |

## Safe to remove

This directory (`apps/dashboard-web`) can be deleted once the team confirms
`apps/web` is the canonical frontend.
