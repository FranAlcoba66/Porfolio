<template>
  <section id="education" class="section-container">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 flex items-center">
        <span class="text-teal-400 mr-2">04.</span>
        <span class="heading-gradient"> {{ $t('education.title') }}</span>
      </h2>

      <div class="grid gap-6">
        <div v-for="courseId in courseIds" 
             :key="courseId"
             class="p-6 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
        >
          <h3 class="text-xl font-medium text-slate-200 mb-2">
            {{ $t(`education.courses.${courseId}.title`) }}
          </h3>
          <p class="text-sm text-teal-400 mb-2">{{ $t(`education.courses.${courseId}.institution`) }}</p>
          <p class="text-sm text-slate-400">{{ $t(`education.courses.${courseId}.date`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Education',
  setup() {
    const courseIds = ['python', 'programar', 'yoprogramo', 'ispc', 'oracle'];
    
    return {
      courseIds
    }
  }

}
</script>