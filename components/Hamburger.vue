<script lang="ts" setup>
import { ref } from 'vue';

const show = ref<boolean>(false);

const toggleMenu = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="sm:flex md:hidden mr-5">
    <label id="hamburger-menu" @click="toggleMenu">
      <nav id="sidebar-menu" :class="show ? `show-menu` : null">
        <ul v-if="show">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/coaches">Coaches</NuxtLink></li>
          <li><NuxtLink to="/programs">Programs</NuxtLink></li>
          <li><NuxtLink to="/classes">Schedule</NuxtLink></li>
          <!-- <NuxtLink to="/store">Store</NuxtLink> -->
          <li><NuxtLink to="/events">Events</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </label>

    <div class="overlay"></div>
  </div>
</template>

<style lang="scss">
#hamburger-menu {
  width: 50px;
  cursor: pointer;
  height: 50px;
  display: block;
  border: none;
  padding: 0px;
  margin: 23px;
  background: linear-gradient(
    to bottom,
    black,
    black 20%,
    white 20%,
    white 40%,
    black 40%,
    black 60%,
    white 60%,
    white 80%,
    black 80%,
    black 100%
  );
}

#hamburger-menu #sidebar-menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 200px;
  height: 100%;
  background-color: black;
  padding: 0px 10px;
  box-sizing: border-box;
  transition: 0.3s;
  z-index: 1001;

  ul {
    margin-top: 30px;
    list-style: none;
    line-height: 55px;
  }

  a {
    color: white;
    margin-right: 20px;
  }
}

.show-menu {
  visibility: visible;
  left: 0 !important;
}
#hamburger-input:checked ~ .overlay {
  visibility: visible;
  opacity: 0.4;
}
</style>
