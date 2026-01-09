<template>
  <section :class="sectionClasses">
    <div :class="containerClasses">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'pink', 'gradient', 'rose'].includes(value)
  },
  padding: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  }
})

const sectionClasses = computed(() => {
  const backgrounds = {
    white: 'bg-white',
    pink: 'bg-pink-50',
    gradient: 'bg-gradient-to-br from-pink-50 via-white to-rose-50',
    rose: 'bg-rose-50'
  }

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  }

  return `${backgrounds[props.background]} ${paddings[props.padding]}`
})

const containerClasses = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
</script>
