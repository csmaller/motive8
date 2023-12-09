<script setup lang="ts">
interface ParallaxInterface {
  height: number;
  scrollFactor: number;
  width: number;
}

interface Props {
  backgroundImg?: string;
}
const props = defineProps<Props>();
const { backgroundImg } = toRefs(props);

const data = ref<ParallaxInterface>({ height: 0, scrollFactor: 0, width: 0 });
const eventHandler = () => requestAnimationFrame(calcParallax);
const root = ref<HTMLElement | null>(null);

const calcParallax = () => {
  if (root.value) {
    const containerRect = root.value.getBoundingClientRect();

    data.value.height = containerRect.height;
    data.value.width = containerRect.width;

    const viewportOffsetTop = containerRect.top;
    const viewportOffsetBottom = window.innerHeight - viewportOffsetTop;

    data.value.scrollFactor = viewportOffsetBottom / (window.innerHeight + data.value.height);
  }
};

onMounted(() => {
  calcParallax();
  // We're using a `requestAnimationFrame()`
  // for optimal performance.

  window.addEventListener('resize', eventHandler);
  window.addEventListener('scroll', eventHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', eventHandler);
  window.removeEventListener('scroll', eventHandler);
});

provide('parallaxContainer', data);
</script>

<template>
  <div ref="root" class="ParallaxContainer" v-bind:style="{ backgroundImage: 'url(' + backgroundImg + ')' }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.ParallaxContainer {
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
}
</style>
