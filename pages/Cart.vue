<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/store/useCartStore';

//get store
const store = useCartStore();

const total = computed(() => store.cartItems.reduce((acc, item) => (acc += item.price * item.quantity), 0));
</script>

<template>
  <div class="w-full p-3 px-4">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in store.getCartItems" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <img :src="item.image" class="fluid rounded" width="60" height="60" :alt="item.name" />
                </td>
                <td>
                  {{ item.name }}
                </td>
                <td>
                  <i @click="store.incrementQ(item)" class="pi pi-cart-arrow-up"></i>
                  <span class="mx-2">
                    {{ item.quantity }}
                  </span>
                  <i @click="store.decrementQ(item)" class="pi pi-cart-arrow-down"></i>
                </td>
                <td>${{ item.price }}</td>
                <td>${{ item.price * item.quantity }}</td>
                <td>
                  <i @click="store.removeFromCart(item)" class="pi pi-cart-arrow-down text-red"></i>
                </td>
              </tr>
              <tr>
                <th colSpan="3" class="text-center">Total</th>
                <td colSpan="3" class="text-center">
                  <span class="badge bg-danger rounded-pill">${{ total }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="total > 0" class="d-flex justify-content-center">
            <Stripe />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
