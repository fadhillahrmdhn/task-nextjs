# Task Next.js

This project is a modern web application built with Next.js, featuring protected routes, authentication, and authorization. It demonstrates data fetching in both Server and Client Components using Axios, SWR, and TanStack Query. State management is handled with Zustand. The app includes reusable UI components, pagination, toast notifications, and a search feature for the Star Wars API. The folder structure is organized for scalability and maintainability. Bun is used as the package manager and runtime for fast development.

---

## 🛠️ Build With

- Next.js
- React
- TypeScript
- Tailwind CSS
- Bun
- Zustand
- Axios
- SWR
- TanStack Query

---

## :sparkles: Feature List

- [x] Authentication & Authorization (Login, Register)
- [x] Protected routes with middleware (Dashboard, Query)
- [x] Client-side navigation with Next.js Link
- [x] Data fetching in Server and Client Components
- [x] Data fetching with Axios (client & server)
- [x] Data fetching with SWR
- [x] Data fetching with TanStack Query
- [x] State management with Zustand
- [x] Pagination component & custom hook
- [x] Toast notification (Sonner)
- [x] Search feature (Star Wars API)
- [x] custom page not found with reactbits

---

## :framed_picture: Screenshots

### Root Page (`/`)

![Root Page](/public/assets/screenshots/rootpage.png)

### Login Page (`/login`)

![Login Page](/public/assets/screenshots/login.png)

### Root Dashboard Page (`/dashboard`)

![Root Dashboard Page](/public/assets/screenshots/dashboard.png)

### Root Star Wars Page (`/starwars`)

![Root Star Wars Page](/public/assets/screenshots/Root_StarWars_Page.png)
![Search Feature](/public/assets/screenshots/search-feature.png)

### :iphone: Mobile View

![Root Star Wars Page](/public/assets/screenshots/Root_StarWars_mobile.png)

---

## :rocket: How to Run the Project

1. Install dependencies:
   ```sh
   bun install
   ```
2. Start the development server:
   ```sh
   bun dev
   ```
3. To build and run in production:
   ```sh
   bun start
   ```

Once the server is running, you can open `http://localhost:3000` in your browser to view the application.

---

## :file_folder: Folder Structure

```ts
├── 📁.husky                // Git hooks directory
│   ├── 📁_                 // Husky internal scripts
│   ├── commit-msg          // Hook for commit message validation
│   ├── commit-msg.ps1      // Hook for commit message validation
│   ├── pre-commit          // Hook for pre-commit checks
│   └── pre-commit.ps1      // Hook for pre-commit checks
├── 📁public
│   └── 📁assets
│       ├── 📁icons
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       └── 📁screenshots
│           ├── dashboard.png
│           ├── login.png
│           ├── rootpage.png
│           ├── Root_StarWars_mobile.png
│           ├── Root_StarWars_Page.png
│           └── search-feature.png
├── 📁src
│   ├── 📁app
│   │   ├── 📁(main)
│   │   │   ├── 📁(auth)
│   │   │   │   ├── 📁login
│   │   │   │   │   ├── 📁_components
│   │   │   │   │   │   └── LoginForm.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   └── 📁register
│   │   │   │       └── page.tsx
│   │   │   ├── 📁dashboard
│   │   │   │   ├── 📁@main
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── 📁starwars
│   │   │   │   ├── 📁_components
│   │   │   │   │   └── SearchBar.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── 📁_components
│   │   │   │   └── navbar.tsx
│   │   │   └── layout.tsx
│   │   ├── 📁_components
│   │   │   └── navbar.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── 📁components
│   │   ├── 📁shared
│   │   ├── 📁ui
│   │   │   ├── alert.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── select.tsx
│   │   │   └── sonner.tsx
│   │   └── FuzzyText.tsx
│   ├── 📁configs
│   │   ├── axios.config.ts
│   │   ├── index.ts
│   │   ├── query-client.config.ts
│   │   └── swr.config.ts
│   ├── 📁enums
│   │   ├── index.ts
│   │   └── role.enum.ts
│   ├── 📁hooks
│   │   ├── index.ts
│   │   └── use-pagination.ts
│   ├── 📁interfaces
│   │   ├── auth.interface.ts
│   │   ├── form-login.interface.ts
│   │   ├── index.ts
│   │   ├── pagination.interface.ts
│   │   └── starwars.interface.ts
│   ├── 📁lib
│   │   └── utils.ts
│   ├── 📁providers
│   │   ├── index.ts
│   │   └── QueryProviders.tsx
│   ├── 📁services
│   │   ├── index.ts
│   │   └── starwars.service.ts
│   ├── 📁store
│   │   ├── authStore.ts
│   │   ├── index.ts
│   │   └── searchStore.ts
│   ├── 📁types
│   │   ├── cookie.type.ts
│   │   └── index.ts
│   └── middleware.ts
├── .gitignore
├── bun.lock
├── bunfig.toml
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
