# High-level flow

What it takes to put a documentation site on Azure Static Web Apps without a template:

1. Pick and scaffold a static-site generator (VitePress, Astro, Hugo, MkDocs…)
2. Write some content and prove the build works locally
3. Create the Static Web App resource (portal, CLI or Bicep)
4. Wire up GitHub Actions to build and deploy on every push
5. Add a custom domain, security headers and SPA fallback
6. Decide what to do about analytics and uptime monitoring

Each step has a sensible default. Each one is also a place where most teams accidentally pick the wrong default.
