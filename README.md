# Portafolio Santiago Boza

Professional frontend portfolio for Santiago Boza Quiros, a Computer Engineering
student at Tecnologico de Costa Rica. The site presents profile information,
technical skills, contact links, and selected academic software projects.

## Stack

- React
- Vite
- TypeScript
- CSS Modules
- Motion for React
- ESLint
- Prettier

## Run Locally

```bash
npm install
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173/`.

## Project Structure

```text
.
|-- public
|   `-- favicon.svg
|-- src
|   |-- assets
|   |   `-- images
|   |-- components
|   |-- data
|   |-- sections
|   |-- styles
|   |-- types
|   |-- App.tsx
|   `-- main.tsx
|-- index.html
|-- package.json
`-- vite.config.ts
```

## Featured Projects

The portfolio currently highlights five approved projects:

- NutriTEC
- TECAir
- DonCEy Kong Jr
- Genetic Kingdom
- TinySQL

Project content lives in `src/data/projects.ts`, with the shared data shape in
`src/types/project.ts`.

## Images

Project and profile images are stored in `src/assets/images` and imported by the
React components so Vite can optimize them during production builds.

Current image mapping:

- `NutriTEC.png` -> NutriTEC
- `AirTEC.png` -> TECAir
- `DonCEy Kong.png` -> DonCEy Kong Jr
- `Genetic.png` -> Genetic Kingdom
- `TinySQL.png` -> TinySQL
- `Personal.jpeg` -> hero portrait

## Available Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run format:check
npm run typecheck
```

## Development Notes

This is a minimalist frontend-only portfolio. Keep future changes focused on
content quality, visual polish, accessibility, and deployment readiness.
