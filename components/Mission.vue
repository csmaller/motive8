<script setup lang="ts">
const { data: missionQuery } = await useAsyncData('mission', () => {
  return queryContent('/mission').where({ title: 'mission-statement' }).findOne();
});

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false; // Hide the mission element after 5 seconds
  }, 5000);

  // Disable all anchor tags inside the mission element
  const missionElement = document.getElementById('mission');
  if (missionElement) {
    const anchorTags = missionElement.querySelectorAll('a');
    anchorTags.forEach((anchor) => {
      anchor.style.pointerEvents = 'none'; // Disable clicks
      anchor.style.color = 'black'; // Optional: Change color to indicate disabled state
    });
  }
});
</script>

<template>
  <div>
    <div v-if="missionQuery" id="mission" class="mission block w-full p-3 sm:mt-1" :class="{ hidden: !isVisible }">
      <ContentRendererMarkdown :value="missionQuery" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.mission {
  font-size: 20px;
  &.hidden {
    transform: translateX(100%); /* Slide right off the screen */
    opacity: 0; /* Fade out */
  }
  a {
    color: rgb(255, 217, 0) !important;
  }
}
</style>
