# Open Paw V1

**Free, open-source, local-first software for animal rescues, shelters, foster networks, and veterinary welfare teams.**

> Track animals, find funding, publish adoptable pets, and keep your data local.

---

## What is Open Paw?

Open Paw is an animal welfare operating system that gives small and mid-size organizations the tools they need without expensive subscriptions or cloud lock-in.

- **Local-first** — your data lives on your machine
- **Open-source** — auditable, forkable, and free
- **Grant-ready** — built-in Funding Radar module
- **One-click install** — no server setup required (desktop app coming)

## Who it's for

- Animal rescues
- Shelters
- Foster networks
- Veterinary welfare clinics
- Spay/neuter programs
- Animal welfare nonprofits
- Fiscal sponsors

## Quick start (development)

```bash
# Prerequisites: Rust ≥ 1.80, Node.js ≥ 22, pnpm ≥ 10

git clone https://github.com/executiveusa/Open-paw-V1.git
cd Open-paw-V1
cp .env.example .env
pnpm install
cargo build

# Run the API
mkdir -p data
DATABASE_URL=sqlite:./data/openpaw.db cargo run -p open-paw-api

# Run the landing site (new terminal)
pnpm --filter @open-paw/landing-web dev

# Run the dashboard (new terminal)
pnpm --filter @open-paw/dashboard-web dev
```

See [docs/LOCAL_DEVELOPMENT.md](docs/LOCAL_DEVELOPMENT.md) for full setup instructions.

## Monorepo structure

```
apps/
  landing-web/          Astro public site + MDX blog
  dashboard-web/        React + Vite operations dashboard

services/
  api/                  Rust + Axum REST API

crates/
  core/                 Domain models and business rules
  storage/              SQLite repositories and migrations
  auth/                 Roles, permissions, session types
  policy/               Action permission engine
  llm/                  LLM provider traits and stub adapters
  plugins/              Plugin capability types (future)

docs/                   Architecture, API, security, roadmap
```

## Running tests

```bash
# Rust (26 tests, 26 passing)
cargo test --all

# Frontend
pnpm test
pnpm typecheck
```

## Key features

### Animal operations
Intake, status pipeline, medical notes, foster/adoption workflow, lost/found, QR IDs.

**Animal statuses:** intake → quarantine → medical_hold → behavior_hold → foster_needed → in_foster → adoptable → adoption_pending → adopted

### Funding Radar
Funder database, grant calendar, eligibility checker, AI-assisted narrative drafts (human approval required), application workspace.

### Security model
- Role-based access control (12 roles)
- Policy-gated AI writes
- Full audit log on all sensitive writes
- Public intake forms cannot trigger privileged actions
- Medical diagnosis is never automated

### Deployment
- Desktop app (coming — Tauri 2)
- Local network (Rust API + SQLite)
- Self-hosted cloud (Docker Compose)

## Documentation

| Doc | Description |
| --- | ----------- |
| [LOCAL_DEVELOPMENT.md](docs/LOCAL_DEVELOPMENT.md) | Setup, running, testing |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design |
| [API.md](docs/API.md) | REST API reference |
| [TESTING.md](docs/TESTING.md) | Test suite guide |
| [FUNDING_RADAR.md](docs/FUNDING_RADAR.md) | Grant workflow spec |
| [SECURITY.md](docs/SECURITY.md) | Security model |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Production deployment |
| [ROADMAP.md](docs/ROADMAP.md) | What's coming |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All contributors must follow the [Code of Conduct](CODE_OF_CONDUCT.md).

Report security issues privately — see [SECURITY.md](SECURITY.md).

## License

AGPL-3.0 — see LICENSE.

---

*Built for the people doing the work.*
