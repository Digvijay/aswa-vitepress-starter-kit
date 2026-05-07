# Workstation tooling

Windows (`winget`):

```powershell
winget install Microsoft.AzureCLI
winget install Microsoft.Azd
winget install OpenJS.NodeJS.LTS    # Node 20+
winget install GitHub.cli           # optional
```

macOS (`brew`):

```bash
brew install azure-cli azd node gh
```

Linux: see the per-tool install guides — [`azd`](https://learn.microsoft.com/azure/developer/azure-developer-cli/install-azd), [Node.js](https://nodejs.org/en/download/package-manager).

That's it. No Functions Core Tools, no SWA CLI, no Python or .NET SDK — VitePress is pure Node and runs locally with `npm run docs:dev`.
