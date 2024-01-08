<script setup lang="ts">
const { data: storeQuery } = await useAsyncData('merchandise', () => queryContent('/store').find());
</script>

<template>
  <div
    v-for="item in storeQuery"
    :key="item.url"
    class="flex flex-wrap w-full p-4 mb-4 justify-content-evenly lg:gap-5"
  >
    <StoreItem button-name="Buy Now" :item="item" :background-color="item.background_color" />
  </div>
</template>

<style scoped lang="scss"></style>
