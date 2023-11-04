<script setup lang="ts">
const { data: newsQuery } = await useAsyncData('news', () => {
  return queryContent('/blog').where({ title: 'news' }).findOne();
});
</script>

<template>
  <div>
    <div v-if="newsQuery" class="news w-full p-3 mb-4 font-bold text-center">
      <ContentRenderer :value="newsQuery" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.news {
  font-size: 20px;
}
</style>
