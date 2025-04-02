<!-- filepath: /Users/coreysmaller/Code/image-slider/image-carousel-project/src/components/Carousel.vue -->
<script setup lang="ts">
import images from 'public/json/images.json';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const currentIndex = ref(0);
const isTransitioning = ref(false);

const nextSlide = () => {
  if (currentIndex.value === images.images.length - 1) {
    isTransitioning.value = true;

    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % images.images.length;
    }, 600);

    setTimeout(() => {
      isTransitioning.value = false;
    }, 80000);
  } else {
    currentIndex.value = (currentIndex.value + 1) % images.images.length;
  }
};

const interval = setInterval(() => {
  nextSlide();
}, 6000);

onMounted(() => {});
// Clear the interval when the component is unmounted
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
<template>
  <div class="carousel">
    <Mission class="mission" id="mission" />
    <div
      class="carousel-images"
      :class="{ transitioning: isTransitioning }"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <img
        v-for="(image, index) in images.images"
        :key="index"
        :src="image.image"
        :alt="image.image"
        class="carousel-image"
      />
    </div>
  </div>
</template>

<style scoped lagn="scss">
.mission {
  z-index: 105;
  position: absolute;
  top: 80px;
  left: 10%;

  @media (max-width: 500px) {
    position: relative;
    left: 0px;
    top: -20px;
    padding: 0 10px;
  }
}
.carousel {
  position: relative;
  margin-top: 70px;
  width: 100%;
  height: 100vh - 70px;
  overflow: hidden;

  @media (max-width: 500px) {
    margin-top: 150px;
  }
}

.carousel-images {
  display: flex;
  transition: transform 0.6s ease-in-out;
  width: 105%;
}

.carousel-images.transitioning {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-image {
  width: 104%;
  flex-shrink: 0;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1000;
}

.carousel-button.carousel-prev {
  left: 10px;
}

.carousel-button.carousel-next {
  right: 10px;
}

.carousel-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
