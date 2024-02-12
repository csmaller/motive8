<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article class="w-full p-3 mb-4 font-bold text-center">
        <h1 class="flex w-full text-center">{{ doc.title }}</h1>
        <h4 class="flex w-full text-center">{{ doc.event_date }}</h4>

        <div class="img-container flex flex-wrap w-full justify-content-center align-content-end w-full">
          <img v-if="doc.image" :alt="`${doc.description}`" :src="doc.image" :class="doc.class" />
        </div>
        <ContentRendererMarkdown :value="doc" />
      </article>
    </template>
    <template #not-found>
      <div class="flex flex-column justify-items-center w-full">
        <div class="flex"><h1>Event not found</h1></div>
        <div class="flex justify-content-center"><NuxtLink to="/events">Back To Events</NuxtLink></div>
      </div>
    </template>
  </ContentDoc>
</template>
<style lang="scss">
h1 {
  padding: 20px;
  text-align: center;
  width: 100%;
}
</style>
