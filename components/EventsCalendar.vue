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
      newEvent.daysOfWeek = [2];
      newEvent.color = 'red';
    }
    if (event.all_day) {
      newEvent.allDay = true;
      newEvent.start = '2024-02-28';
      newEvent.color = 'yellow';
    } else {
      newEvent.startTime = '11:00';
      newEvent.endTime = '12:00';
      newEvent.start = '2024-02-27';
      newEvent.color = 'black';
    }
    return newEvent;
  });
};

onBeforeMount(() => {
  parseEvents();
  console.log(parsedEvents.value);
  calendarOptions.value.events = parsedEvents.value;
});

// const handleDateClick = (arg: any) => {
//   alert('here we could pop up a form where they inquire about that date with a description of their event etc');
// };

const handleEventClick = (arg: any) => {
  alert(arg.event.title);
};

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
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

<style scoped lang="scss"></style>
