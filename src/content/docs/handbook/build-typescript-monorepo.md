---
title: Typescript Monorepo
description: Build Your Own Typescript Monorepo
---

# Tools To Use

| Tool       | Responsibility                                     |
| ---------- | -------------------------------------------------- |
| pnpm       | Dependency management and workspace linking        |
| Turborepo  | Task orchestration, build ordering and caching     |
| TypeScript | Type safety throughout the repository              |
| Next.js    | Frontend with App Router                           |
| Fastify    | Backend HTTP API                                   |
| Zod        | Runtime validation and shared data contracts       |
| Biome      | Linting and formatting                             |
| tsx        | Fast TypeScript execution and development watching |

# Project Structure

```
your-monorepo/
├── apps/
│ ├── web/
│ │ ├── src/
│ │ │ └── app/
│ │ ├── next.config.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ └── api/
│ ├── src/
│ │ └── server.ts
│ ├── package.json
│ └── tsconfig.json
│
├── packages/
│ └── shared/
│   ├── src/
    │   ├── contracts/           # Shared API contracts
    │   │   ├── health.ts
    │   │   ├── auth.ts
    │   │   └── user.ts
    │   │
    │   ├── types/               # Standalone shared TS types
    │   │   ├── common.ts
    │   │   └── pagination.ts
    │   │
    │   ├── constants/           # Shared constants
    │   │   ├── api.ts
    │   │   └── index.ts
    │   │
    │   ├── utils/               # Pure shared utilities
    │   │   └── index.ts
    │   │
    │   └── index.ts             # Public package exports
    │
    ├── package.json
    └── tsconfig.json
│
├── biome.json
├── tsconfig.base.json
├── pnpm-workspace.yaml
├── turbo.json
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

# Install prerequisites and initialize the repository

> Run all the commands in the project's root.

1. First, install [Node.js](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation).

2. Create the Repository:

```bash
mkdir your-monorepo
cd your-monorepo

git init
pnpm init
```

3. Update the root `package.json`:

```json
{
  "name": "your-monorepo",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter @repo/shared build && turbo run dev",
    "build": "turbo run build",
    "check-types": "turbo run check-types",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write ."
  }
}
```

4. Create this file at the root: `pnpm-workspace.yaml`

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

5. Create the initial directories:

```bash
mkdir -p apps/api/src
mkdir -p packages/shared/src
```

6. Add a root `.gitignore`:

```txt

# Dependencies
node_modules/

# Build outputs
dist/
.next/
.turbo/
*.tsbuildinfo

# Environment variables
.env
.env.*
!.env.example

# OS
.DS_Store

# Logs
*.log
```

# Web

1. Initialize the Next.js frontend:

```bash
pnpm create next-app@latest apps/web \
  --ts \
  --tailwind \
  --app \
  --src-dir \
  --no-linter \
  --use-pnpm \
  --skip-install \
  --disable-git \
  --yes
```

2. Edit `apps/web/package.json`:

```json
{
  "name": "@repo/web",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "check-types": "next typegen && tsc --noEmit"
  }
  // keep other lines the same
}
```

# Shared Package

1. Create the shared TypeScript configuration, `tsconfig.base.json` at repository root:

```json
// Each application can extend this common TypeScript rules while defining its own module resolution and compilation settings
{
  "compilerOptions": {
    "target": "ES2022",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "resolveJsonModule": true
  }
}
```

2. Create `packages/shared/package.json`:

```json
{
  "name": "@repo/shared",
  "version": "0.0.0",
  "private": true,
  "type": "module", // uses native ESM
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  // defines the public API of your package
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    }
  },
  "files": ["dist"], // contains compiled JavaScript and TypeScript declarations
  "scripts": {
    "dev": "tsc --watch --preserveWatchOutput", // recompiles automatically when shared source files change
    "build": "tsc -p tsconfig.json",
    "check-types": "tsc --noEmit"
  }
}
```

3. Configure TypeScript in `packages/shared/tsconfig.json`:

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true,
    "declarationMap": true, // helps your editor navigate from imports to the original shared TypeScript source
    "sourceMap": true,
    "noEmitOnError": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

4. Add shared code and use Zod for a simple API response contract `packages/shared/src/index.ts`:

```ts
import { z } from "zod";

// validates data at runtime
export const healthResponseSchema = z.object({
  status: z.literal("ok"),
  service: z.literal("api"),
});

// provides TypeScript type checking
export type HealthResponse = z.infer<typeof healthResponseSchema>;
```

# Backend

1. Initialize the Fastify backend and create `apps/api/package.json`

```json
{
  "name": "@repo/api",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    // --include watch path also makes the Fastify server restart when the compiled shared package changes
    "dev": "tsx watch --include \"../../packages/shared/dist/**/*\" src/server.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/server.js",
    "check-types": "tsc --noEmit"
  }
}
```

2. Configure TypeScript `apps/api/tsconfig.json`:

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "types": ["node"],
    "sourceMap": true,
    "noEmitOnError": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

3. Create the Fastify application:

- `apps/api/src/app.ts`

```ts
import Fastify from "fastify";
import { healthResponseSchema } from "@repo/shared";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.get("/health", async () => {
    return healthResponseSchema.parse({
      status: "ok",
      service: "api",
    });
  });

  return app;
}
```

- `apps/api/src/server.ts`:

```ts
import { buildApp } from "./app.js";

