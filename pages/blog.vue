<script setup>
//---------- EXAMPLE QUERIES ----------

const { data: equalQuery } = await useAsyncData('equal', () => {
  return queryContent('/').where({ title: 'about' }).find();
});

const { data: lowerThanQuery } = await useAsyncData('lower-than', () => {
  return queryContent('/')
    .where({ release_date: { $lt: 1997 } })
    .find();
});

const { data: notEqualQuery } = await useAsyncData('not-equal', () => {
  return queryContent('/')
    .where({ director: { $ne: 'Hayao Miyazaki' } })
    .find();
});

const { data: inQuery } = await useAsyncData('in', () => {
  return queryContent('/')
    .where({ director: { $in: ['Hayao Miyazaki', 'Yoshifumi Kondō'] } })
    .find();
});
</script>

<template>
  <div>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>

    <section>
      <header>
        <h2>Equal query</h2>
        <code>queryContent('/').where({ title: 'news' }).find()</code>
      </header>
      <ul v-if="equalQuery">
        <li v-for="movie in equalQuery" :key="movie.id">
          title: {{ movie.title }}--- description: {{ movie.description }}
          <ContentRenderer :value="movie" />
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
