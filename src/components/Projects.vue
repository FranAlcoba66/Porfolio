<template>
  <section id="projects" class="section-container">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-16 flex items-center justify-center">
        <span class="text-teal-400 mr-2">06.</span>
        <span class="heading-gradient">{{ $t("projects.title") }}</span>
      </h2>

      <ProjectsCarousel :projects="localizedProjects" />
    </div>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import ProjectsCarousel from "./ProjectsCarousel.vue";
import portfolio from "../assets/portfolio.png";
import exchange from "../assets/exchange.png";
import coffeShop from "../assets/coffeeShop.png";
import municipalDecrees from "../assets/municipalDecrees.png";
import emailChanneling from "../assets/emailChanneling.png";

export default {
  name: "Projects",
  components: {
    ProjectsCarousel,
  },
  setup() {
    const { t } = useI18n();

    const projects = [
      {
        id: "emailChanneling",
        image: emailChanneling,
        technologies: [
          "Python 3.10+",
          "FastAPI",
          "PostgreSQL",
          "Redis",
          "OpenAI API",
          "Gmail API",
          "Slack SDK",
          "Docker",
          "SQLAlchemy",
          "Alembic",
          "JWT",
          "Google Cloud Pub/Sub",
        ],
        github: "https://github.com/FranAlcoba66/email-channeling",
        demo: "#",
      },
      {
        id: "municipalDecrees",
        image: municipalDecrees,
        technologies: [
          "Laravel 11",
          "Vue 3",
          "Quasar Framework",
          "PHP",
          "JWT",
          "MySQL",
          "PostgreSQL",
          "Docker",
          "Nginx",
          "AWS (ECR, EC2, RDS, S3)",
          "PHPUnit",
        ],
        github: "https://github.com/FranAlcoba66/municipal-decrees",
        demo: "#",
      },
      {
        id: "coffeeShop",
        image: coffeShop,
        technologies: [
          "Python",
          "Django",
          "djangorestframework",
          "HTML",
          "Tailwind CSS",
          "Django Templates",
          "SQLite",
          "MySQL ",
          "PythonAnywhere ",
          "Python Decouple",
          "Crispy Forms",
        ],
        github: "https://github.com/FranAlcoba66/CoffeShop",
        demo: "https://franzalcoba.pythonanywhere.com/",
      },
      {
        id: "exchange",
        image: exchange,
        technologies: ["Vue.js", "Html", "Vuex", "Tailwind CSS"],
        github: "https://github.com/FranAlcoba66/platzi-exchange-coincap",
        demo: "https://platzi-exchange-coincap.vercel.app",
      },
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
    ];

    const localizedProjects = computed(() =>
      projects.map((project) => ({
        ...project,
        title: t(`projects.${project.id}.title`),
        description: t(`projects.${project.id}.description`),
      }))
    );

    return { localizedProjects };
  },
};
</script>
