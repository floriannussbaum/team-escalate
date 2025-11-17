<template>
  <div class="space-y-24">
    <PageContainer>
      <section class="space-y-12">
        <article class="page-space space-y-2">
          <ElementH2 id="uns" class="sr-only">Über uns</ElementH2>
          <p>
            Team Escalate ist eine ehrenamtlich gebildete Gruppe aus Halle
            (Saale) die sich am 16.06.2013 gegründet hat.
          </p>
          <p>Wir trainieren Parkour, Freerunning und Tricking.</p>
          <p>
            Jeden Traceur, Freerunner und Tricker verbindet eine Leidenschaft,
            "Der Spaß an der Bewegung".<br />
            Team Escalate möchte Euch dieses Gefühl näher bringen und einen
            sicheren Raum für das Training bieten.
          </p>
          <p>
            Wir haben verschiedene Indoor-Möglichkeiten, in denen wir unabhängig
            von Wind und Wetter regelmäßig trainieren können.<br />
            Gerade Neulinge finden dadurch einen sicheren Einstieg.
          </p>
          <p>
            Außerdem besuchen wir gemeinsam verschiedenste Events / Jams,
            vernetzen uns mit anderen Parkourgruppen und engagieren uns
            ehrenamtlich mit verschiedenen Projekten / Prozessen, die z.B. der
            Integration dienen oder die Sportart Parkour bekannter machen.
          </p>
        </article>
        <figure class="group relative mx-auto h-auto sm:max-w-[70%]">
          <img
            src="~/assets/images/parkour-training-in-gruppe.jpg"
            alt="Vier Personen trainieren Parkour im Outdoor-Bereich – alle machen verschiedene Bewegungen."
            class="shadow-lg sm:rounded-md"
          />
          <figcaption
            class="absolute right-2 bottom-2 rounded bg-black/40 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-80"
          >
            Fotograf: Michel Klehm
          </figcaption>
        </figure>
      </section>
    </PageContainer>

    <PageContainer>
      <section aria-labelledby="partners" class="page-space space-y-6">
        <ElementH2 id="partners">Partner</ElementH2>
        <ul
          class="flex flex-col items-center justify-center space-y-12 md:flex-row md:space-y-0 md:space-x-12"
        >
          <li>
            <a
              href="https://congrav.net/"
              target="_blank"
              rel="noopener noreferrer"
              class="block transition sm:hover:scale-110"
            >
              <img
                src="~/assets/logos/partner/congrav-logo.svg"
                alt="Congrav Halle (Saale) – Offizielle Webseite"
                class="h-20 w-auto"
              />
            </a>
          </li>
          <li>
            <a
              href="https://trendsportring-halle.de/"
              target="_blank"
              rel="noopener noreferrer"
              class="block transition sm:hover:scale-110"
            >
              <img
                src="~/assets/logos/partner/tsr-logo.svg"
                alt="Trendsportring Halle (Saale) TSR – Offizielle Webseite"
                class="h-28 w-auto"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.betterplace.org/de/projects/96908-offspace-freiraum-fuer-trendsport-jugend-kultur-in-halle-saale"
              target="_blank"
              rel="noopener noreferrer"
              class="block transition sm:hover:scale-110"
            >
              <img
                src="~/assets/logos/partner/offspace-logo.svg"
                alt="Offspace Halle (Saale) – Spendenplattform Betterplace"
                class="h-16 w-auto"
              />
            </a>
          </li>
          <!-- <li> TODO: Activate if ptsv agrees
            <a
              href="https://www.post-halle.de/"
              target="_blank"
              rel="noopener noreferrer"
              class="block transition sm:hover:scale-110"
            >
              <img
                src="~/assets/logos/partner/post-tsv-logo.gif"
                alt="Post Turn Sport Verein Halle (Saale) TSV – Offizielle Webseite"
                class="h-24 w-auto"
              />
            </a>
          </li> -->
        </ul>
      </section>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Das Team',
  description:
    'Team Escalate aus Halle (Saale), aktiv im Bereich Parkour, Freerunning und Tricking. Informationen über das Team und Vernetzungen.',
  ogTitle: 'Das Team | Team Escalate',
  ogDescription:
    'Informationen über Team Escalate aus Halle (Saale), aktiv im Bereich Parkour, Freerunning und Tricking.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/team',
})

definePageMeta({
  layout: 'default',
  name: 'Das Team',
  teaser: 'Wer wir sind',
})
</script>
