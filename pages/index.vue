<script setup lang="ts"></script>

<template>
  <div class="flex p-0 sm:p-0 lg:p-4 index-container">
    <div class="justify-content-center align-content-center hidden sm:hidden lg:flex w-full sm:w-full lg:w-6">
      <ImageCarousel />
    </div>
    <div class="flex sm:flex lg:hidden w-full">
      <img src="/img/img_8880.jpeg" class="w-full" />
    </div>
    <div class="flex flex-wrap w-full sm:w-full lg:w-6 px-3 justify-content-center">
      <Mission />
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-container {
  @media (max-width: 600px) {
    flex-direction: column;

    text-align: center;

    a {
      color: blue;
    }
  }
}

.parent {
  -webkit-mask-image: linear-gradient(to top, rgb(0, 0, 0) 85%, transparent 100%);
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 85%, transparent 100%);
}

.main-img {
  background-image: url(/img/main_page_bg1.png);
  min-height: 670px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media (max-width: 768px) {
    height: 420px;
  }

  @media only screen and (max-width: 480px) {
    height: 210px;
  }
}
</style>
