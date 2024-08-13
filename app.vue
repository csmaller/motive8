<script setup>
useHead({
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
    {
      type: 'text/javascript',
      src: 'http://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=cd0188dcbea6510561a39a11f92394377ab1474c',
    },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
  ],
});
const colorMode = useColorMode();
colorMode.preference = 'dark';
</script>
<template>
  <div id="default-layout">
    <div id="main-container" class="mt-0">
      <div id="main-container-scroll" class="flex flex-column">
        <Header />
        <div id="main-content">
          <div class="flex flex-wrap w-full">
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
</style>
