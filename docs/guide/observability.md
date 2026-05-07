# Monitoring

A static site is the easiest thing in Azure to monitor: there is no origin, no runtime, no failure modes beyond "the build was bad" or "DNS is wrong".

## What you get out of the box

The Static Web App resource exposes built-in metrics in the Azure Portal:

- Request count and bandwidth per environment (production + previews)
- Custom domain SSL expiry
- Deployment history

```bash
az staticwebapp show -n <name> -g <rg>
az staticwebapp environment list -n <name> -g <rg>
```

## Adding analytics

For visitor analytics, drop a privacy-friendly script tag into `docs/.vitepress/config.mts`:

```ts
export default defineConfig({
  head: [
    ['script', {
      defer: '',
      'data-domain': 'docs.example.com',
      src: 'https://plausible.io/js/script.js'
    }]
  ]
})
```

If you need full RUM and exception tracking, the [Application Insights JavaScript SDK](https://learn.microsoft.com/azure/azure-monitor/app/javascript-sdk) plugs in the same way — but for a documentation site it is usually overkill.
