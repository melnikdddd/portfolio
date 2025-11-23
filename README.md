# Danylo Melnyk - Portfolio

Personal portfolio website built with Nuxt 4, showcasing my skills, experience, and projects as a Full-Stack Developer.

## 🌐 Live Demo

This portfolio is deployed on Vercel and available at: **[danylo-melnyk.dev](https://danylo-melnyk.dev)**

[![Deployment Status](https://img.shields.io/badge/Vercel-Deployed-success?style=flat&logo=vercel)](https://danylo-melnyk.dev)

## 🚀 Tech Stack

- **Framework**: Nuxt 4.2.1
- **UI Library**: Nuxt UI 4
- **Styling**: Tailwind CSS 4
- **Internationalization**: @nuxtjs/i18n
- **Image Optimization**: Nuxt Image
- **Font Management**: Nuxt Fonts
- **State Management**: VueUse

## 📋 Features

- ✅ Multilingual support (English/Ukrainian)
- ✅ Dark/Light mode
- ✅ SEO optimized
- ✅ SSR/SSG with Nitro
- ✅ Responsive design
- ✅ Optimized images (WebP, AVIF)
- ✅ Type-safe with TypeScript

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Nuxt.js and configure settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables required for basic deployment. Add any custom variables in Vercel dashboard under Project Settings → Environment Variables.

### Custom Domain

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Domains
3. Add your custom domain: `danylo-melnyk.dev`
4. Follow DNS configuration instructions

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── assets/          # Global styles and assets
│   ├── components/      # Vue components
│   │   ├── layouts/     # Layout components
│   │   ├── ui/          # UI components
│   │   └── widgets/     # Feature widgets
│   ├── composables/     # Vue composables
│   ├── pages/           # Page components (auto-routed)
│   └── error.vue        # Error page
├── i18n/
│   └── locales/         # Translation files
├── public/              # Static files
├── shared/              # Shared utilities and types
│   ├── constants/       # Constants
│   └── types/           # TypeScript types
└── nuxt.config.ts       # Nuxt configuration
```

## 📄 License

Private - All rights reserved

---

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
