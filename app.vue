<script setup lang="ts">
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
colorMode.preference = 'light';

const toast = usePVToastService();
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
      <!-- <Footer /> -->
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
