<template>
  <nav
    v-show="event"
    id="mobile-menu"
    aria-label="Main navigation"
    :aria-hidden="!event"
    class="fixed top-0 left-0 z-1000 flex h-full w-full items-center justify-center"
    @click="emit('close')"
  >
    <!-- Mobile menu open animation -->
    <div
      aria-hidden="true"
      class="absolute flex h-full w-full items-center justify-center"
      :style="{ top: `${position.y}px`, left: `${position.x}px` }"
    >
      <div
        class="absolute rounded-full backdrop-blur-xl"
        :style="{
          animation: 'menu-blur1 1.8s cubic-bezier(0, 0, 0.2, 1) forwards',
          width: `${radius}px`,
          height: `${radius}px`,
        }"
      />
      <div
        class="absolute rounded-full backdrop-blur-xl"
        :style="{
          animation: 'menu-blur2 1.4s cubic-bezier(0, 0, 0.2, 1) forwards',
          width: `${radius}px`,
          height: `${radius}px`,
        }"
      />
    </div>

    <!-- Mobile menu header -->
    <div class="absolute top-0 left-0 w-full opacity-60">
      <div
        class="flex items-center justify-between bg-gray-200 px-3 py-2"
        :style="{
          opacity: 0,
          animation: `opacity-out 1s forwards 1.5s`,
        }"
      >
        <NuxtLink to="/">
          <PageLogo class="h-12 w-12 fill-black" />
        </NuxtLink>
        <XMarkIcon
          class="h-16 w-16 text-black"
          :style="{
            rotate: '-30deg',
            animation: `rotate-out 1s forwards 1.4s ease-out`,
          }"
        />
      </div>
    </div>

    <!-- Mobile menu footer -->
    <div
      class="absolute right-0 bottom-8 flex h-16 w-full items-center justify-center space-x-8"
      :style="{
        opacity: 0,
        animation: 'opacity-out 1s forwards 1.5s',
      }"
    >
      <a
        href="https://www.instagram.com/TeamEscalate/"
        target="_blank"
        rel="noopener noreferrer"
        class="h-full w-auto p-2 text-black opacity-60"
      >
        <PageLogoInstagram
          aria-label="Instagram Kanal des Team Escalate"
          class="h-full w-full"
        />
        Instagram
      </a>
      <a
        href="mailto:info@team-escalate.de"
        class="h-full w-auto p-2 text-black opacity-60"
      >
        <EnvelopeIcon class="p-0.3 h-full w-full" />
        E-Mail
      </a>
    </div>

    <!-- Mobile menu links -->
    <ul class="space-y-4 text-6xl font-bold opacity-70">
      <li
        v-for="(item, i) in menuItems"
        :key="i"
        :class="[
          'relative overflow-hidden',
          `/${route.path.split('/')[1]}` === item.link
            ? 'text-gray-900'
            : 'text-stroke-black text-stroke-2 paint-order text-white',
        ]"
      >
        <NuxtLink
          :to="item.link"
          class="relative inline-block cursor-pointer overflow-hidden"
        >
          <div
            class="bg-white px-4 py-2"
            :style="{
              opacity: 0,
              animation: `opacity-out 0s forwards ${0.6 + i * 0.15}s`,
            }"
          >
            {{ item.title }}
          </div>
          <div
            aria-hidden="true"
            class="absolute top-0 left-0 h-full w-full bg-black"
            :style="{
              transform: 'translateX(-100%)',
              animation: `translate-x-in 1s forwards ${0.25 + i * 0.15}s`,
            }"
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const { height: viewportHeight, width: viewportWidth } = useWindowSize()
const win = useWindowSafe()

const position = ref({ x: 0, y: 0 })
const radius = ref(0)

const props = defineProps<{
  event?: MouseEvent
  menuItems: Array<{ title: string; link: string }>
}>()

onMounted(() => {
  radius.value = Math.max(viewportWidth.value, viewportHeight.value) * 2.2
})

watch(
  () => props.event,
  (value) => {
    if (value) {
      position.value = {
        x: props.event!.clientX - viewportWidth.value / 2,
        y: props.event!.clientY - viewportHeight.value / 2,
      }
      win.document.body.style.overflowY = 'hidden' // Prevents scrolling when drawer is open
    } else {
      win.document.body.style.overflowY = 'auto'
    }
  },
)

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<style>
@keyframes menu-blur1 {
  0% {
    transform: scale(0.2);
    opacity: 1;
  }
  75%,
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@keyframes menu-blur2 {
  0% {
    height: 0;
    width: 0;
  }
  75%,
  100% {
  }
}
</style>
