# Portafolio Santiago Boza

## Project Overview

Professional portfolio for Santiago Boza Quirós, a Computer Engineering student
at Tecnológico de Costa Rica. The site presents verified profile information,
technical skills, and a curated set of academic software projects.

## Current Status

Second iteration in progress. The portfolio now includes CV-backed personal
content, verified contact links, GitHub-repository-based project descriptions,
and review documents for remaining owner confirmations.

## Objectives

- Present Santiago's academic and technical profile in a concise web format.
- Feature selected projects using evidence from CV content and repository source.
- Keep project content manually curated and easy to review.
- Preserve the minimalist React/Vite design system from iteration one.
- Document repository-quality gaps before public promotion.

## Technology Stack

- React
- Vite
- TypeScript
- CSS Modules
- Motion for React through the `motion` package
- ESLint
- Prettier
- npm

## Main Features

- Sticky responsive navigation with active-section feedback.
- Accessible collapsible mobile menu.
- Hero, About, Skills, Projects, Contact, and Footer sections.
- CV-backed profile summary, academic highlights, language information, and
  IntegraTEC leadership involvement.
- Typed project data with optional links, visibility notes, and expandable
  details.
- Reduced-motion support for Motion and CSS animations.

## Local Prerequisites

- Node.js compatible with the installed Vite version.
- npm for dependency installation and scripts.

## Installation

```bash
npm install
```

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

## Folder Structure

```text
.
├── docs
│   ├── content-review.md
│   └── github-repository-audit.md
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   ├── components
│   ├── data
│   ├── sections
│   ├── styles
│   ├── types
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Design System And Color Palette

The palette is defined in `src/styles/tokens.css` with CSS custom properties:

- Accent green: `#08CB00`
- Dark green: `#253900`
- Black: `#000000`
- Light neutral: `#EEEEEE`

Bright green is used selectively for active navigation, important actions,
links, focus indicators, and small highlights.

## Animation Approach

Motion for React is used for purposeful entrance reveals, navigation indicators,
button feedback, mobile-menu transitions, and project-card hover movement.
Animations are short, transform/opacity based, and respect reduced-motion
preferences.

## Accessibility Considerations

- Semantic landmarks and one logical `h1`.
- Skip link to main content.
- Keyboard-accessible navigation and mobile menu.
- Visible `:focus-visible` indicators.
- `aria-expanded` and `aria-controls` on the mobile menu button.
- Reduced-motion support in CSS and Motion components.
- Project visuals use descriptive placeholder labels.

## Responsive-Design Approach

The implementation is mobile-first. Layouts use flexible Grid and Flexbox rules
to adapt from narrow screens to desktop widths without horizontal overflow.
Project cards collapse to one column on small screens and expand as space allows.

## Content Sources

- CV provided locally by Santiago.
- Public GitHub profile README under `SRZpeedTEC`.
- Read-only inspection of repositories under the `SRZpeedTEC` account.
- Repository source code, manifests, README files, tests, docs, and media scans.

## Project Information Model

Featured projects are stored in `src/data/projects.ts` using the explicit
`Project` interface in `src/types/project.ts`. Each project supports title,
category, summary, longer description, context, functionality, technologies,
architecture, contribution wording, collaboration context, challenge, takeaway,
optional links, visibility, status, and visual placeholder text.

Repository links are optional. TECAir and NutriTEC links are currently withheld
because the audit found configuration files that should be sanitized before the
portfolio points visitors directly to those repositories.

## Featured-Project Selection

Featured projects were selected manually based on technical relevance, scope,
differentiation, code organization, documentation, visual evidence, setup
reproducibility, and GitHub presentation quality.

Current featured set:

- NutriTEC
- TECAir
- CineTEC
- Computer Architecture Foundations
- TinySQLDbOFICIAL

The full repository audit is available in `docs/github-repository-audit.md`.

## Project Images

No images were copied into the portfolio during this iteration. Some repositories
contain app assets, generated build output, icons, uploaded files, or sprites,
but clean public-safe screenshots still need Santiago's review.

Use `src/assets/images` for future optimized screenshots. Prefer descriptive
filenames and meaningful alternative text.

## Remaining Review Items

See `docs/content-review.md` for owner-confirmation items, including public CV
download approval, phone-number privacy, project contribution wording, repository
cleanup, screenshots, deployment links, and private repository visibility.

## Deployment Guidance For Vercel

1. Push the reviewed repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add a custom domain after the production version is reviewed.

## GitHub Metadata Synchronization

Build-time GitHub synchronization was evaluated but not implemented. The current
iteration needs manually curated project content because project purpose,
contribution, collaboration, and repository security status require owner review.

A future sync script could enrich selected public projects with cached metadata
without exposing a GitHub token to the browser.

## Development Methodology

Work in small iterations. Keep components focused, preserve typed data sources,
avoid unsupported claims, and validate TypeScript, linting, formatting, and builds
before publishing.

## Roadmap

- [x] Initial application architecture
- [x] Responsive navigation
- [x] Portfolio section structure
- [x] Base design system
- [x] Initial accessible animations
- [x] Add CV-backed personal content
- [x] Add GitHub-informed project content
- [x] Add repository audit and content review documents
- [ ] Confirm final public wording with Santiago
- [ ] Sanitize TECAir and NutriTEC repository configuration before linking
- [ ] Add real project case-study screenshots
- [ ] Add reviewed downloadable CV
- [ ] Add verified deployment links
- [ ] Add tests where valuable
- [ ] Deploy the production version
- [ ] Configure a custom domain

## Contribution Notes

This is a personal portfolio repository. Contributions should be scoped,
intentional, and aligned with the minimalist frontend architecture. Avoid adding
backend services, analytics, routing, UI frameworks, or unrelated tooling unless a
future iteration explicitly calls for them.

## Author

Santiago Boza Quirós.

## License Status

No license has been selected yet. Add a license before allowing reuse,
distribution, or external contribution.
