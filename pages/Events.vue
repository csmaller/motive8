<script setup lang="ts">
const { data: blogQuery } = await useAsyncData('blog', () => {
  return queryContent('/blog').sort({ date: -1 }).find();
});

const isInDateRange = (start: string, end: string) => {
  const today = new Date();
  const bannerStart = new Date(start);
  const bannerEnd = new Date(end);
  console.log(today, bannerStart, bannerEnd);
  return bannerStart >= today;
};

const anyInDateRange = (blogQuery: any) => {
  const inRange = blogQuery.some((event: any) => isInDateRange(event.event_date_start, event.event_date_end));

  return inRange;
};
</script>

<template>
  <div class="mt-7 w-full h-full flex flex-column">
    <h3 class="flex text-center justify-content-center w-full my-5">Events</h3>

    <ul v-if="blogQuery?.length && anyInDateRange(blogQuery)" class="text-center w-full">
      <li v-for="link in blogQuery" :key="link.id">
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
