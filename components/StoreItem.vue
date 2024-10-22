<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface PropsInterface {
  backgroundColor?: string;
  item: ParsedContent;
  buttonName: string;
  className?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  buttonName: 'Get Started',
});
const { item, backgroundColor, buttonName, className } = toRefs(props);
</script>

<template>
  <div
    class="program border-round-md h-full flex flex-wrap align-items-stretch text-center m-3 mt-1 p-2"
    :class="className"
  >
    <div class="head p-1 pt-4 w-full inline">
      <LazyProseH2>{{ item.name }}</LazyProseH2>
      <div class="blurb px-3 py-1">
        <ContentRendererMarkdown :value="item" />
      </div>
    </div>

    <div class="img-container flex flex-wrap w-full justify-content-center p-2">
      <img v-if="item.image" :alt="`${item.image}`" :src="item.image" />
    </div>
    <div class="price my-1 text-center w-full" v-if="item.price">Price: ${{ item.price }}</div>

    <PurchaseButton :link="item.link" :name="buttonName" />
  </div>
</template>

<style scoped lang="scss">
.program {
  background-color: rgba(57, 121, 192, 0.8);
  min-width: 300px;
  min-height: 600px;
  width: 400px;

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
  .img-container {
    img {
      max-height: 250px;
    }
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
        max-height: 200px;
      }
    }
  }
}
</style>
