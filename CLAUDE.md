# CLAUDE.md

## Project

Personal homepage that acts as a CV / portfolio of personal projects. Static single-page app deployed to Azure Static Web Apps.

## Stack

- React + TypeScript (strict mode)
- Vite (build output in `dist/`)
- Tailwind CSS
- npm (commit `package-lock.json`; do not mix in yarn/pnpm)
- Hosting: Azure Static Web Apps, deployed via GitHub Actions

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
npm run typecheck  # tsc --noEmit
```

Run `npm run lint` and `npm run build` before considering a change done.

## Structure

```
src/
  components/   # reusable UI components
  sections/     # sections of the home page (Hero, Projects, ...)
  pages/        # full pages: ProjectPage (/projects/<slug>), NotFoundPage
  data/         # typed content: projects.ts, experience.ts, profile.ts
  types/        # shared TypeScript interfaces (Project, Experience, ...)
  assets/       # images, icons
  navigation.ts # tiny History API router (usePathname, navigate); use components/Link for internal links
public/         # static files copied as-is (favicon, robots.txt, staticwebapp.config.json)
.github/workflows/  # Azure Static Web Apps deploy workflow
```

## Content

- All CV and project content lives in typed files under `src/data/`. To add a project, add an entry to `src/data/projects.ts`; do not hardcode content inside components.
- Define data shapes in `src/types/` (e.g. `Project`: title, summary, tags, repoUrl, liveUrl, image).
- Keep copy concise and factual; this is a professional-facing page.
- The home page shows a short summary card per project; the full write-up (details, highlights, images, links) is on its detail page at `/projects/<slug>`. Each project needs a unique `slug`. Routing is a small built-in History API router (no react-router); it relies on the `navigationFallback` in `staticwebapp.config.json`.

## Conventions

- Function components and hooks only; no class components.
- Prefer named exports. One component per file, PascalCase filenames.
- No `any`; use `unknown` and narrow, or define proper types.
- Style with Tailwind utility classes; avoid custom CSS unless needed (put it in `src/index.css`).
- Mobile-first, responsive design. Support light/dark via `prefers-color-scheme`.
- Accessibility: semantic HTML, alt text on images, visible focus states, sufficient contrast.
- Keep dependencies minimal; this is a static site and should stay fast (check bundle size when adding libraries).
- Optimize images (appropriate size, modern formats) and lazy-load below the fold.

## Deployment (Azure Static Web Apps)

- Deployed by GitHub Actions on push to `main`; PRs get preview environments.
- Workflow settings: `app_location: "/"`, `output_location: "dist"`, no API (`api_location` empty).
- Deployment token is stored as the GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN`. Never commit it.
- `public/staticwebapp.config.json` must include a `navigationFallback` to `/index.html` (rewrite) so client-side routes work, excluding asset paths (`/assets/*`, images, etc.).
- If the site uses a custom domain, configure it in the Azure portal; SSL is managed by Azure.

## Rules for Claude

- Don't commit, push, or deploy unless asked.
- Don't add secrets, tokens, or personal contact details (phone, address) to the repo; ask first for any personal data to be published.
- Ask before adding new major dependencies or changing the stack.
- Verify changes with `npm run build` rather than assuming they compile.
