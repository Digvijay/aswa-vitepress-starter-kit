# ASWA VitePress starter kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Live demo](https://img.shields.io/badge/demo-live-brightgreen)](https://salmon-mud-0a7765703.7.azurestaticapps.net/)
[![azd template](https://img.shields.io/badge/azd-template-0078d4)](https://aka.ms/azd)

A minimal [`azd`](https://aka.ms/azd) template that deploys a [VitePress](https://vitepress.dev) site to [Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/). No backend, no database, no managed identity — just a static site behind a global CDN.

**Live demo:** <https://salmon-mud-0a7765703.7.azurestaticapps.net/>

## What you get

| Component | Implementation |
| --- | --- |
| Site generator | VitePress 1.x (Vite-powered, built-in search and dark mode) |
| Hosting | Azure Static Web Apps (**Free tier by default**, Standard available) |
| Routing | `staticwebapp.config.json` with SPA fallback and security headers |
| IaC | One Bicep file using [Azure Verified Modules](https://aka.ms/avm) |
| CI/CD | GitHub Actions, OIDC via `azd pipeline config` |

## Project structure

```text
aswa-vitepress-starter-kit/
├── azure.yaml                    # azd service definition
├── package.json                  # vitepress + npm scripts
├── infra/
│   ├── main.bicep                # Static Web App via AVM
│   └── main.parameters.json
├── docs/
│   ├── index.md                  # Hero / landing page
│   ├── guide/                    # Sample content
│   ├── public/
│   │   └── staticwebapp.config.json
│   └── .vitepress/config.mts     # Site config
└── .github/workflows/
    ├── azure-dev.yml             # OIDC deploy on push to main (azd)
    └── swa-pr-preview.yml        # PR preview environments
```

## Prerequisites

- Azure subscription with permission to create resource groups (Contributor on the target RG or subscription)
- [Azure Developer CLI](https://aka.ms/azd) **1.20+** (verified against 1.24)
- [Node.js](https://nodejs.org/) **20 LTS** or newer
- [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli) (used by `azd` under the hood)

## Deploy

```bash
azd init -t Digvijay/aswa-vitepress-starter-kit
cd aswa-vitepress-starter-kit

# Optional: pick a region (defaults to your azd default location)
azd env set AZURE_LOCATION westeurope

azd up
```

`azd up` provisions the Static Web App, builds the site (`npm run docs:build`) and uploads the contents of `docs/.vitepress/dist`. The site URL is printed at the end.

> **Known azd quirk:** the very first `azd up` against a brand-new resource sometimes fails the deploy step with `unable to find a resource tagged with 'azd-service-name: web'`. This is an eventual-consistency race between resource creation and tag indexing, not a config issue. Just rerun `azd deploy` and it will pick up the existing resource.

### Live reference deployment

This repo's `main` branch is deployed to:

**https://salmon-mud-0a7765703.7.azurestaticapps.net/**

Running on the **Free** tier — €0 / month, 100 GB bandwidth, free managed SSL, 3 PR previews. Left running as a live demo.

## Day-to-day

```bash
azd deploy           # rebuild + push docs after every content change
azd monitor          # open the Static Web App in the Azure portal
azd down --purge     # tear it all down (zero-cost on Free tier, but tidy is tidy)
```

## Local development

```bash
npm install
npm run docs:dev      # http://localhost:5173
```

## Tier choice (Free vs Standard)

The template defaults to the **Free** tier, which is sufficient for the vast majority of documentation, marketing and personal sites.

| Capability | Free | Standard |
| --- | --- | --- |
| Price | **€0 / month** | ~€9 / month per app + bandwidth overage |
| Bandwidth included | 100 GB / month | 100 GB / month |
| Storage per app | 250 MB | 500 MB |
| Custom domains per app | 2 | 5 |
| Free managed SSL | Yes | Yes |
| Staging / preview environments per app | 3 | 10 |
| SLA | None | 99.95% |
| Authentication providers | Built-in only (GitHub, Entra ID) | Built-in **plus** custom OIDC, custom roles, invitations |
| Bring your own Functions backend | No | Yes |
| Private endpoints / VNet integration | No | Yes |
| Enterprise-grade edge (multi-region) | No | Yes |

> Pricing is indicative — see the [official Static Web Apps pricing page](https://azure.microsoft.com/pricing/details/app-service/static/) for current numbers in your region.

### When to stay on Free

- Documentation sites, blogs, marketing pages, landing pages
- Personal projects and portfolios
- Internal tools where the SLA isn't required
- Anything where you don't need private networking or BYO Functions

### When to switch to Standard

```bash
azd env set SWA_SKU Standard
azd up
```

Pick Standard when **any** of the following apply:

- You need an SLA
- You need more than 2 custom domains
- Your built site exceeds 250 MB
- You want to attach your own Azure Functions / API Management / Container App as the backend
- You need private endpoints or to restrict access by IP
- You need custom authentication (Auth0, Okta, Entra B2C with custom claims)
- You need more than 3 PR preview environments concurrently

You can switch tiers in place — `azd up` after changing `SWA_SKU` updates the existing resource without losing your custom domains.

## CI/CD

```bash
azd pipeline config
```

This creates a User-Assigned Managed Identity in Azure with a federated credential for the repository, writes the OIDC variables to GitHub (no client secret), and adds [`.github/workflows/azure-dev.yml`](./.github/workflows/azure-dev.yml). Every push to `main` then runs `azd provision && azd deploy` automatically.

### PR preview environments

azd handles main-branch deploys, but it can't drive Static Web Apps' [preview environments](https://learn.microsoft.com/azure/static-web-apps/preview-environments) (each PR getting its own URL). For that the repo also ships [`.github/workflows/swa-pr-preview.yml`](./.github/workflows/swa-pr-preview.yml), which uses `Azure/static-web-apps-deploy@v1`. Enable it once:

```bash
# Get the SWA deployment token
az staticwebapp secrets list \
  --name $(azd env get-value AZURE_STATIC_WEB_APP_NAME 2>/dev/null || echo "<your-swa-name>") \
  --resource-group $(azd env get-value AZURE_RESOURCE_GROUP) \
  --query "properties.apiKey" -o tsv | gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN
```

Until that secret exists the workflow no-ops, so first-time forks don't get a red X.

### Other CI

| Workflow | Trigger | Purpose |
| --- | --- | --- |
| [`link-check.yml`](./.github/workflows/link-check.yml) | PR + weekly | Lychee link checker over all `.md` files |
| [`codeql.yml`](./.github/workflows/codeql.yml) | PR, push, weekly | GitHub CodeQL (JS/TS + Actions) |
| [`scorecard.yml`](./.github/workflows/scorecard.yml) | push + weekly | OpenSSF Scorecard supply-chain analysis |

PR preview deploys also run a [Lighthouse audit](./.github/lighthouserc.json) against the preview URL (results posted to the run summary).

## What's not in this template

By design, this template has **no** backend. If you later need APIs:

- For a small managed API, add an Azure Functions app and use the SWA [linked backend](https://learn.microsoft.com/azure/static-web-apps/apis-functions) feature (Standard tier required for BYO Functions).

## Customise

- Update `title`, `description`, `head` OG tags and `sitemap.hostname` in [`docs/.vitepress/config.mts`](./docs/.vitepress/config.mts).
- If you fork this repo, search-replace `Digvijay/aswa-vitepress-starter-kit` with your own `owner/repo` in the docs and the VitePress nav.
- Add or remove pages under [`docs/guide/`](./docs/guide/) and update the `sidebar` in `config.mts` to match.
- Custom domain: see [Set up a custom domain in Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/custom-domain).

## Troubleshooting

**`azd up` fails at the deploy step on a brand-new resource** with `unable to find a resource tagged with 'azd-service-name: web'`. Eventual-consistency race between resource creation and tag indexing. Rerun `azd deploy`.

**Build chunk-size warning** (`Some chunks are larger than 500 kB`). Comes from the Mermaid bundle. Harmless for a docs site — ignore, or remove `vitepress-plugin-mermaid` from [`package.json`](./package.json) and [`docs/.vitepress/config.mts`](./docs/.vitepress/config.mts) if you don't need Mermaid.

**`azd pipeline config` fails with "insufficient privileges to create application"**. Your tenant blocks self-service Entra app creation. Either ask an admin to create the User-Assigned Managed Identity + federated credential once, or skip OIDC and use only the [`swa-pr-preview.yml`](./.github/workflows/swa-pr-preview.yml) workflow with the SWA deployment token (set `AZURE_STATIC_WEB_APPS_API_TOKEN` and broaden its triggers to include `push`).

**The PR-preview workflow does nothing.** Expected until you set the `AZURE_STATIC_WEB_APPS_API_TOKEN` repo secret — see the CI/CD section above.

**PR preview fails with `mcr.microsoft.com/appsvc/staticappsclient:stable: ... 403 Forbidden`.** Transient Microsoft Container Registry hiccup — the `Azure/static-web-apps-deploy@v1` action can't pull its upload-client image. Re-run the failed job (`gh run rerun <id> --failed`) and it usually clears immediately.

## License

MIT — see [LICENSE](./LICENSE).

## Cleanup

```bash
azd down --purge
```
