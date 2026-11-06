---
title: Configuration
description: Environment variables and project settings available in the starter.
sidebar:
  order: 2
---

Most projects only need to edit content and the Starlight options in `astro.config.mjs`.

## Environment variables

The Astro configuration accepts these optional variables:

| Variable                | Purpose                                     | Default                         |
| ----------------------- | ------------------------------------------- | ------------------------------- |
| `DOCS_TITLE`            | Site title                                  | `Project Docs`                  |
| `DOCS_DESCRIPTION`      | Default site description                    | Starter description             |
| `GITHUB_REPOSITORY_URL` | Repository link for local/non-GitHub builds | Auto-detected in GitHub Actions |
| `SITE_URL`              | Canonical site origin                       | Auto-detected on GitHub Pages   |
| `BASE_PATH`             | URL path prefix                             | Auto-detected on GitHub Pages   |

For local development, you normally do not need to set any of them.

## GitHub metadata

During GitHub Actions builds, `GITHUB_REPOSITORY` and `GITHUB_REPOSITORY_OWNER` are used to derive:

- the GitHub Pages base path,
- the GitHub icon/link in the header,
- and the "Edit this page" link.

For local previews or deployment outside GitHub Actions, set `GITHUB_REPOSITORY_URL=https://github.com/owner/repository` to enable the same header and edit links.

## Styling

Make small theme adjustments in `src/styles/global.css`. Keep customization lightweight so Starlight upgrades remain straightforward.
