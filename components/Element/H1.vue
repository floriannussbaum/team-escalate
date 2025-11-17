<template>
  <div>
    <h1 class="text-stroke-black text-stroke-2 paint-order text-4xl text-white">
      {{ route.name }}
    </h1>
    <p v-if="route.meta.teaser">
      {{ route.meta.teaser }}
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
