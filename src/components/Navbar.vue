<template>
    <nav
        class="fixed top-0 right-0 p-6 text-sm flex items-center gap-6 bg-slate-900/75 backdrop-blur-sm w-full justify-end z-50">
        <a href="#about"
            class="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">
            <span class="text-teal-400">01.</span> {{ $t('navbar.about') }}
        </a>
        <a href="#experience"
            class="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">
            <span class="text-teal-400">02.</span> {{ $t('navbar.experience') }}
        </a>
        <a href="#skills"
            class="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">
            <span class="text-teal-400">03.</span> {{ $t('navbar.skills') }}
        </a>
        <a href="#education"
            class="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">
            <span class="text-teal-400">04.</span> {{ $t('navbar.education') }}
        </a>
        <a href="#projects"
            class="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">
            <span class="text-teal-400">05.</span> {{ $t('navbar.projects') }}
        </a>
        <a href="#contact"
            class="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">
            <span class="text-teal-400">06.</span> {{ $t('navbar.contact') }}
        </a>
        <a href="/resume.pdf" target="_blank"
            class="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 font-medium">
            Resume
        </a>
        <button @click="toggleLanguage" 
            class="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 font-medium">
            {{ currentLocale === 'es' ? 'EN' : 'ES' }}
        </button>
    </nav>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
    setup() {
        const { locale } = useI18n()
        
        const toggleLanguage = () => {
            locale.value = locale.value === 'es' ? 'en' : 'es'
        }

        return {
            currentLocale: locale,
            toggleLanguage
        }
    }
}
</script>