# AGENTS.md

This file is the canonical repository contract for AI coding agents working on this documentation project.

These instructions are intentionally agent-agnostic. Follow them whether you are running through Codex, Claude, Cursor, Gemini, Copilot, or another coding agent.

Do not create duplicate vendor-specific instruction systems unless the project explicitly requires one.

---

## 1. Mission

This repository is an Astro Starlight documentation site.

Your job is to help maintain accurate, useful, structured documentation that reflects the real project it documents.

The documentation should be:

- accurate,
- evidence-based,
- easy to navigate,
- easy to maintain,
- accessible,
- multilingual when required,
- friendly to both humans and AI agents,
- and synchronized with the project's specifications and implementation.

Never optimize for producing the largest amount of documentation.

Optimize for producing the smallest complete documentation system that helps its intended audience successfully use, understand, maintain, or operate the project.

---

## 2. Core methodology

This repository follows **spec-driven development**.

The normal workflow is:

```text
Understand
    ↓
Inspect evidence
    ↓
Specify
    ↓
Implement
    ↓
Verify
    ↓
Synchronize
```

Do not begin a substantial documentation or architecture change by immediately editing files.

First establish what should exist and why.

---

## 3. Sources of truth

Different parts of the repository answer different questions.

### Product or documentation intent

```text
specs/
```

Specifications describe what should be built or documented.

They define:

- goals,
- audience,
- scope,
- non-goals,
- requirements,
- information architecture,
- acceptance criteria,
- localization requirements,
- and verification requirements.

### Current implementation

The actual project source code, configuration, tests, manifests, routes, schemas, APIs, and infrastructure describe what currently exists.

Documentation about current behavior must be grounded in these sources.

### Published documentation

```text
src/content/docs/
```

These files are the public documentation users read.

### Architecture and contributor knowledge

```text
docs/
```

Use this directory for repository architecture, design decisions, maintenance guidance, deployment internals, and contributor-oriented knowledge that should not necessarily appear in public product documentation.

### Agent rules

```text
AGENTS.md
```

This file defines how agents should work in this repository.

---

## 4. Never invent project behavior

Documentation must be grounded in repository evidence.

Never invent:

- commands,
- environment variables,
- ports,
- routes,
- API endpoints,
- configuration keys,
- defaults,
- authentication behavior,
- database behavior,
- deployment steps,
- supported integrations,
- package capabilities,
- architectural guarantees,
- or operational procedures.

Before documenting a behavior, verify it from an authoritative project source.

Typical evidence includes:

```text
package.json
pyproject.toml
go.mod
Cargo.toml
Dockerfile
docker-compose.yml
.env.example
configuration files
source code
routes
schemas
tests
CI workflows
deployment manifests
existing specifications
```

If evidence is missing, say so in the specification or documentation instead of guessing.

If the specification and implementation disagree, do not silently reconcile them.

Identify the mismatch and determine whether the task requires:

```text
implementation → match specification
```

or:

```text
specification → match implementation
```

---

## 5. Spec-driven workflow

For every non-trivial change, use the following workflow.

### Step 1 — Understand the request

Determine:

- who the documentation is for,
- what problem it should solve,
- what parts of the project are affected,
- whether new documentation or an update is required,
- whether localization is required,
- and what evidence must be inspected.

Do not assume scope from a short prompt when repository evidence provides a more precise answer.

### Step 2 — Inspect the project

Before writing documentation about an existing project, inspect the relevant implementation.

Examples:

For installation documentation, inspect:

```text
package manager files
runtime requirements
environment variables
setup scripts
database migrations
Docker configuration
```

For API documentation, inspect:

```text
routes
controllers/views
schemas
serializers
authentication
tests
OpenAPI configuration
```

For architecture documentation, inspect:

```text
directory structure
module boundaries
dependency direction
configuration
runtime processes
data stores
queues
external integrations
```

For deployment documentation, inspect:

```text
CI workflows
Dockerfiles
hosting configuration
environment variables
build commands
deployment manifests
```

### Step 3 — Create or update a specification

Substantial documentation work should have a specification under:

```text
specs/
```

Use a descriptive filename:

```text
specs/authentication-docs.md
specs/api-reference.md
specs/deployment-guide.md
specs/project-documentation.md
```

Do not create a new specification for trivial typo fixes, formatting-only changes, or tiny corrections.

### Step 4 — Implement from the specification

Once the specification is clear:

- create or update the required pages,
- preserve the intended information architecture,
- update translations when required,
- add reusable components only when useful,
- and avoid unrelated refactors.

### Step 5 — Verify

Run the repository quality gate:

```bash
pnpm check
```

Also verify relevant documentation behavior manually when necessary:

- navigation,
- links,
- localized routes,
- RTL layout,
- custom MDX components,
- search indexing,
- mobile layout,
- light and dark themes.

