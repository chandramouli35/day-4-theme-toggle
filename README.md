# Day 4 – React Theme Switcher using Context API

Part of my 150-day prep journey where I build and learn daily — today was React fundamentals.

## ✅ What I Practiced:

- Component composition and reuse
- Props vs State handling
- Creating global state using Context API
- Avoiding props drilling by wrapping components in a ThemeProvider
- Dynamic UI updates using `useContext` and `useState`

## 🛠 What I Built:

- Light/Dark Theme Switcher with shared global state
- Components: `App`, `Header`, `Content`, `ThemeContext`
- Theme toggle button updates styles across components
- Scoped styling to switch background and text colors

## 📦 Tech Stack:

- React.js (Functional Components)
- Context API
- Tailwind CSS

## 🌱 Key Learnings:

Using Context API helped avoid deeply nested props and simplified theme sharing across multiple components. Composition keeps UI modular and maintainable — a must for scalable frontend apps.

## 🏁 Repo Highlights:

- `ThemeContext.js`: context creation and theme toggling logic
- `App.js`: wraps app with `ThemeProvider`
- `Header.js` & `Content.js`: consume theme values for dynamic styling

> Day 4 complete. Every topic I master builds the structure for a smarter, cleaner codebase tomorrow.
