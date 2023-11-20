<script lang="ts" setup>
const url = ref('https://buy.stripe.com/8wMcNZcQlcPd8jCaEG');
</script>
<template>
  <a class="flex velocity no-underline" :href="url" targe="_blank">
    <img src="/img/velocity-logo.jpeg" />
    <div class="btn p-button font-bold px-6 py-3 my-0 mb-5 border-noround-left">Click To Join</div>
  </a>
</template>
<style lang="scss" scoped>
.velocity {
  width: 300px;
  img,
  a {
    max-width: 300px;
  }
  img,
  a {
    height: 60px;
  }
}
</style>
