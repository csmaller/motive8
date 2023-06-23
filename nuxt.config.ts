// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/preview.client.js'],
  modules: ['@nuxt/content', '@nuxt/ui'],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
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
