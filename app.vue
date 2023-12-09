<script setup>
useHead({
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
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
          <div class="flex w-full">
            <NuxtPage />
          </div>
        </div>
      </div>
      <footer class="flex flex-wrap w-full text-center justify-content-center gap-6 align-items-center mt-6 px-6">
        <SocialMedia class="pt-4" />
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
