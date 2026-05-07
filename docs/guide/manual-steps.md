# Step by step

```bash
# 1. Resource group
az group create -n rg-mydocs -l westeurope

# 2. Scaffold VitePress
npm create vitepress@latest docs
cd docs && npm install
npm run docs:dev          # http://localhost:5173

# 3. Create the Static Web App linked to GitHub
az staticwebapp create \
  -n stapp-mydocs -g rg-mydocs -l westeurope \
  --source https://github.com/me/mydocs --branch main \
  --app-location "/" \
  --output-location "docs/.vitepress/dist" \
  --login-with-github

# 4. Edit the auto-generated workflow because the defaults assume
#    your output is in /build, not docs/.vitepress/dist

# 5. Add staticwebapp.config.json for SPA fallback and security headers

# 6. Configure custom domain + DNS
```

It works. It is also six manual steps you'll repeat for every new environment, and the IaC story is "hope nobody deletes the resource group".
