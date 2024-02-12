<script setup lang="ts">
//---------- EXAMPLE QUERIES ----------

const { data: blogQuery } = await useAsyncData('blog', () => {
  return queryContent('/blog').sort({ date: -1 }).find();
});

const prettyDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
</script>

<template>
  <div>
    <section>
      <ul>
        <li v-for="link in blogQuery" :key="link.id">
          <NuxtLink :to="link._path">{{ prettyDate(link.date) }} -- {{ link.title }}</NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
