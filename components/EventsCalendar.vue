<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import events from '@/content/json/events.json';

const parsedEvents = ref();
const parseEvents = () => {
  parsedEvents.value = events.events.map((event) => {
    let newEvent = {} as any;
    newEvent.title = event.title;
    newEvent.description = event.description;

    if (event.reoccuring) {
      newEvent.startRecur = '2024-03-01';
      newEvent.endRecur = '2024-03-28';
      newEvent.daysOfWeek = [2, 5];
      newEvent.color = '#ff0044';
    }
    if (event.all_day) {
      newEvent.start = '2024-02-28';
      newEvent.end = '2024-03-05';
      newEvent.color = '#dddddd';
    } else {
      newEvent.start = '2024-02-27T12:30:00Z';
      newEvent.end = '2024-02-27T14:30:00Z';
      newEvent.description = 'here is a 1-2 pm onetime event';
      newEvent.color = '#dddd00';
    }
    return newEvent;
  });
};

onBeforeMount(() => {
  parseEvents();
  calendarOptions.value.events = parsedEvents.value;
});

// const handleDateClick = (arg: any) => {
//   alert('here we could pop up a form where they inquire about that date with a description of their event etc');
// };

const handleEventClick = (arg: any) => {
  console.log(arg.event);
  alert(arg.event.extendedProps.description);
};

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  themeSystem: 'bootstrap5',
  initialView: 'dayGridMonth',
  // dateClick: handleDateClick,
  eventClick: handleEventClick,
  weekends: true,
  events: [],
});
</script>

<template>
  <div class="w-full p-1 sm:p-1 px-3 sm:px-3 lg:p-8">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style scoped lang="scss">
:deep(.fc-event-time) {
  color: black;
}

:deep(.fc-event-title) {
  color: black;
}
</style>
