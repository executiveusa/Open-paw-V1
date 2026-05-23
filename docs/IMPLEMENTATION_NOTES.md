# Open Paw V1 — Implementation Notes

## Decisions

### Language/framework choices

- **Rust + Axum**: aligns with local-first, zero-dependency install, memory safety, and long-term correctness. No Node.js server-side.
- **SQLite first**: simplest local install, zero config. PostgreSQL abstractions are added at the interface level so migration is clean.
- **Astro for landing**: static-first, fast, MDX blog native, great SEO.
- **React + Vite for dashboard**: standard choice for complex data-heavy SPAs.
- **pnpm + Turborepo**: best monorepo DX for Node ecosystem.

### Architecture tradeoffs

- Domain logic in `crates/core` is pure — no DB or HTTP imports. This keeps it testable.
- Storage layer owns migrations and repository implementations. Core only sees traits.
- Policy crate is the single source of truth for what each role can do.
- LLM crate is provider-agnostic. All providers are behind a single `LlmProvider` trait.
- API service wires crates together but adds no domain logic.

### What is stubbed in V1

- Auth is structurally present (roles, permissions, middleware) but no OAuth provider is wired.
- LLM providers have trait definitions and stub implementations; real HTTP calls are present but not fully tested.
- Desktop shell (Tauri) — structure only, no bundled build.
- Plugin system — types and capability docs only.
- Grant ingestion worker — migrations and data model present; automated scraping not built.
- Sync worker — not built in V1.

## File map

```
Cargo.toml                    Rust workspace root
package.json                  Node workspace root
pnpm-workspace.yaml           pnpm workspace config
turbo.json                    Turborepo task graph

crates/core/                  Domain models, business rules, validations
crates/storage/               DB repositories, migrations, seed data
crates/auth/                  Roles, permissions, session types
crates/policy/                Action permission engine
crates/llm/                   LLM provider traits + stub adapters
crates/plugins/               Plugin types and capability docs

services/api/                 Axum HTTP API server

apps/landing-web/             Astro public site + MDX blog
apps/dashboard-web/           React + Vite operations dashboard

.github/workflows/ci.yml      CI pipeline
.github/ISSUE_TEMPLATE/       Bug + feature issue templates
docker-compose.yml            Local dev orchestration
Dockerfile.api                API Docker image
```

## Next build steps (post V1 scaffold)

1. Wire Tauri desktop shell against services/api.
2. Add real JWT auth with password hashing.
3. Implement real grant ingestion worker (scraping + AI extraction).
4. Add Playwright E2E test suite.
5. Add PostgreSQL compatibility path (feature flag in storage crate).
6. Wire real LLM providers with streaming.
7. Add photo upload endpoints.
8. Build public adoption profile pages.
9. Add CSV import/export.
10. Add QR code generation per animal.
