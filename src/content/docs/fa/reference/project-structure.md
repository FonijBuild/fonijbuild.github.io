---
title: ساختار پروژه
description: مرجع پوشه‌ها و فایل‌های این documentation foundation.
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
│   │       ├── ...
│   │       └── fa/
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

سطح اصلی نگارش محتواست. فایل‌های Markdown، MDX و Markdoc که اینجا قرار می‌گیرند به صفحات مستندات تبدیل می‌شوند. در پیکربندی پیشنهادی، محتوای انگلیسی مستقیماً در این مسیر قرار دارد و ترجمه فارسی داخل `src/content/docs/fa/` نگهداری می‌شود.

## `src/components/content/`

Astro componentهای قابل استفاده مجدد که نویسندگان می‌توانند داخل صفحات `.mdx` import کنند. برای محتوایی که به component نیاز ندارد، فایل‌های `.md` همچنان انتخاب پیش‌فرض هستند.

## `src/components/starlight/`

overrideهای مربوط به رابط کاربری خود Starlight. فایل `Footer.astro` موجود، footer پیش‌فرض Starlight را reuse می‌کند و اعتبار FonijBuild را به آن اضافه می‌کند.

## `src/content.config.ts`

content collection مربوط به `docs` را با loader و schema رسمی Starlight تعریف می‌کند.

## `astro.config.mjs`

تنظیمات Starlight، زبان‌ها و تنظیمات مربوط به deployment را نگه می‌دارد.

## `.fonij/starter.json`

این repository را به‌عنوان Fonij foundation با شناسه `docs-starlight` معرفی می‌کند و نسخه template را مشخص می‌کند.
