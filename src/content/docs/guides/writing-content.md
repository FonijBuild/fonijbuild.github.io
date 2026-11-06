---
title: Writing content
description: Conventions for authoring and organizing Markdown documentation.
sidebar:
  order: 1
---

Keep documentation close to the subject it explains, use clear page titles, and prefer small focused pages over very long catch-all documents.

## Frontmatter

Every page must include a title. A description is strongly recommended:

```md
---
title: API authentication
description: Configure and use API authentication.
---
```

Useful optional fields include `draft`, `sidebar`, `tableOfContents`, and `template`.

## Organize by intent

A practical structure is:

```text
src/content/docs/
├── getting-started.md
├── tutorials/
├── guides/
├── reference/
└── concepts/
```

Use directories only when they make navigation easier. Starlight can generate sidebar navigation directly from this filesystem structure.

## Links

Prefer relative links between documentation pages:

```md
See [Deployment](./deployment/).
```

Relative links continue to work when the site is deployed under a GitHub Pages repository subpath.

## Code examples

Use fenced code blocks with a language identifier:

````md
```ts
export function greet(name: string) {
  return `Hello ${name}`;
}
```
````

## Draft pages

Keep unfinished pages in the repository without publishing them:

```md
---
title: Upcoming feature
draft: true
---
```

Draft pages are excluded from production builds.

## When to use MDX

Use plain Markdown by default. Introduce MDX only when a page genuinely needs imported components or richer interactive content. Reusable content components live in `src/components/content/`; see [Custom components](./custom-components/) for the recommended pattern.
