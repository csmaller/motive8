<script setup lang="ts">
const route = useRoute();
import { useUtilities } from './composables/useUtilities';

useHead({
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
    { src: 'https://js.stripe.com/v3' },
    {
      type: 'text/javascript',
      src: 'https://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=cd0188dcbea6510561a39a11f92394377ab1474c',
    },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
  ],
});
const colorMode = useColorMode();
const utilities = useUtilities();
const { loadBigMenu, loadSmallMenu, isMediumScreen, scrollToTop } = utilities;
colorMode.preference = 'light';
const menuSlid = ref(false);
const toast = usePVToastService();

onMounted(() => {
  if (route.hash) {
    let hash = route.hash;
    hash = hash.replace('#', '');
    const anchor = document.getElementById(hash);

    if (anchor) {
      window.scrollTo({
        top: anchor.getBoundingClientRect().top + 350,
      });
    }
  } else {
    setTimeout(() => {
      if (isMediumScreen() && menuSlid.value !== true) {
        scrollToTop();
        menuSlid.value = true;
      }
    }, 5000);
  }

  const handleScroll = () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      if (!isMediumScreen()) return; // Check if the screen size is medium

      var currentScrollPos = window.pageYOffset;
      if ((prevScrollpos > currentScrollPos && menuSlid.value === false) || currentScrollPos === 0) {
        loadBigMenu();
      } else {
        loadSmallMenu();

        menuSlid.value = true;
      }
      prevScrollpos = currentScrollPos;
    };
  };
  handleScroll();
});
</script>
<template>
  <div id="default-layout">
    <div id="main-container" class="mt-0">
      <div id="main-container-scroll" class="flex flex-column">
        <Header />
        <div id="main-content">
          <div class="flex w-full">
            <NuxtPage />
          </div>
        </div>
      </div>
      <Toast />
    </div>
  </div>
</template>

<style lang="scss">
@use 'primeflex/primeflex.css';
@use '~/style/main.scss';

.logo {
  width: 140px;
  height: 120px;
}

#main-container {
  margin-top: 45px;
  width: 100vw;
}
</style>
