<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
    <!-- Animated blobs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="animate-fade-in-up">
        <span class="inline-block text-yellow-500 text-4xl mb-4 animate-sparkle">✨</span>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
          {{ title }}
        </h1>
        <p class="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            :href="ctaLink"
            variant="whatsapp"
            size="lg"
          >
            {{ ctaText }}
          </Button>
          <Button
            href="/products"
            variant="primary"
            size="lg"
          >
            Lihat Semua Produk →
          </Button>
        </div>
      </div>
    </div>

    <!-- Sparkles -->
    <div class="absolute top-20 left-20 text-yellow-400 text-2xl animate-sparkle">✨</div>
    <div class="absolute bottom-32 right-32 text-yellow-400 text-3xl animate-sparkle animation-delay-1000">✨</div>
    <div class="absolute top-1/2 right-20 text-yellow-400 text-xl animate-sparkle animation-delay-2000">✨</div>
  </section>
</template>

<script setup>
import Button from './Button.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  ctaText: {
    type: String,
    default: 'Pesan Sekarang'
  },
  ctaLink: {
    type: String,
    required: true
  }
})
</script>
