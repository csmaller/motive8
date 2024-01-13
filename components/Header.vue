<template>
  <div class="header flex flex-wrap gap-3 align-items-center justify-content-between sm:px-6 p-3 pl-4">
    <a href="/"><img src="/img/m8logo.png" class="logo m-0" /></a>
    <Nav />
    <Hamburger />
    <SocialMedia class="hidden md:flex" />
  </div>
</template>
<style lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  max-height: 150px;
  z-index: 10000;
  background-color: black;
}
</style>
