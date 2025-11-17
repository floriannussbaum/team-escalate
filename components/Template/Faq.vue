<template>
  <ul>
    <li v-for="(item, i) in faqItems" :key="i">
      <details
        ref="detailsEls"
        :class="[
          'group w-full transform border-b border-gray-300 transition-all duration-600 [&_i]:open:rotate-90',
          activeIndex === i && 'bg-gray-200',
        ]"
      >
        <summary
          class="flex cursor-pointer list-none items-center justify-between space-x-4 px-4 py-4 text-lg select-none"
          @click.prevent="toggle(i)"
        >
          <span>{{ item.question }}</span>
          <i class="rotate-45 transform transition-all duration-600">
            <XMarkIcon class="h-6 w-6 text-[--primary]" />
          </i>
        </summary>

        <div
          ref="contentEls"
          class="overflow-hidden bg-gray-200 transition-[max-height] duration-300 ease-in-out"
          :style="{ maxHeight: maxHeights[i] }"
        >
          <p class="px-4 py-2 text-gray-700">
            {{ item.answer }}
          </p>
        </div>
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, nextTick, inject } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const resetFooterState = inject('resetFooterState', () => {})

interface FaqItem {
  question: string
  answer: string
}

const props = defineProps<{
  faqItems: FaqItem[]
}>()

const activeIndex = ref<number | null>(null)
const maxHeights = ref<string[]>(props.faqItems.map(() => '0px'))
const detailsEls = ref<HTMLDetailsElement[]>([])
const contentEls = ref<HTMLElement[]>([])

function toggle(i: number) {
  setTimeout(() => resetFooterState(), 350) // Footer reset after transition

  if (activeIndex.value === i) {
    close(i)
    activeIndex.value = null
  } else {
    if (activeIndex.value !== null) close(activeIndex.value)
    open(i)
    activeIndex.value = i
  }
}

function open(i: number) {
  const el = contentEls.value[i]
  const details = detailsEls.value[i]
  if (!el || !details) return

  details.setAttribute('open', 'true')
  maxHeights.value[i] = '0px'
  nextTick(() => {
    maxHeights.value[i] = el.scrollHeight + 'px'
  })
}

function close(i: number) {
  const el = contentEls.value[i]
  const details = detailsEls.value[i]
  if (!el || !details) return

  maxHeights.value[i] = el.scrollHeight + 'px'
  nextTick(() => {
    maxHeights.value[i] = '0px'
    setTimeout(() => {
      details.removeAttribute('open')
    }, 300)
  })
}
</script>
