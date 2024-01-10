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
        <div class="w-screen">
          <img :src="`${slotProps.data.image}`" class="w-screen" />
        </div>
      </template>
    </Carousel>

    <!-- <PrimevueCarousel
      v-model="currentSlide"
      :items-to-show="1"
      :wrap-around="true"
      :transition="500"
      :autoplay="4000000"
      class="carousel sm:w-full"
    >
      <template #slides>
        <Slide v-for="(slide, index) in images" :key="index">
          <img :src="`/img/slider/${slide}`" class="carousel__item" />
        </Slide>
      </template>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </PrimevueCarousel> -->
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  max-width: 100vw;

  .carousel__item {
    min-height: 700px;
    border: 2px solid var(--yellow);
    display: flex;
    animation: fadeIn 2s;
    border-radius: 6px;
    animation-timing-function: ease-in-out;

    @media (max-width: 600px) {
      min-height: 270px;
    }
  }

  :deep(.carousel__prev) {
    visibility: hidden;
  }
  :deep(.carousel__next) {
    visibility: hidden;
  }
  :deep(.carousel__pagination) {
    @media (max-width: 700px) {
      padding-left: 0;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.carousel__viewport {
  perspective: 100vw;
}

.carousel__slide--sliding {
  transition: 1s;
}

.carousel__slide {
  opacity: 1;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  animation: fadeOut 3s;
}

.carousel__slide--next {
  opacity: 0;
}

.carousel__slide--visible {
  opacity: 0;
  animation: fadeIn 3s;
}

.carousel__slide--active {
  opacity: 1;
}
</style>
