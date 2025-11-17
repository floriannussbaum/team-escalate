<template>
  <div class="page-simple-container space-y-24">
    <section class="space-y-6">
      <ElementH2 id="freerunning">Was ist Freerunning?</ElementH2>
      <article class="space-y-2">
        <p>
          Freerunning ist der Allrounder, der das Bindeglied zwischen Parkour
          und Tricking bildet.
        </p>
        <p>
          Wie der Name verrät, gibt es hier keine Regeln bezüglich des
          Bewegungsablaufes oder Umgebung. Alles, was Spaß macht, ist erlaubt
          und kann mit einfließen.
        </p>
        <p>
          Das Repertoire der Bewegungen im Freerunning ist nicht eingeschränkt.
          Freerunning wird ständig durch die Kreativität der Freerunner
          erweitert. Oftmals bieten akrobatische Bewegungen aus dem Turnen oder
          auch aus dem Breakdance und Tricking erste Anregungen oder werden
          übernommen und die Techniken der Umgebung angepasst.
        </p>
        <p>
          Die Bewegung soll nicht Mittel zum Zweck sondern Selbstzweck sein, das
          heißt, das Sich-Bewegen steht im Mittelpunkt. Der Grundsatz von
          Parkour, die Effizienz (also das effiziente Überwinden von
          Hindernissen), steht hierbei nicht im Vordergrund.
        </p>
        <p>
          Im Training werden die körperlichen und vor allem mentalen Grenzen
          immer wieder ausgereizt und versucht zu überwinden. Gerade bei neuen
          Bewegungen ist es wichtig, sich nicht von Anfang an zu viel
          vorzunehmen, sondern Schritt für Schritt zu lernen und bereits
          erlernte Techniken zu perfektionieren.
        </p>
      </article>
      <aside>
        <ElementH3>Kurzfassung</ElementH3>
        <p>
          Individuelle, akrobatische Bewegungen ohne feste Regeln. Freerunning
          kombiniert Elemente aus anderen Sportarten, um die Umgebung auf
          einzigartige Weise zu nutzen.
        </p>
      </aside>
    </section>

    <section class="space-y-6">
      <ElementH2 id="faq">Häufige Fragen (FAQ)</ElementH2>
      <TemplateFaq :faqItems="freerunningFaq" />
    </section>

    <TemplateNavList id="weitere-sportarten" />
  </div>
</template>

<script setup lang="ts">
const { freerunningFaq } = useAppConfig()

useSeoMeta({
  title: 'Freerunning',
  description:
    'Freerunning, die kreative und individuelle Bewegung ohne feste Regeln. Informationen: Definition, Ziele und FAQ.',
  ogTitle: 'Freerunning | Team Escalate',
  ogDescription:
    'Freerunning, die kreative und individuelle Bewegung ohne feste Regeln. Informationen: Definition, Ziele und FAQ.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/training/freerunning',
})

definePageMeta({
  layout: 'default',
  name: 'Freerunning',
  teaser: 'Kreative, akrobatische Bewegung',
})
</script>
