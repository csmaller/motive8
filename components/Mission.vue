<script setup lang="ts">
const { data: missionQuery } = await useAsyncData('mission', () => {
  return queryContent('/mission').where({ title: 'mission-statement' }).findOne();
});
</script>

<template>
  <div>
    <div v-if="missionQuery" class="mission w-full p-3 sm:mt-1">
      <ContentRendererMarkdown :value="missionQuery" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.mission {
  font-size: 20px;

  a {
    color: rgb(255, 217, 0) !important;
  }
}
</style>
