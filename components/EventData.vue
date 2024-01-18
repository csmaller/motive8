<script setup lang="ts">
const { data: eventQuery } = await useAsyncData('events', () => {
  return queryContent('/blog').where({ title: 'events' }).findOne();
});
</script>

<template>
  <div v-if="eventQuery" class="news w-full p-3 mb-4 font-bold text-center">
    <div class="img-container flex flex-wrap w-full justify-content-center align-content-end w-full">
      <img v-if="eventQuery.image" :alt="`${eventQuery.image}`" :src="eventQuery.image" :class="eventQuery.class" />
    </div>
    <ContentRendererMarkdown :value="eventQuery" />
  </div>
</template>
<style scoped lang="scss">
.news {
  font-size: 20px;
}
</style>
