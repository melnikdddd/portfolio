import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/fontaine',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components/widgets',
      pathPrefix: false,
    },
    {
      path: '~/components/layouts/default',
      pathPrefix: false,
      preload: true,
    },
    {
      path: '~/components/ui/containers',
      pathPrefix: false,
    },
    {
      path: '~/components/ui/cards',
      pathPrefix: false,
      prefix: 'App',
    },
    {
      path: '~/components/ui/buttons',
      pathPrefix: false,
    },
    {
      path: '~/components/loaders',
      pathPrefix: false,
    },
    {
      path: '~/components/ui/links',
      pathPrefix: false,
      prefix: 'App',
    },
    {
      path: '~/components/ui/switch',
      pathPrefix: false,
      prefix: 'Switch',
    },
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'ua',
        language: 'uk-UA',
        name: 'Українська',
        file: 'ua.json',
      },
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
  },
  fontMetrics: {
    fonts: ['Montserrat'],
  },
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
      },
    ],
  },
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpeg', 'jpg', 'png', 'gif'],
    providers: {
      ipx: {
        modifiers: {
          quality: 80,
          format: 'webp',
        },
      },
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },
  nitro: {
    devProxy: {},
    prerender: {
      crawlLinks: true,
      routes: ['/', '/info/contacts', '/info/skills'],
    },
    compressPublicAssets: true,
    minify: true,
  },
  routeRules: {
    '/': { prerender: true },
    '/info/contacts': { prerender: true },
    '/info/skills': { prerender: true },
  },
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Danylo Melnyk - Full-Stack Developer',
      meta: [
        { name: 'description', content: 'Full-Stack Web Developer with 3+ years of experience building scalable, high-performance web applications using Next.js, Nuxt.js, and NestJS.' },
        { name: 'keywords', content: 'Full-Stack Developer, Web Developer, Next.js, Nuxt.js, NestJS, React, Vue, TypeScript, JavaScript, Portfolio' },
        { name: 'author', content: 'Danylo Melnyk' },
        { property: 'og:title', content: 'Danylo Melnyk - Full-Stack Developer' },
        { property: 'og:description', content: 'Full-Stack Web Developer with 3+ years of experience building scalable, high-performance web applications.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Danylo Melnyk - Full-Stack Developer' },
        { name: 'twitter:description', content: 'Full-Stack Web Developer with 3+ years of experience.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  debug: false,
});
