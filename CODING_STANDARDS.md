# Team Coding Standards (React)

## 1. Conventions

### 1.1 Code Readability

* Use functional components exclusively.
* Keep components small and single-purpose; each component should do one thing.
* Avoid long lines. It is easier for humans to read blocks of lines that are horizontally short and vertically long.
* Avoid files larger than 300 lines.
* Ensure space after giving a comma between two function arguments.
* Each nested block should be properly indented and spaced.

### 1.2 Naming Convention
* Always assign unique and meaningful variable names.
* Use camelCase for local variables/functions and PascalCase for components and file names. Folder names should be camelCase.
* CSS files should be named the same as the component PascalCase. Global CSS which applies to all components should be placed in global.css and should be named in camelCase.
* Test files should be named the same as the component or non-component file.
* Begin private variables/methods with underscore(_). Constants should be UPPER_SNAKE_CASE.
* Try to use global variables in a limited manner. Global variables follow PascalCase.
* Try to avoid digit in variable names.

### 1.3 Comments
* Include comments for intricate or non-obvious code segments. Don't merely repeat what the code already expresses clearly.
* Explain business rules, domain-specific logic, or regulatory requirements.
* Mark areas where improvements or additional features are needed.
* Remove temporary comments used for debugging once the issue is resolved.

### 1.4 Common Rules
* Use the DRY principle (Don't repeat yourself).
* Avoid Inline CSS as and when possible (a CSS class should be created when there are more than 2 CSS attributes).
* Keep the code in a try-catch-finally(optional) block.
* Always write unit test cases for your code. Keep tests files in sync with the files they are testing.
* Destructuring your props is a good way to help make your code cleaner and more maintainable.
* Organize imports in the following order, with each group separated by an empty line:
  1. React import
  2. Third-party library imports (alphabetical order)
  3. Absolute imports from the project (alphabetical order)
  4. Relative imports (alphabetical order)
  5. Namespace imports (`import * as`)
  6. Style/asset imports (`import './<some file>.<some extension>'`)
* All images must include meaningful `alt` text.
* Avoid `console.log` in production code.


### 1.5 Security
* Ensure you don't expose sensitive data such as API keys, JWT, database connection.
* Always validate and sanitize user inputs for SQL injection and XSS attacks.
* Implement secure authentication mechanisms, such as multi-factor authentication, and robust authorization controls to ensure that users only have access to the resources they need.
* Implement role-based access control to help secure sensitive data.
* Use strong encryption algorithms and protocols to secure data stored in databases, on disk, and during data transmission over networks.




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


## 3. Lint Rules

### 3.1 React Component Rules

* **Functional Components Only**: Use functional components exclusively (`react/prefer-stateless-function`).
* **Arrow Function Components**: Named components must be defined as arrow functions (`react/function-component-definition`).
* **Component Naming**: Component names must use PascalCase (`react/jsx-pascal-case`).
* **Display Names**: Components should have display names for better debugging (`react/display-name` - warning).
* **Self-Closing Tags**: Use self-closing tags when there are no children (`react/self-closing-comp` - warning).

### 3.2 React JSX Rules

* **Button Type Attribute**: All `<button>` elements must have an explicit `type` attribute (`react/button-has-type`).
* **JSX Keys**: Always provide keys for list items with proper placement and no duplicates (`react/jsx-key`).
* **JSX Fragments**: Use shorthand fragment syntax `<>` instead of `<React.Fragment>` (`react/jsx-fragments`).
* **JSX Max Depth**: Limit JSX nesting to maximum 5 levels (`react/jsx-max-depth`).
* **No Script URLs**: Avoid `javascript:` URLs in JSX (`react/jsx-no-script-url`).
* **No Useless Fragments**: Remove unnecessary fragments (`react/jsx-no-useless-fragment` - warning).
* **Curly Brace Presence**: Enforce consistent use of curly braces in JSX (`react/jsx-curly-brace-presence` - warning).
* **Conditional Rendering**: Use ternary operators for conditional rendering to avoid leaked renders (`react/jsx-no-leaked-render`).
* **Sort Props**: JSX props should be sorted alphabetically (`react/jsx-sort-props` - warning).
* **React Import**: React import is not required in JSX for React 17+ (`react/react-in-jsx-scope` - off).

### 3.3 React Props & State Rules

* **Props Destructuring**: Always destructure props, including in function signatures (`react/destructuring-assignment`).
* **No Unused Props**: All defined prop types must be used (`react/no-unused-prop-types`).
* **No Children Prop**: Avoid passing children as a prop; use JSX children instead (`react/no-children-prop`).
* **PropTypes**: PropTypes validation is disabled when using TypeScript (`react/prop-types` - off).

### 3.4 React Safety Rules

* **No dangerouslySetInnerHTML**: Avoid using `dangerouslySetInnerHTML` (`react/no-danger`).
* **No Danger with Children**: Never use `dangerouslySetInnerHTML` with children (`react/no-danger-with-children`).
* **No Unstable Nested Components**: Avoid defining components inside other components (`react/no-unstable-nested-components`).
* **No Typos**: Check for common typos in React API usage (`react/no-typos` - warning).

### 3.5 React Hooks Rules

* **Rules of Hooks**: Hooks must only be called at the top level and in React functions (`react-hooks/rules-of-hooks`).
* **Effect Dependencies**: All `useEffect` dependencies must be explicitly listed (`react-hooks/exhaustive-deps`).

### 3.6 TypeScript Rules

* **No Unused Variables**: Unused variable detection is disabled (`@typescript-eslint/no-unused-vars` - off).

### 3.7 Hot Reload Rules

* **Component Exports**: Only export components from module root for fast refresh (`react-refresh/only-export-components` - warning).
