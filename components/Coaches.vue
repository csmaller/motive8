<script setup lang="ts">
const { data: coachesQuery } = await useAsyncData('coaches', () => {
  return queryContent('/coaches').find();
});
</script>

<template>
  <LayoutContainer class-name="flex-column sm:flex-column w-auto sm:w-full md:flex-wrap px-5 sm:px-1 md:px-5">
    <div v-if="coachesQuery" class="coaches-container p-0 mb-5 justify-content-between lg:gap-5">
      <Profile v-for="person in coachesQuery" :person="person" :key="person.id" />
    </div>
  </LayoutContainer>
</template>
<style lang="scss" scoped></style>
