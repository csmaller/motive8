<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article class="w-full p-3 mb-4 font-bold text-center">
        <h1 class="flex w-full justify-content-center mb-2">{{ doc.title }}</h1>
        <small class="flex w-full justify-content-center px-3">Date Of Event:{{ prettyDate(doc.event_date) }}</small>
        <small>Time Start: {{ prettyTime(doc.event_date) }}</small>

        <div class="img-container ">
          <img v-if="doc.image" :alt="`${doc.description}`" :src="doc.image" :class="doc.class" class="flex w-full" />
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

.img-container {
  width: 500px;
  height: 500px;
}
</style>
