<script setup lang="ts">
interface Props {
  event: any;
  backgroundColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'white',
});

const { event, backgroundColor } = toRefs(props);

const expand = ref(false);

const toggleExpand = () => {
  expand.value = !expand.value;
};

const isInDateRange = (start: string, end: string) => {
  const today = new Date();
  const bannerStart = new Date(start);
  const bannerEnd = new Date(end);
  return bannerStart <= today && bannerEnd >= today ? true : false;
};
</script>

<template>
  <div>
    <div
      class="event flex align-content-center p-0 justify-content-between gap-2 my-5 w-full"
      :class="expand ? 'expand' : null"
      v-bind:style="{ backgroundColor }"
      v-if="event.pdf === '' || event.pdf === undefined"
    >
      <div class="flex grid w-full">
        <div class="flex w-full">
          <img :src="event.image" :alt="event.description" class="w-full" />
        </div>
        <div
          class="content flex flex-column align-content-center w-full justify-content-center col-12 sm:col-12 lg:col-6 py-4 gap-2"
        >
          <h2 class="mb-2">{{ event.title }}</h2>
          <h5>{{ event.description }}</h5>
          <small>Start Of Event: {{ prettyDate(event.event_date_start) }}</small>
          <small>End Of Event: {{ prettyDate(event.event_date_end) }}</small>
          <small>Time Start: {{ prettyTime(event.event_date_start) }}</small>
        </div>
        <div class="payment flex flex-column col-12 sm:col-12 lg:col-3 align-items-center gap-3 my-6">
          <PurchaseButton v-if="event && event.link" :link="event.link" name="Sign Up" />
        </div>
        <div class="content flex align-content-center justify-content-center col-12 p-4 border-1">
          <div class="main-content flex flex-column">
            <h2 class="itinerary w-full text-center hidden sm:block lg:hidden mb-3">ITINERARY</h2>
            <ContentRendererMarkdown :value="event" />
            <div class="payment flex flex-column align-items-center gap-3 my-6">
              <PurchaseButton v-if="event && event.link" :link="event.link" name="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="event flex align-content-start p-0 justify-content-center w-full">
      <ContentRendererMarkdown :value="event" />
      <div class="payment flex flex-column align-items-center gap-3 my-6">
        <PurchaseButton v-if="event && event.link" :link="event.link" name="Sign Up" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event {
  border-bottom: 2px solid var(--yellow);
  border-top: 2px solid var(--yellow);

  transition: all 0.8s ease;
  overflow: hidden;
  color: black;

  .toggle-buton {
    visibility: inherit;
  }

  @media (max-width: 720px) {
    height: auto;
    max-height: inherit;

    .toggle-button {
      visibility: hidden;
    }

    .content {
      border: none;

      .itinerary {
        display: block !important;
      }
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  .main-content {
    width: 100%;
    justify-content: center;
    display: flex;
    :deep(p) {
      text-align: left;
      color: black;
    }
    :deep(table) {
      width: 100%;

      tr {
        td {
          padding: 10px;
          width: 50%;
          img {
            width: 100%;
            max-height: 400px;
          }
        }
      }
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
  height: 600px;
  max-height: 600px !important;
  overflow-y: auto;
}
</style>
