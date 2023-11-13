<script setup lang="ts">
const { data: aboutQuery } = await useAsyncData('about', () => {
  return queryContent('/about').find();
});
</script>

<template>
  <div>
    <div v-if="aboutQuery" class="about w-full p-3 mb-4 text-center">
      <ContentRendererMarkdown :value="aboutQuery" />
    </div>
  </div>
</template>
