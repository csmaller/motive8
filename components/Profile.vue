<script setup lang="ts">
import { toRefs, computed } from 'vue';

interface PropsInterface {
  name: string;
  description?: string;
  email?: string;
  phone?: string;
  img: string;
}
const props = defineProps<PropsInterface>();

const { name, email, phone, description, img } = toRefs(props);
</script>

<template>
  <div class="flex flex-column w-full justify-content-center align-content-center text-center">
    <h1 class="sm:w-full">{{ name }}</h1>
    <h4 v-if="description">{{ description }}</h4>
    <h5 v-if="email" class="flex flex-column">
      <small>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </small>
      <small v-if="phone">{{ phone }}</small>
    </h5>
    <div class="flex flex-column sm:flex-column md:flex-row gap-3 text-left py-4">
      <div class="flex-inline sm:w-full md:w-6">
        <img :alt="`${img}`" :src="img" class="img w-full" />
      </div>
      <div class="md:w-6 sm:w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
