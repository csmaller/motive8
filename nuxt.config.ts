export default {
  devtools: { enabled: true },
  ssr: true,
  plugins: ['~/plugins/preview.client.js'],

  buildModules: ['@nuxtjs/google-analytics'],

  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/color-mode', 'vue3-carousel-nuxt'],
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
  },
  css: ['primevue/resources/themes/saga-blue/theme.css', 'primevue/resources/primevue.css', 'primeflex/primeflex.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/style/_colors.scss" as *;',
        },
      },
    },
  },
};
