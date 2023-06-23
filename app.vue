<script setup>
useHead({
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
});
</script>
<template>
  <div>
    <h5>hello</h5>
    <NuxtPage />
  </div>
</template>
<style lang="scss">
@use 'primeflex/primeflex.css';
@use '~/style/main.scss';
</style>
