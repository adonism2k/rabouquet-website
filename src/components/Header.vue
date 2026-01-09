<template>
  <header class="sticky top-0 z-50 bg-gradient-to-r from-pink-50 via-pink-100 to-rose-100 backdrop-blur-sm shadow-md">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <img src="/logo.png" alt="Rabouquet.in" class="h-12 w-auto" />
          <div>
            <h1 class="text-2xl font-serif font-bold text-gradient-pink">RABOUQUET.IN</h1>
            <p class="text-xs text-gray-600">Bouquet Shop</p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-pink-600 font-semibold transition-colors relative group"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all"></span>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-pink-200 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 space-y-2 bg-gradient-to-b from-pink-50 to-rose-50 rounded-b-lg">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="block px-4 py-2 text-gray-700 hover:bg-pink-200 hover:text-pink-700 rounded-lg mx-2"
          @click="mobileMenuOpen = false"
        >
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Produk', path: '/products' },
  { name: 'Tentang', path: '/about' },
  { name: 'Kontak', path: '/contact' }
]
</script>
