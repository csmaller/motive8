<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <img :src="doc.image" />
        <ContentRenderer :value="doc" />
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
