<template>
  <div class="w-full header flex flex-wrap gap-1 align-items-center justify-content-between sm:px-6 p-3 pl-4">
    <Nav />
    <Hamburger />
  </div>
</template>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  max-height: 150px;
  z-index: 10000;
  background-color: white;
}
</style>
