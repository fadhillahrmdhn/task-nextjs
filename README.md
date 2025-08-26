# Task Next.js

## Short Description

This project is a web application built with Next.js and uses Bun as the package manager and runtime.

## Feature List

## How to Run the Project

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

## Folder Structure

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
