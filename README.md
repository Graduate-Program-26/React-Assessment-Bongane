# Project Documentation

This document outlines the key technologies, APIs, and patterns used in this project: a Next.js dashboard built with Mantine UI, Mantine Charts, Tabler Icons, and Tailwind CSS.

---

# 🧱 Tech Stack Overview

* **Framework:** Next.js (App Router)
* **UI Library:** Mantine
* **Github Chart:** [React-github-calendar](https://grubersjoe.github.io/react-github-calendar/)
* **Icons:** Tabler Icons React
* **Styling:** Mantine Styles API + Tailwind CSS
* **Package Manager:** pnpm

---


# 🎨 Mantine Setup

## Provider Configuration

Mantine is initialized at the root of the app using `MantineProvider`.

Key features used:

* `defaultColorScheme` (light/dark mode support)
* Theme customization
* Component overrides

```tsx
<MantineProvider defaultColorScheme="light" defaultColorScheme="light">
  {children}
</MantineProvider>
```

---


### Functions

* `toggleColorScheme()`
* `setColorScheme("dark" | "light")`

### Required Setup

```tsx
<ColorSchemeScript />
```

---


# 🎯 Tabler Icons

Used for UI iconography.

```tsx
import { IconSun, IconMoonStars } from "@tabler/icons-react";
```

### Common props

* `size`
* `stroke`
* `color`

---

# ⚙️ Package Management

Project uses **pnpm**.


---

# 📚 Key Documentation References

* Next.js: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)
* Mantine: [https://mantine.dev/](https://mantine.dev/)
* Tabler Icons: [https://tabler.io/icons](https://tabler.io/icons)
* React: [https://react.dev/](https://react.dev/)
* Tailwind CSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* Mantine Sass : [https://mantine.dev/styles/sass/]
* Github Api schema: [https://github.com/octokit/webhooks/tree/main/payload-schemas/api.github.com]
* Dockerfile : [https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/development/Dockerfile]
* Better-auth : [https://better-auth.com/docs/introduction]
* Langauge colours: [https://github.com/simonecorsi/github-languages-colors/blob/main/src/gh-colors.css]
* Zod : [https://zod.dev/api]
* Background image : [https://www.freepik.com/]
* Github rest apis : [https://docs.github.com/en/rest]
---

# 🚀 Summary

This project is a dashboard-style application built using:

* Next.js App Router for structure
* Mantine for UI and theming
* Tailwind CSS for layout refinement 
* Sass to control some components
