<template>
  <NuxtLayout name="default">
    <div class="flex min-h-[40vh] items-center justify-center">
      <div
        class="mb-30 flex flex-col items-center justify-center px-4 text-center sm:flex-row"
      >
        <h1
          class="text-2xl font-extrabold tracking-tight text-gray-900 sm:mr-6 sm:border-r sm:border-gray-900/10 sm:pr-6 sm:text-3xl"
        >
          {{ error?.statusCode ?? 404 }}
        </h1>
        <h2 class="mt-2 text-gray-700 sm:mt-0">
          Ups! Diese Seite konnte leider nicht gefunden werden.
        </h2>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

useHead({
  title: 'Fehler | Team Escalate',
})

useSeoMeta({
  robots: 'noindex, nofollow',
  description:
    'Entschuldigung, die angeforderte Seite konnte nicht gefunden werden.',
})

definePageMeta({
  name: 'Error',
})
</script>
