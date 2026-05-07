# Bicep on AVM

The entire infrastructure is one Bicep file using a single [Azure Verified Module](https://aka.ms/avm):

```bicep
module staticWebApp 'br/public:avm/res/web/static-site:0.9.4' = {
  name: 'staticWebApp'
  params: {
    name: 'stapp-${resourceToken}'
    location: location
    tags: union(tags, { 'azd-service-name': 'web' })
    sku: staticWebAppSku            // 'Free' (default) or 'Standard'
    allowConfigFileUpdates: true    // lets the GH Action push staticwebapp.config.json
  }
}
```

## Why AVM

- **Versioned and signed.** `0.9.4` is immutable; you opt in to upgrades.
- **Maintained by Microsoft.** Fixes, new properties, and best-practice defaults arrive without you having to track API versions.
- **Tags, telemetry, and diagnostic settings** are wired by the module — there is no hand-written `Microsoft.Web/staticSites` block to drift.

## The `azd-service-name` tag

The `azd-service-name: 'web'` tag is how `azd` finds the resource to deploy to. It maps to `services.web` in [`azure.yaml`](https://github.com/Digvijay/aswa-vitepress-starter-kit/blob/main/azure.yaml). Change one, change the other.
