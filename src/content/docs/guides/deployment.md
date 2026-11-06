---
title: Deployment
description: Deploy the static documentation site to GitHub Pages with the included workflow.
sidebar:
  order: 2
---

The starter publishes static output to GitHub Pages through GitHub Actions. No application server is required.

## First deployment

1. Push the repository to GitHub.
2. Open **Settings → Pages** in the repository.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`, or run the deployment workflow manually from the Actions tab.

The included workflow detects the repository owner and name and configures the correct GitHub Pages base path during the build.

## Repository Pages URL

For a repository named `docs` owned by `acme`, the default URL is:

```text
https://acme.github.io/docs/
```

The build automatically uses `/docs` as the Astro base path.

For a root Pages repository such as `acme.github.io`, the base path stays `/`.

## Custom domain

Set repository Actions variables when you want to override automatic GitHub Pages URL detection:

```text
SITE_URL=https://docs.example.com
BASE_PATH=/
```

Then configure the custom domain in GitHub Pages and add any DNS records GitHub requires.

## Other static hosts

The foundation produces static files in `dist/`, so it can also be deployed to any provider that can host static assets.

Typical build settings are:

```text
Build command: pnpm build
Output directory: dist
```
