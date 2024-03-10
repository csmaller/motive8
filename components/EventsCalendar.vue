<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import events from '@/content/json/events.json';

const showDialog = ref<boolean>(false);
const event = ref();

const handleCancel = () => (showDialog.value = false);

const buyTickets = () => {
  let anchor = document.createElement('a');
  anchor.href = event.value.extendedProps.payment_link;
  anchor.target = '_blank';
  anchor.click();
};

const handleEventClick = (arg: any) => {
  event.value = arg.event;
  showDialog.value = true;
};
const parsedEvents = ref();

const parseEvents = () => {
  parsedEvents.value = events.events.map((event) => {
    let newEvent = {} as any;
    newEvent.title = event.title;
    newEvent.description = event.description;
    console.log(event);
    if (event.reoccuring) {
      newEvent.startRecur = event.event_start_time;
      newEvent.endRecur = event.event_end_time;
      newEvent.daysOfWeek = event.days_of_week;
    }
    // if (event.all_day) {
    //   newEvent.start = '2024-02-28';
    //   newEvent.end = '2024-03-05';
    //   newEvent.color = '#dddddd';
    // } else {
    //   newEvent.start = '2024-02-27T12:30:00Z';
    //   newEvent.end = '2024-02-27T14:30:00Z';
    //   newEvent.description = 'here is a 1-2 pm onetime event';
    //   newEvent.color = '#dddd00';
    // }
    return newEvent;
  });
};

onBeforeMount(() => {
  parseEvents();
  calendarOptions.value.events = parsedEvents.value;
});

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  eventClick: handleEventClick,
  showNonCurrentDates: false,
  weekends: true,
  events: [],
});
</script>

<template>
  <div class="w-full p-1 sm:p-1 px-3 sm:px-3 lg:p-8">
    <EventModal v-if="event && showDialog" :event="event" @cancel="handleCancel"></EventModal>
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
