<script lang="ts" setup>
interface Props {
  link?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '130px',
});
const { link } = toRefs(props);
</script>
<template>
  <div class="divider flex w-full align-content-end">
    <div :id="link"></div>
  </div>
</template>
<style lang="scss">
.divider {
  height: v-bind(height);
  width: 100vw;
}
</style>
