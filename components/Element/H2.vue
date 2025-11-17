<template>
  <a :href="hash" @click.prevent="makeHash($event)">
    <h2
      :id
      v-bind="$attrs"
      class="text-stroke-black text-stroke-2 paint-order inline-block text-5xl font-bold text-gray-100 opacity-70 sm:text-6xl"
    >
      <slot />
    </h2>
  </a>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue'

const route = useRoute()
const { y: scrollY } = useWindowScroll()
const win = useWindowSafe()
const isFooterObserv = inject<Ref<boolean>>('isFooterObserv', ref(false))

const isScroll = ref<boolean>(false)

const props = defineProps<{
  id: string
}>()

const hash = `#${props.id}`

function makeHash(e: MouseEvent): void {
  // Set hash in URL without jump
  history.pushState(history.state, '', hash)
  // Smooth scroll
  scrollToHash(hash)
}

function scrollToHash(hash: string, wait?: boolean): void {
  if (!import.meta.client && !hash) return
  const element = document.querySelector(hash)
  if (!element) return
  setTimeout(
    () => {
      isScroll.value = true
      ;(element as HTMLElement).scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => (isScroll.value = false), 1000) // Reset isScroll
    },
    wait ? 200 : 20,
  )
}

// Watch for starting footer and stop scrollToHash
watch(
  () => isFooterObserv.value,
  (value) => {
    if (value && isScroll.value) {
      isScroll.value = false
      win.scrollTo(0, scrollY.value - 25)
    }
  },
)

onMounted(() => {
  // Prevent regular hash jumping and Smooth scroll to hash
  // Only hash matches
  if (route.hash === hash) {
    history.pushState(history.state, '', route.fullPath)
    scrollToHash(route.hash, true)
  }
})
</script>
