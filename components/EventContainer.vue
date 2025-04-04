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
      class="event flex align-content-center p-0 justify-content-center gap-2 my-5 w-full"
      :class="expand ? 'expand' : null"
    >
      <div class="main-content flex flex-column justify-content-center">
        <ContentRendererMarkdown :value="event" />
      </div>
    </div>

    <div class="payment align-items-center gap-3">
      <PurchaseButton v-if="event.link" :link="event.link" name="Sign Up" />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(img) {
  max-width: inherit !important;
}

.event {
  border-bottom: 2px solid var(--yellow);
  border-top: 2px solid var(--yellow);

  transition: all 0.8s ease;
  overflow: hidden;
  color: black;

  .main-content {
    margin-left: 100px;
    margin-right: 100px;
    padding-top: 50px;
    @media (max-width: 500px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

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
