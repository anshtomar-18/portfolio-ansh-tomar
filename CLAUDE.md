# CLAUDE.md - MasterPortfolio Multi-Agent Collaboration

## Mission
Build a top-tier modern personal portfolio website based on this repository.
Collaborate with Antigravity (Google DeepMind agent acting as system architect and coordinator).

## Team Roles
1. **Lead Coder**: Customizes `src/portfolio.js` and individual React components in `src/containers/` and `src/components/`.
2. **Build Engineer**: Ensures npm dependencies install cleanly with `--legacy-peer-deps` on Node 18+ / Node 24+, handles `--openssl-legacy-provider` flags, and validates `npm start` and `npm run build`.
3. **Reviewer & QA**: Checks code style, linting, dead links, mobile responsiveness, and dark/light mode styling in `src/theme.js`.

## Tech Stack & Conventions
- **React**: 16.10.x with Class and Functional Components
- **Styling**: `styled-components`, `styletron-react`, `baseui`
- **Data Configuration**: All user content lives in `src/portfolio.js`
- **Icons**: FontAwesome and SimpleIcons
- **Package Manager**: npm with `--legacy-peer-deps`

## Core Rules for Changes
- Keep changes modular and isolated.
- Avoid introducing breaking dependency upgrades unless necessary.
- Preserve existing animations (`react-reveal`) and theme configurations.
- Verify that `npm run build` succeeds before declaring milestones complete.
