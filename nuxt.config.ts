export default {
  devtools: { enabled: true },
  ssr: false,
  compatibilityDate: '2024-11-04',

  content: {
    experimental: {
      clientDB: true,
    },
  },

  plugins: ['~/plugins/preview.client.js'],
  buildModules: ['@nuxtjs/google-analytics'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/color-mode', '@pinia/nuxt'],

  build: {
    transpile: ['primevue'],
  },

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },

  googleAnalytics: {
    id: 'G-RBN4YPXE48',
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
    gtagId: 'G-RBN4YPXE48',
    publishableKey:
      'pk_live_51O4pfGCJp6pxKUJfeMk29h6p0UCjw6VhfCQ5hBTBcAaMHKa9gAaDAQ9nN46mp4SEsfarhL7aRzQrTgnkL40KiQxw00HPlikOAc',
  },

  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primeicons/primeicons.css',
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/style/_colors.scss" as *;',
        },
      },
    },
  },

  compatibilityDate: '2024-11-03',
};
