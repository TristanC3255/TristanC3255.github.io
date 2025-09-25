# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Tristan Chong's personal portfolio website built with React and deployed to GitHub Pages. The site is bootstrapped with Create React App and uses React Router for client-side navigation with HashRouter to support GitHub Pages deployment.

## Development Commands

### Local Development
```bash
npm start
# Starts development server at http://localhost:3000
# Hot reload enabled for code changes
```

### Building
```bash
npm run build
# Creates optimized production build in /build directory
# Required before deployment
```

### Testing
```bash
npm test
# Runs Jest test runner in interactive watch mode
# Tests use React Testing Library and Jest DOM matchers
```

### Deployment
```bash
npm run deploy
# Builds the project and deploys to GitHub Pages
# Uses gh-pages package to deploy /build to gh-pages branch
```

```bash
npm run predeploy
# Runs automatically before deploy - builds the project
# Can be run independently to just build for production
```

## Architecture

### Routing Structure
- Uses `HashRouter` (not `BrowserRouter`) for GitHub Pages compatibility
- Single-page application with client-side routing
- Main routes: `/about`, `/projects`, `/skills`, `/contact`
- Default route redirects to `/about`
- 404 routes redirect to `/about`

### Component Organization
- **Main App** (`src/App.js`): Root component with routing logic
- **Layout Components**: 
  - `Header.js`: Navigation and theme toggle functionality
  - `Footer.js`: Site footer
- **Page Components**: `About.js`, `Projects.js`, `Skills.js`, `Contact.js`
- **Utility Components**: `ProjectCard.js` for project display
- **Data**: `src/assets/data/projects.js` for project information
- **Assets**: Images stored in `src/assets/data/images/`

### Styling
- Global styles in `src/index.css` and `src/App.css`
- Theme system with light/dark mode toggle
- Theme persistence via localStorage
- CSS custom properties (CSS variables) with `data-theme` attribute

### Key Features
- **Theme Toggle**: Light/dark mode with localStorage persistence
- **Responsive Design**: CSS-based responsive layout
- **Navigation**: React Router with active link highlighting using NavLink
- **Performance**: Web Vitals reporting configured

## Development Notes

### GitHub Pages Deployment
- Site deployed to `https://tristanc3255.github.io/`
- Uses `gh-pages` package for automated deployment
- HashRouter required for client-side routing on GitHub Pages
- Build artifacts deployed to `gh-pages` branch

### Testing Setup
- Jest and React Testing Library configured
- `@testing-library/jest-dom` provides additional matchers
- Test files should use `.test.js` or `.spec.js` suffix

### Project Structure Patterns
- Components are functional components using React hooks
- State management via useState and useEffect hooks
- No external state management library (Redux, Context API) currently used
- Inline styling mixed with CSS classes (consider consolidating approach)

### Linting & Code Quality
- ESLint configured via Create React App defaults
- Configuration extends `react-app` and `react-app/jest`
- Browser targets defined in `browserslist` for production and development

### Common Development Tasks

When adding new pages:
1. Create component in `src/components/`
2. Add route in `src/App.js`
3. Add navigation link in `src/components/Header.js`

When adding projects:
1. Update `src/assets/data/projects.js`
2. Add project images to `src/assets/data/images/`
3. Ensure `ProjectCard.js` component handles the data structure

### Dependencies Note
- Uses React 19.1.0 (latest version)
- React Router DOM 7.9.1 for routing
- Testing stack includes React Testing Library v16+
- No additional UI libraries or frameworks