<script setup lang="ts">
const { data: programsQuery } = await useAsyncData('programs', () => queryContent('/programs').find());
</script>

<template>
  <div class-name="md:col-12 w-full mt-0 pt-0 ">
    <div v-for="item in programsQuery" :key="item.url" class="h-full">
      <ProgramItem :item="item" :background-color="item.background_color" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
