# People and skills

What one person needs to ship a production VitePress site on Azure with this template.

- **Content**: Markdown — that is the entire authoring surface
- **Optional**: Vue 3 single-file components if you want custom theme overrides
- **Cloud fundamentals**: resource groups, basic Bicep, what a CDN edge is
- **Source control**: Git, GitHub, GitHub Actions
- **Command-line familiarity**: `azd`, `gh` (optional), `npm`

This is a one-person job. A technical writer, a developer advocate, or a single full-stack developer can take it from `azd init` to a custom domain in an afternoon.

> Need an API later? Stay on this template until you actually need one. Then add an Azure Functions app and attach it via the SWA [linked backend](https://learn.microsoft.com/azure/static-web-apps/apis-functions) (Standard tier required for BYO Functions).
