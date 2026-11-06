---
title: شروع کار
description: وابستگی‌ها را نصب کنید، سایت را به‌صورت محلی اجرا کنید و اولین صفحه مستندات خود را بسازید.
sidebar:
  order: 1
---

این foundation برای مستندات فنی، دانش محصول، handbookها و سایر سایت‌های استاتیک مبتنی بر Markdown طراحی شده است.

## پیش‌نیازها

- Node.js نسخه `22.22.0` یا جدیدتر. استفاده از Node.js 24 پیشنهاد می‌شود.
- pnpm نسخه `12.14.0` یا Corepack فعال، تا package manager پین‌شده پروژه قابل استفاده باشد.

## نصب

```bash
corepack enable
pnpm install
```

اولین نصب فایل `pnpm-lock.yaml` را ایجاد می‌کند. این فایل را commit کنید تا نصب dependencyها در محیط محلی و CI قابل تکرار باقی بماند.

## اجرای محیط توسعه

```bash
pnpm dev
```

Astro آدرس محلی پروژه را در ترمینال نمایش می‌دهد که معمولاً `http://localhost:4321` است.

## اضافه کردن یک صفحه

فایل `src/content/docs/fa/my-page.md` را ایجاد کنید:

```md
---
title: صفحه من
description: توضیحی کوتاه برای موتورهای جست‌وجو و previewها.
---

# صفحه من

مستندات خود را اینجا بنویسید.
```

Starlight فایل را به‌صورت خودکار به route تبدیل می‌کند و آن را در navigation تولیدشده قرار می‌دهد.

## بررسی پروژه قبل از push

```bash
pnpm check
```

دستور check فرمت فایل‌ها را بررسی می‌کند، diagnostics مربوط به Astro را اجرا می‌کند و یک production build می‌سازد.

## مراحل بعدی

- [راهنمای نگارش محتوا](./guides/writing-content/) را بخوانید.
- [راهنمای دیپلوی](./guides/deployment/) را بررسی کنید.
- [ساختار پروژه](./reference/project-structure/) را ببینید.
