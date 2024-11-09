<script setup lang="ts">
const { data: programsQuery } = await useAsyncData('programs', () => queryContent('/programs').find());
</script>

<template>
  <ParallaxContainer background-img="img/blue_bg.jpg" gradient="linear-gradient(white,transparent 55%,yellow 95%)">
    <ParallaxElement :factor="0.3">
      <
      <LayoutContainer>
        <div v-for="item in programsQuery" :key="item.url">
          <ProgramItem :item="item" :background-color="item.background_color" />
        </div>
      </LayoutContainer>
    </ParallaxElement>
  </ParallaxContainer>
</template>

<style scoped lang="scss"></style>
