# Task Next.js

This project is a modern web application built with Next.js, featuring protected routes, authentication and authorization. It demonstrates data fetching in both Server and Client Components using Axios, SWR, and TanStack Query. State management is handled with Zustand. The app includes reusable UI components, pagination and toast notifications. Bun is used as the package manager and runtime for fast development.

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

- [x] Authentication and Authorization 
- [x] Protected routes with middleware (Dashboard & Query)
- [x] Client-side navigation with Next.js Link
- [x] Data fetching in Server and Client Components
- [x] Data fetching with Axios (client & server)
- [x] Data fetching with SWR
- [x] Data fetching with TanStack Query
- [x] State management with Zustand
- [x] Pagination component & hook
- [x] Toast notification (Sonner)

---

## :framed_picture: Screenshots

### Root Page (`/`)

![Root Page](/public/assets/screenshots/rootpage.png)

### Login Page (`/login`)

![Login Page](/public/assets/screenshots/login.png)

### Root Dashboard Page (`/dashboard`)

![Root Dashboard Page](/public/assets/screenshots/dashboard.png)

### Fetching in Server Components (`/starwars/fetch/server`)

![User1 Page](/public/assets/screenshots/Fetching_di_Server_Components.png)

### Fetching in Client Components (`/starwars/fetch/client`)

![User1 Page](/public/assets/screenshots/Fetching_di_Client_Components.png)

### Fetching in Server Components using Axios (`/starwars/axios/server`)

![User2 Page](/public/assets/screenshots/Fetching_di_server_Components_menggunakan_Axios.png)

### Fetching in Client Components using Axios (`/starwars/axios/client`)

![User3 Page](/public/assets/screenshots/Fetching_di_Client_Components_menggunakan_Axios.png)

### Fetching with Axios and SWR (`/starwars/swr`)

![User3 Page](/public/assets/screenshots/Fetching_dengan_Axios_dan_SWR.png)

### Fetching with Axios and TanStack Query (`/starwars/query`)

![User3 Page](/public/assets/screenshots/Fetching_menggunakan_Axios_dan_TanstackQuery.png)

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
├── 📁public/                  // Public assets (served at root)
│   └── 📁assets
│       ├── 📁icons
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       └── 📁screenshots
│           ├── dashboard.png
│           ├── Fetching_dengan_Axios_dan_SWR.png
│           ├── Fetching_di_Client_Components.png
│           ├── Fetching_di_Client_Components_menggunakan_Axios.png
│           ├── Fetching_di_Server_Components.png
│           ├── Fetching_di_Server_Components_menggunakan_Axios.png
│           ├── Fetching_menggunakan_Axios_dan_TanstackQuery.png
│           ├── login.png
│           ├── root-dashboard.png
│           ├── root-login.png
│           ├── root-register.png
│           ├── root-user1.png
│           ├── root-user2.png
│           ├── root-user3.png
│           ├── root.png
│           ├── rootpage.png
│           ├── Screenshot-app.png
│           └── Screenshot-app2.png
├── 📁src   // Main source directory
│   ├── 📁app
│   │   ├── 📁(auth)
│   │   │   ├── 📁login
│   │   │   │   ├── 📁_components
│   │   │   │   │   └── LoginForm.tsx
│   │   │   │   └── page.tsx
│   │   │   └── 📁register
│   │   │       └── page.tsx
│   │   ├── 📁dashboard
│   │   │   ├── 📁@main
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── 📁starwars
│   │   │   ├── 📁axios
│   │   │   │   ├── 📁client
│   │   │   │   │   └── page.tsx
│   │   │   │   └── 📁server
│   │   │   │       └── page.tsx
│   │   │   ├── 📁fetch
│   │   │   │   ├── 📁client
│   │   │   │   │   └── page.tsx
│   │   │   │   └── 📁server
│   │   │   │       └── page.tsx
│   │   │   ├── 📁query
│   │   │   │   └── page.tsx
│   │   │   └── 📁swr
│   │   │       └── page.tsx
│   │   ├── 📁user1
│   │   │   └── 📁[id]
│   │   │       └── page.tsx
│   │   ├── 📁user2
│   │   │   └── 📁[...slug]
│   │   │       └── page.tsx
│   │   ├── 📁user3
│   │   │   └── 📁[[...slug]]
│   │   │       └── page.tsx
│   │   ├── 📁_components
│   │   │   └── navbar.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── 📁components
│   │   └── 📁ui
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── select.tsx
│   │       └── sonner.tsx
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
│   │   ├── auth.inteface2.ts
│   │   ├── auth.interface.ts
│   │   ├── base.interface.ts
│   │   ├── form-login.interface.ts
│   │   ├── index.ts
│   │   ├── pagination.interface.ts
│   │   ├── starwars.interface.ts
│   │   └── user.interface.ts
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
│   │   └── index.ts
│   ├── 📁types
│   │   ├── cookie.type.ts
│   │   ├── index.ts
│   │   └── response.type.ts
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
