<script lang="ts" setup>
interface PropInterface {
  width: number;
  height: number;
  factor: number;
}

const props = withDefaults(defineProps<PropInterface>(), {
  factor: 0.25,
});

const { factor, width, height } = toRefs(props);

const innerHeight = ref(800);
const aspectRatio = computed(() => height.value / width.value);
const compensatedFactor = computed(() => factor.value * 2);

const compensatedHeight = computed(() => {
  const val = innerHeight.value * factor.value;
  return innerHeight.value - val;
});

const eventHandler = () => requestAnimationFrame(setInnerHeight);
const inside = ref<HTMLElement | null>(null);

const setInnerHeight = () => {
  if (inside.value) innerHeight.value = inside.value?.getBoundingClientRect().height ?? 1000;
};

onMounted(() => {
  setInnerHeight();
  window.addEventListener('resize', eventHandler);
});

onBeforeUnmount(() => window.removeEventListener('resize', eventHandler));
</script>
<template>
  <div
    ref="inside"
    :style="{
      width: `100vw`,
      height: `${compensatedHeight}px`,
    }"
    class="ParallaxImage"
  >
    <ParallaxElement
      :factor="compensatedFactor"
      :style="{
        paddingTop: `${aspectRatio * 100}%`,
      }"
      class="ParallaxImage__aspect-ratio-wrap"
    >
      <div ref="inside" class="ParallaxImage__aspect-ratio-inside">
        <slot />
      </div>
    </ParallaxElement>
  </div>
</template>

<style lang="scss">
.ParallaxImage__aspect-ratio-wrap {
  position: relative;
  top: -100%;
  height: 0;
  overflow: hidden;
}

.ParallaxImage__aspect-ratio-inside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
