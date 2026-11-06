---
title: دیپلوی
description: سایت مستندات استاتیک را با workflow موجود روی GitHub Pages منتشر کنید.
sidebar:
  order: 2
---

این starter خروجی استاتیک را از طریق GitHub Actions روی GitHub Pages منتشر می‌کند و به application server نیاز ندارد.

## اولین دیپلوی

1. repository را روی GitHub پوش کنید.
2. در repository به **Settings → Pages** بروید.
3. مقدار **Source** را روی **GitHub Actions** قرار دهید.
4. روی `main` پوش کنید یا workflow دیپلوی را از تب Actions به‌صورت دستی اجرا کنید.

workflow موجود، owner و نام repository را تشخیص می‌دهد و هنگام build، base path مناسب GitHub Pages را تنظیم می‌کند.

## آدرس Repository Pages

برای repository با نام `docs` و owner برابر با `acme`، آدرس پیش‌فرض به این شکل است:

```text
https://acme.github.io/docs/
```

build به‌صورت خودکار `/docs` را به‌عنوان base path مربوط به Astro استفاده می‌کند.

برای root Pages repository مانند `acme.github.io`، مقدار base path برابر `/` باقی می‌ماند.

## دامنه سفارشی

اگر می‌خواهید تشخیص خودکار URL مربوط به GitHub Pages را override کنید، repository Actions variables را تنظیم کنید:

```text
SITE_URL=https://docs.example.com
BASE_PATH=/
```

سپس custom domain را در GitHub Pages تنظیم کنید و DNS recordهایی را که GitHub نیاز دارد اضافه کنید.

## سایر static hostها

این foundation فایل‌های استاتیک را در `dist/` تولید می‌کند، بنابراین روی هر providerای که بتواند static assetها را میزبانی کند قابل deploy است.

تنظیمات معمول build:

```text
Build command: pnpm build
Output directory: dist
```
