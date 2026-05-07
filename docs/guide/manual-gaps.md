# What is still missing

After the manual path you have a working site, but:

- No Bicep — the second environment is hand-built again, and there's no record of the SKU, tags, or app settings
- The GitHub Actions workflow is whatever the portal generated; if your build folder ever moves you edit YAML by hand
- `staticwebapp.config.json` is a copy-paste from a blog post you half remember
- No telemetry, so you don't know if anyone is reading the site
- No PR previews unless someone remembers to add `pull_request` triggers correctly
- Switching to Standard tier (custom auth, private endpoints, BYO Functions) means clicking through the portal and crossing your fingers

> Production work begins where most tutorials end. This template starts there.
