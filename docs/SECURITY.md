# Open Paw Security Model

## Security position

Open Paw is intended for animal welfare teams that may store sensitive data about animals, owners, adopters, fosters, donors, volunteers, medical care, neglect cases, and grant funding.

The default security model is local-first, encrypted, role-restricted, and audit-friendly.

## Non-negotiable rules

1. No arbitrary shell execution by default.
2. Public intake cannot trigger privileged actions.
3. AI cannot automatically diagnose medical conditions.
4. AI-generated writes require policy checks.
5. Sensitive reads and all writes are audit logged.
6. Medical and abuse/neglect records are restricted.
7. Cloud sync is optional and encrypted.
8. Plugins are disabled until a sandboxed permission model exists.

## Roles

```txt
owner
admin
vet
medical_staff
foster_coordinator
adoption_coordinator
volunteer
foster
grant_writer
finance
read_only
public_intake
```

## Permission examples

### Animal records

- `animal.read`
- `animal.create`
- `animal.update`
- `animal.delete`
- `animal.export`

### Medical records

- `medical.read`
- `medical.create`
- `medical.update`
- `medical.delete`
- `medical.export`

### Grants

- `grant.read`
- `grant.create`
- `grant.update`
- `grant.submit_checklist`
- `grant.export`

### Admin

- `user.invite`
- `role.assign`
- `tenant.settings.update`
- `backup.create`
- `sync.enable`

## Public input threat model

Public inputs may include prompt injection, spam, malicious links, abusive content, malware attachments, false reports, or attempts to trick the AI into revealing data.

Public input surfaces:

- lost pet reports
- found pet reports
- adoption applications
- foster applications
- volunteer applications
- public contact forms
- imported emails
- social media messages

Mitigations:

- store public inputs in quarantine
- strip executable content
- never pass public text directly into privileged agent prompts
- classify and summarize before use
- prevent public data from triggering tools
- require human review before linking public submissions to internal animal records

## AI safety policy

AI may:

- summarize intake notes
- draft adoption bios
- format medical notes for review
- generate grant narratives from approved data
- suggest lost/found matches
- create draft task lists
- explain records to authorized users

AI may not automatically:

- diagnose an animal
- prescribe medication
- delete records
- export sensitive data
- submit grant applications
- publish public pages
- contact adopters/fosters/donors
- modify medical records without approval

## Audit events

Audit logs should capture:

- actor ID
- tenant ID
- action
- target entity
- before/after summary when safe
- timestamp
- IP/device where relevant
- AI/provider used when relevant
- approval chain when relevant

## Data protection

Local mode:

- SQLCipher target for database encryption
- encrypted media directory target
- secure backup export
- user-controlled backup location

Self-hosted mode:

- PostgreSQL with least-privilege DB user
- object storage with private buckets
- tenant-scoped object prefixes
- HTTPS required
- secure cookie settings
- API rate limiting

## Secret handling

- no API keys in frontend bundles
- local secrets stored in OS keychain when possible
- environment variables for server deployments
- redact secrets from logs
- never include secrets in URLs

## Dependency policy

- prefer small dependency surface
- use cargo audit
- use cargo deny
- pin critical dependencies
- avoid unmaintained crates
- review transitive dependencies
- run Dependabot or Renovate

## Incident posture

Open Paw should include:

- SECURITY.md
- responsible disclosure process
- supported versions
- vulnerability labels
- release notes for security fixes
- automated dependency scanning
