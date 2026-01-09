<template>
  <div>
    <Header />

    <Hero
      title="Hadirkan Momen Istimewa dengan Buket dari Rabouquet"
      subtitle="Buket Bunga Asli, Artificial, Snack, Boneka & Backdrop Nikahan di Bogor"
      ctaText="💬 Pesan via WhatsApp"
      ctaLink="https://wa.me/6285157572725?text=Halo Rabouquet! Saya ingin memesan buket."
    />

    <Section background="white" padding="xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif font-bold text-gray-900 mb-4">Produk Unggulan</h2>
        <p class="text-gray-600 text-lg">Pilihan terbaik untuk momen spesial Anda</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="text-center mt-12">
        <Button
          href="/products"
          variant="primary"
          size="lg"
        >
          Lihat Semua Produk →
        </Button>
      </div>
    </Section>

    <Section background="pink" padding="xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif font-bold text-gray-900 mb-4">Mengapa Pilih Rabouquet?</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-5xl mb-4">🌸</div>
          <h3 class="text-xl font-bold mb-2">Kualitas Premium</h3>
          <p class="text-gray-600">Bahan berkualitas tinggi untuk setiap produk</p>
        </div>
        <div class="text-center">
          <div class="text-5xl mb-4">🎨</div>
          <h3 class="text-xl font-bold mb-2">Desain Custom</h3>
          <p class="text-gray-600">Sesuaikan dengan keinginan Anda</p>
        </div>
        <div class="text-center">
          <div class="text-5xl mb-4">⚡</div>
          <h3 class="text-xl font-bold mb-2">Respon Cepat</h3>
          <p class="text-gray-600">Layanan cepat via WhatsApp</p>
        </div>
        <div class="text-center">
          <div class="text-5xl mb-4">📦</div>
          <h3 class="text-xl font-bold mb-2">Pengiriman Aman</h3>
          <p class="text-gray-600">Dijamin sampai dengan selamat</p>
        </div>
      </div>
    </Section>

    <Footer />
    <WhatsAppButton variant="floating" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'
import ProductCard from '@/components/ProductCard.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'
import { products } from '@/lib/products.js'

const featuredProducts = computed(() => products.filter(p => p.featured).slice(0, 4))
</script>
