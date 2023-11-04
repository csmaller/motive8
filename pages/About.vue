<script setup lang="ts">
const { data: equalQuery } = await useAsyncData('equal', () => {
  return queryContent('/about').find();
});
</script>

<template>
  <div>
    <div v-if="equalQuery" class="flex w-full p-3 mb-4 justify-content-evenly gap-3">
      <Profile v-for="person in equalQuery" :person="person" :key="person.id" />
    </div>
  </div>
</template>
