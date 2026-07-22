# Portafolio Santiago Boza

## Project Overview

Professional software-development portfolio for Santiago Boza Quirós, a Computer
Engineering student. This first iteration establishes the application foundation,
layout system, placeholder content model, responsive navigation, and accessible
interaction patterns.

## Current Status

Initial frontend architecture is in place. The site uses meaningful placeholders
only and does not yet include final personal information, real project case
studies, production images, contact links, or a downloadable CV.

## Objectives

- Present a clean single-page portfolio structure.
- Keep content easy to replace through typed data files.
- Support responsive navigation and accessible keyboard interaction.
- Establish strict TypeScript, ESLint, Prettier, and Vite configuration.
- Prepare the project for future deployment on Vercel.

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
- Reusable layout, button, social link, skill, and project card components.
- Typed placeholder data for navigation, skills, projects, and profile details.
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
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── components
│   │   ├── layout
│   │   ├── navigation
│   │   └── ui
│   ├── data
│   │   ├── about.ts
│   │   ├── navigation.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── sections
│   │   ├── About
│   │   ├── Contact
│   │   ├── Footer
│   │   ├── Hero
│   │   ├── Projects
│   │   └── Skills
│   ├── styles
│   │   ├── globals.css
│   │   ├── tokens.css
│   │   └── utilities.css
│   ├── types
│   │   ├── project.ts
│   │   └── skill.ts
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

Bright green is reserved for active states, important actions, focus indicators,
links, and small highlights. Large surfaces remain black or dark green to keep the
interface readable and professional.

## Animation Approach

Motion for React is used selectively for entrance reveals, navigation indicators,
button feedback, mobile-menu transitions, and project-card hover movement.
Animations are short, based on opacity and transform, and respect reduced-motion
preferences.

## Accessibility Considerations

- Semantic landmarks and one logical `h1`.
- Skip link to main content.
- Keyboard-accessible navigation and mobile menu.
- Visible `:focus-visible` indicators.
- `aria-expanded` and `aria-controls` on the mobile menu button.
- Reduced-motion support in CSS and Motion components.
- Placeholder visual areas use explicit accessible labels.

## Responsive-Design Approach

The implementation is mobile-first. Layouts use flexible Grid and Flexbox rules
to adapt from narrow screens to large desktop widths without horizontal overflow.
Cards collapse to one column on small screens and expand into multiple columns
when space allows.

## Content Replacement Guide

Replace placeholder values in:

- `src/data/about.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`
- `src/sections/Hero/Hero.tsx`
- `src/sections/Contact/Contact.tsx`
- `src/sections/Footer/Footer.tsx`

Use real project URLs, social links, image assets, and contact details only when
they are ready to publish.

## Deployment Guidance For Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add a custom domain after the production version is reviewed.

## Development Methodology

Work in small iterations. Keep components focused, preserve typed data sources,
avoid fictional content, and validate TypeScript, linting, formatting, and builds
before publishing.

## Roadmap

- [x] Initial application architecture
- [x] Responsive navigation
- [x] Portfolio section structure
- [x] Base design system
- [x] Initial accessible animations
- [ ] Add final personal content
- [ ] Add real project case studies
- [ ] Add portfolio images
- [ ] Add downloadable CV
- [ ] Complete social and contact links
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
