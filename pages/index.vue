<script setup lang="ts"></script>

<template>
  <div class="grid p-0 sm:p-0 lg:p-0 index-container">
    <Home class="col-12" />
    <Divider link="coaches" />
    <Coaches class="col-12" />
    <Divider link="programs" bottom="25px" />
    <Programs class="col-12" />
    <Divider link="classes" />
    <Classes class="col-12" />
    <Divider link="contact" bottom="5px" />
    <Contact class="col-12" />
  </div>
</template>

<style scoped lang="scss">
.index-container {
  width: 100vw;
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
