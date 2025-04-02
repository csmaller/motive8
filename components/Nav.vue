<script setup lang="ts">
import { useCartStore } from '../store/useCartStore.js';

const store = useCartStore();
onMounted(async () => {
  await store.fetchProducts();
  await store.fetchCartFromLocalStorage();
});

const storeItems = computed(() => store.countCartItems);
</script>
<template>
  <div
    class="nav-container hidden sm:hidden md:inline-flex lg:flex gap-7 align-items-center justify-content-center sm:w-4 lg:w-full"
  >
    <div class="flex align-items-center gap-7">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/#coaches">Coaches</NuxtLink>
      <NuxtLink to="/#programs">Velocity</NuxtLink>
      <NuxtLink to="/store">Store</NuxtLink>
    </div>
    <div class="logo-container">
      <a href="/" id="logo"><img src="/img/m8logo.png" class="logo m-0" /></a>
      <a href="/" id="sm-logo"><img src="/img/m8e.png" class="sm-logo m-0" /></a>
    </div>
    <div class="flex align-items-center gap-7">
      <NuxtLink to="/#classes">Schedule</NuxtLink>
      <NuxtLink to="/events">Events</NuxtLink>
      <NuxtLink to="/#contact">Contact</NuxtLink>
      <NuxtLink to="/cart" v-if="storeItems > 0">
        <div class="flex align-items-center cart-button">
          <i class="pi pi-shopping-cart"></i>
          <span>
            <small>({{ storeItems }})</small>
          </span>
        </div>
      </NuxtLink>
    </div>
    <SocialMedia class="hidden md:flex" />
  </div>
</template>
<style lang="scss" scoped>
.nav-container {
  height: 150px;
}
.logo-container {
  width: 140px;
  height: 120px;
  position: relative;
}
.small-logo-container {
  width: 100px;
  height: 80px;
  position: relative;
}
#logo {
  transition: all 0.5s ease-in-out;
  background-color: white;
  position: absolute;
  top: -20px;
}
#sm-logo {
  transition: all 0.5s ease-in-out;
  background-color: white;
  position: absolute;
  top: -20px;
}
.cart-button {
  color: green;
}
</style>
