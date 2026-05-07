# Tier choice (Free vs Standard)

The template defaults to **Free**, which fits almost every documentation, marketing, and personal site.

```bash
azd env set SWA_SKU Standard   # upgrade in place; azd up applies it
```

| Capability | Free | Standard |
| --- | --- | --- |
| Price | **€0 / month** | ~€9 / month per app + bandwidth overage |
| Bandwidth included | 100 GB / month | 100 GB / month |
| Storage per app | 250 MB | 500 MB |
| Custom domains per app | 2 | 5 |
| Free managed SSL | Yes | Yes |
| PR preview environments per app | 3 | 10 |
| SLA | None | 99.95% |
| Auth providers | Built-in (GitHub, Entra) | Built-in **plus** custom OIDC, custom roles, invitations |
| BYO Functions / API Management / Container App backend | No | Yes |
| Private endpoints / VNet integration | No | Yes |
| Enterprise-grade global edge | No | Yes |

Pick **Standard** when *any* of these are true:

- You need an SLA
- You need more than 2 custom domains, or your build exceeds 250 MB
- You want to attach an Azure Functions / APIM / Container App backend
- You need private endpoints or IP restrictions
- You need custom auth (Auth0, Okta, Entra B2C with custom claims)
- You need more than 3 concurrent PR preview environments

> Pricing is indicative — see the [official Static Web Apps pricing page](https://azure.microsoft.com/pricing/details/app-service/static/) for current numbers in your region.
