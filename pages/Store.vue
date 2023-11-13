<script setup lang="ts">
// import { loadStripe } from '@stripe/stripe-js';

const stripeKey = ref(
  'pk_test_51JqjHbDahwSFmHQ3rGrNZSeZp3UP0OWvNh5rZd9veB8ps2jhiKdM4fYBzF0EaVDNo31qukrb07EzIh8Z1KXxScHy00KVOmKlgQ',
);
// test key
const instanceOptions = ref({
  // https://stripe.com/docs/js/initializing#init_stripe_js-options
});
const elementsOptions = ref({
  // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
});
const cardOptions = ref({
  // https://stripe.com/docs/stripe.js#element-options
  value: {
    postalCode: '12345',
  },
});
const stripeLoaded = ref(false);
const card = ref();
const elms = ref();

onBeforeMount(() => {
  const stripePromise = loadStripe(stripeKey.value);

  stripePromise.then(() => {
    console.log('loaded');
    stripeLoaded.value = true;
  });
});

const pay = () => {
  // Get stripe element
  const cardElement = card.value.stripeElement;

  // Access instance methods, e.g. createToken()
  elms.value.instance.createToken(cardElement).then((result: object) => {
    // Handle result.error or result.token
    console.log(result);
  });
};
</script>

<template>
  <a href="https://buy.stripe.com/test_4gwdUEebY2EF6NW7st">sign up</a>
  <StripeElements
    v-if="stripeLoaded"
    v-slot="{ elements, instance }"
    ref="elms"
    :stripe-key="stripeKey"
    :instance-options="instanceOptions"
    :elements-options="elementsOptions"
  >
    <StripeElement ref="card" :elements="elements" :options="cardOptions" />
  </StripeElements>
  <button type="button" @click="pay">Pay</button>
</template>

<style scoped lang="scss"></style>
