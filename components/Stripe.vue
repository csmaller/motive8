<script setup lang="ts">
import { useCartStore } from '@/store/useCartStore';
import axios from 'axios';

const store = useCartStore();

const fetchPaymentUrl = async () => {
  try {
    const response = await axios.post('https://darija-coding.com/api/order/pay', {
      cartItems: store.getCartItems,
      success_url: `http://localhost:5173/#/payment/success`,
    });
    window.location.href = response.data.url;
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="row col-6 mx-auto mt-5">
    <button class="btn btn-primary" type="button" @click="fetchPaymentUrl">Pay now</button>
  </div>
</template>

<style scoped lang="scss"></style>
