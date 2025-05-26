<template>
  <section id="hero" class="min-h-screen flex items-center section-container">
    <div class="max-w-3xl">
      <h4 class="text-teal-400 mb-4 animate-fadeIn">{{ $t('hero.greeting') }}</h4>
      <h1 class="text-5xl sm:text-7xl font-bold mb-2 heading-gradient animate-typing">
        Francisco Alcoba
      </h1>
      <h2 class="text-4xl sm:text-6xl font-bold text-slate-400 mb-6 animate-slideIn">
        {{ $t('hero.role') }}
      </h2>
      <p class="text-lg text-slate-400 mb-8 max-w-xl animate-fadeInSlow">
        {{ $t('hero.description') }}
      </p>
      <a href="#work" class="px-6 py-3 bg-transparent border-2 border-teal-400 text-teal-400
               rounded hover:bg-teal-400/10 transition-all duration-300 animate-bounce-subtle">
        {{ $t('hero.cta') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.animate-fadeIn {
  opacity: 0;
  animation: fadeIn 0.8s ease-in forwards;
  animation-delay: 0.2s;
}

.animate-typing {
  opacity: 0;
  animation: typing 1s ease-in forwards;
  animation-delay: 0.8s;
}

.animate-slideIn {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.8s ease-out forwards;
  animation-delay: 1.4s;
}

.animate-fadeInSlow {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 2s;
}

.animate-bounce-subtle {
  animation: bounce 2s infinite;
  animation-delay: 2.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes typing {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}
</style>