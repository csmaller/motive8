<script setup lang="ts">
const { data: classesQuery } = await useAsyncData('classes', () => {
  return queryContent('/classes').where({ title: 'classes' }).findOne();
});
</script>

<template>
  <div>
    <h2>Classes</h2>
    <div v-if="classesQuery" class="classes w-full p-3 mb-4 text-center">
      <ContentRendererMarkdown :value="classesQuery" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.classes {
  font-size: 20px;
}
</style>
