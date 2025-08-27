# Task Next.js

This project is a web application built with Next.js and uses Bun as the package manager and runtime.

---

## 🛠️ Build With

- Next.js
- React
- TypeScript
- Tailwind CSS
- Bun

---

## :sparkles: Feature List

- [x] Authentication (Login & Register pages) 
- [x] Protected Dashboard route (middleware-based) 
- [x] Dynamic, catch-all and optional catch-all routing for user pages (user1, user2, user3) 
- [x] Parallel routes in dashboard (@main) 
- [x] Route groups for auth pages 
- [x] Client-side navigation with Next.js Link

---

## :framed_picture: Screenshots

### Root Page (`/`)

![Root Page](/public/root.png)

### Root Dashboard Page (`/dashboard`)

## ![Root Dashboard Page](/public/root-dashboard.png)

### Dynamic route (`/user1/123`)

![User1 Page](/public/root-user1.png)

### Catch-all route (`/user2/[...slug]`)

![User2 Page](/public/root-user2.png)

### Optional catch-all route (`/user3/[[...slug]]`)

![User3 Page](/public/root-user3.png)

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
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── root-dashboard.png
│   ├── root-login.png
│   ├── root-register.png
│   ├── root-user1.png
│   ├── root-user2.png
│   ├── root-user3.png
│   ├── root.png
│   ├── Screenshot-app.png
│   ├── Screenshot-app2.png
│   ├── vercel.svg
│   └── window.svg
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
│   │   ├── 📁user1
│   │   │   └── 📁id
│   │   │       └── page.tsx
│   │   ├── 📁user2
│   │   │   └── 📁[...slug]
│   │   │       └── page.tsx
│   │   ├── 📁user3
│   │   │   └── 📁[[...slug]]
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
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
