<script setup lang="ts">
const { data: blogQuery } = await useAsyncData('blog', () => {
  return queryContent('/blog').sort({ date: -1 }).find();
});

const isInDateRange = (start: string, end: string) => {
  const today = new Date();
  const bannerStart = new Date(start);
  const bannerEnd = new Date(end);
  console.log(today, bannerStart >= today);
  return bannerStart >= today;
};

onMounted(() => {
  window.scrollTo({
    top: 40,
    behavior: 'smooth',
  });
});
</script>

<template>
  <div class="event-container w-full h-full flex flex-column">
    <ul v-if="blogQuery?.length" class="text-center w-full">
      <li v-for="link in blogQuery" :key="link.id">
        <EventContainer
          :event="link"
          :background-color="link.background_color"
          v-if="isInDateRange(link.event_date_start, link.event_date_end)"
        />
      </li>
    </ul>
    <h3 v-else class="mt-4 flex w-full justify-content-center">Sorry, There are no upcoming events.</h3>
  </div>
</template>

<style scoped lang="scss">
.event-container {
  margin-top: 60px;
}
a {
  font-size: 18px;
}
</style>
