<script setup lang="ts">
const { data: aboutQuery } = await useAsyncData('about', () => {
  return queryContent('/about').where({ title: 'about-us' }).findOne();
});
</script>

<template>
  <div>
    <h2 v-if="aboutQuery" class="about w-full p-3 mb-4 text-center">
      <ContentRendererMarkdown :value="aboutQuery" />
    </h2>
  </div>
</template>
<style scoped lang="scss">
.about {
  font-size: 20px;
}
</style>
