# AGENTS.md - Mortgage Repayment Calculator

## Project Overview

A React 19 + Vite + Tailwind CSS mortgage repayment calculator application. Uses React Context + useReducer for state management.

---

## Commands

### Development
```bash
npm run dev          # Start Vite dev server (http://localhost:5173)
npm run preview      # Preview production build locally
```

### Build & Linting
```bash
npm run build        # Build for production (outputs to dist/)
npm run lint         # Run ESLint on all files
npm run lint -- --fix   # Auto-fix linting issues
```

### Testing
**There is no test framework configured.**

---

## Code Style Guidelines

### File Organization
- **Components**: `src/form/*.jsx`, `src/*.jsx` - PascalCase naming
- **Utilities**: `src/mortageFormReducer.jsx`, `src/MortageCalculate.jsx` - camelCase
- **Context**: `src/mortageContext.jsx`
- **Assets**: `src/assets/IconsSvg.jsx`
- **Styles**: `src/index.css` for global styles and Tailwind config

### React Patterns
- Use **React Context** (`MortageProvider`) for global state
- Use **useReducer** for form state management (`mortageReducer`)
- Components export as named exports: `export const MortageForm = () => {...}`
- Default export for App: `export default App`
- Use functional components exclusively (no class components)

### Naming Conventions
- **Components**: PascalCase (`MortageForm`, `YourResults`, `ErrorField`)
- **Variables/Functions**: camelCase (`handleSubmit`, `handleChange`, `calculateTotal`)
- **Constants**: PascalCase (`initialState`, `MortageFormCalculate`)
- **CSS Classes**: Tailwind utilities (kebab-case via config)
- **Context Hook**: `useMortageAmount` (custom hook pattern)

### JSX/React
- Self-closing tags for elements without children: `<Input />`, `<IconCalculator />`
- Use `className` (not `class`)
- Always use explicit closing tags or self-closing syntax
- Accessibility: `aria-label`, `aria-hidden`, `htmlFor`, semantic HTML
- Event handlers: `handleEventName` pattern
- Avoid inline styles; use Tailwind classes instead

### ESLint Configuration
- Extends: `js.configs.recommended`, `reactHooks.configs.flat.recommended`, `reactRefresh.configs.vite`
- Custom rule: `no-unused-vars` allows vars starting with uppercase (for JSX imports)
- **Run `npm run lint` before committing**
- ESLint config location: `eslint.config.js`

### Tailwind CSS
- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Custom design tokens in `src/index.css`
- Use semantic className combinations

### Imports
```jsx
// Relative imports with extensions
import { MortageForm } from './form/MortageFormMain.jsx'
import { MortageProvider } from './mortageContext'
import { IconCalculator } from '../assets/IconsSvg.jsx'

// Absolute imports from node_modules (if needed)
import React from 'react'
```

### Error Handling
- Form validation in `MortageFormValid.jsx`
- Validation returns error object with boolean values
- Errors stored in `state.errorMortage`
- Display errors via `ErrorField` component
- Use try-catch for any async operations

---

## Architecture
- **Global State**: React Context (`MortageProvider`)
- **Local State**: useReducer in `mortageReducer.jsx`
- **State Shape**:
```javascript
{
  amount: string,
  term: string,
  rate: string,
  mortageType: string,
  errorMortage: object,
  result: object | null
}
```

### Reducer Actions
- `UPDATE`: Update field value
- `ERRORS`: Set validation errors
- `RESULT`: Set calculation result
- `MORTAGE_TYPE`: Set mortgage type selection
- `CLEAR_ALL`: Reset to initial state

### Component Hierarchy
```
App
└── MortageProvider
    ├── MortageForm (left/main panel)
    │   ├── Input fields (amount, term, rate)
    │   ├── Radio group (mortageType)
    │   ├── ErrorField components
    │   └── Submit button
    └── YourResults (right/aside panel)
        └── Result display
```

---

## Known Issues / Technical Debt

- Remove `console.log` statements (found in `mortageFormReducer.jsx:29`)
- No error boundary configured
- No unit tests exist
- Backup file `MortageFormMain.bak.jsx` should be removed

---

## Project Structure

```
src/
├── App.jsx                    # Root component with MortageProvider
├── main.jsx                   # Entry point (mounts App)
├── index.css                  # Tailwind + custom styles
├── MortageCalculate.jsx       # Mortgage calculation logic
├── YourResult.jsx             # Results display component
├── mortageContext.jsx         # React Context + Provider
├── mortageFormReducer.jsx     # useReducer + initialState
├── form/
│   ├── MortageFormMain.jsx    # Main form component
│   ├── MortageFormValid.jsx   # Form validation logic
│   └── Error-field.jsx        # Error display component
└── assets/
    ├── IconsSvg.jsx           # SVG icon components
    └── react.svg              # React logo placeholder
```

---

## Notes for Agents

- This is a Frontend Mentor challenge project
- No tests exist; consider adding Vitest if tests needed
- Build output goes to `dist/` (gitignored)
- Uses Vite 7.x with React 19
