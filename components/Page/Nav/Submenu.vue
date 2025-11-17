<template>
  <nav
    v-if="showSubmenu"
    aria-label="Section navigation"
    class="bg-gray-300 text-lg font-medium text-gray-800"
    :style="{
      transform: 'translateY(-100%)',
      animation: 'translate-y-out 400ms forwards 100ms ease-out',
    }"
  >
    <ul class="flex justify-center space-x-2 overflow-hidden sm:space-x-8">
      <li v-for="(value, index) in subMenuItems" :key="index">
        <NuxtLink
          :to="`${route.path}?pos=${index}`"
          :class="[
            'block px-4 py-4 transition duration-200 ease-in',
            index === position
              ? 'underline decoration-2 underline-offset-8'
              : 'hover:text-gray-600',
          ]"
        >
          {{ value.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const route = useRoute()
const { subMenuItems } = useAppConfig()

const position = ref<number>(0)

const showSubmenu = computed(() => {
  const [section, subpage] = route.path.split('/').filter(Boolean)
  return !subpage && section === 'training'
})

function checkPosition(): void {
  const pos = Number(route.query.pos)
  if (pos < subMenuItems.length) {
    position.value = pos || 0
  } else {
    position.value = 0
    route.query.pos = '0'
    history.pushState(history.state, '', `${route.path}`)
  }
}

watch(() => route.query.pos, checkPosition)

onMounted(() => checkPosition())
</script>
