<template>
  <div class="space-y-24">
    <PageContainer>
      <section class="prose page-space">
        <article>
          <p>
            Du kannst uns per E-Mail kontaktieren oder uns auf Social Media
            erreichen.
          </p>
          <ul class="list-none">
            <li>
              <a
                href="mailto:info@team-escalate.de"
                class="link-underlined inline-flex items-center space-x-2 font-bold no-underline"
              >
                <EnvelopeIcon class="h-6 w-auto stroke-gray-700" />
                <span class="link-text !text-[--primary]">
                  info@team-escalate.de
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/TeamEscalate/"
                target="_blank"
                rel="noopener noreferrer"
                class="link-underlined -ml-0.7 space-x-1.6 inline-flex items-center font-bold no-underline"
              >
                <PageLogoInstagram
                  aria-label="Instagram Kanal des Team Escalate"
                  class="h-7 w-auto fill-gray-700"
                />
                <span class="link-text !text-[--primary]">Instagram</span>
              </a>
            </li>
          </ul>

          <p>Oder besuche uns direkt vor Ort bei einem unserer Trainings.</p>
          <ul class="list-none">
            <li v-for="(value, index) in subMenuItems" :key="index">
              <NuxtLink
                :to="`${value.link}${index}`"
                class="link font-bold !text-[--primary]"
              >
                {{ value.title }}
              </NuxtLink>
            </li>
          </ul>
        </article>
      </section>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

const { subMenuItems } = useAppConfig()

useSeoMeta({
  title: 'Kontakt',
  description:
    'Kontaktmöglichkeiten zu Team Escalate. E-Mail-Adresse und Social-Media für Anfragen rund um Training, Projekte und Kooperationen.',
  ogTitle: 'Kontakt | Team Escalate',
  ogDescription:
    'Kontaktiere Team Escalate über E-Mail oder Social Media. Anfragen zu Training, Projekten und Kooperationen in Halle (Saale).',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/kontakt',
})

definePageMeta({
  layout: 'default',
  name: 'Kontakt',
  teaser: 'Wie Du uns erreichst',
})
</script>
