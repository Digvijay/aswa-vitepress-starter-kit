---
layout: home

hero:
  name: ASWA + VitePress
  text: starter kit
  tagline: A minimal azd template — VitePress on Azure Static Web Apps, defined entirely with Azure Verified Modules. No backend, no secrets, free tier by default.
  actions:
    - theme: brand
      text: Get started
      link: /guide/customer-needs
    - theme: alt
      text: View on GitHub
      link: https://github.com/Digvijay/aswa-vitepress-starter-kit

features:
  - title: One command to deploy
    details: azd up provisions the Static Web App with a single Bicep file, builds the VitePress site, and uploads it to a global edge CDN.
  - title: Free tier by default
    details: €0 / month, 100 GB bandwidth, free managed SSL, and pull-request preview environments. Switch to Standard with one env var when you need an SLA or custom auth.
  - title: No secrets
    details: CI/CD uses GitHub OIDC federation via azd pipeline config. No deployment tokens to rotate, no service principals to manage.
  - title: Production-ready out of the box
    details: SPA fallback routing, security headers, long-cached hashed assets, built-in client-side search and dark mode.
---

## Agenda

1. What you need to deploy a Static Web App (skills, access, tooling)
2. Building one by hand — and why most teams stop short of production
3. End-to-end walkthrough of this template
4. Comparison: template vs. manual build
