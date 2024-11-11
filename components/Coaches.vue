<script setup lang="ts">
const { data: coachesQuery } = await useAsyncData('coaches', () => {
  return queryContent('/coaches').find();
});
</script>

<template>
  <LayoutContainer class-name=" md:col-12 w-full px-5 sm:px-1 md:px-5">
    <div v-if="coachesQuery" class="flex w-full p-0 mb-5 justify-content-between lg:gap-5">
      <Profile v-for="person in coachesQuery" :person="person" :key="person.id" />
    </div>
  </LayoutContainer>
</template>
