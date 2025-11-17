<template>
  <nav v-if="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li>
        <NuxtLink :to="breadcrumb.to" class="inline-block py-1">
          ← Zur Übersicht
        </NuxtLink>
      </li>
      <li aria-current="page" class="sr-only">{{ route.meta.name }}</li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const breadcrumb = computed(() => {
  const [section, subpage] = route.path.split('/').filter(Boolean)
  if (!section || !subpage) return null
  return { to: `/${section}#sportarten` }
})
</script>
