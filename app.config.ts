export default defineAppConfig({
  menuItems: [
    { title: 'Training', link: '/training' },
    { title: 'Das Team', link: '/team' },
    { title: 'Leistungen', link: '/leistungen' },
    { title: 'Kontakt', link: '/kontakt' },
  ],

  subMenuItems: [
    { title: 'Jahnturnhalle', link: '/training?pos=' },
    { title: 'Offspace', link: '/training?pos=' },
    { title: 'Outdoortraining', link: '/training?pos=' },
  ],

  sports: [
    {
      title: 'Parkour',
      link: '/training/parkour',
      description: ' – Effiziente Hindernisüberwindung',
    },
    {
      title: 'Freerunning',
      link: '/training/freerunning',
      description: ' – Kreative Bewegungen mit Flips & Tricks',
    },
    {
      title: 'Tricking',
      link: '/training/tricking',
      description: ' – Akrobatische Kicks und Flips',
    },
  ],

  training: [
    {
      type: 'Hallentraining',
      location: 'Jahnturnhalle',
      days: [
        {
          day: 'Montag',
          time: '20:00 – 21:30 Uhr',
          description: 'freies Training',
        },
        {
          day: 'Mittwoch',
          time: '20:00 – 21:30 Uhr',
          description: 'freies Training',
        },
        {
          day: 'Freitag',
          time: '20:00 – 22:00 Uhr',
          times: ['20:00 – 21:00 Uhr', '21:00 – 22:00 Uhr'],
          descriptions: ['Grundlagentraining', 'freies Training'],
        },
      ],
    },
    {
      type: 'Parkourhalle',
      location: 'Offspace',
      days: [
        {
          day: 'Dienstag',
          time: '18:00 Uhr',
          description: 'freies Training',
        },
      ],
    },
    {
      type: 'Outdoortraining',
      location: 'Stadt Halle (Saale)',
      days: [
        {
          day: 'Mittwoch',
          time: '17:00 Uhr',
          description: 'freies Training',
        },
      ],
    },
  ],

  parkourFaq: [
    {
      question: 'Was genau macht man beim Parkour?',
      answer:
        'Beim Parkour werden Hindernisse effizient und sicher überwunden. Bewegungsabläufe müssen oft wiederholt werden, damit sie flüssig sitzen. Dabei sind der Kreativität sowohl technisch als auch örtlich keine Grenzen gesetzt. Beachten sollte man nur, dass Tricks wie Salti oder Schrauben eher dem ‚Freerunning‘ oder ‚Tricking‘ vorbehalten sind.',
    },
    {
      question:
        'Ist Parkour schwer zu erlernen & Wie schnell machen Anfänger Fortschritte?',
      answer:
        'Die Basics sind sowohl koordinativ als auch technisch anfangs etwas schwierig zu verstehen, nach einiger Zeit geht es aber gut voran. Mit der notwendigen Motivation und Spaß an der Sache macht man schnell Fortschritte.',
    },
    {
      question: 'Muss man körperlich sehr fit sein, um mit Parkour anzufangen?',
      answer:
        'Eigentlich nicht, da körperliche Fitness mit der Technik zusammen ansteigen sollten. Das heißt, dass man erst einmal nur das macht, wozu man körperlich in der Lage ist. Durch das Training selbst wird man dann fit für weitere Techniken.',
    },
    {
      question: 'Was ist ein gutes Alter um mit Parkour anzufangen?',
      answer:
        'Hierbei gibt es an sich keine Grenze, sowohl nach unten als auch nach oben, solange man sicher und schrittweise an die Sache heran geht.',
    },
    {
      question: 'Ist Parkour eine gefährliche Sportart?',
      answer:
        'Wie bei jeder Sportart gibt es Risiken. Man muss sich selbst sehr gut einschätzen können, aber auch oft seine Ängste überwinden. Bewegungsabläufe sollten wiederholt und perfektioniert werden, bevor man den nächsten Schritt geht. Parkour ist weniger gefährlich als ein Fußballspiel, wenn man sich langsam ran tastet, da man nur auf sich gestellt ist.',
    },
    {
      question: 'Welche Ausrüstung benötige ich?',
      answer:
        'Eigentlich braucht man nur Schuhe mit gutem Grip, wobei das nicht die teuersten sein müssen. Was Kleidung anbetrifft, sollte jeder das tragen worin er oder sie sich wohlfühlt, nur behindern sollte sie Dich nicht.',
    },
    {
      question: 'Wie kann man mit Parkour anfangen?',
      answer:
        'Ein paar Basics wie Handstand, Rad etc. kann man sich z.B. über YouTube oder im Sportunterricht selbst beibringen. Wenn es dann zu den ersten spezielleren Techniken geht, empfiehlt es sich, mit einem Trainer oder in einer Gruppe mit erfahreneren Traceuren zu trainieren, weil es wichtig ist, mehrere Technikvarianten kennen zu lernen und auf die richtige Körperschonung zu achten.',
    },
    {
      question: 'Wo kann man Pakour machen?',
      answer:
        'Im Prinzip überall, Indoor oder Outdoor, in der Stadt oder auf dem Land. Erfahrene Traceure können sich alleine an einer Bordsteinkante stundenlang aufhalten. Sehr gut geeignet wäre aber ein Gelände, das mit etlichen Hindernissen am Stück ausgestattet ist.',
    },
  ],

  freerunningFaq: [
    {
      question: 'Was genau macht man beim Freerunning?',
      answer:
        'Freerunning ist eine kreative Bewegungsform, die aus dem Parkour entstanden ist. Im Gegensatz zu Parkour geht es beim Freerunning nicht nur um Effizienz, sondern auch um Ausdruck, Stil und Ästhetik – oft mit akrobatischen Elementen wie Flips, Spins und kreativen Kombinationen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Parkour und Freerunning?',
      answer:
        'Parkour konzentriert sich auf das effiziente Überwinden von Hindernissen, während Freerunning den künstlerischen Aspekt der Bewegung betont. Beim Freerunning geht es darum, Bewegungen frei zu gestalten und den eigenen Stil zu entwickeln – Hindernisse werden zur Bühne für Kreativität.',
    },
    {
      question: 'Braucht man akrobatische Vorerfahrung für Freerunning?',
      answer:
        'Nein, das ist nicht nötig. Grundlagen wie Balance, Sprungkraft und Körperkontrolle werden im Training aufgebaut. Akrobatische Tricks wie Salti oder Schrauben kann man schrittweise erlernen, meist mit Hilfestellung oder auf weichem Untergrund.',
    },
    {
      question: 'Ist Freerunning gefährlich?',
      answer:
        'Mit der richtigen Herangehensweise und Technik ist Freerunning sicher. Wichtig ist, die eigenen Grenzen zu kennen und neue Bewegungen langsam und kontrolliert zu lernen. Viele Verletzungen entstehen durch Übermut oder fehlendes Aufwärmen – also lieber mit Köpfchen trainieren.',
    },
    {
      question: 'Was trainiert man beim Freerunning?',
      answer:
        'Freerunning trainiert den gesamten Körper – Kraft, Beweglichkeit, Balance und Koordination. Ebenso wichtig ist die mentale Stärke: Mut, Konzentration und Kreativität spielen eine große Rolle, um Bewegungen sicher und flüssig umzusetzen.',
    },
    {
      question: 'Welche Ausrüstung oder Kleidung brauche ich?',
      answer:
        'Leichte, bequeme Kleidung und stabile Schuhe mit gutem Grip reichen völlig aus. Freerunner bevorzugen oft flexible Kleidung, die Bewegungsfreiheit lässt, und Schuhe, die guten Bodenkontakt ermöglichen.',
    },
    {
      question: 'Wo kann man Freerunning trainieren?',
      answer:
        'Überall – auf Spielplätzen, in Parks, auf Treppen, Mauern oder in speziellen Hallen. Indoor-Hallen eignen sich besonders gut für das sichere Erlernen neuer Tricks.',
    },
    {
      question: 'Wie unterscheidet sich Freerunning von Tricking?',
      answer:
        'Tricking findet meist auf einer ebenen Fläche statt und fokussiert sich auf akrobatische Kombinationen. Freerunning nutzt dagegen die Umgebung aktiv – Mauern, Geländer oder Treppen – um Tricks und Bewegungen kreativ einzubauen.',
    },
    {
      question: 'Wie kann man am besten mit Freerunning anfangen?',
      answer:
        'Am besten in einer Gruppe oder mit erfahrenen Freerunnern. Viele Grundlagen wie Balance, Landetechniken oder einfache Sprünge kann man selbst üben. Videos, Workshops oder Trainingseinheiten in Hallen sind ein guter Einstieg.',
    },
  ],

  trickingFaq: [
    {
      question: 'Was genau macht man beim Tricking?',
      answer:
        'Tricking ist eine kreative Sportart, die Elemente aus Kampfsport, Turnen, Breakdance und Akrobatik kombiniert. Ziel ist es, kraftvolle und ästhetische Bewegungen wie Kicks, Flips und Twists zu kombinieren und eigene Kombinationen – sogenannte Combos – zu entwickeln.',
    },
    {
      question: 'Was ist der Unterschied zwischen Tricking und Freerunning?',
      answer:
        'Während Freerunning oft Hindernisse in die Bewegung einbezieht, findet Tricking meist auf einer ebenen Fläche statt. Beim Tricking liegt der Fokus auf der Ausführung von akrobatischen Bewegungen und fließenden Kombinationen – ohne die Notwendigkeit, Hindernisse zu überwinden.',
    },
    {
      question: 'Braucht man Vorerfahrung im Turnen oder Kampfsport?',
      answer:
        'Vorerfahrung kann helfen, ist aber keine Voraussetzung. Viele starten ohne Turn- oder Kampfsport-Hintergrund. Kraft, Koordination und Technik werden Schritt für Schritt aufgebaut – wichtig ist vor allem Geduld und Freude an Bewegung.',
    },
    {
      question: 'Ist Tricking gefährlich?',
      answer:
        'Wie bei jeder akrobatischen Sportart besteht ein gewisses Risiko. Mit richtigem Aufwärmen, sauberen Grundlagen, kontrolliertem Training und genügend Pausen lässt sich das Verletzungsrisiko jedoch stark reduzieren.',
    },
    {
      question: 'Wie lange dauert es, bis man einen Flip oder Trick kann?',
      answer:
        'Das hängt stark von der Übungsfrequenz, Körpergefühl und der individuellen Lernkurve ab. Viele erlernen erste einfache Tricks nach wenigen Wochen, komplexere Kombinationen können jedoch Monate oder Jahre dauern – Übung und Wiederholung sind der Schlüssel.',
    },
    {
      question: 'Welche Ausrüstung oder Kleidung brauche ich?',
      answer:
        'Du brauchst keine spezielle Ausrüstung. Bequeme, flexible Sportkleidung und rutschfeste Schuhe sind ideal. Viele Tricker trainieren auch barfuß oder mit dünnen Sportschuhen, um ein besseres Bodengefühl zu haben.',
    },
    {
      question: 'Kann man Tricking überall trainieren?',
      answer:
        'Grundsätzlich ja. Tricking kann in der Halle, auf Rasenflächen oder sogar auf speziellen Matten trainiert werden. Für komplexere Tricks ist ein weicher Untergrund – z. B. eine Airtrack-Matte oder Turnboden – ideal.',
    },
    {
      question: 'Ist Tricking auch für Anfänger geeignet?',
      answer:
        'Ja, absolut! Tricking lebt von individueller Kreativität. Jeder kann auf seinem Level starten – ob mit einfachen Drehungen, Kicks oder Sprüngen – und sich nach und nach steigern. Die Community ist meist sehr unterstützend und hilft Neulingen beim Einstieg.',
    },
    {
      question: 'Wie verbessert man sich im Tricking am schnellsten?',
      answer:
        'Regelmäßiges Techniktraining, Videoanalyse, Kraft- und Beweglichkeitstraining sowie das Lernen von sauberen Grundlagen helfen enorm. Der Austausch mit erfahrenen Trickern oder gemeinsames Training in einer Gruppe beschleunigt den Fortschritt deutlich.',
    },
    {
      question: 'Gibt es Wettkämpfe im Tricking?',
      answer:
        'Ja, es gibt Tricking-Battles und Freestyle-Events, bei denen Trickster ihre Combos präsentieren. Dabei geht es weniger um feste Regeln, sondern um Kreativität, Technik, Flow und Ausdruck. Trotzdem steht der Spaß an der Bewegung immer im Vordergrund.',
    },
  ],
})
