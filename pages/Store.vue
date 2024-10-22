<script setup lang="ts">
const { data: storeQuery } = await useAsyncData('merchandise', () => queryContent('/store').find());
</script>

<template>
  <div class="flex flex-wrap w-full p-4 mb-5 pb-6 justify-content-start">
    <div v-for="item in storeQuery" :key="item.url" class="flex flex-wrap p-2 justify-content-evenly">
      <StoreItem
        button-name="Buy Now"
        :item="item"
        :background-color="item.background_color"
        :class-Name="'merchandise'"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
