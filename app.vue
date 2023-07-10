<script setup>
useHead({
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
});

const colorMode = useColorMode();
colorMode.preference = 'light';
</script>
<template>
  <div id="default-layout">
    <div id="main-container" class="mt-0">
      <div id="main-container-scroll" class="flex flex-column h-screen overflow-auto">
        <div class="header flex flex-wrap gap-3 align-items-center justify-content-start p-2">
          <img src="/img/m8logo.png" width="200" height="200" class="mt-0 w-2" />
          <Nav class="w-9" />
        </div>
        <div id="main-content">
          <div class="flex w-full md:p-4 p-1">
            <NuxtPage />
          </div>
        </div>
      </div>
      <footer class="flex w-full text-center justify-content-center align-items-center">
        <Address />
      </footer>
      <Toast />
    </div>
  </div>
</template>

<style lang="scss">
@use 'primeflex/primeflex.css';
@use '~/style/main.scss';

// .dark-mode body {
//   background-color: #091a28;
//   color: #ebf4f1;
// }
// .sepia-mode body {
//   background-color: #f1e7d0;
//   color: #433422;
// }
</style>
