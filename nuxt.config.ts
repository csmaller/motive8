export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/preview.client.js'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/color-mode'],

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
