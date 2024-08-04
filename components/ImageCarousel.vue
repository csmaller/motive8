<script lang="ts" setup>
import images from 'public/json/images.json';

const currentSlide = ref(0);
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="container">
    <Carousel
      :showNavigators="false"
      :value="images.images"
      :numVisible="1"
      :numScroll="1"
      verticalViewPortHeight="300"
      :circular="true"
      :autoplayInterval="5000"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="my-3">
          <img :src="`${slotProps.data.image}`" />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;

  .carousel__item {
    min-height: 700px;
    border-radius: 6px;

    @media (max-width: 600px) {
      min-height: 270px;
    }
  }

  :deep(.carousel__pagination) {
    @media (max-width: 700px) {
      padding-left: 0;
    }
  }
}

.carousel__viewport {
  perspective: 100%;
}
</style>
