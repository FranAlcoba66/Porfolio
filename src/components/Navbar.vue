<template>
  <nav
    class="fixed top-0 right-0 p-6 text-sm bg-slate-900/75 backdrop-blur-sm w-full z-50"
  >
    <!-- Desktop Menu (above 715px) -->
    <div class="hidden md:flex items-center gap-6 justify-end">
      <a
        v-for="(item, index) in menuItems"
        :key="item.href"
        :href="item.href"
        class="text-teal-400 hover:text-teal-400/80 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block"
      >
        <span class="text-teal-400">0{{ index + 1 }}.</span>
        {{ $t(`navbar.${item.name}`) }}
      </a>
      <a
        :href="$t('navbar.resumePath')"
        target="_blank"
        class="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 font-medium"
      >
        {{ $t("navbar.resume") }}
      </a>
      <button
        @click="toggleLanguage"
        class="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 font-medium"
      >
        {{ currentLocale === "es" ? "EN" : "ES" }}
      </button>
    </div>

    <!-- Mobile Navigation (below 715px) -->
    <div class="md:hidden">
      <!-- Language toggle button at top -->
      <div class="flex justify-end gap-4 mb-4">
        <a
          :href="$t('navbar.resumePath')"
          target="_blank"
          class="border border-teal-400 px-3 py-1 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 text-sm"
        >
          {{ $t("navbar.resume") }}
        </a>
        <button
          @click="toggleLanguage"
          class="border border-teal-400 px-3 py-1 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 text-sm"
        >
          {{ currentLocale === "es" ? "EN" : "ES" }}
        </button>
      </div>

      <!-- Navigation controls -->
      <div class="flex items-center justify-between">
        <button
          @click="prevSection"
          class="nav-arrow-btn"
          :disabled="currentIndex === 0"
        >
          ←
        </button>

        <div class="text-center">
          <span class="text-teal-400 font-medium">
            {{ currentIndex + 1 }}/{{ menuItems.length }}
          </span>
          <p class="text-teal-400">
            {{ $t(`navbar.${menuItems[currentIndex].name}`) }}
          </p>
        </div>

        <button
          @click="nextSection"
          class="nav-arrow-btn"
          :disabled="currentIndex === menuItems.length - 1"
        >
          →
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

export default {
  setup() {
    const { locale } = useI18n();
    const currentIndex = ref(0);

    const menuItems = [
      { name: "home", href: "#hero" },

      { name: "about", href: "#about" },
      { name: "experience", href: "#experience" },
      { name: "skills", href: "#skills" },
      { name: "education", href: "#education" },
      { name: "projects", href: "#projects" },
      { name: "contact", href: "#contact" },
    ];

    const toggleLanguage = () => {
      locale.value = locale.value === "es" ? "en" : "es";
    };

    const nextSection = () => {
      if (currentIndex.value < menuItems.length - 1) {
        currentIndex.value++;
        document
          .querySelector(menuItems[currentIndex.value].href)
          .scrollIntoView({
            behavior: "smooth",
          });
      }
    };

    const prevSection = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
        document
          .querySelector(menuItems[currentIndex.value].href)
          .scrollIntoView({
            behavior: "smooth",
          });
      }
    };

    return {
      currentLocale: locale,
      toggleLanguage,
      menuItems,
      currentIndex,
      nextSection,
      prevSection,
    };
  },
};
</script>

<style scoped>
.nav-arrow-btn {
  /* @apply text-teal-400;
    @apply text-2xl;
    @apply font-bold;
    @apply px-4;
    @apply py-2;
    @apply hover:bg-teal-400/10;
    @apply rounded;
    @apply transition-colors;
    @apply duration-300;
    @apply disabled:opacity-50;
    @apply disabled:cursor-not-allowed; */
}
</style>
