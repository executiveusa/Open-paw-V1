# Open Paw Roadmap

## Current: V1 Scaffold (this branch)

**Status:** In development

**Includes:**
- Rust workspace with 6 crates (core, storage, auth, policy, llm, plugins)
- Axum REST API with SQLite, migrations, and seed data
- Astro landing site with MDX blog (10 posts)
- React + Vite dashboard with all screens
- 26 passing tests
- CI workflow (GitHub Actions)
- Docker support
- Full documentation

## Milestone 1: Local Desktop MVP

**Target:** Q2 2024

- Tauri 2 desktop shell
- First-run setup wizard
- Organization profile setup
- Full animal CRUD with photos
- CSV import/export
- Search across records
- QR code generation per animal
- SQLCipher encryption for local DB
- Light/dark mode (complete)

## Milestone 2: Shelter/Rescue Workflows

**Target:** Q3 2024

- Foster placement tracking with capacity view
- Adoption application workflow
- Public adoption profile publishing
- Lost/found matching assistant
- Volunteer task board with assignments
- Email reminder system
- Role-based nav and access gates wired end-to-end
- Playwright E2E tests

## Milestone 3: Funding Radar (Full)

**Target:** Q4 2024

- Automated grant ingestion worker
- Eligibility scoring against org profile
- AI-assisted narrative drafting (stub → real)
- Budget builder
- Impact report generator
- Funder CRM
- Resource directory
- Fiscal sponsor multi-program mode

## Milestone 4: Agent Layer

**Target:** Q1 2025

- Adoption bio writer (production)
- Intake note summarizer
- Medical note formatter
- Grant draft assistant
- Lost/found description matcher
- Human approval workflow UI
- Real provider adapters: OpenAI, Anthropic, Ollama
- Provider selection in settings

## Milestone 5: Multi-Tenant Self-Hosted

**Target:** Q2 2025

- PostgreSQL support
- Organization tenant isolation (hardened)
- API key management
- Webhooks
- S3-compatible object storage for photos
- Docker Compose production guide
- Backup/restore workflow

## Milestone 6: Public Launch

**Target:** Q3 2025

- Polished landing page with screenshots
- Video walkthrough
- Demo data environment
- Pilot deployment with 3 partner rescues
- Contribution call
- Donation/sponsorship page

## Non-roadmap items (explicitly out of scope)

- Medical diagnosis automation
- Automatic grant submission without human review
- Untrusted plugin marketplace (V1)
- Built-in payment processing
- Social media integrations (V1)
