<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    :class="buttonClasses"
  >
    <span v-if="variant === 'floating'" class="text-2xl">💬</span>
    <span v-else class="flex items-center gap-2">
      <span class="text-xl">💬</span>
      <slot>Chat WhatsApp</slot>
    </span>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'floating',
    validator: (value) => ['floating', 'inline', 'cta'].includes(value)
  },
  message: {
    type: String,
    default: 'Halo Rabouquet! Saya tertarik dengan produk Anda. Bisa info lebih lanjut?'
  },
  phone: {
    type: String,
    default: '6285157572725'
  }
})

const whatsappUrl = computed(() => {
  return `https://wa.me/${props.phone}?text=${encodeURIComponent(props.message)}`
})

const buttonClasses = computed(() => {
  const base = 'bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50'

  const variants = {
    floating: 'fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center animate-bounce hover:animate-none',
    inline: 'inline-flex items-center justify-center px-4 py-2 rounded-lg',
    cta: 'inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg'
  }

  return `${base} ${variants[props.variant]}`
})
</script>
