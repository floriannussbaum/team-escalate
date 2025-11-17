<template>
  <div class="space-y-24">
    <!-- Zeiten & Orte -->
    <PageContainer>
      <section aria-labelledby="zeiten-orte" class="space-y-6 overflow-hidden">
        <div class="page-space">
          <ElementH2 id="zeiten-orte">Zeiten & Orte</ElementH2>
        </div>
        <div
          ref="wrapper"
          class="w-[300vw] max-w-[calc(80rem*3)] transition-all duration-500 sm:-ml-8"
          :style="{
            transform: `translateX(${position * -33.333}%)`,
            height,
          }"
        >
          <article
            aria-labelledby="zeiten-orte-jahnturnhalle"
            class="inline-block w-1/3 space-y-8 align-top sm:px-8"
          >
            <div class="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
              <div class="page-space space-y-6">
                <h3 id="zeiten-orte-jahnturnhalle">
                  Voll ausgestattete Turnhalle mit Stangen, Schnitzelgrube,
                  Trampolin, Bodenfläche etc.
                </h3>
                <span
                  class="flex items-center justify-center space-x-6 text-gray-700 sm:justify-start"
                >
                  <MapPinIcon class="h-12 w-auto" />
                  <address>
                    Jahnturnhalle<br />
                    Berliner Straße 2<br />
                    06112 Halle (Saale)
                  </address>
                </span>
              </div>
              <img
                src="~/assets/images/jahnturnhalle-innenansicht-halle-saale.jpg"
                alt="Eine Turnhalle namens Jahnturnhalle – viel Turnausstattung mit Matten, Trampolin, Bodenfläche, Schitzelgrube etc."
                class="shadow-lg sm:rounded-md"
              />
            </div>
            <TemplateTimes :days="training[0]!.days" class="page-space" />
          </article>

          <article
            aria-labelledby="zeiten-orte-offspace"
            class="inline-block w-1/3 space-y-8 align-top sm:px-8"
          >
            <div class="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
              <div class="page-space space-y-6">
                <span class="flex items-center space-x-4 text-gray-700">
                  <ExclamationCircleIcon class="h-8 w-auto" />
                  <p>Nur in den <strong>Wintermonaten</strong> verfügbar!</p>
                </span>

                <h3 id="zeiten-orte-offspace">
                  Frei verfügbarer Trainingsraum mit diversen modularen
                  Obstacles und Trainingsgerüst.
                </h3>
                <span
                  class="flex items-center justify-center space-x-6 text-gray-700 sm:justify-start"
                >
                  <MapPinIcon class="h-12 w-auto" />
                  <address>
                    Offspace (Trendsporthalle)<br />
                    Berliner Straße 243<br />
                    06112 Halle (Saale)
                  </address>
                </span>
              </div>
              <img
                src="~/assets/images/offspace-innenansicht-halle-saale.jpg"
                alt="Eine Mehrzweckhalle namens Offspace – ausgestattet mit diversen modularen Obstacles und Trainingsgerüst."
                class="shadow-lg sm:rounded-md"
              />
            </div>
            <TemplateTimes :days="training[1]!.days" class="page-space" />
          </article>

          <article
            aria-labelledby="zeiten-orte-outdoortraining"
            class="inline-block w-1/3 space-y-8 align-top sm:px-8"
          >
            <div class="page-space space-y-6">
              <span class="flex items-center space-x-4 text-gray-700">
                <ExclamationCircleIcon class="h-8 w-auto" />
                <p>Nur in den <strong>Sommermonaten</strong> verfügbar!</p>
              </span>
              <h3 id="zeiten-orte-outdoortraining">
                Die besten Spots in Halle (Saale)
              </h3>
              <div>
                <p>
                  Der Ort ist variabel und wird spontan über eine
                  WhatsApp-Gruppe bekannt gegeben.
                </p>
                <p>
                  Wenn Du noch nicht Teil der Gruppe bist, melde Dich einfach
                  per
                  <a href="mailto:info@team-escalate.de" class="link">E-Mail</a>
                  im Voraus.
                </p>
              </div>
            </div>
            <TemplateTimes :days="training[2]!.days" class="page-space" />
          </article>
        </div>
      </section>
    </PageContainer>

    <!-- Kosten -->
    <PageContainer>
      <section aria-labelledby="kosten" class="space-y-6 overflow-hidden">
        <div class="page-space">
          <ElementH2 id="kosten">Kosten</ElementH2>
        </div>
        <div
          ref="wrapper2"
          class="w-[300vw] max-w-[calc(80rem*3)] transition-all duration-500 sm:-ml-8"
          :style="{
            transform: `translateX(${position * -33.333}%)`,
            height: height2,
          }"
        >
          <article
            aria-labelledby="kosten-jahnturnhalle"
            class="inline-block w-1/3 space-y-4 px-4 align-top sm:px-8"
          >
            <div class="page-space">
              <h3 id="kosten-jahnturnhalle">15€ pro Monat Mitgliedsbeitrag</h3>
              <ul class="list-inside list-disc">
                <!-- prettier-ignore -->
                <li>Für Ermäßigte (Schülerinnen, Studierende, etc.) 12€ pro Monat.
                </li>
                <!-- prettier-ignore -->
                <li>Nur ganzjährig zahlbar mit der Möglichkeit einer vorzeitigen
                  Kündigung und einer Rückerstattung des anteiligen Betrags.
                </li>
                <li>Einmalige Aufnahmegebühr von 15 EUR bei Beitritt.</li>
                <!-- prettier-ignore -->
                <li>Du kannst zwei Wochen kostenlos trainieren, um zu schauen ob
                  es Dir bei uns gefällt.
                </li>
              </ul>
            </div>
          </article>

          <article
            aria-labelledby="kosten-offspace"
            class="inline-block w-1/3 space-y-4 px-4 align-top sm:px-8"
          >
            <div class="page-space">
              <h3 id="kosten-offspace">2€ je Trainingseinheit</h3>
              <ul class="list-inside list-disc">
                <li>Der Beitrag wird Bar vor Ort gezahlt.</li>
              </ul>
            </div>
          </article>

          <article
            aria-labelledby="kosten-outdoortraining"
            class="inline-block w-1/3 space-y-4 px-4 align-top sm:px-8"
          >
            <div class="page-space">
              <h3 id="kosten-outdoortraining">
                Das Outdoortraining ist <strong>kostenlos</strong>.
              </h3>
            </div>
          </article>
        </div>
      </section>
    </PageContainer>

    <!-- Mitgliedschaft -->
    <PageContainer>
      <section
        aria-labelledby="mitgliedschaft"
        class="space-y-6 overflow-hidden"
      >
        <div class="page-space">
          <ElementH2 id="mitgliedschaft">Mitgliedschaft</ElementH2>
        </div>
        <div
          ref="wrapper3"
          class="w-[300vw] max-w-[calc(80rem*3)] transition-all duration-500 sm:-ml-8"
          :style="{
            transform: `translateX(${position * -33.333}%)`,
            height: height3,
          }"
        >
          <article
            aria-labelledby="mitgliedschaft-jahnturnhalle"
            class="inline-block w-1/3 space-y-4 px-4 align-top sm:px-8"
          >
            <div class="page-space">
              <h3 id="mitgliedschaft-jahnturnhalle">
                Nach zwei Wochen Probetraining erhälst Du eine
                Beitrittserklärung direkt vor Ort von den Trainern.
              </h3>
              <ul class="list-inside list-disc">
                <!-- prettier-ignore -->
                <li>Ab 14 Jahren bzw. auch ab 12 Jahren unter Vorbehalt und nach
                  Absprache mit den Eltern.
                </li>
                <!-- prettier-ignore -->
                <li>Neulinge bitte pünktlich 20 Uhr zur gemeinsamen Erwärmung erscheinen.</li>
                <!-- prettier-ignore -->
                <li>Besucher und Gruppen bitte per
                  <a href="mailto:info@team-escalate.de" class="link">E-Mail</a>
                  vorab anmelden!
                </li>
                <li>Hier bist Du über den Verein versichert.</li>
              </ul>
            </div>
          </article>

          <article
            aria-labelledby="mitgliedschaft-offspace"
            class="inline-block w-1/3 space-y-4 px-4 align-top sm:px-8"
          >
            <div class="page-space">
              <h3 id="mitgliedschaft-offspace">
                Für das Offspace benötigst Du
                <strong>keine Mitgliedschaft</strong>.
              </h3>
              <ul class="list-inside list-disc">
                <!-- prettier-ignore -->
                <li>Ab 14 Jahren bzw. auch ab 12 Jahren unter Vorbehalt und nach
                  Absprache mit den Eltern.
                </li>
                <!-- prettier-ignore -->
                <li>Besucher und Gruppen bitte per
                  <a href="mailto:info@team-escalate.de" class="link">E-Mail</a>
                  vorab anmelden!
                </li>
                <li>Hier bist Du Eventsversichert.</li>
              </ul>
            </div>
          </article>

          <article
            aria-labelledby="mitgliedschaft-outdoortraining"
            class="inline-block w-1/3 space-y-4 px-4 align-top sm:px-8"
          >
            <div class="page-space">
              <h3 id="mitgliedschaft-outdoortraining">
                Für das Outdoortraining benötigst Du
                <strong>keine Mitgliedschaft</strong>.
              </h3>
              <ul class="list-inside list-disc">
                <li>Team Escalate übernimmt hier keine Vereinsversicherung.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </PageContainer>

    <!-- Was wird trainiert? -->
    <PageContainer>
      <section aria-labelledby="sportarten" class="space-y-6">
        <div class="page-space">
          <ElementH2 id="sportarten">Was wird trainiert?</ElementH2>
        </div>
        <ul class="page-space grid grid-cols-1 gap-6 md:grid-cols-3">
          <li>
            <article>
              <ElementH3>Parkour</ElementH3>
              <p class="mt-2">
                Parkour bedeutet, Hindernisse schnell und effizient zu
                überwinden – durch Klettern, Springen, Rollen und mehr.
              </p>
              <NuxtLink to="/training/parkour" class="link">
                Mehr über Parkour
              </NuxtLink>
            </article>
          </li>
          <li>
            <article>
              <ElementH3>Freerunning</ElementH3>
              <p class="mt-2">
                Freerunning verbindet Parkour mit kreativen Tricks und
                akrobatischen Bewegungen – hier geht es um Freiheit und
                Ausdruck.
              </p>
              <NuxtLink to="/training/freerunning" class="link">
                Mehr über Freerunning
              </NuxtLink>
            </article>
          </li>
          <li>
            <article>
              <ElementH3>Tricking</ElementH3>
              <p class="mt-2">
                Tricking kombiniert Kicks, Drehungen und Flips aus verschiedenen
                Sportarten zu spektakulären Bewegungen.
              </p>
              <NuxtLink to="/training/tricking" class="link">
                Mehr über Tricking
              </NuxtLink>
            </article>
          </li>
        </ul>
      </section>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, inject } from 'vue'
