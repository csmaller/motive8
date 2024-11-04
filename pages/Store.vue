<script setup lang="ts">
import { useCartStore } from '../store/useCartStore.js';

const props = defineProps({
  products: {
    type: Array,
    required: false,
  },
});

const products = ref();
const cartStore = useCartStore();
onMounted(async () => {
  await cartStore.fetchProducts();
  products.value = cartStore.products;
});
</script>

<template>
  <div
    v-if="cartStore.products"
    class="flex flex-wrap w-full p-4 lg:p-4 sm:px-1 mb-5 pb-6 justify-content-start lg:justify-content-evenly sm:justify-content-start"
  >
    <div v-for="item in products" :key="item.url" class="flex flex-wrap p-2 mb-5 justify-content-evenly">
      <ProductListItem :product="item" :background-color="item.background_color" :class-Name="'merchandise'" />
      <!-- <StoreItem
        button-name="Buy Now"
        :item="item"
        :background-color="item.background_color"
        :class-Name="'merchandise'"
      /> -->
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
