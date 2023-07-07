<script setup>
useHead({
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
});

const colorMode = useColorMode();
colorMode.value = 'light';
// For Nuxt 3
// definePageMeta({
//   colorMode: 'light',
// });

console.log(colorMode.preference);
</script>
<template>
  <div>
    <img src="/img/m8logo.png" class="logo w-2 ml-0" />
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
    <NuxtPage />
  </div>
</template>
<style lang="scss">
@use 'primeflex/primeflex.css';
@use '~/style/main.scss';

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.logo {
}
</style>
