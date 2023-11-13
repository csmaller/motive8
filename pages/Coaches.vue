<script setup lang="ts">
const { data: coachesQuery } = await useAsyncData('coaches', () => {
  return queryContent('/coaches').find();
});
</script>

<template>
  <div>
    <div v-if="coachesQuery" class="flex flex-wrap w-full p-4 mb-4 justify-content-evenly lg:gap-5">
      <Profile v-for="person in coachesQuery" :person="person" :key="person.id" />
    </div>
  </div>
</template>
