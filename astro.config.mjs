// @ts-check
import { existsSync, readFileSync } from "node:fs";

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const repositoryName = repository?.split("/")[1];

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const isRootPagesRepository =
  repositoryOwner &&
  repositoryName &&
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;

const customDomain = getCustomDomain();

const site = customDomain
  ? `https://${customDomain}`
  : isGitHubActions && repositoryOwner
    ? `https://${repositoryOwner.toLowerCase()}.github.io`
    : undefined;

const base =
  customDomain || isRootPagesRepository
    ? "/"
    : isGitHubActions && repositoryName
      ? `/${repositoryName}`
      : "/";

const githubUrl = repository
  ? `${process.env.GITHUB_SERVER_URL ?? "https://github.com"}/${repository}`
  : undefined;

const editBaseUrl = githubUrl ? `${githubUrl}/edit/main/` : undefined;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  integrations: [
    starlight({
      // If you need to customize the title for each locale,
      // else just use: title: 'Your Title'
      title: {
        en: "Easy Docs",
        fa: "مستندات آسان",
      },
      description:
        "Astro Starlight foundation for Markdown-first documentation and knowledge sites.",
      logo: {
        src: "./src/assets/yourlogo.svg",
        // Uncomment below line if your logo has the title inside
        // replacesTitle: true,

        // In case you have separate dark/light logo
        // light: './src/assets/light-logo.svg',
        // dark: './src/assets/dark-logo.svg',
      },
      favicon: "/images/favicon.svg",
      // Set English as the default language for this site.
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fa: {
          label: "فارسی",
          lang: "fa",
          dir: "rtl",
        },
      },

      customCss: ["./src/styles/global.css"],
      // Override default component here
      components: {
        Footer: "./src/components/starlight/Footer.astro",
        ThemeSelect: "./src/components/starlight/ThemeToggle.astro",
      },

      ...(githubUrl
        ? {
            social: [
              {
                icon: "github",
                label: "GitHub repository",
                href: githubUrl,
              },
            ],
          }
        : {}),

      ...(editBaseUrl
        ? {
            editLink: {
              baseUrl: editBaseUrl,
            },
          }
        : {}),
    }),
  ],
});

function getCustomDomain() {
  const cnamePath = new URL("./public/CNAME", import.meta.url);

  if (!existsSync(cnamePath)) {
    return undefined;
  }

  const value = readFileSync(cnamePath, "utf8").trim();

  return value || undefined;
}
