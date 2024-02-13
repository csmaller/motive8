<script setup lang="ts">
import { prettyDate, prettyTime } from '@/utils';
import type { TreeExpandedKeys } from 'primevue/tree';

interface Props {
  event: any;
}

const props = defineProps<Props>();

const { event } = toRefs(props);

const expand = ref(false);

const toggleExpand = () => {
  expand.value = !expand.value;
};
</script>

<template>
  <div
    class="event flex align-content-center p-3 justify-content-between gap-2 my-5 w-full"
    :class="expand ? 'expand' : null"
  >
    <div class="flex grid w-full">
      <div class="flex col-12 sm:col-12 lg:col-3">
        <img :src="event.image" :alt="event.description" />
      </div>
      <div class="content flex flex-column align-content-center col-12 sm:col-12 lg:col-6 py-4">
        <h2 class="mb-2">{{ event.title }}</h2>
        <small>Date Of Event:{{ prettyDate(event.event_date) }}</small>
        <small>Time Start: {{ prettyTime(event.event_date) }}</small>
        <p>{{ event.description }}</p>
      </div>
      <div class="payment flex flex-column col-12 sm:col-12 lg:col-3 align-items-center gap-3 my-6">
        <PurchaseButton :link="event.link" name="Sign Up" />
        <Button class="p-button" @click="toggleExpand">More Info</Button>
      </div>
      <div class="content flex align-content-center justify-content-center col-12 p-4 border-1">
        <div class="main-content flex flex-column">
          <ContentRendererMarkdown :value="event" />
          <div class="payment flex flex-column align-items-center gap-3 my-6">
            <PurchaseButton :link="event.link" name="Sign Up" />
            <Button class="p-button" @click="toggleExpand">Close</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event {
  border-bottom: 2px solid var(--yellow);
  border-top: 2px solid var(--yellow);
  background-color: var(--blue);
  max-height: 230px;
  transition: all 0.8s ease;
  overflow: hidden;
  color: black;

  img {
    width: 200px;
    height: 200px;
  }
  .main-content {
    :deep(p) {
      text-align: left;
      color: black;
    }
    :deep(img) {
      float: right;
      max-height: 300px;
      max-width: 300px;
      margin-left: 20px;
    }
    :deep(a, h1, h2, h3, h4, h5) {
      color: black !important;
    }
    :deep(ul) {
      list-style: circle;
      text-align: left;
      li {
        margin-bottom: 10px;
        color: black;
      }
    }
  }
}

.event.expand {
  height: 700px;
  max-height: 700px !important;
  overflow-y: auto;
}
</style>
