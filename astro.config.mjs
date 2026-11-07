// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;

const githubUrl = repository
  ? `${process.env.GITHUB_SERVER_URL ?? "https://github.com"}/${repository}`
  : undefined;

export default defineConfig({
  site: "https://fonijbuild.github.io",
  base: "/",
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
      social: [
        {
          icon: "github",
          label: "GitHub repository",
          href: "https://github.com/FonijBuild",
        },
      ],
    }),
  ],
});
