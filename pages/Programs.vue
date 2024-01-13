<script setup lang="ts">
const { data: programsQuery } = await useAsyncData('programs', () => queryContent('/programs').find());
</script>

<template>
  <div class="flex flex-wrap w-full justify-content-center gap-5">
    <div v-for="item in programsQuery" :key="item.url" class="flex w-12 sm:w-12 md:w-4 lg:w-3">
      <StoreItem :item="item" :background-color="item.background_color" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
