<script setup lang="ts">
const { data: programsQuery } = await useAsyncData('programs', () => queryContent('/programs').find());
</script>

<template>
  <div v-for="item in programsQuery" :key="item.url">
    <Program
      :item="item"
      :image="item.image"
      :link="item.link"
      :name="item.name"
      :background-color="item.background_color"
    />
  </div>
</template>

<style scoped lang="scss"></style>
