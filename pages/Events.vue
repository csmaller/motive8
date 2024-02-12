<script setup lang="ts">
//---------- EXAMPLE QUERIES ----------

const { data: blogQuery } = await useAsyncData('blog', () => {
  return queryContent('/blog').sort({ date: -1 }).find();
});

const prettyDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-us');
};
</script>

<template>
  <div class="w-full flex flex-column">
    <h3 class="flex text-center justify-content-center w-full my-5">Events</h3>

    <ul class="text-center w-full">
      <li v-for="link in blogQuery" :key="link.id">
        <EventContainer :event="link" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
a {
  font-size: 18px;
}
</style>
