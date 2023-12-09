<script setup lang="ts">
const { data: programsQuery } = await useAsyncData('programs', () => queryContent('/programs').find());
</script>

<template>
  <div>
    <pre>{{ programsQuery }}</pre>
  </div>
</template>

<style scoped lang="scss"></style>
