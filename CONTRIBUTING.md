# Contributing to Open Paw

Thank you for your interest in contributing to Open Paw. Animal welfare organizations need good software, and we're grateful for every contribution.

## Quick start

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Open-paw-V1.git`
3. Install dependencies: see [docs/LOCAL_DEVELOPMENT.md](docs/LOCAL_DEVELOPMENT.md)
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes.
6. Run tests: `cargo test --all && pnpm test`
7. Open a pull request.

## What we need help with

### High priority
- Rust API route implementations
- SQLite query optimization
- Frontend dashboard polish
- Playwright end-to-end tests
- Documentation improvements
- Bug fixes

### Good first issues
Look for issues labeled `good first issue` on GitHub. These are scoped, well-defined tasks appropriate for new contributors.

### Domain expertise
If you work in animal welfare, your input on workflows, terminology, and real-world needs is extremely valuable — even if you don't write code. Please open a discussion or issue.

## Development guidelines

### Architecture rules
- Backend logic belongs in Rust crates, not in frontend route handlers.
- Domain logic in `crates/core` must have no database or HTTP dependencies.
- Policy decisions belong in `crates/policy`.
- New API routes must be tenant-scoped.
- All sensitive writes need an audit event.

### Code style

**Rust:**
- Run `cargo fmt --all` before committing.
- Run `cargo clippy --all-targets` and fix all warnings.
- Write unit tests for new domain logic.
- Use `thiserror` for domain errors. Use `anyhow` only at boundaries.
- No `unwrap()` in production paths.

**TypeScript:**
- Run `pnpm lint` and `pnpm typecheck` before committing.
- No `any` types without a justifying comment.
- Components should be small and focused.

### Security rules
- Never commit secrets, API keys, or tokens.
- Never add arbitrary shell execution.
- Public intake routes cannot write to privileged tables.
- Medical record access requires explicit role check.
- AI writes require policy approval.

### Testing requirements
- New Rust domain logic requires unit tests.
- New policy rules require policy tests.
- New API routes should have integration tests.
- Frontend components should have basic render tests.

## Pull request process

1. Reference the issue your PR addresses.
2. Complete the PR checklist.
3. Keep PRs focused — one feature or fix per PR.
4. Be patient. Maintainers are volunteers.

## Commit messages

Use the conventional commits style:

```
feat: add grant deadline calendar view
fix: correct animal status transition validation
docs: update LOCAL_DEVELOPMENT with SQLite setup
test: add policy tests for foster coordinator role
refactor: extract tenant scope middleware
```

## Code of conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the project's AGPL-3.0 license.
