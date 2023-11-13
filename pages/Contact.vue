<template>
  <div class="contact-wrapper w-full flex sm:px-2 lg:px-6 justify-content-center gap-2">
    <ContactUs />
  </div>
</template>
<style lang="scss">
.contact-wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/img/swimmers2.jpg);
  color: white;
  font-weight: bold;
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
