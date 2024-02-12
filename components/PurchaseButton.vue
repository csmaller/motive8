<script lang="ts" setup>
interface Props {
  link: string;
  name: string;
}

const props = defineProps<Props>();
const { link } = toRefs(props);
</script>
<template>
  <div class="justify-content-center w-full align-content-end mt-2">
    <a :href="link" target="_blank" class="p-button font-bold">{{ name }}</a>
  </div>
</template>
<style lang="scss" scoped>
a {
  height: 40px;
}
</style>
