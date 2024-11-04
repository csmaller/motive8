<script setup lang="ts">
import { useCartStore } from '@/store/useCartStore';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface PropsInterface {
  backgroundColor?: string;
  product: ParsedContent;
  className?: string;
}
const store = useCartStore();
const props = defineProps<PropsInterface>();

const { product, backgroundColor, className } = toRefs(props);
</script>

<template>
  <div
    class="program border-round-md h-full flex flex-wrap align-items-stretch text-center m-3 mt-1 p-2"
    :class="className"
  >
    <div class="head p-1 pt-4 w-full inline">
      <LazyProseH2>{{ product.name }}</LazyProseH2>
      <div class="blurb px-3 py-1">
        <ContentRendererMarkdown :value="product" />
      </div>
    </div>

    <div class="img-container flex flex-wrap w-full justify-content-center p-2">
      <img v-if="product.image" :alt="`${product.image}`" :src="product.image" />
    </div>
    <div class="price my-1 text-center w-full" v-if="product.price">${{ product.price }}</div>
    <div class="w-full flex justify-content-evenly align-items-center">
      <PurchaseButton :link="product.link" name="Buy Now" />
      <Button class="p-button toggle-button cart-button" @click="store.addToCart(product)">
        <i class="pi pi-cart-plus"></i>
        &nbsp;add to cart
      </Button>
    </div>
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

  .cart-button {
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
