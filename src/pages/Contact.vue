<template>
  <div>
    <Header />

    <Section background="gradient" padding="xl">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-serif font-bold text-gray-900 mb-4">Hubungi Kami</h1>
        <p class="text-gray-600 text-lg">Yuk, wujudkan buket impianmu bersama kami!</p>
      </div>
    </Section>

    <Section background="white" padding="xl">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-serif font-bold text-gray-900 mb-6">Informasi Kontak</h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="text-3xl mr-4">📱</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">WhatsApp</h3>
                  <a
                    :href="whatsappConfig.link"
                    class="text-pink-600 hover:text-pink-700 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ whatsappConfig.phoneDisplay }}
                  </a>
                  <p class="text-gray-600 text-sm mt-1">Klik untuk chat langsung</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-3xl mr-4">📍</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Lokasi</h3>
                  <p class="text-gray-600">Bogor, Jawa Barat</p>
                  <p class="text-gray-600 text-sm mt-1">Area pengiriman: Bogor & sekitarnya</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-3xl mr-4">⏰</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Jam Operasional</h3>
                  <p class="text-gray-600">Senin - Sabtu: 08.00 - 20.00 WIB</p>
                  <p class="text-gray-600">Minggu: 09.00 - 18.00 WIB</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <Button
                :href="whatsappConfig.link"
                variant="primary"
                size="lg"
                class="w-full"
              >
                💬 Chat via WhatsApp
              </Button>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-serif font-bold text-gray-900 mb-6">Pertanyaan Umum</h2>

            <div class="space-y-6">
              <div class="bg-pink-50 p-6 rounded-lg">
                <h3 class="text-lg font-bold mb-2">💐 Apakah bisa custom desain buket?</h3>
                <p class="text-gray-600">Tentu saja bisa! Ceritain aja maunya gimana, nanti kita diskusiin bareng via WhatsApp.</p>
              </div>

              <div class="bg-pink-50 p-6 rounded-lg">
                <h3 class="text-lg font-bold mb-2">🚚 Berapa lama waktu pembuatan?</h3>
                <p class="text-gray-600">Kalau ready stock, biasanya 1-2 hari aja. Untuk desain custom, butuh sekitar 2-3 hari kerja biar hasilnya maksimal.</p>
              </div>

              <div class="bg-pink-50 p-6 rounded-lg">
                <h3 class="text-lg font-bold mb-2">📦 Area pengiriman ke mana saja?</h3>
                <p class="text-gray-600">Kami melayani pengiriman area Bogor dan sekitarnya. Untuk luar area bisa diskusi via WhatsApp.</p>
              </div>

              <div class="bg-pink-50 p-6 rounded-lg">
                <h3 class="text-lg font-bold mb-2">💳 Metode pembayaran apa saja?</h3>
                <p class="text-gray-600">Transfer bank (BCA, Mandiri, BNI) dan e-wallet (GoPay, OVO, Dana). Detail akan diberikan saat order.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl text-center">
          <h2 class="text-3xl font-serif font-bold text-gray-900 mb-4">Siap Memesan?</h2>
          <p class="text-gray-600 text-lg mb-6">
            Chat kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk buket impianmu!
          </p>
          <Button
            :href="whatsappConfig.link"
            variant="primary"
            size="lg"
          >
            💬 Mulai Chat di WhatsApp
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
import { whatsappConfig } from '@/lib/content.js'
</script>
