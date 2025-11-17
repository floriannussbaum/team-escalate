<template>
  <div class="page-simple-container space-y-24">
    <section class="space-y-6">
      <ElementH2 id="tricking">Was ist Tricking?</ElementH2>
      <article class="space-y-2">
        <p>
          Im Gegensatz zu Parkour oder Freerunning werden beim Tricking keine
          Hindernisse überwunden.
        </p>
        <p>
          Das Ziel ist die Kombination von spektakulären und ästhetisch
          ansprechenden Tricks, Kicks, Twists und Flips auf einer ebenen Fläche.
        </p>
        <p>
          Tricking ist ein Mix aus verschiedenen Sportarten. Zum Beispiel werden
          Dreh- und Sprungkicks aus dem Taekwondo mit akrobatischen
          Turnelementen aus dem Bodenturnen und Freestyle Elemente wie den
          Butterfly Twist aus dem Kung Fu, dem Double Leg aus dem Capoeira mit
          Elementen aus dem Break Dance verbunden.
        </p>
        <p>
          Die wohl einzige Regel im Tricking ist, seine Combo nicht mit der
          Berührung der Hände am Boden zu beenden.
        </p>
        <p>
          Tricking ist eine sehr kreative Sportart, die viel Raum für die eigene
          Entwicklung lässt. Jeder Tricker entwickelt seinen eigenen Stil und
          seine eigenen Kombinationen.
        </p>
      </article>
      <aside>
        <ElementH3>Kurzfassung</ElementH3>
        <p>
          Tricking ist die kreative Kombination aus Kampfsport, Bodenturnen und
          Freestyle auf einer ebenen Fläche.
        </p>
      </aside>
    </section>

    <section class="space-y-6">
      <ElementH2 id="faq">Häufige Fragen (FAQ)</ElementH2>
      <TemplateFaq :faqItems="trickingFaq" />
    </section>

    <TemplateNavList id="weitere-sportarten" />
  </div>
</template>

<script setup lang="ts">
const { trickingFaq } = useAppConfig()

useSeoMeta({
  title: 'Tricking',
  description:
    'Tricking, die kreative Kombination aus Kampfsport, Bodenturnen und Freestyle. Informationen: Definition, Ziele und FAQ.',
  ogTitle: 'Tricking | Team Escalate',
  ogDescription:
    'Tricking, die kreative Kombination aus Kampfsport, Bodenturnen und Freestyle. Informationen: Definition, Ziele und FAQ.',
  ogType: 'website',
  ogUrl: useRuntimeConfig().public.siteUrl + '/training/tricking',
})

definePageMeta({
  layout: 'default',
  name: 'Tricking',
  teaser: 'Akrobatik, Kicks und Flips',
})
</script>
