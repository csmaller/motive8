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
      :show-navigators="false"
      :value="images.images"
      :numVisible="1"
      :numScroll="1"
      verticalViewPortHeight="200"
      :circular="true"
      :autoplayInterval="6000"
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
  height: 700px;
  margin-right: 50px;

  .carousel__item {
    min-height: 400px;
    border-radius: 6px;

    @media (max-width: 500px) {
      min-height: 270px;
    }
  }

  :deep(.p-carousel-indicators) {
    display: none !important;
  }
  :deep(.carousel__pagination) {
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.carousel__viewport {
  perspective: 90%;
}
</style>
