<script setup lang="ts">
const { data: coachesQuery } = await useAsyncData('coaches', () => {
  return queryContent('/coaches').find();
});
</script>

<template>
  <div class-name=" w-auto sm:w-full  px-5 sm:px-1 md:px-5">
    <div class="text-center border-none justify-content-center">
      <h2 class="my-3 underline">Meet Our Coaches</h2>
    </div>
    <div
      v-if="coachesQuery"
      class="coaches-container flex flex-column sm:flex-column lg:flex-row p-0 mb-5 justify-content-between lg:gap-5"
    >
      <Profile v-for="person in coachesQuery" :person="person" :key="person.id" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
