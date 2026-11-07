export type StarterStatus = "stable" | "beta" | "planned";

export type StarterIcon =
  | "web"
  | "api"
  | "mobile"
  | "extension"
  | "service"
  | "docs"
  | "monorepo"
  | "python";

export interface Starter {
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  repository: string;
  version?: string;
  docsUrl?: string;
  status?: StarterStatus;
  featured?: boolean;
  icon?: StarterIcon;
}
