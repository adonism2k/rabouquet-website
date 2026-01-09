<template>
  <div>
    <Header />

    <Section background="gradient" padding="xl">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-serif font-bold text-gray-900 mb-4">Tentang Rabouquet</h1>
        <p class="text-gray-600 text-lg">Menghadirkan kebahagiaan melalui buket berkualitas</p>
      </div>
    </Section>

    <Section background="white" padding="xl">
      <div class="max-w-4xl mx-auto">
        <div class="prose prose-lg mx-auto">
          <h2 class="text-3xl font-serif font-bold text-gray-900 mb-6">Cerita Kami</h2>
          <p class="text-gray-600 mb-6">
            Rabouquet adalah usaha buket yang berlokasi di Bogor, didirikan dengan misi untuk menghadirkan
            momen istimewa melalui rangkaian buket yang indah dan berkualitas. Kami menyediakan berbagai
            pilihan buket untuk berbagai keperluan dan momen spesial Anda.
          </p>

          <h2 class="text-3xl font-serif font-bold text-gray-900 mb-6 mt-12">Produk Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-pink-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">🌸 Buket Bunga</h3>
              <p class="text-gray-600">Bunga asli dan artificial dengan rangkaian indah untuk berbagai acara</p>
            </div>
            <div class="bg-pink-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">🍫 Buket Snack</h3>
              <p class="text-gray-600">Kombinasi unik bunga dan snack favorit untuk hadiah spesial</p>
            </div>
            <div class="bg-pink-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">🧸 Buket Boneka</h3>
              <p class="text-gray-600">Rangkaian boneka lucu yang cocok untuk segala usia</p>
            </div>
            <div class="bg-pink-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">💐 Backdrop Nikahan</h3>
              <p class="text-gray-600">Dekorasi backdrop cantik untuk momen pernikahan Anda</p>
            </div>
          </div>

          <h2 class="text-3xl font-serif font-bold text-gray-900 mb-6 mt-12">Komitmen Kami</h2>
          <ul class="space-y-4 text-gray-600">
            <li class="flex items-start">
              <span class="text-2xl mr-3">✨</span>
              <span><strong>Kualitas Terjamin:</strong> Kami menggunakan bahan berkualitas premium untuk setiap produk</span>
            </li>
            <li class="flex items-start">
              <span class="text-2xl mr-3">🎨</span>
              <span><strong>Desain Custom:</strong> Sesuaikan buket dengan keinginan dan tema acara Anda</span>
            </li>
            <li class="flex items-start">
              <span class="text-2xl mr-3">⚡</span>
              <span><strong>Layanan Cepat:</strong> Respon cepat melalui WhatsApp untuk kemudahan berkomunikasi</span>
            </li>
            <li class="flex items-start">
              <span class="text-2xl mr-3">📦</span>
              <span><strong>Pengiriman Aman:</strong> Produk dikemas dengan rapi dan dijamin sampai dengan selamat</span>
            </li>
          </ul>
        </div>

        <div class="text-center mt-12">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
          >
            Hubungi Kami →
          </Button>
        </div>
      </div>
    </Section>

    <Footer />
    <WhatsAppButton variant="floating" />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Section from '@/components/Section.vue'
import Button from '@/components/Button.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'
</script>
