# Repository layout

```text
.
├─ azure.yaml                       azd service map (host: staticwebapp)
├─ package.json                     vitepress + npm scripts
├─ infra/
│  ├─ main.bicep                   Static Web App via avm/res/web/static-site
│  └─ main.parameters.json
├─ docs/
│  ├─ index.md                     Hero / landing page
│  ├─ guide/                       Markdown content
│  ├─ public/
│  │  └─ staticwebapp.config.json  SPA fallback + security headers
│  └─ .vitepress/
│     └─ config.mts                Site config (nav, sidebar, theme)
└─ .github/workflows/
   └─ azure-static-web-apps.yml    CI/CD (replaced by azd pipeline config)
```

No `src/`. No `api/`. No language-specific folders. The whole template is roughly **15 files**.