### Step 6 — Synchronize

Before completing the work, make sure these remain consistent:

```text
specification
implementation
published documentation
translations
repository structure
```

Do not leave a completed change with stale specifications or stale documentation.

---

## 6. Specification format

Use the following structure for substantial documentation specifications.

```md
# <Specification title>

Status: Draft

## Context

Why does this documentation or change need to exist?

## Audience

Who is expected to read it?

## Goal

What outcome should the documentation enable?

## Non-goals

What is intentionally outside the scope?

## Source evidence

Which repository files or implementation details support this documentation?

## Information architecture

Which pages or sections should exist?

## Requirements

What must the documentation explain or provide?

## Localization

Which locales must be supported?

## Acceptance criteria

What must be true for this specification to be considered complete?

## Verification

How should the result be validated?
```

When implementation is complete, change:

```text
Status: Draft
```

to:

```text
Status: Implemented
```

only if all acceptance criteria are satisfied.

---

## 7. Documentation generation protocol

When asked to document an existing project comprehensively, do not immediately generate pages from assumptions.

Follow this sequence.

### Phase 1 — Inventory

Inspect the repository and identify:

- project purpose,
- runtime,
- frameworks,
- package managers,
- entry points,
- major modules,
- APIs,
- data stores,
- background workers,
- external services,
- configuration,
- authentication,
- deployment,
- testing,
- operational workflows.

### Phase 2 — Documentation map

Create a specification that maps project knowledge into a documentation structure.

A typical structure may be:

```text
Getting Started
├── Introduction
├── Installation
├── Configuration
└── First Run

Guides
├── Authentication
├── Development
├── Testing
└── Deployment

Concepts
├── Architecture
├── Data Model
└── Security Model

Reference
├── Configuration
├── API
├── Commands
└── Project Structure
```

Do not create sections that the project does not need.

### Phase 3 — Evidence mapping

For every important documentation claim, know where the supporting implementation exists.

If the evidence cannot be found:

- omit the unsupported claim,
- label it as unresolved,
- or ask for the missing project information when interaction is available.

### Phase 4 — Authoring

Write pages for the intended audience.

Do not simply translate source code into prose.

Explain:

- what the user needs to know,
- why something exists when useful,
- how to perform common tasks,
- constraints,
- safe defaults,
- and expected outcomes.

### Phase 5 — Verification

Verify documentation against the current project.

Commands shown in documentation should be valid.

Paths should exist.

Links should resolve.

Configuration keys should match the implementation.

Examples should match current APIs.

---

## 8. Content architecture

Published documentation lives in:

```text
src/content/docs/
```

The default English locale lives at the root.

Example:

```text
src/content/docs/
├── index.md
├── getting-started.md
├── guides/
├── concepts/
├── reference/
└── fa/
```

Persian documentation lives under:

```text
src/content/docs/fa/
```

Prefer matching slugs between locales.

Example:

```text
src/content/docs/getting-started.md
src/content/docs/fa/getting-started.md
```

which produces:

```text
/getting-started/
/fa/getting-started/
```

Do not create `/en/` routes unless the locale architecture is intentionally changed.

---

## 9. Markdown vs MDX

Use plain Markdown by default:

```text
.md
```

Use MDX only when a page actually needs imported components:

```text
.mdx
```

Do not convert ordinary documentation pages to MDX without a reason.

Good reasons for MDX include:

- reusable interactive or visual components,
- structured callouts unavailable in Markdown,
- custom diagrams,
- embedded project-specific UI.

---

## 10. Frontmatter

Every documentation page must have a useful title.

Prefer adding a description as well.

Example:

```yaml
---
title: Authentication
description: Learn how authentication works and how to configure it.
---
```

Descriptions should be concise and useful for:

- search,
- previews,
- SEO,
- and page discovery.

Avoid generic descriptions such as:

```text
Learn more about authentication.
```

when a more specific description is possible.

---

## 11. Writing style

Write for clarity before completeness.

Prefer:

- short paragraphs,
- descriptive headings,
- concrete examples,
- task-oriented instructions,
- meaningful code snippets,
- explicit prerequisites,
- and clear expected outcomes.

Avoid:

- unnecessary marketing language,
- excessive repetition,
- filler introductions,
- unexplained jargon,
- enormous pages covering unrelated topics,
- copying implementation details users do not need.

Use code blocks for executable commands:

```bash
pnpm install
```

Use file path blocks when communicating repository structure:

```text
src/content/docs/
```

Use terminology consistently across all pages.

---

## 12. Internationalization

Custom UI translation dictionaries live in:

```text
src/content/i18n/
├── en.json
└── fa.json
```

Custom translation keys must also be registered in:

```text
src/content.config.ts
```

Example:

```json
{
  "footer.text": "Powered by"
}
```

