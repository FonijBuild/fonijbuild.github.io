---
title: مستندات پروژه
description: فضایی مبتنی بر Markdown برای مستندات فنی و محصولی.
template: splash
sidebar:
  hidden: true
hero:
  title: مستنداتی ساده و قابل نگهداری
  tagline: با Markdown بنویسید، روی GitHub پوش کنید و یک سایت مستندات استاتیک سریع منتشر کنید.
  actions:
    - text: شروع کنید
      link: ./getting-started/
      icon: right-arrow
    - text: راهنمای نگارش
      link: ./guides/writing-content/
      variant: minimal
---

## این استارتر چه چیزی در اختیارتان می‌گذارد؟

- نگارش محتوا با Markdown و امکان استفاده از MDX در صورت نیاز به محتوای غنی‌تر.
- ناوبری مبتنی بر ساختار فایل‌ها با استفاده از Starlight.
- جست‌وجوی داخلی، syntax highlighting، ناوبری واکنش‌گرا و حالت تاریک.
- خروجی کاملاً استاتیک و بدون نیاز به runtime بک‌اند.
- دیپلوی خودکار روی GitHub Pages از برنچ `main`.
- ساختاری کوچک و opinionated که نگهداری آن برای انسان‌ها و coding agentها ساده است.

## نوشتن مستندات

یک فایل Markdown در هر نقطه‌ای از `src/content/docs/fa/` ایجاد کنید:

```text
src/content/docs/fa/
├── index.md
├── getting-started.md
├── guides/
│   └── writing-content.md
└── reference/
    └── project-structure.md
```

هر صفحه Markdown باید در frontmatter یک `title` داشته باشد:

```md
---
title: احراز هویت
---

# احراز هویت

مستندات این قابلیت را اینجا بنویسید.
```

## انتشار

ریپو را روی GitHub پوش کنید، یک‌بار در تنظیمات Pages گزینه **GitHub Actions** را به‌عنوان Source انتخاب کنید و سپس تغییرات را روی `main` پوش کنید. workflow موجود در پروژه سایت را به‌صورت خودکار build و deploy می‌کند.

برای ادامه به [شروع کار](./getting-started/) بروید.
