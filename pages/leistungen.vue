<template>
  <section class="space-y-24">
    <PageContainer>
      <article>
        <div class="grid items-center gap-10 md:grid-cols-2">
          <div class="page-space space-y-4">
            <ElementH2 id="fotoshootings-videos"
              >Fotoshootings & Videos</ElementH2
            >
            <p>
              Wir stehen für Fotoshootings und Videos zu Verfügung, um Ihre
              Marke oder Firma ins Rampenlicht zu rücken. Egal, ob Sie ein neues
              Produkt launchen oder auf sich aufmerksam machen möchten, wir
              helfen Ihnen, Ihre Vision zum Leben zu erwecken.
            </p>
          </div>
          <img
            src="~/assets/images/athlet-zeigt-human-flag.jpg"
            alt="Ein Team Escalate Athlet posiert mit Straßenkleidung für ein Fotoshooting in Form einer 'Human Flag'."
            class="shadow-lg sm:rounded-md md:order-first"
          />
        </div>
      </article>
    </PageContainer>

    <PageContainer class="bg-gray-50 py-24">
      <article>
        <div class="grid items-center gap-10 md:grid-cols-2">
          <div class="page-space space-y-4">
            <ElementH2 id="shows">Shows</ElementH2>
            <p>
              Wir bieten abwechslungsreiche Actionshows, die auf Ihre
              Veranstaltung zugeschnitten sind. Ob Firmenfeier, Hochzeit oder
              Geburtstag - wir sorgen für ein unvergessliches Erlebnis.
            </p>
          </div>
          <img
            src="~/assets/images/parkour-gruppe-performt-auf-bühne.jpg"
            alt="Das Show Team von Team Escalate führt eine Parkour-Performance auf einer Bühne vor einem Publikum auf."
            class="shadow-lg sm:rounded-md"
          />
        </div>
      </article>
    </PageContainer>

    <PageContainer>
      <article>
        <div class="grid items-center gap-10 md:grid-cols-2">
          <div class="page-space space-y-4">
            <ElementH2 id="workshops">Workshops</ElementH2>
            <p>
              Wir bieten Workshops für Privatpersonen und Gruppen (Schulen,
              Firmen etc.) an. Das Training wird individuell auf die jeweiligen
              Bedürfnisse angepasst.
              <br />
              Neben den Grundlagen und Krafttraining achten wir darauf, dass
              sich jeder frei entwickeln und verwirklichen kann.
            </p>
          </div>
          <img
            src="~/assets/images/gruppe-macht-liegestuetze.jpg"
            alt="Drei Trainer machen gemeinsam Liegestütze in einer Turnhalle."
            class="shadow-lg sm:rounded-md md:order-first"
          />
        </div>
      </article>
    </PageContainer>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Leistungen',
  description:
    'Atemberaubende Shows, professionelle Fotoshootings & dynamische Videos: vielfältige Angebote rund um Parkour, Freerunning und Tricking.',
  ogTitle: 'Leistungen | Team Escalate',
  ogDescription:
    'Informationen zu den Leistungen von Team Escalate – Fotoshootings & Videos, Shows und Workshops.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/leistungen',
})

definePageMeta({
  layout: 'default',
  name: 'Leistungen',
  teaser: 'Was wir noch machen',
})
</script>
