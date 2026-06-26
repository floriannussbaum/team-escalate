<template>
  <div
    ref="navEl"
    v-bind="$attrs"
    :class="[
      'z-900 w-full text-2xl',
      isSticky ? 'fixed top-0 left-0' : 'static',
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
import { useResize } from '~/composables/useResize'
import { Bars3Icon } from '@heroicons/vue/24/solid'

const route = useRoute()
const { y: scrollY } = useWindowScroll()
const { menuItems } = useAppConfig()
const win = useWindowSafe()

const navEl = ref<HTMLElement | null>(null)
const navTrigger = ref<HTMLElement | null>(null)
const isSticky = ref<boolean>(false)
const clickEvent = ref(undefined as MouseEvent | undefined)

const navTriggerTop = ref<number>(0)

useResize(() => updateNavState())

function handleScroll(): void {
  const isViewportOverNavTrigger = scrollY.value <= navTriggerTop.value
  isSticky.value = isViewportOverNavTrigger ? false : true
}

function updateNavState(): void {
  if (!navEl.value || !navTrigger.value) return
  const navTriggerRect = navTrigger.value.getBoundingClientRect()
  // If the navTrigger is above the viewport, we need to recalculate its offsetTop
  if (navTriggerRect.top < 0) {
    isSticky.value = false // Must be specified for the calculation
    nextTick(() => {
      navTriggerTop.value = navEl.value?.offsetTop ?? 0
      isSticky.value = true // Reset after calculation
    })
  }
  navTriggerTop.value = navEl.value?.offsetTop ?? 0
}

onMounted(() => {
  updateNavState()
  win.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  win.removeEventListener('scroll', handleScroll)
})
</script>
