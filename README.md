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

*Coming soon...*


---


## :framed_picture: Screenshots

### Root Page (`/`)

![Root Page](/public/Screenshot-app.png)

### Root Dashboard Page (`/dashboard`)
![Root Dashboard Page](/public/Screenshot-app2.png)
---

## :file_folder: Folder Structure


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
│   ├── Screenshot-app
│   ├── Screenshot-app2
│   ├── vercel.svg
│   └── window.svg
├── 📁src   // Main source directory
│   └── 📁app
│       ├── 📁dashboard
│       │   └── page.tsx
│       ├── 📁login
│       │   └── page.tsx
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
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
