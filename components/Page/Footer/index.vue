<template>
  <footer class="py-4 text-[--secondary]">
    <div class="flex flex-col space-y-11 sm:flex-row">
      <!-- Logo / Name -->
      <div class="col-span-2">
        <NuxtLink
          to="/"
          class="link-underlined mb-4 inline-flex items-center space-x-2"
        >
          <PageLogo class="h-6 w-auto fill-[--secondary]" />
          <h2 class="link-text text-xl font-bold !text-[--secondary]">
            Team Escalate
          </h2>
        </NuxtLink>
        <p class="mx-8 text-sm">
          Parkour, Freerunning und Tricking in Halle (Saale)
        </p>

        <!-- Kurze Kontaktinfo -->
        <ul class="mt-8 space-y-1">
          <li>
            <a
              href="mailto:info@team-escalate.de"
              class="link-underlined inline-flex items-center space-x-2"
            >
              <EnvelopeIcon class="h-6 w-auto" />
              <span class="link-text !text-[--secondary]">
                info@team-escalate.de
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/TeamEscalate/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-underlined -ml-0.7 space-x-1.6 inline-flex items-center"
            >
              <PageLogoInstagram
                aria-label="Instagram Kanal des Team Escalate"
                class="pl-0.2 h-7 w-auto fill-[--secondary]"
              />
              <span class="link-text !text-[--secondary]">Instagram</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Navigation / Links -->
      <div class="flex sm:w-1/2 sm:justify-around">
        <div class="px-8">
          <h3 class="mb-4 text-lg font-semibold">Sitemap</h3>
          <ul class="flex flex-col space-y-2">
            <li>
              <NuxtLink to="/" class="link sr-only !text-[--secondary]">
                Startseite
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/training" class="link !text-[--secondary]">
                Training
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/team" class="link !text-[--secondary]">
                Das Team
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/leistungen" class="link !text-[--secondary]">
                Leistungen
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontakt" class="link !text-[--secondary]">
                Kontakt
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="flex w-full flex-col items-center px-8 sm:block sm:w-auto">
          <h3 class="mb-4 text-lg font-semibold">Rechtliches</h3>
          <ul class="flex flex-col space-y-2">
            <li>
              <NuxtLink to="/impressum" class="link !text-[--secondary]">
                Impressum
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/datenschutz" class="link !text-[--secondary]">
                Datenschutz
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-12 text-center text-xs opacity-70">
      Copyright © {{ new Date().getFullYear() }} Team Escalate | Alle Rechte
      vorbehalten.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>
