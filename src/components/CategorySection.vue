<template>
  <div class="mb-16">
    <!-- Category Header -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-3">
        <span class="text-4xl">{{ category.icon }}</span>
        <div>
          <h2 class="text-3xl font-serif font-bold text-gray-900">{{ category.name }}</h2>
          <p class="text-gray-600 mt-1">{{ category.description }}</p>
        </div>
      </div>
      <Button
        :href="`/products?category=${category.id}`"
        variant="outline"
        size="md"
      >
        Lihat Semua →
      </Button>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in displayProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Button from './Button.vue'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  products: {
    type: Array,
    required: true
  },
  limit: {
    type: Number,
    default: 4
  }
})

// Get products for this category, limit to featured or first N products
const displayProducts = computed(() => {
  const categoryProducts = props.products.filter(p => p.category === props.category.id)

  // Try to get featured products first
  const featured = categoryProducts.filter(p => p.featured)

  if (featured.length >= props.limit) {
    return featured.slice(0, props.limit)
  }

  // If not enough featured, just take first N products
  return categoryProducts.slice(0, props.limit)
})
</script>
