# Agent Guide

## Commands
- **Build**: `npm run build` (runs TypeScript compilation + Vite build)
- **Lint**: `npm run lint` (ESLint)
- **Dev**: `npm run dev` (Vite dev server)
- **Preview**: `npm run preview` (Preview production build)
- **No test command** - add tests if needed

## Code Style
- **Language**: TypeScript with strict mode enabled
- **Framework**: React 19 + Vite + TailwindCSS
- **Imports**: Use relative imports (e.g., `./Component`) for local files
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Components**: Arrow functions with default export (see Layout.tsx, ProfilePage.tsx)
- **Props**: Define TypeScript interfaces for component props
- **Styling**: Use TailwindCSS classes, avoid inline styles
- **File extensions**: `.tsx` for React components, `.ts` for utilities
- **TypeScript**: Strict settings enabled - handle unused locals/parameters
- **ESLint**: React hooks + TypeScript rules enforced