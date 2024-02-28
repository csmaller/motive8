<template>
  <div class="w-full">
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
