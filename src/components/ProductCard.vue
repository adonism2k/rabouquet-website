<template>
  <div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div class="relative overflow-hidden h-64">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div class="absolute top-4 right-4">
        <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {{ product.category }}
        </span>
      </div>
      <div v-if="product.featured" class="absolute top-4 left-4">
        <span class="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          ⭐ Featured
        </span>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-xl font-serif font-bold text-gray-900 mb-2">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>

      <div class="flex items-center justify-between mb-4">
        <span class="text-pink-600 font-bold text-lg">{{ product.priceRange }}</span>
      </div>

      <Button
        variant="whatsapp"
        size="sm"
        :href="`https://wa.me/6285157572725?text=Halo Rabouquet! Saya tertarik dengan ${product.name}. Bisa info lebih lanjut?`"
        class="w-full"
      >
        💬 Pesan via WhatsApp
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
