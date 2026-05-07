# Template vs. manual build

| Concern | Manual | This template |
| --- | --- | --- |
| Provisioning | Portal or scripts | `azd up` |
| IaC | Hand-written or none | AVM, versioned (`avm/res/web/static-site:0.9.4`) |
| CI/CD | Hand-edited YAML | `azd pipeline config` (OIDC, no secrets) |
| PR previews | Easy to misconfigure | On by default |
| Routing & headers | Copy-pasted snippet | `staticwebapp.config.json` shipped with sane defaults |
| Tier change | Recreate the resource | `azd env set SWA_SKU Standard && azd up` |
| Onboarding | Local installs | Just Node + azd |

---

## Where to next

- Need an API later? Add an Azure Functions app and attach it via the SWA [linked backend](https://learn.microsoft.com/azure/static-web-apps/apis-functions) (Standard tier required for BYO Functions).
- Custom domain: [Set up a custom domain in Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/custom-domain).
- Source: [github.com/Digvijay/aswa-vitepress-starter-kit](https://github.com/Digvijay/aswa-vitepress-starter-kit)
