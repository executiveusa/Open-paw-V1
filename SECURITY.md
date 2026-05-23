# Security Policy

## Supported versions

Open Paw is in pre-alpha development. Security patches are applied to the `main` branch only.

| Version | Supported |
| ------- | --------- |
| main    | Yes       |
| < 1.0   | No        |

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report security issues via:

1. **GitHub Security Advisory (preferred):** Use the "Report a vulnerability" button on the Security tab of this repository. This creates a private, coordinated disclosure.

2. **Email:** security@openpaw.org

We will respond within 72 hours with an acknowledgment and a timeline for investigation.

## Security principles

### Data security
- All animal records, medical notes, and personal information are stored locally in SQLite by default.
- No data is transmitted to external servers unless the user explicitly configures cloud sync.
- SQLCipher encryption is on the roadmap for local database at-rest encryption.
- API keys and tokens must never be committed to the repository.

### Access control
- Role-based access control (RBAC) enforces what each role can read and write.
- The `PublicIntake` role cannot trigger any privileged action.
- Medical records are restricted by default and require an explicit role grant to read.
- All sensitive writes produce an audit event.

### AI safety
- AI outputs are always marked as drafts.
- AI cannot write to records without explicit human approval through a policy gate.
- AI cannot submit grant applications automatically.
- Medical diagnosis is never automated.

### API security
- All routes are tenant-scoped unless explicitly public.
- Public intake routes write only to quarantine tables.
- Writes require authenticated actor identity.
- All API errors return structured, non-leaking messages.

### Dependency security
- Dependabot monitors all Rust crate and npm package dependencies.
- `cargo audit` should be run before major releases.

## Known limitations (pre-alpha)

- Authentication in V1 uses a stub session system. Production-grade JWT + password hashing is on the V1 roadmap.
- SQLCipher encryption is not yet implemented.
- Rate limiting is not yet implemented on the API.
- Full HTTPS termination requires a reverse proxy (Nginx/Caddy) in self-hosted deployments.

## Responsible disclosure

We are committed to working with security researchers to responsibly address vulnerabilities. We will:

1. Acknowledge your report within 72 hours.
2. Provide an estimated timeline for a fix.
3. Notify you when the fix is released.
4. Credit you (with your permission) in the release notes.

Thank you for helping keep Open Paw safe for animal welfare organizations.
