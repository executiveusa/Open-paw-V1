# Open Paw Architecture

## System shape

Open Paw is a separated frontend/backend system with three deployment profiles:

1. Desktop local-first app.
2. Local network shelter server.
3. Self-hosted multi-tenant cloud app.

The backend owns data, policy, permissions, audit logs, AI tool execution, and integrations. Frontends consume the backend through documented APIs.

## Monorepo layout

```txt
apps/
  landing-web/        # public marketing site, blog, docs, downloads
  dashboard-web/      # authenticated app UI
  desktop-shell/      # Tauri shell for local install
  mobile-pwa/         # field capture app
services/
  api/                # Rust Axum API service
  agent-worker/       # AI task runner and policy-gated tool execution
  grant-ingestion-worker/
  sync-worker/
crates/
  core/               # domain models and business rules
  storage/            # DB adapters and migrations
  auth/               # auth, RBAC, sessions, API keys
  policy/             # action permission engine
  plugins/            # future WASM plugin host
  llm/                # provider adapters
docs/
```

## Backend

### Primary backend stack

- Rust
- Axum
- Tokio
- SQLx or SeaORM
- SQLite for local mode
- PostgreSQL for multi-tenant hosted mode
- OpenAPI for API contracts
- structured logging with tracing

### API responsibilities

- Authentication
- RBAC
- Tenant isolation
- Animal records
- People/contact records
- Medical notes
- Foster/adoption workflow
- Grant/funder data
- Resource directory
- Audit events
- Agent action queue
- Export/import
- Backup/sync settings

### API design rules

- All routes are tenant scoped unless explicitly public.
- Public intake routes write to quarantine tables only.
- Writes require actor identity.
- Sensitive reads are audit logged.
- API errors are structured.
- OpenAPI is generated and used by frontend clients.

## Frontend

### Landing web

Purpose: public communication.

- Next.js or Astro
- TypeScript
- Tailwind CSS
- MDX blog
- light/dark mode
- SEO metadata
- Open Graph cards
- download pages
- docs links
- donation/contributor CTAs

### Dashboard web

Purpose: authenticated operations UI.

- React
- TypeScript
- TanStack Router
- TanStack Query
- generated API client
- role-aware navigation
- offline-tolerant UX

### Desktop shell

Purpose: one-click install.

- Tauri 2
- launches bundled Rust API service
- stores encrypted local DB
- manages first-run setup
- supports local backups

### Mobile PWA

Purpose: field capture.

- photo upload
- QR scan
- quick notes
- task completion
- lost/found report intake
- offline cache

## Storage

### Local mode

- SQLite
- SQLCipher target for encryption
- encrypted app data directory for media
- local backup export

### Self-hosted mode

- PostgreSQL
- S3-compatible object storage
- tenant-specific object prefixes
- optional encryption at application layer

## Core domains

- Organization
- User
- Role
- Permission
- Animal
- AnimalIdentifier
- AnimalPhoto
- AnimalNote
- MedicalRecord
- Vaccination
- Medication
- Procedure
- Person
- Contact
- FosterPlacement
- AdoptionApplication
- LostFoundReport
- Task
- Reminder
- Funder
- GrantOpportunity
- GrantApplication
- ResourceProvider
- AuditEvent
- AgentSession
- AgentAction

## Tenant model

A tenant is an organization, shelter, rescue, clinic, fiscal sponsor program, or project.

Every tenant-owned table must include `tenant_id`.

Tenant-owned data cannot be queried without tenant scope.

## Agent architecture

```txt
User request
  -> input classifier
  -> permission context
  -> retrieval/search
  -> agent planner
  -> policy engine
  -> tool proposal
  -> human approval when needed
  -> tool execution
  -> audit event
  -> response
```

## LLM provider adapters

The LLM layer must support provider-agnostic adapters:

- OpenAI
- Anthropic-compatible APIs
- NVIDIA NIM
- Ollama
- llama.cpp
- Free Claude Code-compatible proxy endpoint

No provider should be hardcoded into the domain layer.

## Plugin model

No untrusted plugin marketplace in V1.

Future plugins should use:

- WASM sandboxing
- signed manifests
- explicit capability declarations
- install-time review
- runtime permission enforcement
- audit logs

Example capabilities:

```txt
can_read_animals
can_write_animals
can_read_medical_records
can_write_tasks
can_publish_public_profiles
can_read_grants
can_write_grant_applications
```

## Public intake design

Public forms include:

- lost pet report
- found pet report
- adoption inquiry
- foster application
- volunteer application
- resource provider submission

Public submissions are quarantined. They do not directly modify animal records.

## Public adoption pages

Public profiles are generated from approved fields only.

Private fields such as medical restrictions, owner contact, abuse/neglect notes, and internal behavior warnings must never be exposed without explicit mapping and approval.
