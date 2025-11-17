<template>
  <header>
    <div
      class="relative z-900 flex h-114 items-center justify-center bg-black sm:h-214"
    >
      <video
        class="h-full w-full object-cover"
        preload="none"
        playsinline
        muted
        loop
        autoplay
        poster="~/assets/images/parkour-training-cat-leap.jpg"
      >
        Ihr Browser unterstützt das Video-Tag leider nicht. Das Video zeigt
        Parkour und Freerunning Athleten in Aktion in Halle (Saale) im
        Header-Bereich.
        <source
          src="~/assets/video/team-escalate-impression.mp4"
          type="video/mp4"
        />
      </video>
      <strong
        class="absolute overflow-hidden bg-white p-4 text-[12vw] font-bold text-black mix-blend-overlay sm:px-10 sm:py-6 sm:text-[10vw] xl:text-[8rem]"
        aria-label="Firmenname"
      >
        Team Escalate
      </strong>
    </div>

    <slot />
  </header>
</template>
