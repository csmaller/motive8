<script setup lang="ts">
const { data: classesQuery } = await useAsyncData('classes', () => {
  return queryContent('/classes').where({ title: 'classes' }).findOne();
});
</script>

<template>
  <div class="w-full justify-content-center">
    <div class="header text-center border-none">
      <a
        class="btn p-button font-bold px-6 py-3 w-4 my-3 mb-5 no-underline text-center"
        target="_blank"
        href="https://checkout.stripe.com/c/pay/cs_live_a1RiFBIhP5mlmWjX2OdlsfzymyadWCMSyOSPI4mALBQpyLfLvI1euGA2NC#fidkdWxOYHwnPyd1blppbHNgWjA0SjF1Y0JGT3UzdX1OUE9jYEhuNzxtM3U1UEZvcjNTbWNGVDBtR1FHZkRkSE1OZDxiRGRBRFQ8a0sxM2h1MVZAdmNkd21JMmRXf1R3UWJrbkkxNU5sVH1yNTVNVWlsbkpEZicpJ3VpbGtuQH11anZgYUxhJz8nPXJIZktfZlRpZlVhPW9GZEBCJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmR1dStzdHNgaWpmbHF8K2ZqaConeCUl"
      >
        Click to Join
      </a>
      <h2 class="mt-5 underline">Class Times</h2>
    </div>

    <div v-if="classesQuery" class="classes w-full p-3 mb-4 justify-content-center">
      <ContentRendererMarkdown :value="classesQuery" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.classes {
  font-size: 20px;
}
.btn {
  background-color: var(--color-primary);
  color: white;
  font-size: 20px;
  border-radius: 6px;
}

:deep(a) {
  text-decoration: underline;
}
</style>
