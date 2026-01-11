<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About -->
        <div>
          <h3 class="text-xl font-serif font-bold mb-4 text-gradient-pink">RABOUQUET.IN</h3>
          <p class="text-gray-400 mb-4">Toko buket bunga dan hadiah terpercaya di Bogor. Melayani berbagai kebutuhan hadiah untuk momen spesialmu.</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Link Cepat</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-pink-400">Beranda</router-link></li>
            <li><router-link to="/products" class="text-gray-400 hover:text-pink-400">Produk</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-pink-400">Tentang</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-pink-400">Kontak</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span>📍</span>
              <span>Kampung Pajeleran Gunung, Bogor, Indonesia 16913</span>
            </li>
            <li>
              <a href="https://wa.me/6285157572725" class="flex items-center gap-2 hover:text-pink-400">
                <span>💬</span>
                <span>+62 851-5757-2725</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rabouquet.in/" class="flex items-center gap-2 hover:text-pink-400">
                <span>📷</span>
                <span>@rabouquet.in</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 RABOUQUET.IN. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
