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
  <div class="profile flex flex-wrap justify-content-center align-content-start text-center pt-3">
    <div class="flex flex-wrap w-full justify-content-center">
      <img v-if="person.image" :alt="`${person.image}`" :src="person.image" class="img border-round" />
    </div>
    <Bio :person="person" class="flex flex-column" />
    <div class="flex flex-column sm:flex-column md:flex-row">
      <div class="w-full px-4">
        <div class="p-3 pt-4">
          <ContentRenderer :value="person" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  max-width: 50%;
  .img {
    object-fit: contain;
    width: 200px;
    height: 200px;
  }
}
</style>
