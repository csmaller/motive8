<script lang="ts" setup>
interface Props {
  link: string;
  name: string;
}

const props = defineProps<Props>();
const { link } = toRefs(props);
</script>
<template>
  <div class="flex flex-wrap justify-content-center mt-3">
    <a :href="link" target="_blank" class="p-button px-4 font-bold">{{ name }}</a>
  </div>
</template>
<style lang="scss" scoped>
a {
  height: 40px;
}
</style>
