import { typeParsedContent } from '@nuxt/content/dist/runtime/types';
import { defineStore } from 'pinia';
import type { CartItemInterface } from '~/types';

export const useCartStore = defineStore('shopping', {
  state: () => {
    return {
      cartItems: [] as CartItemInterface[],
      products: [] as typeParsedContent[],
    };
  },
  getters: {
    countCartItems(state) {
      return state.cartItems.length;
    },
    getCartItems(state) {
      return state.cartItems;
    },
    getParsedCartItems(state) {
      return state.cartItems.map((item) => {
        return {
          price: item.id,
          quantity: item.quantity,
        };
      });
    },
  },
  actions: {
    async fetchCartFromLocalStorage() {
      const cartData = localStorage.getItem('m8cart');
      this.cartItems = cartData ? JSON.parse(cartData) : [];
    },
    resetCart() {
      this.cartItems = [];
      localStorage.removeItem('m8cart');
    },
    async fetchProducts() {
      const { data: storeQuery } = await useAsyncData('merchandise', () => queryContent('/store').find());
      this.products = unref(storeQuery);
    },
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        this.doToast('Product quantity increased');
      } else {
        item.quantity = 1;
        this.cartItems.push(item);

        //update local storage
        localStorage.setItem('m8cart', JSON.stringify(this.cartItems));
        this.doToast('Product added to the cart');
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        localStorage.setItem('m8cart', JSON.stringify(this.cartItems));
        this.doToast('Product quantity increased');
      }
    },
    /**
     * Display the toast message.
     */
    doToast(str: string, error = false) {
      const toast = usePVToastService();
      toast.add({
        severity: error ? 'error' : 'success',
        summary: error ? 'Error' : 'Sent',
        detail: error ? 'There was an error. Please try again' : str,
        life: 3000,
      });
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter((product) => product.id !== item.id);
        }
        localStorage.setItem('m8cart', JSON.stringify(this.cartItems));
        this.doToast('Product quantity decreased');
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter((product) => product.id !== item.id);
      localStorage.setItem('m8cart', JSON.stringify(this.cartItems));
      this.doToast('Product removed from the cart');
    },
  },
});
