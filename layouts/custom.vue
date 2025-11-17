<template>
  <PageHeader>
    <PageNav>
      <PageNavSubmenu v-if="route.path === '/training'" />
    </PageNav>
  </PageHeader>

  <PageFooterAnimated>
    <template #mainContent>
      <main class="page-container px-4 pt-12 pb-74 sm:px-8">
        <PageNavBreadcrumb class="mb-6" />
        <ElementH1 class="mb-12" />
        <slot />
      </main>
    </template>
    <template #footerContent>
      <PageFooter class="page-container px-4 sm:px-8" />
    </template>
  </PageFooterAnimated>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
