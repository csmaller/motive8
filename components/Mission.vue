<script setup lang="ts">
const { data: missionQuery } = await useAsyncData('mission', () => {
  return queryContent('/mission').where({ title: 'mission-statement' }).findOne();
});
</script>

<template>
  <div>
    <h2 v-if="missionQuery" class="mission w-full p-3 mb-4 text-center">
      <ContentRendererMarkdown :value="missionQuery" />
    </h2>
  </div>
</template>
<style scoped lang="scss">
.mission {
  font-size: 20px;
}
</style>
