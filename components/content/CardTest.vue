<script setup>
defineProps({
  icon: {
    type: String,
    default: '🙂',
  },
});
</script>

<template>
  <div class="p-6 border news">
    here is some news!!! {{ icon }}
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.news {
  background-color: white;
  font-size: 15px;
}
</style>
