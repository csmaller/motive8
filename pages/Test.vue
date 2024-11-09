<script>
import EventsCalendar from '~/components/EventsCalendar.vue';
import ParallaxContainer from '~/components/Parallax/ParallaxContainer.vue';
import ParallaxElement from '~/components/Parallax/ParallaxElement.vue';
</script>
<template>
  <div class="w-full">
    <ParallaxContainer background-img="img/blue_bg.jpg">
      <!-- <ParallaxImage :factor="0.5">
        <ParallaxElement :factor="0.5">
          <Home />
          <Divider />
        </ParallaxElement>
      </ParallaxImage> -->
      <ParallaxElement :factor="0.8">
        <Home />
      </ParallaxElement>
    </ParallaxContainer>
  </div>
</template>

<style lang="scss">
// ...

.App__example {
  padding-bottom: 500px;
}

.App__example-single-element {
  height: 40em;
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
