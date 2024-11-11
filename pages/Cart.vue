<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/store/useCartStore';

//get store
const store = useCartStore();

const total = computed(() => store.cartItems.reduce((acc, item) => (acc += item.price * item.quantity), 0));
</script>

<template>
  <div class="cart w-full flex justify-content-center p-3 px-4">
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
                <th>Remove</th>
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
                  <Button @click="store.incrementQ(item)" class="mx-1">
                    <i class="pi pi-plus"></i>
                  </Button>

                  <span class="mx-1">
                    {{ item.quantity }}
                  </span>
                  <Button class="mx-2" @click="store.decrementQ(item)">
                    <i class="pi pi-minus"></i>
                  </Button>
                </td>
                <td>${{ item.price }}</td>
                <td>${{ item.price * item.quantity }}</td>
                <td>
                  <Button @click="store.removeFromCart(item)" class="text-red">X</Button>
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
.cart {
  margin-top: 160px;

  .p-button {
    height: 30px;
    width: 30px;
    justify-content: center;
  }
}
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
