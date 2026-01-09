<template>
  <div class="flex flex-wrap gap-3 justify-center mb-8">
    <button
      v-for="cat in categories"
      :key="cat.id"
      @click="$emit('filter', cat.id)"
      :class="buttonClasses(cat.id)"
    >
      {{ cat.icon }} {{ cat.name }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    default: 'all'
  }
})

defineEmits(['filter'])

const buttonClasses = (catId) => {
  const base = 'px-6 py-3 rounded-full font-semibold transition-all duration-200'
  const active = 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105 animate-pulse'
  const inactive = 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-gray-200 hover:border-pink-300'

  return `${base} ${props.activeCategory === catId ? active : inactive}`
}
</script>
