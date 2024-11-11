<template>
  <ParallaxContainer background-img="/img/swimmers2.jpg" gradient="linear-gradient(white,transparent 90%)">
    <ParallaxElement :factor="0.3">
      <div class="contact-wrapper w-full flex sm:px-2 lg:px-6 justify-content-center gap-2">
        <ContactUs />
      </div>
    </ParallaxElement>
  </ParallaxContainer>
</template>
<style lang="scss">
.contact-wrapper {
  font-weight: bold;
  min-height: 770px;
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
