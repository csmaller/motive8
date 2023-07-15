<script setup lang="ts"></script>

<template>
  <div class="flex flex-column p-0">
    <div class="flex flex-wrap w-full px-4 justify-content-center">
      <h1 class="text-center underline pb-2">Mission</h1>
      <Mission />
    </div>
    <div class="parent">
      <div class="flex w-12 p-0 main-img"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.parent {
  -webkit-mask-image: linear-gradient(to top, rgb(0, 0, 0) 85%, transparent 100%);
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 85%, transparent 100%);
}

.main-img {
  background-image: url(/img/sandhollow.jpeg);
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
