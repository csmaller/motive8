<script lang="ts" setup>
interface Props {
  link: string;
  name: string;
  height?: string;
  fontSize?: string;
}

const props = withDefaults(defineProps<Props>(), { height: '60px', fontSize: '25px' });
const { link, height } = toRefs(props);
</script>
<template>
  <div class="flex flex-wrap justify-content-center">
    <a :href="link" target="_blank" class="p-button px-4 py-0 font-bold w-full justify-content-center">{{ name }}</a>
  </div>
</template>
<style lang="scss" scoped>
a {
  height: v-bind(height);
  border-radius: 20px;
  border: 2px solid white;
  font-size: v-bind(fontSize);
  text-align: center;

  &:hover {
    border-color: yellow;
  }
}
</style>
