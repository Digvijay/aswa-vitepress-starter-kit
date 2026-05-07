# Authoring content

Everything under `docs/` is just Markdown. Add a file, link to it from the sidebar in `docs/.vitepress/config.mts`, push.

```text
docs/
├─ index.md                  # the home / landing page
└─ guide/
   ├─ my-new-page.md         # add me
   └─ …
```

```ts
// docs/.vitepress/config.mts
sidebar: {
  '/guide/': [
    {
      text: 'My section',
      items: [
        { text: 'My new page', link: '/guide/my-new-page' }
      ]
    }
  ]
}
```

## Built-in features you get for free

- **Client-side search** — `search: { provider: 'local' }`. Works offline, no Algolia account.
- **Dark mode** — toggled in the nav, respects system preference.
- **Last updated** timestamps from git history (`lastUpdated: true`).
- **Mermaid diagrams** — fence with ` ```mermaid ` and they render at build time via `vitepress-plugin-mermaid`.
- **Vue components in Markdown** — import `.vue` files inside `.md` if you outgrow plain prose.

## Local preview

```bash
npm run docs:dev      # http://localhost:5173 with hot reload
npm run docs:build    # full production build into docs/.vitepress/dist
npm run docs:preview  # serve the built site locally
```
