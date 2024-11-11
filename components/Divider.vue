<script lang="ts" setup>
interface Props {
  link?: string;
  height?: string;
  bottom?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '230px',
  bottom: '120px',
});
const { link, bottom } = toRefs(props);
</script>
<template>
  <div class="divider w-full align-content-end relative">
    <div :id="link" class="flex h-5 absolute link"></div>
  </div>
</template>
<style lang="scss">
.divider {
  height: v-bind(height);
  width: 100vw;

  .link {
    bottom: v-bind(bottom);
  }
}
</style>
