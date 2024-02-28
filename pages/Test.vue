<template>
  <div>
    <section class="App__example">
      <ParallaxContainer class="App__example-double-element my-6" :background-img="`/img/slider/4.jpeg`">
        <!-- <ParallaxImage :width="400" :height="225" :factor="0.5" class="">
          <img src="/img/slider/3.jpeg" :style="{ width: '100vw', height: 'auto' }" />
        </ParallaxImage> -->
        <ParallaxElement :factor="0.7" class="App__example-element w-full justify-content-center align-content-center">
          <AboutUs background-color="rgb(255,255,255, .8)" />
        </ParallaxElement>
      </ParallaxContainer>
    </section>
    <section class="App__example">
      <ParallaxContainer class="App__example-double-element my-6" :background-img="`/img/slider/2.jpeg`">
        <!-- <ParallaxImage :width="400" :height="225" :factor="0.8" class="">
          <img src="/img/barn-night-cropped.png" :style="{ width: '400px', height: '225px' }" />
        </ParallaxImage> -->
        <ParallaxElement :factor="0.5" class="App__example-element w-full justify-content-center align-content-center">
          <AboutUs background-color="rgb(57,121,192, .8)" />
        </ParallaxElement>
      </ParallaxContainer>
    </section>
    <section class="App__example">
      <ParallaxContainer class="App__example-double-element my-6" :background-img="`/img/slider/3.jpeg`">
        <!-- <ParallaxImage :width="400" :height="225" :factor="0.8" class="">
          <img src="/img/barn-night-cropped.png" :style="{ width: '400px', height: '225px' }" />
        </ParallaxImage> -->
        <ParallaxElement :factor="0.5" class="App__example-element w-full justify-content-center align-content-center">
          <AboutUs background-color="rgb(236, 202, 81, .8)" />
        </ParallaxElement>
      </ParallaxContainer>
    </section>

    <EventsCalendar />
  </div>
</template>

<script>
import EventsCalendar from '~/components/EventsCalendar.vue';
</script>

<style lang="scss">
// ...

.App__example {
  padding-bottom: 50px;
}

.App__example-single-element {
  height: 20em;
  background-color: lightblue;
}

.App__example-double-element {
  display: flex;
  width: 100vw;
  position: relative;
}

.App__example-element {
  max-width: 100vw;
  z-index: 1000;
  background: rgb(226, 239, 218, 0.2);

  //border: 2px solid red;
  //color: white;
}
</style>
