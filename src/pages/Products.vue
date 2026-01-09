<template>
  <div>
    <Header />

    <Section background="gradient" padding="xl">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-serif font-bold text-gray-900 mb-4">Katalog Produk</h1>
        <p class="text-gray-600 text-lg">8 kategori buket untuk berbagai momen spesial</p>
      </div>

      <CategoryFilter
        :categories="allCategories"
        :activeCategory="activeCategory"
        @filter="handleFilter"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <p class="text-gray-600 text-lg">Tidak ada produk ditemukan.</p>
      </div>
    </Section>

    <Footer />
    <WhatsAppButton variant="floating" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Section from '@/components/Section.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import ProductCard from '@/components/ProductCard.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'
import { products, categories, getProductsByCategory } from '@/lib/products.js'

const activeCategory = ref('all')

const allCategories = [
  { id: 'all', name: 'Semua', icon: '🌟' },
  ...categories
]

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') {
    return products
  }
  return getProductsByCategory(activeCategory.value)
})

const handleFilter = (categoryId) => {
  activeCategory.value = categoryId
}
</script>
