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
  <div
    class="program border-round-md flex align-content-between flex-wrap justify-content-center text-center p-0"
    v-bind:style="{ backgroundColor }"
  >
    <div class="head p-1 pt-4 w-full inline">
      <LazyProseH2>{{ item.name }}</LazyProseH2>
      <div class="blurb px-3 py-4">
        <ContentRendererMarkdown :value="item" />
      </div>
    </div>

    <div class="img-container flex flex-wrap w-full justify-content-center align-content-end">
      <img v-if="item.image" :alt="`${item.image}`" :src="item.image" />
    </div>

    <div class="justify-content-center w-full align-content-end mb-3">
      <a :href="item.link" target="_blank" class="p-button font-bold">Get Started</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.program {
  max-width: 40%;
  min-width: 300px;
  min-height: 600px;
  .head {
    max-height: 40%;
    height: 40%;

    .blurb {
      font-size: 12px;
    }
  }
  a {
    background-color: rgba(57, 121, 192);
  }
  .img-container {
    height: 40%;
    max-height: 40%;
    overflow: hidden;
    img {
      height: 300px;
    }
  }

  a {
    height: 40px;
  }
}
</style>
