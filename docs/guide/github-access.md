# GitHub access

- A repository (public or private). **Standard SKU** is required for preview environments on private repos.
- GitHub Actions enabled on the repository
- Permission to create an Entra application and federated credential (used by `azd pipeline config` to wire OIDC). If your tenant blocks this, ask an admin to run it once for you.

> Don't want OIDC? You can also deploy with the Static Web Apps deployment token committed as a repo secret — see the workflow under [`.github/workflows/`](https://github.com/Digvijay/aswa-vitepress-starter-kit/tree/main/.github/workflows). OIDC is recommended.
