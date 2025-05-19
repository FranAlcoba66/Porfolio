<template>
    <section id="skills" class="section-container">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-12 flex items-center">
                <span class="text-teal-400 mr-2">03.</span>
                <span class="heading-gradient">{{ $t('skills.title') }}</span>
            </h2>

            <!-- Backend -->
            <div class="mb-12">
                <h3 class="text-xl text-teal-400 mb-6 flex items-center">
                    <span class="mr-2">▹</span>{{ $t('skills.backend') }}
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    <div v-for="skill in backendIcons" :key="skill.name"
                        class="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group">
                        <img :src="getSkillIcon(skill.icon)" :alt="skill.name"
                            class="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <span class="text-slate-300 text-sm font-medium text-center">{{ skill.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Frontend -->
            <div class="mb-12">
                <h3 class="text-xl text-teal-400 mb-6 flex items-center">
                    <span class="mr-2">▹</span>{{ $t('skills.frontend') }}
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    <div v-for="skill in frontendIcons" :key="skill.name"
                        class="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group">
                        <img :src="getSkillIcon(skill.icon)" :alt="skill.name"
                            class="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <span class="text-slate-300 text-sm font-medium text-center">{{ skill.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Databases -->
            <div class="mb-12">
                <h3 class="text-xl text-teal-400 mb-6 flex items-center">
                    <span class="mr-2">▹</span>{{ $t('skills.databases') }}
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    <div v-for="skill in databaseIcons" :key="skill.name"
                        class="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group">
                        <img :src="getSkillIcon(skill.icon)" :alt="skill.name"
                            class="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <span class="text-slate-300 text-sm font-medium text-center">{{ skill.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Tools -->
            <div>
                <h3 class="text-xl text-teal-400 mb-6 flex items-center">
                    <span class="mr-2">▹</span>{{ $t('skills.tools') }}
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    <div v-for="skill in toolIcons" :key="skill.name"
                        class="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group">
                        <img :src="getSkillIcon(skill.icon)" :alt="skill.name"
                            class="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <span class="text-slate-300 text-sm font-medium text-center">{{ skill.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import phpunitIcon from '../assets/phpunit.svg'
import agile from '../assets/agile.png'
import github from '../assets/github.png'

export default {
    name: 'Skills',
    setup() {
        const { t } = useI18n()

        const frontendIcons = [
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'Vue.js', icon: 'vuejs' },
            { name: 'HTML5', icon: 'html5' },
            { name: 'CSS3', icon: 'css3' },
            { name: 'jQuery', icon: 'jquery' }
        ]

        const backendIcons = [
            { name: 'PHP', icon: 'php' },
            { name: 'Laravel', icon: 'laravel' },
            { name: 'PHPUnit', icon: 'phpunit' },
            { name: 'Python', icon: 'python' },
            { name: 'Django', icon: 'django' }
        ]

        const databaseIcons = [
            { name: 'MySQL', icon: 'mysql' }
        ]

        const toolIcons = [
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Bitbucket', icon: 'bitbucket' },
            { name: 'Jira', icon: 'jira' },
            { name: 'Agile', icon: 'agile' }
        ]

        const getSkillIcon = (iconName) => {
            const iconMap = {
                'phpunit': phpunitIcon,
                'agile': agile,
                'github': github,
                'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'vuejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                'jquery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
                'html5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
                'laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
                'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
                'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                'bitbucket': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
                'jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
            }
            return iconMap[iconName] || ''
        }

        return {
            backendIcons,
            frontendIcons,
            databaseIcons,
            toolIcons,
            getSkillIcon
        }
    }
}
</script>