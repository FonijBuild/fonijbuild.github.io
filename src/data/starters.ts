export interface Starter {
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  repository: string;
  version: string;
}

export const starters: Starter[] = [
  {
    name: "Easy Next.js + Fastify",
    slug: "nextjs-fastify",
    description:
      "A production-capable TypeScript monorepo for full-stack products.",
    category: "Monorepo",
    technologies: ["Next.js", "Fastify", "TypeScript", "pnpm"],
    repository: "https://github.com/FonijBuild/easy-nextjs-fastify-starter",
    version: "1.0.0",
  },
];
