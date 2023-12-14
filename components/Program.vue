<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface ItemInterface {}

interface PropsInterface {
  backgroundColor?: string;
  item: ParsedContent;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  backgroundColor: 'rgba(255,255,255,.8)',
});
const { item } = toRefs(props);
</script>

<template>
  <div class="program border-round-md bg-white flex flex-wrap justify-content-center text-center p-0">
    <div class="head p-1 pt-4 w-full" v-bind:style="{ backgroundColor }">
      <LazyProseH3>{{ item.name }}</LazyProseH3>
      <ContentRendererMarkdown :value="item" />
      <div class="img-container flex flex-wrap w-full justify-content-center">
        <img v-if="item.image" :alt="`${item.image}`" :src="item.image" class="img border-round" />
      </div>
    </div>
    <div class="justify-content-center w-full align-content-end">
      <a :href="item.link" target="_blank" class="p-button font-bold">Get Started</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.program {
  max-width: 40%;
  height: 500px;
  .head {
    height: 80%;
  }
  a {
    background-color: rgba(57, 121, 192);
  }
  .img-container {
    .img {
      object-fit: contain;
      width: 200px;
      height: 200px;
    }
  }

  a {
    height: 40px;
  }
}
</style>
