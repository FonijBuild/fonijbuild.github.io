---
title: پیکربندی
description: متغیرهای محیطی و تنظیمات پروژه که در این starter در دسترس هستند.
sidebar:
  order: 2
---

بیشتر پروژه‌ها فقط نیاز دارند محتوا و گزینه‌های Starlight را در `astro.config.mjs` تغییر دهند.

## متغیرهای محیطی

پیکربندی Astro می‌تواند از متغیرهای اختیاری زیر استفاده کند:

| متغیر                   | کاربرد                                               | مقدار پیش‌فرض                                      |
| ----------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `DOCS_TITLE`            | عنوان سایت                                           | `Project Docs`                                     |
| `DOCS_DESCRIPTION`      | توضیحات پیش‌فرض سایت                                 | توضیحات starter                                    |
| `GITHUB_REPOSITORY_URL` | لینک repository برای buildهای محلی یا خارج از GitHub | در GitHub Actions به‌صورت خودکار تشخیص داده می‌شود |
| `SITE_URL`              | origin اصلی سایت                                     | در GitHub Pages به‌صورت خودکار تشخیص داده می‌شود   |
| `BASE_PATH`             | پیشوند مسیر URL                                      | در GitHub Pages به‌صورت خودکار تشخیص داده می‌شود   |

در توسعه محلی معمولاً نیازی به تنظیم هیچ‌کدام از این متغیرها ندارید.

## متادیتای GitHub

هنگام build در GitHub Actions، مقادیر `GITHUB_REPOSITORY` و `GITHUB_REPOSITORY_OWNER` برای تولید موارد زیر استفاده می‌شوند:

- base path مربوط به GitHub Pages،
- آیکون و لینک GitHub در header،
- و لینک «ویرایش این صفحه».

برای preview محلی یا deployment خارج از GitHub Actions، مقدار زیر را تنظیم کنید تا همان لینک‌های header و ویرایش صفحه فعال شوند:

```text
GITHUB_REPOSITORY_URL=https://github.com/owner/repository
```

## استایل‌دهی

تغییرات کوچک theme را در `src/styles/global.css` انجام دهید. customization را سبک نگه دارید تا upgrade کردن Starlight در آینده ساده باقی بماند.
