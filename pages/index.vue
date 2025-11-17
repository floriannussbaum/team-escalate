<template>
  <div class="space-y-24">
    <!-- Training Preview -->
    <PageContainer>
      <section class="space-y-8">
        <div class="grid items-center gap-10 md:grid-cols-2">
          <div class="page-space">
            <ElementH2 id="training">Training</ElementH2>
            <p class="mb-6 text-gray-700">
              Unsere Trainingszeiten, Orte und Möglichkeiten – egal ob Halle,
              Offspace oder Outdoor. Für jeden was dabei!
            </p>
            <ElementButton to="/training">
              Alles was Du wissen musst →
            </ElementButton>
          </div>
          <ElementImg
            src="parkour-training-präzisionssprung.jpg"
            alt="Drei Personen trainieren Parkour im Outdoor-Bereich – zwei schauen zu wie eine dritte Person auf eine Mauer springt."
            Fotograf="Fotograf: Michel Klehm"
            class="md:order-first"
          />
        </div>
        <div class="grid gap-6 px-4 sm:grid-cols-3 sm:px-0">
          <article v-for="(value, index) in training" :key="index">
            <NuxtLink
              :to="`/training?pos=${index}`"
              class="block h-full space-y-2 rounded-md bg-white p-6 shadow"
            >
              <ElementH3>{{ value.type }}</ElementH3>
              <p class="flex items-center gap-1 text-gray-700">
                <MapPinIcon class="inline-block h-6 w-auto" />
                {{ value.location }}
              </p>
              <ul class="text-gray-600">
                <li v-for="(day, dayIndex) in value.days" :key="dayIndex">
                  <strong>{{ day.day }}: </strong>
                  <span class="text-nowrap">{{ day.time }}</span>
                </li>
              </ul>
            </NuxtLink>
          </article>
        </div>
      </section>
    </PageContainer>

    <!-- Team Preview -->
    <PageContainer class="bg-gray-50 py-24">
      <section class="grid items-center gap-10 md:grid-cols-2">
        <div class="page-space">
          <ElementH2 id="team" class="text-gray-50">Das Team</ElementH2>
          <p class="mb-6 text-gray-700">
            Lerne die Menschen hinter Team Escalate kennen – engagierte
            Sportler, die Bewegung leben und teilen.
          </p>
          <ElementButton to="/team">Wer wir sind →</ElementButton>
        </div>
        <ElementImg
          src="parkour-training-wall-run.jpg"
          alt="Zwei Personen trainieren Parkour im Outdoor-Bereich – eine schaut zu, die andere klettert an einer Wand hoch."
          Fotograf="Fotograf: Michel Klehm"
          class="md:order-first"
        />
      </section>
    </PageContainer>

    <!-- Leistungen Preview -->
    <PageContainer>
      <section class="grid items-center gap-10 md:grid-cols-2">
        <div class="page-space">
          <ElementH2 id="leistungen">Leistungen</ElementH2>
          <p class="mb-6 text-gray-700">
            Von Workshops bis Auftritte – wir bieten vielseitige Leistungen rund
            um Parkour, Freerunning und Tricking.
          </p>
          <ElementButton to="/leistungen">Was wir noch machen →</ElementButton>
        </div>
        <ElementImg
          src="parkour-training-climb-up.jpg"
          alt="Eine Person trainiert Parkour und klettert im Outdoor-Bereich auf eine Mauer."
          Fotograf="Fotograf: Michel Klehm"
        />
      </section>
    </PageContainer>

    <!-- Kontakt Preview -->
    <PageContainer class="page-container bg-gray-50 py-24">
      <section class="text-center">
        <div class="page-space">
          <ElementH2 id="kontakt" class="text-gray-50">Kontakt</ElementH2>
          <p class="mb-6 text-gray-700">
            Du möchtest mit uns trainieren oder hast Fragen? Melde dich ganz
            einfach über E-Mail oder Instagram.
          </p>
          <ElementButton to="/kontakt">Wie Du uns erreichst →</ElementButton>
        </div>
      </section>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'

const { training } = useAppConfig()

useSeoMeta({
  // Title is on define on app.vue by default
  description:
    'Team Escalate bietet Parkour, Freerunning und Tricking in Halle (Saale). Hier finden sich Informationen zum Training, Team, Kontakt und Angeboten.',
  ogTitle: 'Team Escalate',
  ogDescription:
    'Trainingsgemeinschaft für Parkour, Freerunning und Tricking in Halle (Saale). Alle Informationen zum Training, Team, Kontakt und Angeboten.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/',
})

definePageMeta({
  layout: 'default',
  name: 'Team Escalate',
  teaser: 'Parkour, Freerunning und Tricking in Halle (Saale)',
})
</script>