import { useResize } from '~/composables/useResize'
import { MapPinIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const { training, subMenuItems } = useAppConfig()
const resetFooterState = inject(
  'resetFooterState',
  (scrollFooterOut?: boolean) => {},
)

const wrapper = ref<HTMLElement | null>(null)
const wrapper2 = ref<HTMLElement | null>(null)
const wrapper3 = ref<HTMLElement | null>(null)
const height = ref('auto')
const height2 = ref('auto')
const height3 = ref('auto')

// Position with incorrect check
const position = computed<number>(() =>
  Number(route.query.pos) < subMenuItems.length ? Number(route.query.pos) : 0,
)

useResize(() => updateHeight())

function updateHeight(): void {
  if (!wrapper.value && !wrapper2.value && !wrapper3.value) return
  const active = wrapper.value?.children[position.value] as HTMLElement
  const active2 = wrapper2.value?.children[position.value] as HTMLElement
  const active3 = wrapper3.value?.children[position.value] as HTMLElement

  if (active) height.value = active.offsetHeight + 'px'
  if (active2) height2.value = active2.offsetHeight + 'px'
  if (active3) height3.value = active3.offsetHeight + 'px'

  resetFooterState(true)

  // Heights check and adjust if not
  setTimeout(() => {
    const activeCheck = wrapper.value?.children[position.value] as HTMLElement
    if (height.value !== activeCheck?.offsetHeight + 'px') updateHeight()
  }, 500)
}

watch(position, () => updateHeight())

onMounted(() => {
  setTimeout(() => updateHeight(), 500) // Fix heights issue with Delay to ensure DOM is up to date
})

useSeoMeta({
  title: 'Training',
  description:
    'Grundlegende Informationen zu den Sportarten Parkour, Freerunning und Tricking, einschließlich Trainingszeiten, Orten und Kosten.',
  ogTitle: 'Training | Team Escalate',
  ogDescription:
    'Details zu Parkour, Freerunning und Tricking: Trainingszeiten, Kosten und Orte im Überblick.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/training',
})

definePageMeta({
  layout: 'default',
  name: 'Training',
  teaser: 'Alles was Du wissen musst',
})
</script>
