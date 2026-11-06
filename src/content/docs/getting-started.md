---
title: Getting started
description: Install dependencies, start the local site, and add your first documentation page.
sidebar:
  order: 1
---

This foundation is designed for documentation, product knowledge, handbooks, and other Markdown-first static sites.

## Prerequisites

- Node.js 22.22.0 or newer. Node.js 24 is recommended.
- pnpm 12.14.0, or Corepack enabled so the pinned package manager can be used.

## Install

```bash
corepack enable
pnpm install
```

The first install creates `pnpm-lock.yaml`. Commit the lockfile so local and CI installs stay reproducible.

## Start development

```bash
pnpm dev
```

Astro will print the local URL, normally `http://localhost:4321`.

## Add a page

Create `src/content/docs/my-page.md`:

```md
---
title: My page
description: A short description for search engines and previews.
---

# My page

Write documentation here.
```

Starlight automatically turns the file into a route and includes it in the generated navigation.

## Validate before pushing

```bash
pnpm check
```

The check command verifies formatting, runs Astro diagnostics, and performs a production build.

## Next steps

- Read [Writing content](./guides/writing-content/).
- Review [Deployment](./guides/deployment/).
- See the [Project structure](./reference/project-structure/).
