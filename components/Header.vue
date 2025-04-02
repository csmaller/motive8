<template>
  <div
    id="header"
    class="w-full header flex flex-wrap gap-1 align-items-center justify-content-between sm:px-6 p-3 pl-4"
  >
    <Nav />
    <Hamburger />
  </div>
</template>
<style lang="scss">
.header {
  position: fixed;

  left: 0;
  max-height: 150px;
  z-index: 10000;
  background-color: white;
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  transition: top 0.5s; /* Transition effect when sliding down (and up) */
}
</style>
