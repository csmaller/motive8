<script setup lang="ts">
const { data: classesQuery } = await useAsyncData('classes', () => {
  return queryContent('/classes').where({ title: 'classes' }).findOne();
});
</script>

<template>
  <div class="w-full justify-content-center">
    <div class="text-center border-none justify-content-center">
      <div class="w-full justify-content-center flex">
        <NuxtLink to="https://buy.stripe.com/aEUdS3eYt6qP7fy4gy" class="btn px-3 py-2 mt-4 no-underline w-full mx-4">
          Get Started with Velocity
        </NuxtLink>
      </div>
      <h2 class="mt-5 underline">Class Times</h2>
    </div>

    <div v-if="classesQuery" class="classes w-full p-3 mb-4 justify-content-center text-center">
      <ContentRendererMarkdown :value="classesQuery" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.classes {
  font-size: 20px;
}
.btn {
  background-color: var(--color-primary);
  color: white;
  font-size: 20px;
  border-radius: 6px;
}

:deep(a) {
  text-decoration: underline;
}
</style>
