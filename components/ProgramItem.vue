<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface PropsInterface {
  backgroundColor?: string;
  item: ParsedContent;
  buttonName?: string;
  className?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  buttonName: 'Get Started',
});
const { item, backgroundColor, buttonName, className } = toRefs(props);
</script>

<template>
  <div class="program flex flex-wrap align-items-stretch text-center mt-1 p-2 mx-0" :class="className">
    <div class="img-container flex flex-wrap justify-content-center col-12 sm:col-12 lg:col-6 ml-0">
      <img v-if="item.image" :alt="`${item.image}`" :src="item.image" />
    </div>

    <div class="blurb align-content-start px-3 py-1 col-6 sm:col-12 lg:col-6 mr-0">
      <LazyProseH1 class="py-3 font-underline">{{ item.name }}</LazyProseH1>

      <ContentRendererMarkdown :value="item" />
      <PurchaseButton :link="item.link" :name="buttonName" class="mt-5 w-full" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.program {
  min-height: 700px;
  width: 100vw !important;

  &.merchandise {
    img {
      max-width: 100%;
    }
  }
  .price {
    font-size: 20px;
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

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 2px;
    margin-right: 2px;
    font-size: 16px;

    .img-container {
      max-height: initial;
      padding: 0;

      img {
        max-width: 98%;
      }
    }
  }
}
</style>
