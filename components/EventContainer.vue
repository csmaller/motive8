<script setup lang="ts">
interface Props {
  event: any;
}

const props = defineProps<Props>();

const { event } = toRefs(props);

const prettyDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-us');
};
</script>

<template>
  <div class="flex align-content-center p-3 justify-content-start gap-2">
    <img :src="event.image" :alt="event.description" />
    <div class="content">
      <h3>{{ event.title }}</h3>
      <small>date:{{ prettyDate(event.date) }}</small>
      <p>{{ event.description }}</p>
      <ContentRendererMarkdown :value="event.body" />
    </div>
    <div class="payment">
      <PurchaseButton :link="event.link" name="Sign Up" />
    </div>

    <p></p>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 200px;
  height: 200px;
}
</style>
