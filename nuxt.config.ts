export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],

  compatibilityDate: '2025-11-11',

  ssr: true, // SSG
  nitro: {
    preset: 'static',
  },

  // Update example 'favicon.svg?v=2'
  app: {
    baseURL: '/',
    head: {
      link: [
        // Favicons
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, // Modern
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Fallback
        { rel: 'alternate icon', type: 'image/png', href: '/favicon.png' }, // 256×256 Fallback
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        }, // iOS

        // Manifest
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  devtools: { enabled: false }, // Disable for production

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,

      // Default meta
      meta: {
        title: 'Team Escalate - Parkour, Freerunning & Tricking',
      },
    },
  },

  unocss: {
    preflight: true,
    // uno: false,
    // wind: true,
    typography: true,
  },

  typescript: {
    shim: false,
  },
})
