<script setup lang="ts">
import { toRefs } from 'vue';

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
    <div class="img-container flex flex-wrap w-full justify-content-center">
      <img v-if="person.image" :alt="`${person.image}`" :src="person.image" class="img border-round" />
    </div>
    <Bio :person="person" class="flex flex-column" />
    <div class="flex flex-column sm:flex-column lg:flex-row">
      <div class="w-full px-4 text-center">
        <ContentRendererMarkdown :value="person" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  max-width: 40%;

  @media (max-width: 600px) {
    font-size: 16px;

    a {
      font-size: 16px;
    }
  }

  .img-container {
    .img {
      object-fit: contain;
      width: 200px;
      height: 200px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
}
</style>
