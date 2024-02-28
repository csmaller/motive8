<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import events from '@/content/json/events.json';

onBeforeMount(() => {
  calendarOptions.value.events = events.events;
});

// const handleDateClick = (arg: any) => {
//   alert('here we could pop up a form where they inquire about that date with a description of their event etc');
// };

// const handleEventClick = (arg: any) => {
//   alert(arg.event.extendedProps.description);
// };

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  // dateClick: handleDateClick,
  // eventClick: handleEventClick,
  weekends: true,
  events: [],
});
</script>

<template>
  <div class="w-full p-1 sm:p-1 px-3 sm:px-3 lg:p-8">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style scoped lang="scss"></style>
