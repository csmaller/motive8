import { useToast } from 'primevue/usetoast';

export default () => {
  const nuxtApp = useNuxtApp();
  const getToast: typeof useToast = () => nuxtApp.vueApp.config.globalProperties.$toast;
  const toastService = getToast();
  return toastService;
};
