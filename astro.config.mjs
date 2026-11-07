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
      title: "Product Builder Handbook",
      description:
        "Documentation and practical guides for building maintainable, scalable products in the AI era.",
      logo: {
        src: "./src/assets/logo.svg",
      },
      favicon: "/images/favicon.svg",
      customCss: ["./src/styles/global.css"],
      components: {
        Header: "./src/components/overrides/Header.astro",
        Footer: "./src/components/overrides/Footer.astro",
        ThemeSelect: "./src/components/overrides/ThemeToggle.astro",
      },
      pagination: false,
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
