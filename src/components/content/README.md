# Content components

Put reusable documentation components in this directory.

Use plain Markdown (`.md`) for normal pages. When a page needs a custom component, rename it to `.mdx`, import the component, and render it in the content.

Example:

```mdx
---
title: Component example
---

import Callout from '../../../components/content/Callout.astro';

<Callout title="Reusable UI">
  This content is still authored with **Markdown** inside the component.
</Callout>
```

Keep components documentation-focused and server-rendered by default. Add a UI framework only when a component genuinely needs client-side interactivity.
