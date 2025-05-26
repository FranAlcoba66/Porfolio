<template>
  <section id="projects" class="section-container">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 flex items-center">
        <span class="text-teal-400 mr-2">05.</span>
        <span class="heading-gradient">{{ $t("projects.title") }}</span>
      </h2>

      <div class="grid gap-8 md:gap-12">
        <div
          v-for="(project, index) in localizedProjects"
          :key="project.title"
          class="relative bg-slate-800/30 rounded-lg overflow-hidden group"
        >
          <div class="md:grid md:grid-cols-12 items-center">
            <!-- Project Image -->
            <div class="md:col-span-7 relative aspect-video">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover opacity-20 group-hover:opacity-50 transition-opacity duration-300"
              />
              <div class="absolute inset-0 bg-teal-400/10"></div>
            </div>

            <!-- Project Info -->
            <div class="md:col-span-5 p-6 md:p-8">
              <p class="text-teal-400 text-sm mb-2">
                {{ $t("projects.featuredProject") }}
              </p>
              <h3 class="text-2xl font-bold text-slate-200 mb-4">
                {{ project.title }}
              </h3>
              <div class="bg-slate-900/90 p-6 rounded-lg mb-4">
                <p class="text-slate-400">{{ project.description }}</p>
              </div>
              <ul class="flex flex-wrap gap-2 mb-4">
                <li
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-teal-400 text-sm"
                >
                  {{ tech }}
                </li>
              </ul>
              <div class="flex gap-4">
                <a
                  :href="project.github"
                  target="_blank"
                  class="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  class="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import portfolio from "../assets/portfolio.png";
import exchange from "../assets/exchange.png";

export default {
  name: "Projects",
  setup() {
    const { t } = useI18n();

    const projects = [
      {
        id: "portfolio",
        image: portfolio,
        technologies: [
          "Vue.js 3",
          "Vue Router",
          "Vue I18n",
          "Tailwind CSS",
          "PostCSS",
        ],
        github: "https://github.com/FranAlcoba66/Porfolio",
        demo: "https://porfolio-two-pearl.vercel.app/",
      },
      {
        id: "exchange",
        image: exchange,
        technologies: ["Vue.js", "Html", "Vuex", "Tailwind CSS"],
        github: "https://github.com/FranAlcoba66/platzi-exchange-coincap",
        demo: "https://platzi-exchange-coincap.vercel.app",
      },
    ];

    const localizedProjects = projects.map((project) => ({
      ...project,
      title: t(`projects.${project.id}.title`),
      description: t(`projects.${project.id}.description`),
    }));

    return {
      localizedProjects,
    };
  },
};
</script>
