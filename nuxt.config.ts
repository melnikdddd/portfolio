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
    langDir: 'locales/',
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
  },
  nitro: {
    devProxy: {},
  },
  debug: false,
});
