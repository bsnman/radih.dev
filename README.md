# Portfolio (Vue 3 + Vite + TypeScript)

A clean, static portfolio starter built with Vue 3 (Composition API), Vite, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Editing Content

- **Work experience:** `src/content/work-experience.md`
- **Projects:** `src/content/projects.json`
- **Hero and tech stack:** `src/pages/Home.vue`
- **Contact links + email:** `src/components/Footer.vue` and `src/pages/Contact.vue`

## Resume Files

Place resume files in `public/assets/resume/`:

- `public/assets/resume/resume.docx` (download button)
- `public/assets/resume/resume.pdf` (optional iframe preview)

The Resume page automatically checks for `resume.pdf` and hides the preview if it is missing.

## Routes

- `/` Home
- `/projects` Projects
- `/experience` Experience
- `/resume` Resume
- `/contact` Contact

## Deployment (Vercel)

SPA rewrites are configured in `vercel.json` so direct page refreshes work correctly.