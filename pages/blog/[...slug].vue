<template>
  <ContentDoc path="/blog">
    <template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template>
  </ContentDoc>
</template>
