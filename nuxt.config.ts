export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/preview.client.js'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/color-mode'],
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
});
