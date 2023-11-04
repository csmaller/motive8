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
  <div class="profile flex flex-wrap justify-content-center align-content-start text-center">
    <img v-if="person.image" :alt="`${person.image}`" :src="person.image" class="img w-full border-round" />

    <Bio :person="person" />
    <div class="flex flex-column sm:flex-column md:flex-row py-4">
      <div class="md:w-6 sm:w-full">
        <div class="w-full sm:p-1 pt-4">
          <ContentRenderer :value="person" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  border: 1px solid red;
}
.img {
  object-fit: contain;
}
</style>
