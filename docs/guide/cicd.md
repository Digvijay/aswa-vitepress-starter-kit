# CI/CD without secrets

```bash
azd pipeline config
```

This one command:

- Creates an Entra application and a federated credential scoped to your repository
- Writes the GitHub Actions workflow under `.github/workflows/`
- Sets the OIDC variables (`AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_SUBSCRIPTION_ID`, `AZURE_ENV_NAME`, `AZURE_LOCATION`)
- Wires the workflow so pull requests get a Static Web Apps [preview environment](https://learn.microsoft.com/azure/static-web-apps/preview-environments) on a unique URL, torn down on close

No client secret is created. Nothing to rotate. The committed skeleton workflow under [`.github/workflows/`](https://github.com/Digvijay/aswa-vitepress-starter-kit/tree/main/.github/workflows) is the *deployment-token* fallback if you cannot use OIDC — it is guarded so it no-ops until the secret exists.
