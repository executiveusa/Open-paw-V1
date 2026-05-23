# Open Paw V1 Execution Plan

## Objective

Build a free, open-source, local-first animal welfare operating system for shelters, rescues, foster networks, veterinary welfare clinics, and fiscal sponsors.

Open Paw should be useful before it is clever. The first version must let a non-technical rescue team install the app, enter animal records, upload photos, track status, search records, export data, and begin finding grants.

## Strategic benchmark products

Open Paw should study but not clone these closed-source incumbents:

1. **IDEXX Cornerstone / ezyVet / Neo**
   - Practice management
   - EMR
   - diagnostics
   - scheduling
   - invoicing
   - reporting
   - treatment boards

2. **Covetrus Pulse / AVImark / Impromed**
   - Veterinary operating system
   - client communications
   - inventory
   - prescriptions
   - care plans
   - dashboards
   - AI notes

3. **PetPoint / Chameleon / ShelterBuddy class systems**
   - Shelter intake
   - outcomes
   - adoptions
   - lost/found
   - licensing
   - donations
   - volunteer and foster workflows
   - enterprise shelter management

Open Paw should focus first on the shelter/rescue/foster side, with a veterinary-lite module for welfare clinics and medical record continuity.

## Product principles

- Local-first by default.
- Open-source and auditable.
- Frontend/backend separation.
- One-click install for small teams.
- Multi-tenant self-hosting for larger networks.
- No mandatory cloud dependency.
- No arbitrary shell execution by default.
- AI helps draft, summarize, match, and report; humans approve sensitive writes.
- Funding and resources are first-class product features, not afterthoughts.

## Milestone 0: Project foundation

### Deliverables

- GitHub repo initialized.
- README.
- Architecture docs.
- Security model.
- Funding Radar spec.
- Landing/blog spec.
- Contributor guide.
- Issue templates.
- CI skeleton.
- License decision.

### Done when

A developer can understand the system boundaries, install toolchains, and begin scaffolding code without asking for product direction.

## Milestone 1: Local desktop MVP

### Scope

- Tauri desktop shell.
- Rust API service.
- SQLite database.
- SQLCipher encryption target.
- First-run setup wizard.
- Organization profile.
- Admin user.
- Animal records.
- Photo upload.
- People/contact records.
- Status pipeline.
- Search.
- CSV import/export.
- Audit log.
- Light/dark UI.

### Excluded

- Cloud sync.
- Full mobile app.
- Automatic grant submission.
- Automatic diagnosis.
- Plugin marketplace.
- Payment processing.

## Milestone 2: Shelter/rescue workflows

### Scope

- Foster placement.
- Adoption application tracking.
- Public adoption profile drafts.
- Lost/found reports.
- Volunteer task board.
- Reminder system.
- QR code per animal.
- Basic reports.

## Milestone 3: Funding Radar

### Scope

- Funder database.
- Grant opportunity database.
- Eligibility checker.
- Grant calendar.
- Application workspace.
- Budget builder.
- Impact report generator.
- Funder CRM.
- Resource directory.
- Fiscal sponsor mode.

### Guiding workflow

```txt
Organization profile
  -> match grants
  -> rank opportunities
  -> draft application outline
  -> pull real impact metrics
  -> build budget
  -> create submission checklist
  -> track status
  -> schedule reporting obligations
```

## Milestone 4: Agent layer

### Scope

- Adoption bio writer.
- Intake summarizer.
- Medical note formatter.
- Grant draft assistant.
- Lost/found matching assistant.
- Weekly report generator.
- Human approval workflow for writes.
- Provider adapters:
  - OpenAI
  - Anthropic-compatible APIs
  - NVIDIA NIM
  - Ollama
  - llama.cpp
  - Free Claude Code proxy-compatible endpoint

## Milestone 5: Self-hosted multi-tenant app

### Scope

- Rust Axum server.
- PostgreSQL support.
- Organization/tenant isolation.
- RBAC.
- API keys.
- Webhooks.
- Docker Compose.
- Optional S3-compatible object storage.
- Backup/sync worker.

## Milestone 6: Public launch

### Scope

- Landing page.
- Blog.
- Docs.
- Demo data.
- Screenshots.
- Launch video script.
- Felipe mascot campaign assets.
- Contributor call.
- Pilot deployment guide.
- Donation/sponsorship funnel.

## First implementation path

1. Commit documentation scaffold.
2. Add issue templates and labels.
3. Create `apps/landing-web` with a polished static landing/blog shell.
4. Create `services/api` with Rust Axum health endpoint and OpenAPI baseline.
5. Create `crates/core` with animal domain models.
6. Create SQLite migrations for animal records, people, audit events, and grants.
7. Add CI for formatting, tests, and security checks.
8. Add Tauri desktop shell after API and dashboard boundaries are stable.

## V1 success criteria

- A rescue can install it locally.
- A user can add 25 animals with photos.
- A user can track animal status from intake to adoption.
- A user can search records quickly.
- A user can export data.
- A user can see relevant grant opportunities.
- A user can generate a draft adoption bio and grant narrative.
- Sensitive data stays local unless explicitly exported or synced.
