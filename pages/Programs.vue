<script setup lang="ts">
const { data: programsQuery } = await useAsyncData('programs', () => queryContent('/programs').find());
</script>

<template>
  <div
    v-for="item in programsQuery"
    :key="item.url"
    class="flex flex-wrap w-full p-4 mb-4 justify-content-evenly lg:gap-5"
  >
    <StoreItem :item="item" :background-color="item.background_color" />
  </div>
</template>

<style scoped lang="scss"></style>
