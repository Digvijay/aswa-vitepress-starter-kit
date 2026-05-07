import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: 'ASWA + VitePress starter kit',
  description: 'A minimal azd template for deploying a VitePress site to Azure Static Web Apps with one Bicep file built on Azure Verified Modules.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    // Update if you wire up a custom domain.
    hostname: 'https://salmon-mud-0a7765703.7.azurestaticapps.net'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0078d4' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'ASWA + VitePress starter kit' }],
    ['meta', { property: 'og:description', content: 'Deploy a VitePress site to Azure Static Web Apps with one azd command.' }],
    ['meta', { property: 'og:image', content: 'https://salmon-mud-0a7765703.7.azurestaticapps.net/og.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/customer-needs' },
      { text: 'GitHub', link: 'https://github.com/Digvijay/aswa-vitepress-starter-kit' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Section 1 — What you need',
          items: [
            { text: 'People and skills', link: '/guide/customer-needs' },
            { text: 'Azure access', link: '/guide/azure-access' },
            { text: 'GitHub access', link: '/guide/github-access' },
            { text: 'Workstation tooling', link: '/guide/workstation-tooling' }
          ]
        },
        {
          text: 'Section 2 — Building by hand',
          items: [
            { text: 'High-level flow', link: '/guide/manual-flow' },
            { text: 'Step by step', link: '/guide/manual-steps' },
            { text: 'What is still missing', link: '/guide/manual-gaps' }
          ]
        },
        {
          text: 'Section 3 — Walkthrough',
          items: [
            { text: 'Two commands', link: '/guide/three-commands' },
            { text: 'Architecture', link: '/guide/architecture' },
            { text: 'Repository layout', link: '/guide/repo-layout' },
            { text: 'Bicep on AVM', link: '/guide/bicep-avm' },
            { text: 'Authoring content', link: '/guide/identity-cosmos' },
            { text: 'Tier choice (Free vs Standard)', link: '/guide/polyglot' },
            { text: 'CI/CD without secrets', link: '/guide/cicd' },
            { text: 'Monitoring', link: '/guide/observability' }
          ]
        },
        {
          text: 'Section 4 — Comparison',
          items: [
            { text: 'Template vs. manual build', link: '/guide/comparison' }
          ]
        }
      ]
    },
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/Digvijay/aswa-vitepress-starter-kit/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Digvijay/aswa-vitepress-starter-kit' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Built with VitePress on Azure Static Web Apps'
    }
  },
  mermaid: {
    theme: 'dark'
  }
}))

