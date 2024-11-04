<script setup lang="ts">
import { useCartStore } from '../store/useCartStore.js';

const store = useCartStore();
onMounted(async () => {
  await store.fetchProducts();
  await store.fetchCartFromLocalStorage();
});

const storeItems = computed(() => store.countCartItems);

//get store
</script>
<template>
  <div class="hidden sm:hidden md:inline-flex sm:gap-5 gap-3 align-items-end sm:w-4 lg:w-7">
    <NuxtLink to="/">Home</NuxtLink>

    <NuxtLink to="/store">Store</NuxtLink>
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <NuxtLink to="/coaches">Coaches</NuxtLink>
    <NuxtLink to="/programs">Programs</NuxtLink>
    <NuxtLink to="/classes">Schedule</NuxtLink>
    <NuxtLink to="/events">Events</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>

    <NuxtLink to="/cart" v-if="storeItems > 0">
      <div class="flex align-items-center">
        <i class="pi pi-shopping-cart"></i>
        <span>
          <small>({{ storeItems }})</small>
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
