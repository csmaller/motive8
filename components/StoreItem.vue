<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface ItemInterface {}

interface PropsInterface {
  backgroundColor?: string;
  item: ParsedContent;
  buttonName: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  buttonName: 'Get Started',
});
const { item } = toRefs(props);
</script>

<template>
  <div class="program border-round-md w-full align-content-between text-center p-0 m-3 mt-4 px-3">
    <div class="head p-1 pt-4 w-full inline">
      <LazyProseH2>{{ item.name }}</LazyProseH2>
      <div class="blurb px-3 py-4">
        <ContentRendererMarkdown :value="item" />
      </div>
    </div>

    <div class="img-container flex flex-wrap w-full justify-content-center align-content-end">
      <img v-if="item.image" :alt="`${item.image}`" :src="item.image" />
    </div>

    <div class="justify-content-center w-full align-content-end mt-2">
      <a :href="item.link" target="_blank" class="p-button font-bold">{{ buttonName }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.program {
  background-color: rgba(57, 121, 192, 0.8);
  min-width: 300px;
  min-height: 600px;

  @media (max-width: 600px) {
    max-width: 100%;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
  }

  // @media screen and (max-width: 1200px) and (min-width: 601px) {
  //   max-width: 300px;
  // }
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
    height: 50%;
    max-height: 60%;
    img {
      height: 300px;
    }
  }

  a {
    height: 40px;
  }
}
</style>
