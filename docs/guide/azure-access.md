# Azure access

This template is intentionally minimal — there is no managed identity, no database, no quota fight.

- An Azure subscription
- **Contributor** on the target resource group (or the subscription, if you want `azd` to create the RG)
- That's it

> No User Access Administrator, no Owner, no role assignments, no Functions quota, no managed-identity tenant policy. Static Web Apps Free tier has no per-region quota.
