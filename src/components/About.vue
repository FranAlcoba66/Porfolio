<template>
  <section id="about" class="section-container">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 flex items-center">
        <span class="text-teal-400 mr-2">01.</span>
        <span class="heading-gradient">{{ $t('about.title') }}</span>
      </h2>

      <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 text-slate-400">
          <p class="mb-4">{{ $t('about.description1') }}</p>
          <p class="mb-4">{{ $t('about.description2') }}</p>
          <p class="mb-8">{{ $t('about.recentTech') }}</p>

          <ul class="grid grid-cols-2 gap-2 text-sm">
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>PHP
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>Laravel
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>JavaScript
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>Vue.js
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>MySQL
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>Python
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>Django
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>HTML
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>CSS
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-2">▹</span>Tailwind CSS
            </li>
          </ul>
        </div>

        <div class="relative group">
          <div class="relative z-10">
            <img src="@/assets/profile.png" :alt="$t('about.profileAlt')"
              class="rounded grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <div
            class="absolute inset-0 border-2 border-teal-400 rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>