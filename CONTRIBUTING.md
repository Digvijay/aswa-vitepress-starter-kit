# Contributing

Thanks for taking the time to contribute! This is a small starter template, so the bar is simple: changes should make the template **easier to use** or **more correct**, without adding scope.

## Ground rules

- **Stay minimal.** No backends, no databases, no auth providers. If you want those, fork.
- **One PR, one concern.** Easier to review, easier to revert.
- **Keep the deploy story `azd up`.** If a change requires extra manual steps, document them in the README.
- **Free tier must keep working.** All defaults must remain €0/month.

## Local setup

```bash
npm ci
npm run docs:dev      # http://localhost:5173
npm run docs:build    # full production build
```

Or open the repo in a Dev Container / GitHub Codespace — Node 20, azd, Azure CLI and the GitHub CLI are preinstalled.

## Before you open a PR

1. `npm run docs:build` succeeds with no new warnings.
2. If you changed Bicep, run `azd provision --preview` (or `az deployment group what-if`) against a scratch resource group.
3. If you renamed or moved a doc page, update the sidebar in [`docs/.vitepress/config.mts`](./docs/.vitepress/config.mts).
4. Update the README if you changed how someone deploys, customises, or troubleshoots the template.

## Reporting issues

Please include:

- `azd version`, `node --version`, `az --version`
- The full command you ran and the full error output
- Whether you're on Free or Standard SKU

## License

By contributing you agree that your contributions are licensed under the [MIT License](./LICENSE).
