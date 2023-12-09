<script setup lang="ts">
interface PropInterface {
  factor: number;
}

interface ParallaxInterface {
  height: number;
  scrollFactor: number;
  width: number;
}

const props = defineProps<PropInterface>();
const { factor } = toRefs(props);

const parallaxContainer = inject('parallaxContainer');
const offset = computed(() => {
  const { height, scrollFactor } = parallaxContainer.value as ParallaxInterface;
  // The offset is relative to the height of
  // the element. This means, if the factor is
  // 0.5, the element is moved half its height
  // over the full scroll distance of the viewport.
  if (factor.value) return scrollFactor * height * factor.value;
});
</script>

<template>
  <div
    :style="{
      transform: `translate3d(0, ${offset}px, 0)`,
    }"
    class="ParallaxElement"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
