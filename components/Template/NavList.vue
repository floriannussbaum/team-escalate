<template>
  <nav class="space-y-4">
    <ElementH3>Weitere Sportarten</ElementH3>
    <ul class="space-y-2 pl-4">
      <li
        v-for="(item, i) in sports"
        :key="i"
        v-show="route.path !== item.link"
      >
        <NuxtLink :to="item.link" class="link space-x-1">
          <strong>{{ item.title }}</strong>
          <span class="text-[--primary]">{{ item.description }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const { sports } = useAppConfig()
</script>
