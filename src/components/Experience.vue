<template>
    <section id="experience" class="section-container">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-12 flex items-center">
                <span class="text-teal-400 mr-2">03.</span>
                <span class="heading-gradient">{{ $t('experience.title') }}</span>
            </h2>

            <div class="flex flex-col md:flex-row gap-4">
                <!-- Tab buttons -->
                <div class="flex md:flex-col border-b md:border-b-0 md:border-l border-slate-700">
                    <button v-for="job in jobs" :key="job.id" @click="activeTab = job.id" :class="[
                        'px-4 py-3 text-sm font-medium text-left transition-all duration-300',
                        activeTab === job.id
                            ? 'text-teal-400 bg-slate-800/50 border-teal-400 md:border-l-2 border-b-2 md:border-b-0'
                            : 'text-slate-400 hover:text-teal-400 hover:bg-slate-800/25'
                    ]">
                        {{ $t(`experience.jobs.${job.id}.company`) }}
                    </button>
                </div>

                <!-- Tab content -->
                <div class="py-2 px-4">
                    <template v-for="job in jobs" :key="job.id">
                        <div v-show="activeTab === job.id">
                            <h3 class="text-xl font-medium text-slate-200">
                                {{ $t(`experience.jobs.${job.id}.title`) }}
                                <span class="text-teal-400">@ {{ $t(`experience.jobs.${job.id}.company`) }}</span>
                            </h3>
                            <p class="text-sm text-slate-300 mb-2">
                                <span class="text-teal-400">📍</span>
                                {{ $t(`experience.jobs.${job.id}.location`) }}
                            </p>
                            <p class="text-sm text-slate-400 mb-4">{{ $t(`experience.jobs.${job.id}.date`) }}</p>
                            <ul class="space-y-4">
                                <li v-for="index in getNumberOfPoints(job.id)" :key="index"
                                    class="flex gap-2 text-slate-400">
                                    <span class="text-teal-400 flex-shrink-0">▹</span>
                                    {{ $t(`experience.jobs.${job.id}.point${index}`) }}
                                </li>
                            </ul>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
    name: 'Experience',
    setup() {
        const { t } = useI18n()
        const activeTab = ref('innexus')
        const jobs = [
            { id: 'innexus' },
            { id: 'picallex' }
        ]

        const getNumberOfPoints = (jobId) => {
            let count = 1;
            while (t(`experience.jobs.${jobId}.point${count}`) !== `experience.jobs.${jobId}.point${count}`) {
                count++;
            }
            return count - 1;
        }

        return {
            activeTab,
            jobs,
            getNumberOfPoints
        }
    }
}
</script>