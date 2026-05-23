# Open Paw V1

**Open-source, local-first software for animal rescues, shelters, foster networks, and veterinary welfare teams.**

Open Paw is a Rust-first animal welfare operating system designed to help organizations track animals, coordinate care, find funding, publish adoptable pets, and keep sensitive data under their control.

## Product thesis

Animal welfare teams should not need expensive, closed, cloud-locked software to manage animal records, foster care, medical notes, lost/found cases, adoption workflows, and grant reporting.

Open Paw exists to provide a free and open-source alternative with:

- Local-first data ownership
- One-click desktop install
- Self-hosted multi-tenant deployment
- Encrypted records
- Role-based access control
- Grant finder and funding workflow
- Public adoption pages
- AI assistance with human approval gates
- Clear APIs and separated frontend/backend architecture

## Primary users

- Animal rescues
- Shelters
- Foster networks
- Veterinary welfare clinics
- Spay/neuter programs
- Animal welfare nonprofits
- Fiscal sponsors and nonprofit networks

## V1 modules

1. **Animal Operations** — intake, photos, records, status pipeline, QR IDs, search, exports.
2. **Veterinary Lite** — vaccinations, medications, procedures, weight history, restricted medical notes.
3. **Shelter/Rescue Workflows** — foster placements, adoption applications, lost/found, volunteer tasks.
4. **Funding Radar** — funder database, eligibility checker, grant calendar, AI-assisted drafts, impact reports.
5. **Public Site + Blog** — landing page, docs, resource library, case studies, grant posts.
6. **Agent Layer** — provider-agnostic AI helpers with policy-gated writes and audit logs.

## Architecture stance

Frontend and backend are separate by default.

```txt
apps/
  landing-web/
  dashboard-web/
  desktop-shell/
  mobile-pwa/
services/
  api/
  agent-worker/
  grant-ingestion-worker/
  sync-worker/
crates/
  core/
  storage/
  auth/
  policy/
  plugins/
  llm/
docs/
```

## Deployment modes

- **Desktop:** one-click install, local encrypted SQLite database.
- **Local network:** shelter office server with shared clients.
- **Self-hosted cloud:** Docker Compose with Rust API, PostgreSQL, and object storage.

## Non-negotiable safety rules

- No arbitrary shell execution by default.
- Public intake can never trigger privileged actions.
- Medical diagnosis is not automated.
- AI-generated writes require policy approval and audit logs.
- Sensitive records are encrypted and role-restricted.
- Cloud sync is optional, never mandatory.

## Status

Pre-alpha planning and scaffold.

See `/docs` for the build plan, architecture, security model, and funding module specification.

## License

License decision pending. Recommended options are AGPL-3.0 for open-source reciprocity or Apache-2.0 for maximum adoption. Do not use this project in production until a license is selected.
