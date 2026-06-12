<template>
  <div>
    <Header />

    <Hero
      title="Hadirkan Momen Istimewa dengan Buket dari Rabouquet"
      subtitle="Buket Bunga Asli, Artificial, Snack, Boneka & Backdrop Nikahan di Bogor"
      cta-text="💬 Pesan via WhatsApp"
      cta-link="https://wa.me/6285157530733?text=Halo Rabouquet! Saya ingin memesan buket."
    />

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
          <p class="text-gray-600">Sesuaikan dengan keinginanmu</p>
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

    <Section background="white" padding="lg">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif font-bold text-gray-900 mb-4">Hubungi Kami</h2>
        <p class="text-gray-600 text-lg">
          Yuk, konsultasikan buket impianmu bersama tim kami
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              <p class="text-gray-600">Cibinong, Bogor, Jawa Barat</p>
              <p class="text-gray-600 text-sm mt-1">Area pengiriman: Bogor & sekitarnya</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="text-3xl mr-4">⏰</div>
            <div>
              <h3 class="text-xl font-bold mb-2">Jam Operasional</h3>
              <p class="text-gray-600">Senin - Minggu: 08:00 - 20:00 WIB</p>
            </div>
          </div>

          <Button :href="whatsappConfig.link" variant="primary" size="lg" class="w-full">
            💬 Chat via WhatsApp
          </Button>
        </div>

        <div class="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.221828091687!2d106.81619137527237!3d-6.493573393498528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1ea5cfe5191%3A0x7818d6b57f0a97c8!2srabouquetin%20florist%20cibinong!5e0!3m2!1sen!2sid!4v1781275947606!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style="border: 0; min-height: 400px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Section>

    <Section background="pink" padding="xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
      </div>

      <div class="max-w-3xl mx-auto">
        <FaqAccordion :items="contactContent.faq.items" />
      </div>
    </Section>

    <Footer />
    <WhatsAppButton variant="floating" />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Hero from '@/components/Hero.vue';
import Section from '@/components/Section.vue';
import Button from '@/components/Button.vue';
import WhatsAppButton from '@/components/WhatsAppButton.vue';
import FaqAccordion from '@/components/FaqAccordion.vue';
import { whatsappConfig, contactContent } from '@/lib/content.js';
import { useSeo } from '@/composables/useSeo.js';

useSeo('home');
</script>
