<template>
  <PageHeader>
    <PageNav>
      <PageNavSubmenu />
    </PageNav>
  </PageHeader>

  <PageFooterAnimated>
    <template #mainContent>
      <main class="pt-12 pb-74">
        <PageNavBreadcrumb class="page-container mb-6 px-4 sm:px-8" />
        <ElementH1 class="page-container mb-12 px-4 sm:px-8" />
        <slot />
      </main>
    </template>
    <template #footerContent>
      <PageFooter class="page-container px-4 sm:px-8" />
    </template>
  </PageFooterAnimated>
</template>
