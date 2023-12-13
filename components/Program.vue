<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface ItemInterface {}

interface PropsInterface {
  backgroundColor?: string;
  blurb: ParsedContent;
  name: string;
  image: string;
  link: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  backgroundColor: 'rgba(255,255,255,.8)',
});
const { backgroundColor, image, name, blurb, link } = toRefs(props);
</script>

<template>
  <div
    class="program flex flex-wrap justify-content-center align-content-start text-center pt-3"
    v-bind:style="{ backgroundColor }"
  >
    <a :href="link" target="_blank">Click here</a>
    <h1>{{ name }}</h1>
    <div class="img-container flex flex-wrap w-full justify-content-center">
      <img v-if="image" :alt="`${image}`" :src="image" class="img border-round" />
    </div>
    <ContentRendererMarkdown :value="blurb" />
  </div>
</template>

<style scoped lang="scss">
.program {
  max-width: 40%;
  .img-container {
    .img {
      object-fit: contain;
      width: 200px;
      height: 200px;
    }
  }
}
</style>
