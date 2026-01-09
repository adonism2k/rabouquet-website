/**
 * SEO Metadata Configuration for Rabouquet.in
 * Indonesian language optimized for local search
 */

export const siteConfig = {
  name: 'RABOUQUET.IN',
  url: 'https://rabouquet.in',
  phone: '+6285157572725',
  whatsapp: '6285157572725',
  address: {
    street: 'Kampung Pajeleran Gunung',
    city: 'Bogor',
    country: 'Indonesia',
    postalCode: '16913'
  },
  social: {
    instagram: '@rabouquet.in'
  }
};

export const pageMetadata = {
  home: {
    title: 'Rabouquet.in - Toko Buket Bunga & Hadiah di Bogor',
    description: 'Toko buket terpercaya di Bogor. Kami menyediakan buket bunga segar, buket snack, buket boneka, dan hadiah custom untuk berbagai acara spesial Anda. Pesan sekarang!',
    keywords: 'buket bunga bogor, toko buket bogor, buket wisuda, buket snack, buket boneka, hadiah custom bogor, florist bogor',
    ogImage: '/logo.png'
  },
  products: {
    title: 'Katalog Buket - Rabouquet.in | Bunga, Snack, Boneka & Lainnya',
    description: 'Jelajahi koleksi lengkap buket kami: buket bunga segar, buket snack premium, buket boneka lucu, dan custom bouquet sesuai keinginan. Harga terjangkau, kualitas terjamin!',
    keywords: 'katalog buket, buket murah bogor, buket custom, buket wisuda bogor, buket ulang tahun',
    ogImage: '/logo.png'
  },
  about: {
    title: 'Tentang Rabouquet.in - Toko Buket Terpercaya di Bogor',
    description: 'Rabouquet.in adalah toko buket terpercaya di Bogor yang menghadirkan buket berkualitas untuk setiap momen spesial Anda. Dibuat dengan penuh perhatian dan cinta.',
    keywords: 'tentang rabouquet, toko buket bogor, florist profesional bogor',
    ogImage: '/logo.png'
  },
  contact: {
    title: 'Hubungi Kami - Rabouquet.in',
    description: 'Hubungi Rabouquet.in untuk konsultasi dan pemesanan buket. Kami siap melayani Anda melalui WhatsApp atau kunjungi toko kami di Bogor. Respon cepat dan ramah!',
    keywords: 'kontak rabouquet, pesan buket bogor, whatsapp florist bogor',
    ogImage: '/logo.png'
  }
};

/**
 * Generate page metadata for SEO
 * @param {string} page - Page identifier (home, products, about, contact)
 * @returns {object} Complete metadata object
 */
export function getPageMetadata(page = 'home') {
  const meta = pageMetadata[page] || pageMetadata.home;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    canonical: `${siteConfig.url}/${page === 'home' ? '' : page}`,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/${page === 'home' ? '' : page}`,
      title: meta.title,
      description: meta.description,
      image: `${siteConfig.url}${meta.ogImage}`,
      siteName: siteConfig.name,
      locale: 'id_ID'
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      image: `${siteConfig.url}${meta.ogImage}`
    }
  };
}

/**
 * Generate structured data (JSON-LD) for local business
 * @returns {object} Structured data object
 */
export function getStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    name: siteConfig.name,
    description: 'Toko Buket Bunga dan Hadiah di Bogor',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
      postalCode: siteConfig.address.postalCode
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-6.5971',
      longitude: '106.8060'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00'
      }
    ],
    sameAs: [
      `https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`
    ],
    areaServed: {
      '@type': 'City',
      name: 'Bogor'
    }
  };
}

/**
 * Generate WhatsApp link with pre-filled message
 * @param {string} message - Optional custom message
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppLink(message = '') {
  const baseUrl = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return baseUrl;

  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
}

/**
 * Default WhatsApp messages for different contexts
 */
export const whatsappMessages = {
  general: 'Halo Rabouquet.in! Saya ingin bertanya tentang produk buket Anda.',
  order: 'Halo! Saya ingin memesan buket. Mohon informasinya.',
  custom: 'Halo! Saya ingin membuat custom buket. Bisa dibantu?',
  inquiry: 'Halo! Saya ingin bertanya tentang ketersediaan produk dan harga.'
};
