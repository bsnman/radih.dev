# radih.dev portfolio

Static portfolio site built with Vue 3 (Composition API), TypeScript, Vite, and Tailwind CSS. Content is a mix of Markdown and JSON, and routing is handled by Vue Router. Vite is provided via `rolldown-vite` (see `package.json` overrides).

## Tech stack

- Vue 3 + Vue Router
- TypeScript + `vue-tsc` type checking
- Vite (via `rolldown-vite`) + PostCSS + Tailwind CSS
- Markdown rendering via `markdown-it`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project structure

- `src/pages/` route-level pages (Home, Projects, Experience, Resume, Contact)
- `src/components/` shared UI components
- `src/content/` Markdown + JSON content
- `public/assets/` static assets served as-is

## Content sources

- Work experience: `src/content/work-experience.md`
- Projects: `src/content/projects.json`
- Hero + tech stack: `src/pages/Home.vue`
- Contact links + email: `src/components/Footer.vue`, `src/pages/Contact.vue`

## Resume handling

Place files under `public/assets/resume/`:

- `public/assets/resume/resume.pdf`

The Resume page checks for `resume.pdf` and hides the preview if missing.

## Routes

- `/` Home
- `/projects` Projects
- `/experience` Experience
- `/resume` Resume
- `/contact` Contact

## Deployment

Vercel SPA rewrites are configured in `vercel.json` to support direct deep-link refreshes.
