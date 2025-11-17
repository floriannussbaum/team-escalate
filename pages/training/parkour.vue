<template>
  <div class="page-simple-container space-y-24">
    <section class="space-y-6">
      <ElementH2 id="parkour">Was ist Parkour?</ElementH2>
      <article class="space-y-2">
        <p>
          Parkour ist das schnelle und effiziente Überwinden von Hindernissen.
        </p>
        <p>
          Die Praktizierenden, auch Traceure genannt, versuchen auf
          verschiedenste Art und Weise, ihren Weg von Punkt A nach Punkt B
          effizient zu beschreiten. Darin enthalten sind Elemente wie Laufen,
          Klettern, Schwingen, Springen, Rollen und viel mehr. Ziel ist es, die
          am besten geeigneten Bewegungen für die entsprechende Situation zu
          finden. Parkour kann sowohl im urbanen Raum als auch auf einem
          Hinderniskurs oder in der Natur durchgeführt werden.
        </p>
        <p>
          Im Zusammenhang mit der Ausübung des Sports steht auch die Wahrnehmung
          der Umgebung, die es ermöglicht, vorher uninteressante bauliche
          Elemente als Sportmöglichkeiten zu betrachten.
        </p>
        <p>
          Häufig wird Parkour mit Freerunning verwechselt. Salti sind eher im
          Freerunning oder Tricking zu finden, da sie nicht der effizienten
          Hindernisüberwindung dienen.
        </p>
      </article>
      <aside>
        <ElementH3>Kurzfassung</ElementH3>
        <p>
          Effizientes, schnelles und sicheres Überwinden von Hindernissen von
          Punkt A nach Punkt B mit dem eigenen Körper und Fähigkeiten.
        </p>
      </aside>
    </section>
    <section class="space-y-6">
      <ElementH2 id="faq">Häufige Fragen (FAQ)</ElementH2>
      <TemplateFaq :faqItems="parkourFaq" />
    </section>

    <TemplateNavList id="weitere-sportarten" />
  </div>
</template>

<script setup lang="ts">
const { parkourFaq } = useAppConfig()

useSeoMeta({
  title: 'Parkour',
  description:
    'Parkour, der schnellste und effizienteste Weg von Punkt A nach Punkt B. Informationen: Definition, Ziele und FAQ.',
  ogTitle: 'Parkour | Team Escalate',
  ogDescription:
    'Parkour, der schnellste und effizienteste Weg von Punkt A nach Punkt B. Informationen: Definition, Ziele und FAQ.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/training/parkour',
})

definePageMeta({
  layout: 'default',
  name: 'Parkour',
  teaser: 'Effiziente Hindernisüberwindung',
})
</script>
