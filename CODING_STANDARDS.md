# Team Coding Standards (React)

## 1. Conventions

* Use functional components exclusively.
* Use camelCase for variables/functions and PascalCase for components.
* Keep components small, focused, and preferably stateless.
* Extract repeated logic into custom hooks.
* Avoid inline styles; use CSS modules or Bootstrap.
* Follow Conventional Commits for commit messages.

## 2. Folder Structure

```
src/
  components/       # Reusable UI units
  pages/            # Route-level components
  hooks/            # Reusable custom hooks
  contexts/         # Global state via React Context
  services/         # API calls
  utils/            # Pure helper functions
  styles/           # Global styles
  assets/           # Images, icons
  config/           # Environment-based config
  tests/            # Test files
```

* Simple components: `ComponentName.jsx` 
* Complex components: `ComponentName/index.jsx` + additional files
* Create folders only when you have 2+ files per component
* Pages represent top-level routes.
* `hooks/` contains only reusable hooks; private hooks stay inside the component.
* `services/` handles API requests.
* Avoid files larger than 300 lines.

## 3. Lint Rules

### React Rules

* JSX components must be recognized as used by the linter.
* Variables referenced in JSX must be declared and not unused.
* React import is not required in JSX for React 17+.
* PropTypes should be used for prop validation (if not using TypeScript).

### React Hooks Rules

* Hooks must follow the Rules of Hooks.
* All `useEffect` dependencies must be explicitly listed.

### General JavaScript Rules

* No unused variables.
* Avoid `console.log` in production code.
* Use single quotes for all strings.
* End all statements with semicolons.

### Accessibility Rules

* All images must include meaningful `alt` text.
* Anchor tags must contain readable content.

## 4. Environment & Configuration

* Do not commit `.env` files.
* Provide a `.env.example` with placeholder variables.
* Separate configs for development, staging, and production.