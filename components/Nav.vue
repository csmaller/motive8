<script setup lang="ts">
import { useCartStore } from '../store/useCartStore.js';

const store = useCartStore();
onMounted(async () => {
  await store.fetchProducts();
  await store.fetchCartFromLocalStorage();
});

const storeItems = computed(() => store.countCartItems);
console.log(storeItems.value);
//get store
</script>
<template>
  <div
    class="hidden sm:hidden md:inline-flex lg:flex sm:gap-5 gap-5 align-items-center justify-content-center sm:w-4 lg:w-full"
  >
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/#coaches">Coaches</NuxtLink>
    <NuxtLink to="/#programs">Velocity</NuxtLink>
    <NuxtLink to="/store">Store</NuxtLink>
    <a href="/"><img src="/img/m8logo.png" class="logo m-0" /></a>
    <NuxtLink to="/classes">Schedule</NuxtLink>
    <NuxtLink to="/events">Events</NuxtLink>
    <NuxtLink to="/#contact">Contact</NuxtLink>
    <NuxtLink to="/cart" v-if="storeItems > 0">
      <div class="flex align-items-center">
        <i class="pi pi-shopping-cart"></i>
        <span>
          <small>({{ storeItems }})</small>
        </span>
      </div>
    </NuxtLink>
    <SocialMedia class="hidden md:flex" />
  </div>
</template>
