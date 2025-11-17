<template>
  <div
    ref="navEl"
    v-bind="$attrs"
    :class="[
      'z-900 w-full text-2xl transition-transform ease-out',
      showNav === null ? 'duration-0' : 'duration-300',
      isSticky
        ? showNav
          ? 'fixed top-0 left-0 translate-y-0'
          : 'fixed top-0 left-0 -translate-y-full'
        : 'static',
    ]"
  >
    <!-- desktop menu -->
    <nav
      aria-label="Main navigation"
      class="relative z-910 bg-gray-200 shadow-md"
    >
      <ul
        class="page-container flex w-full items-center justify-end space-x-5 px-4 max-sm:hidden"
      >
        <li class="w-full">
          <NuxtLink to="/" class="inline-flex p-4">
            <PageLogo class="h-12 w-auto fill-[--fill-primary]" />
          </NuxtLink>
        </li>
        <li
          v-for="(item, i) in menuItems"
          :key="i"
          :class="[
            `/${route.path.split('/')[1]}` === item.link
              ? 'text-gray-700'
              : 'text-gray-400 transition duration-200 ease-in hover:text-gray-500',
          ]"
        >
          <NuxtLink
            :to="item.link"
            class="block px-2 py-6 whitespace-nowrap md:px-6"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>

      <!-- mobile menu -->
      <div class="flex w-full items-center justify-between sm:hidden">
        <NuxtLink to="/" class="block p-4">
          <PageLogo class="h-12 w-auto fill-[--fill-primary]" />
        </NuxtLink>
        <button
          id="burger-menu"
          class="flex w-full items-center justify-end p-4"
          aria-controls="mobile-menu"
          :aria-expanded="clickEvent ? true : false"
          @click="clickEvent = $event"
        >
          <Bars3Icon class="h-12 w-auto text-gray-700" />
        </button>
      </div>
    </nav>

    <slot />
  </div>
  <div
    ref="navTrigger"
    aria-hidden="true"
    :style="[isSticky && `margin-bottom: ${navEl?.offsetHeight || 0}px`]"
  />

  <!-- Mobile Drawer -->
  <PageNavDrawer
    :event="clickEvent"
    @close="clickEvent = undefined"
    :menuItems
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useObserver } from '~/composables/useObserver'
import { Bars3Icon } from '@heroicons/vue/24/solid'

const route = useRoute()
const { y: scrollY } = useWindowScroll()
const { menuItems } = useAppConfig()
const win = useWindowSafe()

const lastScrollY = ref<number>(0)
const navEl = ref<HTMLElement | null>(null)
const navTrigger = ref<HTMLElement | null>(null)
const isSticky = ref<boolean>(false)
const showNav = ref<boolean | null>(null)
const clickEvent = ref(undefined as MouseEvent | undefined)

useObserver(navTrigger, ([entry]) => {
  const navDistance = navTrigger.value?.offsetTop || 0
  const isViewportOverNavTrigger = scrollY.value <= navDistance

  if (isViewportOverNavTrigger) {
    isSticky.value = false
    showNav.value = null // Reset nav when first scroll out of nav action for fix nav position flicker
  } else {
    isSticky.value = !entry.isIntersecting
  }
})

function handleScroll(): void {
  if (isSticky.value) {
    const currentY = scrollY.value
    const deltaY = currentY - lastScrollY.value

    // SCROLL_UP
    if (deltaY < -1 && showNav.value !== true) {
      showNav.value = true
    }

    // SCROLL_DOWN
    if (deltaY > 1 && showNav.value === true) {
      showNav.value = false
    }

    lastScrollY.value = currentY
  }
}

onMounted(() => {
  if (navTrigger.value) {
    const rect = navTrigger.value.getBoundingClientRect()
    isSticky.value = rect.top < 0
  }
  win.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  win.removeEventListener('scroll', handleScroll)
})
</script>
