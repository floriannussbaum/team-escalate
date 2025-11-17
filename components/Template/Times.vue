<template>
  <ul class="space-y-2">
    <template v-for="(value, index) in days" :key="index">
      <li
        v-if="value.times && value.descriptions"
        class="sm:space-y-none flex min-h-22 flex-col items-center rounded bg-[--bg-primary] px-4 py-12 text-[--secondary] sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-4"
      >
        <strong class="sm:row-span-2">{{ value.day }}</strong>
        <span class="mt-4 sm:mt-0">{{ value.times[0] }}</span>
        <span class="mb-4 sm:mb-0">{{ value.descriptions[0] }}</span>
        <span>{{ value.times[1] }}</span>
        <span>{{ value.descriptions[1] }}</span>
      </li>

      <li
        v-else
        class="sm:space-y-none flex min-h-22 flex-col items-center space-y-2 rounded bg-[--bg-primary] px-4 py-12 text-[--secondary] sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-4"
      >
        <strong>{{ value.day }}</strong>
        <span>{{ value.time }}</span>
        <span>{{ value.description }}</span>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
interface Days {
  day: string
  time: string
  times?: string[]
  description?: string
  descriptions?: string[]
}

defineProps<{
  days: Days[]
}>()
</script>
