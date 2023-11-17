// export default defineNuxtPlugin((nuxtApp) => ({ query, enablePreview }) {
//   if (query && query.preview) {
//     enablePreview();
//   }
// }
export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();
  const preview = route.query?._storyblok || false;

  if (preview) {
    nuxtApp.hook('page:finish', () => {
      refreshNuxtData();
    });
  }

  return { provide: { preview } };
});
