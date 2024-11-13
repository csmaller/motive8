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
  <div
    class="border-1 profile col-12 sm:col-12 lg:col-6 flex flex-wrap justify-content-center align-content-start text-center py-3"
  >
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
  .img-container {
    .img {
      object-fit: contain;
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
    height: max-content;
    border: none;
    max-width: 100vw;
    .img-container {
      height: 400px;
      .img {
        object-fit: contain;
        width: 200px;
        height: 200px;
      }
    }

    a {
      font-size: 16px;
    }
  }
}
</style>
