<template>
  <div
    ref="mainEl"
    :class="[
      isMainSticky ? 'fixed left-0 w-full overflow-hidden' : 'relative',
      !isFooterInViewport && 'bottom-0',
    ]"
  >
    <slot name="mainContent" />
  </div>

  <!-- Spacer for replaces main tag visually -->
  <div
    aria-hidden="true"
    :style="{ height: isMainSticky ? `${mainHeight}px` : '0px' }"
  />

  <div
    ref="footerTrigger"
    aria-hidden="true"
    class="relative bg-gray-300 blur-2xl"
    :style="{ height: `${footerHeight}px` }"
  />

  <div
    ref="footerEl"
    class="fixed bottom-0 left-0 z-500 w-full text-white"
    :style="{
      transform: `translateY(${(1 - progress) * 100}%)`,
    }"
  >
    <div
      aria-hidden="true"
      class="h-24 w-full bg-[--bg-primary]"
      :style="{
        marginBottom: '-2px', // Fix small gap on mobile
        clipPath: `polygon(0% ${progress * 90}%, 100% 0%, 100% 100%, 0% 100%)`,
      }"
    />
    <div
      class="bg-[--bg-primary]"
      :style="{
        paddingTop: '2px', // Fix small gap on mobile
      }"
    >
      <slot name="footerContent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue'
import { useObserver } from '~/composables/useObserver'
import { useResize } from '~/composables/useResize'

const router = useRouter()
const { y: scrollY } = useWindowScroll()
const { height: viewportHeight } = useWindowSize()
const win = useWindowSafe()

let removeAfterEach: (() => void) | null = null
const hasInitialized = ref<boolean>(false)

const mainEl = ref<HTMLElement | null>(null)
const footerEl = ref<HTMLElement | null>(null)
const footerTrigger = ref<HTMLElement | null>(null)
const isMainSticky = ref<boolean>(false)
const isFooterInViewport = ref<boolean>(false)
const isObserv = ref<boolean>(false)
const mainHeight = ref<number>(0)
const footerHeight = ref<number>(0)
const footerTriggerDistance = ref<number>(0)
const progress = ref<number>(0)

useObserver(footerTrigger, ([entry]) => {
  isObserv.value = entry?.isIntersecting ?? false
})

useResize(() => resetFooterState())

function resetFooterState(scrollFooterOut?: boolean): void {
  isFooterInViewport.value = false
  isMainSticky.value = false
  progress.value = 0
  mainHeight.value = 0
  nextTick(() => initFooterPositioning(scrollFooterOut))
}

function getViewportHeight(): number {
  // Fix mobile flicker bug when footer is back to exit viewport
  return win.visualViewport?.height || viewportHeight.value
}

function handleScroll(): void {
  if (!footerTrigger.value || !isObserv.value) return
  const rect = footerTrigger.value.getBoundingClientRect()
  const distance = getViewportHeight() - rect.top
  progress.value = Math.min(Math.max(distance / footerHeight.value, 0), 1)
  // Fixed when footer is entering viewport
  if (progress.value > 0 && !isMainSticky.value) {
    isMainSticky.value = true
  }
  // Unfixed when footer leaves viewport
  if (progress.value <= 0 && isMainSticky.value) {
    isMainSticky.value = false
  }
}

async function initFooterPositioning(scrollFooterOut?: boolean): Promise<void> {
  if (!footerTrigger.value || !footerEl.value || !mainEl.value) return
  const viewportHeight = getViewportHeight()
  footerTriggerDistance.value = footerTrigger.value.offsetTop
  mainHeight.value = mainEl.value.offsetHeight
  footerHeight.value = footerEl.value.offsetHeight
  isFooterInViewport.value = footerTriggerDistance.value < viewportHeight

  if (viewportHeight + scrollY.value >= footerTriggerDistance.value) {
    isObserv.value = true
    await handleScroll()

    if (scrollFooterOut) {
      win.scrollTo({
        top: footerTriggerDistance.value - viewportHeight,
        behavior: 'smooth',
      })
    }
  }

  // footerTriggerDistance check and adjust if not
  setTimeout(() => {
    const footerTriggerDistanceCheck = footerTrigger.value as HTMLElement
    const mainHeightCheck = mainEl.value as HTMLElement
    if (
      footerTriggerDistance.value !== footerTriggerDistanceCheck?.offsetTop ||
      mainHeight.value !== mainHeightCheck?.offsetHeight
    ) {
      initFooterPositioning(scrollFooterOut)
    }
  }, 500)
}

onMounted(() => {
  removeAfterEach = router.afterEach((to, from) => {
    hasInitialized.value = true
    if (to.path !== from.path) {
      win.scrollTo({ top: 0 }) // Fix MainSticky stuck due to previous scroll position
      setTimeout(() => resetFooterState(), 500) // Fix footerHeight issue with Delay to ensure DOM is up to date
    }
  })

  if (!hasInitialized.value) {
    hasInitialized.value = true
    setTimeout(() => initFooterPositioning(), 500) // Wait for DOM
  }
  win.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  win.removeEventListener('scroll', handleScroll)
  if (removeAfterEach) removeAfterEach()
})

provide('resetFooterState', resetFooterState)
provide('isFooterObserv', isObserv)
</script>
