<script setup>
useHead({
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
  ],
});

const colorMode = useColorMode();
colorMode.preference = 'light';
</script>
<template>
  <div id="default-layout">
    <div id="main-container" class="mt-0">
      <div id="main-container-scroll" class="flex flex-column overflow-auto">
        <div class="header flex flex-wrap md:gap-5 sm:gap-5 align-items-center justify-content-start p-2 pl-4">
          <img src="/img/m8logo.png" class="logo m-0" />
          <Nav class="w-9" />
        </div>
        <div id="main-content">
          <div class="flex w-full md:p-4 p-1">
            <NuxtPage />
          </div>
        </div>
      </div>
      <footer class="flex flex-column w-full text-center justify-content-center align-items-start">
        <Newsletter />
        <Address />
      </footer>
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