and:

```json
{
  "footer.text": "قدرت‌گرفته از"
}
```

Use Starlight's translation API for UI text instead of manually branching on locale whenever possible.

Prefer:

```astro
{Astro.locals.t("footer.text")}
```

instead of:

```astro
{lang === "fa" ? "..." : "..."}
```

Keep translation dictionaries synchronized.

If a custom key exists in one supported locale, it should normally exist in all supported locales.

---

## 13. Persian and RTL documentation

Persian pages use:

```text
lang: fa
dir: rtl
```

through the Starlight locale configuration.

Do not manually force the entire page to RTL inside individual content files.

Use logical CSS properties where possible:

```css
margin-inline-start
padding-inline-end
border-inline-start
```

instead of physical properties such as:

```css
margin-left
padding-right
```

unless the physical direction is intentionally required.

Mixed-direction content such as code, URLs, commands, and English product names must remain readable inside RTL pages.

---

## 14. Translation quality

Translations should preserve meaning rather than mechanically translating words.

Do not translate:

- code,
- package names,
- commands,
- paths,
- API identifiers,
- environment variable names,
- library names,
- product names,

unless the project explicitly defines localized terminology.

For example:

```text
pnpm install
GITHUB_REPOSITORY
Astro
Starlight
FonijBuild
```

remain unchanged.

Keep translated page structure aligned with the source page unless localization requires a deliberate difference.

---

## 15. Custom content components

Reusable components intended for MDX authors belong in:

```text
src/components/content/
```

Examples:

```text
Callout.astro
ArchitectureDiagram.astro
FeatureGrid.astro
```

Prefer Astro components.

Astro components produce static HTML by default and should remain the default choice for documentation UI.

Do not add React, Vue, Svelte, or another client framework unless the component requires client-side behavior that cannot reasonably be implemented otherwise.

Do not hydrate components unnecessarily.

Prefer:

```astro
<Component />
```

over:

```astro
<Component client:load />
```

when no browser JavaScript is needed.

---

## 16. Starlight UI overrides

Overrides of Starlight's own interface belong in:

```text
src/components/starlight/
```

Examples:

```text
Footer.astro
ThemeToggle.astro
```

Keep this boundary explicit:

```text
src/components/content/
→ components documentation authors use

src/components/starlight/
→ components that modify Starlight itself
```

Do not mix these responsibilities.

Prefer wrapping or reusing Starlight's default components rather than copying their implementation.

This reduces upgrade risk.

---

## 17. Styling

Global project styles live in:

```text
src/styles/
```

Prefer Starlight CSS variables and semantic tokens over hardcoded component-specific colors.

Keep light and dark themes complete.

Do not define a dark-mode palette globally and partially override it in light mode.

Test:

- body text,
- headings,
- hero text,
- search,
- language selector,
- sidebar,
- links,
- custom components,
- code blocks,
- footer,

in both themes.

Use semantic design tokens whenever possible.

---

## 18. Links

Prefer relative links between documentation pages.

Example:

```md
[Deployment](./deployment/)
```

instead of hardcoding deployment origins.

This keeps documentation portable when deployed under a GitHub Pages base path.

Avoid hardcoded root-relative asset paths unless the configured base path is handled correctly.

Always consider that the site may run under:

```text
/repository-name/
```

instead of `/`.

---

## 19. Assets

Use:

```text
src/assets/
```

for assets imported and processed by Astro.

Use:

```text
public/
```

for files that must retain a stable public path.

Examples:

```text
public/CNAME
public/images/favicon.svg
```

Do not place generated build output into source directories.

---

## 20. TypeScript

This project uses TypeScript 7.

Do not downgrade TypeScript to make deprecated tooling work.

Do not reintroduce:

```text
astro check
```

as the primary type-checking workflow.

Astro components are type-checked through:

```text
@astrojs/ts-content-mapper
```

registered in `tsconfig.json`.

The expected type-check command is:

```bash
tsc --noEmit --runExternalCode
```

The `--runExternalCode` flag is required because TypeScript content mappers execute package code during compilation.

---

## 21. Biome

Biome is responsible for:

- formatting,
- linting,
- static code-quality checks.

Biome is not the TypeScript compiler.

Do not treat Biome as a replacement for semantic TypeScript type-checking.

The responsibilities are:

```text
Biome
→ lint + format

TypeScript
→ type-check

Astro
→ production build
```

When Astro full-document support is enabled in Biome, preserve the relevant configuration unless there is a documented compatibility reason to change it.

---

## 22. Quality gate

The canonical repository verification command is:

```bash
pnpm check
```

A successful check should validate the equivalent of:

```text
Biome
    ↓
TypeScript type-check
    ↓
Astro production build
```

Do not consider a substantial task complete while the quality gate is failing.

