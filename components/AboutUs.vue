<script setup lang="ts">
interface PropsInterface {
  backgroundColor?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
  backgroundColor: 'white',
});
const { backgroundColor } = toRefs(props);

const { data: aboutQuery } = await useAsyncData('about', () => {
  return queryContent('/about').where({ title: 'about-us' }).findOne();
});
</script>

<template>
  <div>
    <div v-if="aboutQuery" v-bind:style="{ backgroundColor }" class="about w-full p-3 px-4">
      <ContentRendererMarkdown :value="aboutQuery" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.about {
  font-size: 17px;
  color: black;
}
</style>
