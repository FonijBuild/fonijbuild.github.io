---
title: Web App
description: Build Your Own Web App
---

# Tool To Use

| Tools                | Responsibility          |
| -------------------- | ----------------------- |
| Next.js              | Application framework   |
| TypeScript           | Type safety             |
| Node.js              | Server runtime          |
| pnpm                 | Dependency management   |
| Tailwind CSS         | Styling                 |
| shadcn/ui + Radix UI | Reusable components     |
| Zod                  | Schema validation       |
| Zustand              | Complex client state    |
| Vitest               | Unit/component tests    |
| Playwright           | Browser testing (E2E)   |
| GitHub Actions       | Automated checks, CI/CD |

# Project Structure

```text
your-web-app/
│
├── public/
│ ├── images/
│ ├── icons/
│ └── fonts/
│
├── src/
│ ├── app/
│ │ ├── (marketing)/
│ │ │ ├── page.tsx
│ │ │ └── about/
│ │ │ └── page.tsx
│ │ │
│ │ ├── (auth)/
│ │ │ ├── login/
│ │ │ │ └── page.tsx
│ │ │ └── register/
│ │ │ └── page.tsx
│ │ │
│ │ ├── (dashboard)/
│ │ │ └── dashboard/
│ │ │ └── page.tsx
│ │ │
│ │ ├── api/
│ │ │ └── health/
│ │ │ └── route.ts
│ │ │
│ │ ├── layout.tsx
│ │ ├── globals.css
│ │ ├── loading.tsx
│ │ ├── error.tsx
│ │ ├── not-found.tsx
│ │ ├── robots.ts
│ │ └── sitemap.ts
│ │
│ ├── components/
│ │ ├── ui/
│ │ ├── layout/
│ │ └── shared/
│ │
│ ├── features/
│ │ └── .gitkeep
│ │
│ ├── hooks/
│ │
│ ├── lib/
│ │ ├── api/
│ │ ├── env/
│ │ └── utils/
│ │
│ ├── providers/
│ │
│ ├── stores/
│ │
│ └── types/
│
├── tests/
│ ├── unit/
│ └── e2e/
│
├── docs/
│
├── .github/
│ └── workflows/
│
├── .env.example
├── .gitignore
├── .nvmrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── prettier.config.mjs
├── tsconfig.json
└── README.md
```

Directory Responsibility
app/ Routes, layouts, loading and error boundaries
components/ui/ Generic reusable UI components
components/layout/ Header, footer, sidebar, navigation
components/shared/ Application-wide reusable components
features/ Domain-specific features
hooks/ Reusable React hooks
lib/api/ Backend communication
lib/env/ Environment validation
lib/utils/ General utilities
providers/ React context providers
stores/ Client-side global state
types/ Shared application types
tests/ Automated tests

features/
products/
components/
product-card.tsx
product-list.tsx

    hooks/
      use-products.ts

    api/
      products-api.ts

    schemas/
      product-schema.ts

    types/
      product.ts

# Install prerequisites and initialize the repository

> Run all the commands in the project's root.

1. First, install [Node.js](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation).

2. Initialize Next.js project:

```bash
pnpm create next-app@latest your-web-app \
  --ts \
  --eslint \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-pnpm

cd your-web-app
git init
```

# Add UI layer

1. Initialize `shadcn/ui` and add ui-related dependencies:

```bash
pnpm dlx shadcn@latest init

pnpm add lucide-react clsx tailwind-merge class-variance-authority
```

2. Add commonly useful components:

```bash
pnpm dlx shadcn@latest add button input textarea label card dialog dropdown-menu select checkbox form skeleton tooltip sonner
```

# Implement the API communication layer

1. Install zod:

```bash
pnpm add zod
```

2. Create the API client `src/shared/api/server.ts`:

```ts
import "server-only";

import { serverEnv } from "@/lib/env/server";

interface ApiOptions extends RequestInit {
  // Add project-specific options here if needed.
}

export async function apiServer<T>(
  path: string,
  options?: ApiOptions,
): Promise<T> {
  const response = await fetch(`${serverEnv.API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Accept: "application/json",
      ...options?.headers,
    },
    cache: options?.cache ?? "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
```

3. Generate API types:

- Instead of manually duplicating API interfaces between frontend and backend, use an API contract.

For REST APIs:

- openapi-typescript
- openapi-fetch

For GraphQL:

- GraphQL Code Generator

For example, if your backend exposes an OpenAPI specification:

```bash
pnpm add openapi-fetch
pnpm add -D openapi-typescript
```

Generate types:

```bash
pnpm exec openapi-typescript \
  http://localhost:8000/openapi.json \
  -o src/lib/api/schema.d.ts

```
