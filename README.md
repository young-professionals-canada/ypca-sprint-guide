# YPCA Career Academy: Self-Directed Courses

This repository contains the Young Professionals Canada Career Academy course website. It is an Astro static site published through GitHub Pages.

## Current courses

- Resume, Tailoring & Standout Project
- Build Your Personal Website
- Build Your LinkedIn Presence

Each course contains three modules and six lessons. Lesson content lives in `src/content/lessons/`; course metadata and module order live in `src/content/courses/`.

## Local development

```sh
npm install
npm run dev
```

## Validation and publishing

```sh
npm run build
```

The GitHub Actions workflow builds and publishes the generated static site when changes reach `main`. In the repository Pages settings, use **GitHub Actions** as the publishing source.

## Updating a course

1. Edit the relevant Markdown lesson.
2. Keep its `course`, `slug`, and `number` stable so saved learner progress remains valid.
3. Add or update referenced resources in `public/resources/`.
4. Run `npm run build` before publishing.
