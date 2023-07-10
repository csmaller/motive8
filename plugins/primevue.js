import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component('Toast', Toast);
  nuxtApp.vueApp.component('InputText', InputText);
  //other components that you need
});
