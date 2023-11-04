<script lang="ts" setup>
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
  <div>
    <h1 class="sm:w-full">{{ person.name }}</h1>
    <h4 v-if="person.description">{{ person.description }}</h4>
    <h5 v-if="person.email" class="flex flex-column">
      <small>
        <a :href="`mailto:${person.email}`">{{ person.email }}</a>
      </small>
      <small v-if="person.phone">{{ person.phone }}</small>
    </h5>
  </div>
</template>
