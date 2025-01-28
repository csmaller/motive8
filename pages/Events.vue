<script setup lang="ts">
//---------- EXAMPLE QUERIES ----------

const { data: blogQuery } = await useAsyncData('blog', () => {
  return queryContent('/blog').sort({ date: -1 }).find();
});
</script>

<template>
  <div class="mt-7 w-full h-full flex flex-column">
    <h3 class="flex text-center justify-content-center w-full my-5">Events</h3>

    <ul v-if="blogQuery?.length" class="text-center w-full">
      <li v-for="link in blogQuery" :key="link.id">
        {{ link }}
        <EventContainer :event="link" :background-color="link.background_color" />
      </li>
    </ul>
    <h3 v-else class="mt-4 flex w-full justify-content-center">Sorry, There are no upcoming events.</h3>
  </div>
</template>

<style scoped lang="scss">
a {
  font-size: 18px;
}
</style>
