<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/store/useCartStore';

//get store
const store = useCartStore();

const total = computed(() => store.cartItems.reduce((acc, item) => (acc += item.price * item.quantity), 0));
</script>

<template>
  <div class="w-full flex justify-content-center p-3 px-4 mt-5">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in store.getCartItems" :key="item.id">
                <td>
                  <img :src="item.image" class="fluid rounded" width="60" :alt="item.name" />
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
              <tr style="border-top-2">
                <th colSpan="3" class="text-center border-top-2">Total</th>
                <td colSpan="3" class="text-center border-top-2">
                  <span class="">${{ total }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="total > 0" class="w-full flex justify-content-center mt-5">
            <Stripe />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
table {
  margin-left: 32px;
  tr {
    padding: 10px;
    th,
    td {
      padding-left: 20px;
      padding-right: 20px;
    }
    td {
      padding-bottom: 16px;
      padding-top: 16px;
    }
  }
}
</style>
