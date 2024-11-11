<script lang="ts" setup>
interface PropsInterface {
  isSlider?: boolean;
  backgroundSize?: string;
  img?: string;
  className?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), { backgroundSize: '65% 90%', className: 'md:col-12 w-full' });
const { isSlider, img, className } = toRefs(props);
const myClass = computed(() => (!isSlider.value ? className.value : null));
</script>
<template>
  <div id="wrapper" class="px-0 text-center">
    <div class="content mt-3 flex flex-wrap justify-content-center align-items-center">
      <div class="flex blurb col-12 md:col-6 px-0" :class="myClass">
        <slot />
      </div>
      <div v-if="isSlider" class="img-container col-12 md:col-6">
        <div class="flex sm:flex lg:hidden">
          <img :src="img" class="w-full" />
        </div>
        <ParallaxElement :factor="0.2">
          <ImageCarousel />
        </ParallaxElement>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#wrapper {
  width: 100vw;
  height: 100vh;
  .content {
    // background-image: url(/img/bg-green.png);
    // background-size: v-bind(backgroundSize);
    // background-position: v-bind(backgroundImagePosition);
    // background-repeat: no-repeat;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    /* optional */
    -webkit-box-align: start;
    -moz-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;

    .blurb {
      margin-top: 20px;
      -webkit-box-ordinal-group: v-bind(order);
      -moz-box-ordinal-group: v-bind(order);
      -ms-flex-order: v-bind(order);
      -webkit-order: v-bind(order);
      order: v-bind(order);
      width: 50%;
      font-family: var(--font-candara);
      font-size: 18px;

      .layout-header {
        font-weight: light;
        text-align: center;
        font-size: 24px;
        font-family: var(--font-baskerville);
      }
      p {
        color: black;
      }
    }
    .img-container {
      margin-top: 40px;
      // -webkit-box-ordinal-group: v-bind(imgOrder);
      // -moz-box-ordinal-group: v-bind(imgOrder);
      // -ms-flex-order: v-bind(imgOrder);
      // -webkit-order: v-bind(imgOrder);
      // order: v-bind(imgOrder);
      max-height: 650px;
      max-width: 900px;
    }

    @media (max-width: 767px) {
      background: var(--color-green);

      .blurb {
        width: 100%;
        padding: 6px !important;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1;
      }

      .img-container {
        -ms-flex-order: 2;
        -webkit-order: 2;
        order: 2;
      }
    }
  }
}
</style>
