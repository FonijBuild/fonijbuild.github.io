---
title: Project structure
description: Reference for the folders and files in this documentation foundation.
sidebar:
  order: 1
---

```text
easy-starlight-docs-starter/
├── .fonij/
│   └── starter.json
├── .github/
│   └── workflows/
│       ├── check.yml
│       └── deploy-pages.yml
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── DEVELOPMENT.md
│   └── FONIJ_CATALOG.md
├── specs/
│   └── README.md
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── content/
│   │   │   ├── Callout.astro
│   │   │   └── README.md
│   │   └── starlight/
│   │       └── Footer.astro
│   ├── content/
│   │   └── docs/
│   ├── styles/
│   │   └── global.css
│   ├── content.config.ts
│   └── env.d.ts
├── public/
├── AGENTS.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## `src/content/docs/`

This is the primary authoring surface. Markdown, MDX, and Markdoc files placed here become documentation pages.

## `src/components/content/`

Reusable Astro components that authors can import into `.mdx` documentation pages. Plain `.md` pages remain the default for content that does not need components.

## `src/components/starlight/`

Overrides for Starlight's own interface. The included `Footer.astro` reuses Starlight's default footer and appends the FonijBuild credit.

## `src/content.config.ts`

Defines Starlight's `docs` content collection using its official loader and schema.

## `astro.config.mjs`

Contains Starlight configuration and deployment-aware `site` and `base` settings.

## `.fonij/starter.json`

Identifies this repository as the `docs-starlight` Fonij foundation and declares the template version.