const app = buildApp();

const port = Number(process.env.PORT ?? 4000);

try {
  await app.listen({
    port,
    host: "0.0.0.0",
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
```

# Install Dependencies

1. Install dependencies across the workspace:

```bash
# Root tooling
pnpm add -Dw turbo @biomejs/biome

# Shared Package
pnpm --filter @repo/shared add zod
pnpm --filter @repo/shared add -D typescript

# Fastify API
pnpm --filter @repo/api add fastify
pnpm --filter @repo/api add -D typescript @types/node tsx

# Link the shared package to both applications
pnpm --filter @repo/web add '@repo/shared@workspace:*'
pnpm --filter @repo/api add '@repo/shared@workspace:*'

# After running this command, You'll have one workspace lockfile at the repository root
pnpm install
```

# Turborepo

1. Create `turbo.json` at the root:

```json
{
  "$schema": "https://turborepo.dev/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**", "!.next/dev/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "check-types": {
      "dependsOn": ["^build"],
      "outputs": []
    }
  }
}
```

# Biome

1. Initialize:

```bash
pnpm biome init
```

2. Add tailwndcss config to `biome.json`:

```json
"css": {
  "parser": {
    "tailwindDirectives": true
  }
}
```

# Connect Next.js to Fastify

1. Replace `apps/web/next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  allowedDevOrigins: ["127.0.0.1"],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${
          process.env.API_INTERNAL_URL ?? "http://localhost:4000"
        }/:path*`,
      },
    ];
  },
};

export default nextConfig;
```

2. Create `apps/web/.env.local`:

```txt
API_INTERNAL_URL=http://localhost:4000
```

3. Replace `apps/web/src/app/page.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { healthResponseSchema, type HealthResponse } from "@repo/shared";

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function checkHealth() {
      try {
        const response = await fetch("/api/health", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = healthResponseSchema.parse(await response.json());

        setHealth(data);
      } catch {
        if (!controller.signal.aborted) {
          setError("Could not connect to the API");
        }
      }
    }

    void checkHealth();

    return () => controller.abort();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">TypeScript Monorepo</h1>

      <p className="mt-4">
        API Status:{" "}
        {error ??
          (health ? `${health.service}: ${health.status}` : "Loading...")}
      </p>
    </main>
  );
}
```

4. Run the complete monorepo:

```bash
pnpm dev
```

- and test everything:

  Web: http://127.0.0.1:3000/
  API: http://127.0.0.1:4000/health

# Verify production builds

1. Run:

```bash
pnpm lint:fix
pnpm check-types
pnpm build
```

- After a successful build, you should have:

```
apps/
├── web/
│   └── .next/
└── api/
    └── dist/

packages/
└── shared/
    └── dist/
        ├── index.js
        ├── index.d.ts
        └── ...
```

# Add CI with GitHub Actions

1. Create `.github/workflows/ci.yml`:

```yml
name: CI

on:
  push:
  pull_request:

jobs:
  checks:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 26
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Lint
        run: pnpm lint

      - name: Type check
        run: pnpm check-types

      - name: Build
        run: pnpm build
```

# Add shadcn UI component

1. Initialize shadcn:

```bash
pnpm dlx shadcn@latest init --cwd apps/web --no-monorepo
```

2. Install shadcn's cn dependency explicitly:

```bash
pnpm --filter @repo/web add cn
```

3. Add shadcn/ui component from inside apps/web:

```bash
cd apps/web

pnpm dlx shadcn@latest add <your-component-name>
```

# Architecture Decisions

| Practice             | Recommendation                                                 |
| -------------------- | -------------------------------------------------------------- |
| Dependency direction | web → shared ← api                                             |
| Shared code          | Keep it environment-independent                                |
| Validation           | Use shared Zod schemas for API contracts                       |
| React components     | Keep them in web or a dedicated ui package (packages/ui)       |
| Database operations  | Keep them in the API until another consumer justifies sharing  |
| Secrets              | Never export them from a shared browser-importable package     |
| Internal imports     | Use @repo/shared, not relative cross-package paths             |
| Package management   | One pnpm lockfile, explicit dependencies                       |
| Deployment           | Deploy web and API independently                               |
| Testing              | Add Fastify inject() tests and frontend tests as the app grows |

# Useful development commands

| Command                     | What it does                       |
| --------------------------- | ---------------------------------- |
| pnpm dev                    | Start the entire monorepo          |
| pnpm --filter @repo/web dev | Start only the frontend            |
| pnpm --filter @repo/api dev | Start only Fastify                 |
| pnpm build                  | Build all projects                 |
| pnpm check-types            | Check TypeScript across the repo   |
| pnpm lint                   | Check code quality and formatting  |
| pnpm lint:fix               | Automatically fix supported issues |
| pnpm format                 | Format the entire repository       |
