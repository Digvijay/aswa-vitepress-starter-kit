// =============================================================================
// ASWA VitePress starter kit - infrastructure
//
// Provisions a single Azure Static Web App. No backend, no database, no
// managed identity required.
//
// SKU defaults to 'Free'. Set `azd env set SWA_SKU Standard` to upgrade.
// =============================================================================

targetScope = 'resourceGroup'

@minLength(1)
@maxLength(64)
@description('Name of the azd environment. Used to derive resource names.')
param environmentName string

@description('Azure region for all resources.')
param location string = resourceGroup().location

@description('SKU for the Static Web App. Defaults to Free.')
@allowed([
  'Free'
  'Standard'
])
param staticWebAppSku string = 'Free'

@description('Tags applied to every resource.')
param tags object = {
  'azd-env-name': environmentName
}

var resourceToken = toLower(uniqueString(subscription().id, resourceGroup().id, environmentName))
var staticWebAppName = 'stapp-${resourceToken}'

module staticWebApp 'br/public:avm/res/web/static-site:0.9.4' = {
  name: 'staticWebApp'
  params: {
    name: staticWebAppName
    location: location
    tags: union(tags, {
      'azd-service-name': 'web'
    })
    sku: staticWebAppSku
    // Allow GitHub Actions / azd to push the build output.
    allowConfigFileUpdates: true
  }
}

@description('Default hostname of the Static Web App.')
output WEB_URI string = 'https://${staticWebApp.outputs.defaultHostname}'

@description('Resource ID of the Static Web App.')
output WEB_RESOURCE_ID string = staticWebApp.outputs.resourceId

@description('Selected SKU.')
output SWA_SKU string = staticWebAppSku
