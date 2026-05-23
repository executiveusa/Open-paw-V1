# Local Development

## Prerequisites

| Tool | Version | Install |
| ---- | ------- | ------- |
| Rust | ≥ 1.80 | `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` |
| Node.js | ≥ 22 | https://nodejs.org or `nvm install 22` |
| pnpm | ≥ 10 | `npm install -g pnpm` |

## Setup

```bash
# Clone
git clone https://github.com/executiveusa/Open-paw-V1.git
cd Open-paw-V1

# Copy environment config
cp .env.example .env

# Install Node dependencies
pnpm install

# Build Rust workspace (downloads all crates)
cargo build
```

## Running the API

```bash
# Create the data directory
mkdir -p data

# Run migrations and start the server
DATABASE_URL=sqlite:./data/openpaw.db cargo run -p open-paw-api

# API is now available at http://localhost:3001
# Health check: curl http://localhost:3001/health
```

## Running the landing site

```bash
pnpm --filter @open-paw/landing-web dev

# Site available at http://localhost:4321
```

## Running the dashboard

```bash
pnpm --filter @open-paw/dashboard-web dev

# Dashboard available at http://localhost:5173
# The dashboard proxies /api requests to http://localhost:3001
```

## Running everything

```bash
# Terminal 1 — API
DATABASE_URL=sqlite:./data/openpaw.db cargo run -p open-paw-api

# Terminal 2 — Landing
pnpm --filter @open-paw/landing-web dev

# Terminal 3 — Dashboard
pnpm --filter @open-paw/dashboard-web dev
```

Or with turborepo (frontend only):

```bash
pnpm dev
```

## Database

### Migrations

Migrations run automatically when the API starts. They live in `crates/storage/migrations/`.

### Seed data

The final migration (`20240101000011_seed_dev_data.sql`) inserts dev seed data on first run. This includes:
- One demo tenant (Happy Paws Rescue)
- 5 sample animals
- 3 sample funders
- 2 sample grant opportunities

### Reset the database

```bash
rm -f data/openpaw.db
# Restart the API to re-apply migrations and seed data
```

## Tests

### Rust tests

```bash
# All tests
cargo test --all

# Specific crate
cargo test -p open-paw-core
cargo test -p open-paw-auth
cargo test -p open-paw-policy

# With output
cargo test --all -- --nocapture
```

### Frontend tests

```bash
# All frontend tests
pnpm test

# Dashboard tests only
pnpm --filter @open-paw/dashboard-web test

# Watch mode
pnpm --filter @open-paw/dashboard-web test -- --watch
```

### Type checking

```bash
pnpm typecheck
```

### Linting

```bash
# Rust
cargo fmt --all -- --check
cargo clippy --all-targets

# Frontend
pnpm lint
```

## Building for production

```bash
# Rust API (release binary)
SQLX_OFFLINE=true cargo build --release -p open-paw-api

# Frontend
pnpm build
```

## Docker

```bash
# Build and run the API in Docker
docker compose up --build

# API available at http://localhost:3001
```

## Environment variables

See `.env.example` for all variables. Required for the API:

```bash
DATABASE_URL=sqlite:./data/openpaw.db
SESSION_SECRET=<32-byte hex string — generate with: openssl rand -hex 32>
```

## SQLx offline mode

If you see errors like `DATABASE_URL must be set`, set:

```bash
export SQLX_OFFLINE=true
```

This tells sqlx to use cached query metadata instead of a live database connection at compile time.

## Common issues

**`error: linking with cc failed`**
Install build-essential (Linux) or Xcode CLI tools (macOS).

**`could not find native static library`**
On Linux, install `libssl-dev` and `pkg-config`.

**Port 3001 already in use**
Change `API_PORT` in `.env` or kill the existing process: `lsof -ti:3001 | xargs kill`