If a failure is unrelated to the requested change, identify it explicitly instead of hiding or disabling the failing check.

---

## 23. Dependencies

Keep this foundation small.

Before adding a dependency, determine whether the requirement can be solved with:

- Astro,
- Starlight,
- browser APIs,
- existing dependencies,
- or a small local component.

Do not add dependencies for trivial utilities.

Do not add:

- UI frameworks,
- state managers,
- analytics,
- CMS clients,
- authentication,
- databases,
- large component libraries,

unless the project explicitly requires them.

A documentation foundation should remain primarily static and Markdown-first.

---

## 24. GitHub Pages

The default deployment target is GitHub Pages.

The standard path should require no custom repository variables.

During GitHub Actions builds, deployment information is derived from GitHub's built-in environment.

A normal repository:

```text
owner/project
```

should deploy to:

```text
https://owner.github.io/project/
```

A root Pages repository:

```text
owner/owner.github.io
```

should deploy to:

```text
https://owner.github.io/
```

Do not introduce required `SITE_URL`, `BASE_PATH`, or repository-name environment variables for the normal GitHub Pages workflow unless there is a concrete need.

---

## 25. Custom domains

A custom GitHub Pages domain is represented by:

```text
public/CNAME
```

When this file exists, deployment configuration should preserve root-path behavior:

```text
base = /
```

Do not commit environment-specific secrets or private deployment credentials.

---

## 26. Environment files

Never commit:

```text
.env
```

or secret-bearing environment files.

If environment configuration becomes necessary, provide:

```text
.env.example
```

with safe placeholder values.

The default starter should not require an `.env` file for ordinary local development or GitHub Pages deployment.

---

## 27. GitHub Actions

Keep CI simple.

CI should primarily:

```text
checkout
→ install locked dependencies
→ run pnpm check
```

Deployment should:

```text
checkout
→ build static site
→ upload Pages artifact
→ deploy Pages artifact
```

Do not duplicate repository validation logic inside YAML when it belongs in package scripts.

Prefer:

```yaml
run: pnpm check
```

over manually reproducing every check in the workflow.

---

## 28. Lockfile

Commit:

```text
pnpm-lock.yaml
```

CI should install from the lockfile.

Prefer:

```bash
pnpm install --frozen-lockfile
```

in CI.

Do not regenerate or remove the lockfile without a dependency-related reason.

---

## 29. Agent independence

This repository must remain usable by different coding agents.

`AGENTS.md` is the canonical agent contract.

Do not create or duplicate large instruction sets in:

```text
CLAUDE.md
.cursor/
.github/copilot-instructions.md
.gemini/
.codex/
```

unless explicitly requested.

If compatibility files are required, they should be thin adapters pointing back to the canonical repository knowledge.

Do not allow agent-specific configuration to become the primary source of architecture or documentation rules.

---

## 30. Scope discipline

When completing a task:

- make the smallest coherent change,
- avoid unrelated refactoring,
- preserve existing public routes unless change is intentional,
- preserve localization behavior,
- preserve GitHub Pages portability,
- preserve static-first architecture.

Do not turn a documentation change into a framework migration.

Do not redesign unrelated pages while fixing a specific issue.

---

## 31. Accessibility

Custom components must preserve basic accessibility.

Use:

- semantic HTML,
- meaningful headings,
- accessible link text,
- keyboard-accessible controls,
- visible focus states,
- appropriate ARIA labels when native semantics are insufficient.

Do not use ARIA to replace correct HTML semantics.

Theme controls, navigation controls, and interactive components must be usable without a mouse.

---

## 32. Definition of done

A documentation task is complete when all relevant conditions are satisfied:

- the request is represented by a clear specification when required,
- documentation is grounded in project evidence,
- required pages exist,
- information architecture is coherent,
- commands and examples are accurate,
- custom components follow repository boundaries,
- English documentation is complete,
- required translations are complete,
- RTL output remains usable,
- internal links work,
- no unsupported behavior is presented as fact,
- `pnpm check` passes,
- the production build succeeds,
- the specification and documentation reflect the final result.

---

## 33. Final agent checklist

Before finishing a substantial task, verify:

```text
[ ] I inspected the relevant implementation.
[ ] I did not invent unsupported behavior.
[ ] I created or updated the relevant specification.
[ ] The implementation follows the specification.
[ ] Markdown was used unless MDX was actually needed.
[ ] Custom components are in the correct directory.
[ ] Localized content remains synchronized.
[ ] RTL behavior was considered where relevant.
[ ] Links and paths are portable under Astro base paths.
[ ] I did not add unnecessary dependencies.
[ ] I did not introduce secrets or commit .env files.
[ ] pnpm check passes.
[ ] The production build succeeds.
[ ] Specs, implementation, and published docs agree.
```

When these conditions are true, the change is ready for review.
