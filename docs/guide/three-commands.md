# Two commands

```bash
azd init -t Digvijay/aswa-vitepress-starter-kit
azd up
```

That's the whole deployment. You get the Static Web App on the **Free** tier, the VitePress site built from `docs/`, and a public HTTPS URL on `*.azurestaticapps.net`.

## Optional knobs

```bash
azd env set AZURE_LOCATION westeurope   # pick a region
azd env set SWA_SKU Standard            # upgrade tier in place
azd pipeline config                     # add OIDC-federated CI/CD
```

Nothing else. There is no backend language to choose, no database to seed, no managed identity to wire.
