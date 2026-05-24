# Vercel Deployment Guide

Open Paw deploys as a single Next.js application from `apps/web`. One Vercel project handles
the full URL space: public landing page, blog, and authenticated dashboard.

---

## Project Settings

| Setting | Value |
|---|---|
| **Framework Preset** | Next.js |
| **Root Directory** | `apps/web` |
| **Build Command** | `pnpm build` |
| **Output Directory** | `.next` (auto-detected) |
| **Install Command** | `pnpm install` |

> **Important:** Set Root Directory to `apps/web` — not the repo root. Vercel only builds
> the one app, not the full monorepo.

---

## Route Map

| URL | What serves it |
|---|---|
| `/` | Public landing page (`src/app/page.tsx`) |
| `/blog` | Blog index (`src/app/blog/page.tsx`) |
| `/blog/[slug]` | Blog article (`src/app/blog/[slug]/page.tsx`) |
| `/funding` | Funding Radar feature page |
| `/security` | Security & trust page |
| `/download` | Download & self-host page |
| `/docs` | Documentation index |
| `/login` | Login page (demo auth in V1) |
| `/app` | Authenticated dashboard overview |
| `/app/animals` | Animal list |
| `/app/animals/new` | Add animal form |
| `/app/animals/:id` | Animal detail |
| `/app/intake` | Intake queue |
| `/app/medical` | Medical records |
| `/app/fosters` | Foster placements |
| `/app/adoptions` | Adoptions pipeline |
| `/app/lost-found` | Lost & Found reports |
| `/app/funding` | Funding Radar (dashboard) |
| `/app/resources` | Resource directory |
| `/app/reports` | Reports & impact |
| `/app/settings` | Organization settings |

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | No (V1) | Backend API base URL. Defaults to mock data if unset. |
| `NODE_ENV` | Auto | Set by Vercel automatically. |

In V1 the frontend uses local mock data and does not require a running backend. Set
`NEXT_PUBLIC_API_URL` to point at the Rust API (`services/api`) when deploying the backend.

---

## How `/app` Works

The `/app` routes use Next.js App Router nested layouts:

```
src/app/
  layout.tsx          ← root HTML shell + theme script
  page.tsx            ← / landing page
  app/
    layout.tsx        ← AppShell (sidebar + topbar) wraps all dashboard pages
    page.tsx          ← /app overview
    animals/...       ← /app/animals/*
    ...
```

The `AppShell` layout is a client component that renders the sidebar, navigation, and top bar.
All `/app/*` pages are wrapped by it automatically via Next.js nested layouts.

**V1 auth is mocked.** The login page sets no cookie or session — clicking "Continue to Dashboard"
navigates to `/app` directly. Replace `src/components/auth/LoginForm.tsx` and add a middleware
`middleware.ts` at `apps/web/src/` to enforce real authentication in production.

---

## Backend API URL

```
# .env.local (not committed)
NEXT_PUBLIC_API_URL=http://localhost:3001
```

The API client at `src/lib/api/client.ts` reads `NEXT_PUBLIC_API_URL`. When unset, the app
falls back to `mockClient.ts`.

---

## Running Locally

```bash
# From repo root
pnpm install

# Start the web app (port 3000)
cd apps/web && pnpm dev

# Or from repo root with turbo
pnpm turbo dev --filter=@open-paw/web
```

---

## Deploying to Vercel

1. Import the GitHub repository at vercel.com/new
2. Set **Root Directory** → `apps/web`
3. Framework preset auto-detects as **Next.js**
4. Add environment variables if using the live backend
5. Deploy

Subsequent pushes to `main` trigger automatic deployments.

---

## Known Limitations (V1)

- Auth is mocked — no real session management yet
- Desktop and self-hosted downloads are not yet available
- Backend API routes are stubbed, not wired to the frontend data layer
- No real-time updates or WebSocket support

See `docs/ROADMAP.md` for planned improvements.
