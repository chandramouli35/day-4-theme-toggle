# Day 4 – React Theme Switcher using Context API

This is part of my 150-day developer preparation journey toward becoming a frontend/backend specialist and landing a ₹7+ LPA role. Today’s focus was on **React component architecture, props drilling issues**, and the **Context API for clean global state management**.

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
- Plain CSS (Tailwind setup planned for later)

## 🌱 Key Learnings:

Using Context API helped avoid deeply nested props and simplified theme sharing across multiple components. Composition keeps UI modular and maintainable — a must for scalable frontend apps.

## 🏁 Repo Highlights:

- `ThemeContext.js`: context creation and theme toggling logic
- `App.js`: wraps app with `ThemeProvider`
- `Header.js` & `Content.js`: consume theme values for dynamic styling

> Day 4 complete. Every topic I master builds the structure for a smarter, cleaner codebase tomorrow.
