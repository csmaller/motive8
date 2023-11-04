<script setup lang="ts">
const { data: equalQuery } = await useAsyncData('equal', () => {
  return queryContent('/blog').where({ title: 'mission-statement' }).findOne();
});
</script>

<template>
  <div>
    <h2 v-if="equalQuery" class="mission w-full p-3 mb-4 text-center">
      <ContentRenderer :value="equalQuery" />
    </h2>
  </div>
</template>
<style scoped lang="scss">
.mission {
  font-size: 20px;
}
</style>
