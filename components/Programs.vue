<script setup lang="ts">
const { data: programsQuery } = await useAsyncData('programs', () => queryContent('/programs').find());
</script>

<template>
  <ParallaxContainer
    background-img="img/blue_bg.jpg"
    gradient="linear-gradient(white,transparent 90%)"
    padding="0 0 100px"
  >
    <ParallaxElement :factor="0.3">
      <LayoutContainer class-name="md:col-12 w-full mt-0 pt-0 ">
        <div v-for="item in programsQuery" :key="item.url" class="h-full">
          <ProgramItem :item="item" :background-color="item.background_color" />
        </div>
      </LayoutContainer>
    </ParallaxElement>
  </ParallaxContainer>
</template>

<style scoped lang="scss"></style>
