

## Conventions

### JS Conventions

#### Naming
- camelCase for variables and functions
- PascalCase for classes
- Uppercase for constants
- All names start with a letter
- Use descriptive names (avoid generic names like 'x', 'data', etc.)
- Functions should be named with an action
- Booleans start with 'is', 'has', 'can', 'should'

#### Formating
- End statement with semicolon
- No trailing whitespace at the end of lines
- Maximum line length: 80–100 characters
- Add space after keywords and operators
- Add blank lines between logical sections
- Use two spaces for indentation?
- Use trailing commas in objects, arrays, imports, and exports
- For multi-line objects/arrays, each item on its own line
- Always put the opening brace on the same line

#### Functions
- Prefer function declarations over function expressions
- Avoid assigning arrow functions directly to named variables when a function declaration is more appropriate
- For callback functions that don’t need this, use arrow functions for cleaner code
- Use implicit returns in arrow functions when the body is a single expression
- Use prentheses around arrow function parameters
- Prefer pure functions when possible
- Avoid mutating function parameters

#### Classes and Objects
- For creating general objects, use object literals and not constructors
- Use ES class syntax for objects, not old-style constructors
- To define methods, use the method definition syntax
- Keep class methods small and single-responsibility

#### Error Handling
- Use try/catch for async operations that may fail
- Always return meaningful error messages
- Avoid silent failures

#### Async/Promises
- Prefer async/await over .then() chains
- Wrap awaited calls in try/catch
- Avoid mixing async/await and .then() in the same code block

#### Comments
- Use comments to explain why, not what
- Avoid obvious comments

#### Imports/Exports
- Use named exports over default exports when possible
- Keep imports sorted and grouped

- Prefer const and let over var

### React Conventions

#### Naming
- PascalCase for component files and component names
- Hooks use camelCase and start with use
- Components that render lists should have plural names
- Event handlers start with 'handle'
- Use descriptive names for state variables

#### Component Structure & Organization
- One component per file
- Keep components small and focused (single responsibility)
- Place helper functions inside the component only if needed there
- Put components in folders when they have related styles/hooks/tests
- Avoid deeply nested component trees
- Extract a new component when the same UI or logic is repeated in multiple places

#### JSX Conventions
- Wrap multi-line JSX in parentheses
- Use self-closing tags when there are no children
- Keep JSX clean: avoid inline styles unless simple
- Use fragments (<> </>) instead of unnecessary divs
- Use className instead of class
- When rendering lists, always include a stable key prop

#### State Management
- Keep state minimal, don’t duplicate derived data
- Don’t store things in state if they can be computed from existing state
- Group related pieces of state into objects
- Lift state up only when necessary
- Avoid passing state through many levels, use context


## Folder Structure
[Follow the third one](https://dev.to/itswillt/folder-structures-in-react-projects-3dp8)


## Lint Rules

### For JavaScript
- No unused variables (no-unused-vars)
- No unused function parameters (no-unused-vars with args)
- No redeclaring variables (no-redeclare)
- No shadowing variables (no-shadow)
- Use === instead of == (eqeqeq)
- Always declare variables with const or let — never var (no-var)
- Prefer const when the variable is not reassigned (prefer-const)
- Require curly braces for all control blocks (curly)
- Disallow empty blocks (no-empty)
- Disallow reassigning function parameters (no-param-reassign)
- Disallow duplicate object keys (no-dupe-keys)
- Enforce newline at end of file (eol-last)
- Max line length: 80–100 characters

### For React
Components must use PascalCase (react/jsx-pascal-case)

JSX must have one parent element

Use key prop when rendering lists (react/jsx-key)

No unused React imports (auto-fix with new React version)

Prevent direct mutation of state (react/no-direct-mutation-state)

Prevent using array index as key (react/no-array-index-key)

Require default props for non-required props (if using propTypes)

Enforce propTypes or TypeScript for components

Prevent dangerous HTML (react/no-danger)

Enforce alt attribute on images (jsx-a11y/alt-text)

Enforce accessible labels for form elements (jsx-a11y/label-has-associated-control)