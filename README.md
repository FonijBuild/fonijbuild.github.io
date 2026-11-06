<div align="center">

# Easy Starlight Docs Starter

**A production-ready Astro Starlight foundation for Markdown-first documentation, knowledge bases, and developer docs.**

[![Use this template](https://img.shields.io/badge/use%20this%20template-2EA44F?logo=github&logoColor=white)](https://github.com/FonijBuild/easy-starlight-docs-starter/generate)
[![Live Demo](https://img.shields.io/badge/live%20demo-GitHub%20Pages-222222?logo=githubpages&logoColor=white)](https://fonijbuild.github.io/easy-starlight-docs-starter/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)
![Starlight](https://img.shields.io/badge/Starlight-5B45FF)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)

[Documentation](https://github.com/FonijBuild/fonij-docs) · [Discussions](https://github.com/orgs/FonijBuild/discussions) · [Issues](https://github.com/FonijBuild/easy-django-api-starter/issues)

</div>

> “What do we build for, if not to lessen each other’s hardship?”

## Best for

- Developer and API documentation
- Product documentation and knowledge bases
- Open-source project documentation
- Engineering handbooks and internal knowledge
- Markdown-first static documentation sites
- Multilingual documentation, including RTL languages

**Not for:** CMS-heavy publishing platforms, application dashboards, or products that require a backend runtime for their primary experience.

## Baseline

- Astro + Starlight with Markdown and MDX authoring
- Built-in search, responsive navigation, syntax highlighting, and SEO foundations
- Light and dark themes with a compact theme toggle
- Internationalization with English and Persian examples
- RTL support for Persian and other right-to-left locales
- Reusable custom Astro components inside MDX
- Custom Starlight component overrides
- TypeScript 7 type-checking for `.ts` and `.astro` files
- Biome formatting and linting
- Static output with GitHub Pages deployment
- Zero-config GitHub Pages repository detection
- Spec-driven documentation workflow for AI coding agents

## Quick start

Preferred:

```bash
fonij create my-docs
```

Direct template use:

```bash
gh repo create my-docs \
  --template FonijBuild/easy-starlight-docs-starter \
  --public \
  --clone

cd my-docs
pnpm install
pnpm dev
```

The local development server is available at:

```text
http://localhost:4321/
```

## Content structure

English is the root locale and Persian content lives under `/fa/`.

```text
src/content/docs/
├── index.md
├── getting-started.md
├── guides/
├── reference/
└── fa/
    ├── index.md
    ├── getting-started.md
    ├── guides/
    └── reference/
```

Use Markdown for normal documentation:

```text
page.md
```

Use MDX only when the page needs custom components:

```text
page.mdx
```

Reusable content components belong in:

```text
src/components/content/
```

Starlight UI overrides belong in:

```text
src/components/starlight/
```

## Custom components

Create reusable Astro components under:

```text
src/components/content/
```

Then import them from an `.mdx` page:

```mdx
---
title: Architecture
---

import Callout from "../../../components/content/Callout.astro";

# Architecture

<Callout title="Important">
  Custom components can still contain **Markdown content**.
</Callout>
```

Prefer Astro components and static HTML. Add client-side JavaScript or another UI framework only when real interactivity requires it.

## Internationalization

UI translations live in:

```text
src/content/i18n/
├── en.json
└── fa.json
```

Documentation translations mirror the root documentation structure:

```text
src/content/docs/
└── fa/
```

Keep translated pages on matching slugs whenever possible so Starlight can correctly connect localized versions.

## Quality checks

Before merging changes:

```bash
pnpm check
```

The project quality gate covers:

- Biome formatting and linting
- TypeScript type-checking
- Astro component type-checking
- Production Astro build
- Starlight content and route validation

## Deployment

Push to `main` and the included GitHub Actions workflow builds and deploys the static site to GitHub Pages.

For a normal project repository:

```text
https://<owner>.github.io/<repository>/
```

For an `<owner>.github.io` repository:

```text
https://<owner>.github.io/
```

The starter derives the repository owner, repository name, site URL, and base path automatically during GitHub Actions builds.

No `.env`, `SITE_URL`, or `BASE_PATH` configuration is required for the standard GitHub Pages path.

For a custom domain, add:

```text
public/CNAME
```

containing the domain name.

## Project contract

- `.fonij/starter.json` describes this foundation to Fonij.
- `AGENTS.md` is the canonical repository contract for AI coding agents.
- `specs/` contains implementation-ready specifications and documentation plans.
- `src/content/docs/` contains published documentation.
- `src/content/i18n/` contains custom UI translations.
- `src/components/content/` contains author-facing MDX components.
- `src/components/starlight/` contains Starlight UI overrides.
- Keep documentation grounded in the actual project implementation.
- Keep specifications, implementation, and published documentation synchronized.
- Keep `pnpm check` green before merging changes.

## Contributing

Keep changes focused, preserve the starter's minimal architecture, and avoid adding dependencies or abstractions without a concrete need.

For bugs or proposals, use [Issues](https://github.com/FonijBuild/easy-starlight-docs-starter/issues). For broader questions and ideas, use [FonijBuild Discussions](https://github.com/orgs/FonijBuild/discussions).
