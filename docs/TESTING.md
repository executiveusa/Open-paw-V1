# Testing

## Test suite overview

| Layer | Framework | Location | Status |
| ----- | --------- | -------- | ------ |
| Rust domain | `cargo test` | `crates/core/src` | ✅ 8 tests |
| Rust auth/permissions | `cargo test` | `crates/auth/src` | ✅ 8 tests |
| Rust policy engine | `cargo test` | `crates/policy/src` | ✅ 5 tests |
| API integration | `cargo test` | `services/api/tests` | ✅ 1 test |
| Dashboard unit | Vitest | `apps/dashboard-web/src/tests` | ✅ 4 tests |
| Landing site | — | — | Typecheck only |
| E2E | Playwright | — | Roadmap |

Total: **26 tests, 26 passing**

## Running tests

### All Rust tests
```bash
cargo test --all
```

### Specific crate
```bash
cargo test -p open-paw-core
cargo test -p open-paw-auth
cargo test -p open-paw-policy
```

### All frontend tests
```bash
pnpm test
```

### Dashboard tests only
```bash
pnpm --filter @open-paw/dashboard-web test
```

## Test coverage areas

### Domain tests (`crates/core`)

- Animal requires a name
- Animal created with valid data defaults to `intake` status
- Invalid animal status is rejected
- Restricted animal returns a sanitized public profile
- Unrestricted animal returns full public profile
- Active/inactive status classification
- Grant deadline past detection

### Permission tests (`crates/auth`)

- Volunteer cannot read medical records
- Vet can read medical records
- Public intake cannot publish public profiles
- Grant writer can draft grants
- Grant writer cannot submit grants automatically
- Admin can export records
- Read-only cannot write anything
- Owner can do everything

### Policy engine tests (`crates/policy`)

- Vet is allowed to read medical records (Allow decision)
- Volunteer is denied medical read (Deny decision)
- Grant writer drafting returns Allow (no approval needed)
- Grant writer submission returns RequireApproval
- Admin grant submission still returns RequireApproval

### Dashboard unit tests

- Mock animals have required fields
- Stats match derived animal data
- No animal has empty name
- Data structure validation

## Writing new tests

### Rust unit test convention
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn descriptive_test_name() {
        // arrange
        // act
        // assert
    }
}
```

### Vitest convention
```ts
import { describe, it, expect } from 'vitest';

describe('feature', () => {
  it('does what it says', () => {
    expect(true).toBe(true);
  });
});
```

## Roadmap tests

### E2E (Playwright) — planned
- Open landing page, verify hero text visible
- Open blog, verify posts list
- Navigate to dashboard login
- Log in with demo credentials
- Verify animal list renders
- Add a new animal
- Update animal status
- Navigate to grants page

### API integration tests — planned
- Health endpoint returns 200
- Create tenant returns 201
- Create animal with missing name returns 400
- Invalid status update returns 400
- List animals returns correct tenant scope
- Audit event created on animal status update
