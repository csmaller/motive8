<script lang="ts" setup>
import { useCartStore } from '~/store/useCartStore';

const store = useCartStore();

onMounted(() => {
  store.resetCart();
});
</script>
<template>
  <div>
    <h1>Transaction Successful!</h1>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
