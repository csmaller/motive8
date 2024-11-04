<script setup lang="ts">
import { useCartStore } from '@/store/useCartStore';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
const config = useRuntimeConfig();

const store = useCartStore();

const fetchPaymentUrl = async () => {
  try {
    //test key
    // const testKey =
    //   'pk_test_51O4pfGCJp6pxKUJf8qxPDbNtBBvXo2cIHpLmmlOrgTm78vi4B63WEM4ih4yYYrHmDHPRIzCueI91MGDMt8EAVXgO00HZPtp9IS';

    const key =
      'pk_live_51O4pfGCJp6pxKUJfeMk29h6p0UCjw6VhfCQ5hBTBcAaMHKa9gAaDAQ9nN46mp4SEsfarhL7aRzQrTgnkL40KiQxw00HPlikOAc';
    const stripe = await loadStripe(key as string);

    const { error } = await stripe.redirectToCheckout({
      lineItems: store.getParsedCartItems,
      mode: 'payment',
      successUrl: 'https://motive8endurance.com/success',
      cancelUrl: 'https://motive8endurance.com/cancel',
    });
    if (error) {
      console.error(error.message);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="w-full text-center">
    <Button
      class="flex p-button toggle-button w-full justify-content-center mb-3"
      type="button"
      @click="fetchPaymentUrl"
    >
      Pay Now
    </Button>
    <small>*you will be redirected to the Stripe checkout page</small>
  </div>
</template>

<style scoped lang="scss"></style>
