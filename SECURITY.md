# Security policy

## Reporting a vulnerability

Please report security vulnerabilities through GitHub's
[private vulnerability reporting](https://github.com/Digvijay/aswa-vitepress-starter-kit/security/advisories/new)
rather than opening a public issue.

You can expect an initial acknowledgement within 7 days. After triage I'll
keep you informed of progress until the issue is resolved or a mitigation is
released.

## Scope

This is a static documentation site starter. The threat surface is limited to:

- The Bicep template in [`infra/`](./infra/) and the resources it provisions.
- The GitHub Actions workflows in [`.github/workflows/`](./.github/workflows/).
- The published static assets under `docs/.vitepress/dist`.

There is no server-side code, database, or authenticated user data.

## Supported versions

Only the `main` branch is supported. There are no long-term maintenance
branches.
