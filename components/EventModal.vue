<script setup lang="ts">
interface Props {
  event: any;
}
const props = defineProps<Props>();
const { event } = toRefs(props);
const emit = defineEmits<{
  (e: 'cancel'): void;
}>();

const visible = ref(true);
const cancel = () => {
  emit('cancel');
  visible.value = false;
};
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :header="event.name"
    :draggable="false"
    class="flex event-modal z-5"
    @hide="cancel"
  >
    <template #header>
      <span class="font-bold">{{ event.name }}</span>
    </template>
    <slot></slot>
    <template #footer>
      <div class="flex justify-content-end">
        <Button @click="cancel" class="button newsletter-btn px-3 py-1">Close</Button>
      </div>
    </template>
  </Dialog>
</template>

<style lang="scss">
:deep(.dialog-modal) {
  width: 500px;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>
