<template>
  <NuxtLink
    :to
    class="rounded-0.5 relative inline-block border-2 border-black p-4 font-semibold text-gray-700 hover:text-black"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
  }>(),
  {
    to: '/',
  },
)
</script>
