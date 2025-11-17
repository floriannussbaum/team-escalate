<template>
  <figure class="group relative">
    <img :src="`/images/${src}`" :alt class="shadow-lg sm:rounded-md" />
    <figcaption
      class="absolute right-2 bottom-2 rounded bg-black/40 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-80"
    >
      {{ Fotograf }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  Fotograf: string
}>()
</script>
