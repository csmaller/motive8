<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import events from '@/content/json/events.json';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

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
    newEvent.allDay = event.all_day;
    newEvent.body = event.body;
    newEvent.payment_link = event.payment_link;
    newEvent.start = event.event_start_time;
    newEvent.end = event.event_end_time;
    if (event.reoccuring) {
      newEvent.daysOfWeek = event.days_of_week;
    }

    return newEvent;
  });
};

onBeforeMount(() => {
  parseEvents();
  calendarOptions.value.events = parsedEvents.value;
});

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  themeSystem: 'default',
  initialView: 'dayGridMonth',
  eventClick: handleEventClick,
  showNonCurrentDates: false,
  weekends: true,
  events: [],
});
</script>

<template>
  <div class="w-full p-1 sm:p-1 px-3 sm:px-3 lg:p-8">
    <EventModal v-if="event && showDialog" :event="event" @cancel="handleCancel">
      <div>
        <div v-if="event.extendedProps.body" class="mission w-full p-3 mb-4 font-bold text-center">
          <div v-html="markdown.render(event.extendedProps.body)" />
        </div>
        <div v-if="event.extendedProps.payment_link" class="flex w-full justify-content-center">
          <Button id="save_btn" @click="buyTickets" label="Sign Up" class="button newsletter-btn w-50 px-3 py-2" />
        </div>
      </div>
    </EventModal>
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
