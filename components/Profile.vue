<script setup lang="ts">
import { toRefs, computed } from 'vue';

interface PersonInterface {
  name: string;
  description?: string;
  email?: string;
  phone?: string;
  image?: string;
  class?: string;
}

interface PropsInterface {
  person: PersonInterface;
}
const props = defineProps<PropsInterface>();

const { person } = toRefs(props);
</script>

<template>
  <div class="flex flex-column w-full justify-content-center align-content-center text-center">
    <h1 class="sm:w-full">{{ person.name }}</h1>
    <h4 v-if="person.description">{{ person.description }}</h4>
    <h5 v-if="person.email" class="flex flex-column">
      <small>
        <a :href="`mailto:${person.email}`">{{ person.email }}</a>
      </small>
      <small v-if="person.phone">{{ person.phone }}</small>
    </h5>
    <div class="flex flex-column sm:flex-column md:flex-row gap-3 text-left py-4">
      <div class="flex-inline sm:w-full lg:w-6" :class="person.class">
        <img v-if="person.image" :alt="`${person.image}`" :src="person.image" class="img w-full" />
      </div>
      <div class="md:w-6 sm:w-full">
        <div class="w-full sm:p-1 pt-4">
          <ContentRenderer :value="person" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
