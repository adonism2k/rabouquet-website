/**
 * Website Content for Rabouquet
 * Indonesian language content for all pages
 */

/**
 * WhatsApp Configuration
 */
export const whatsappConfig = {
  phoneNumber: '6285157572725', // Rabouquet WhatsApp number

  messages: {
    general: 'Halo Rabouquet.in! Saya tertarik dengan produk Anda. Bisa info lebih lanjut?',

    // Product-specific message templates
    product: (productName) =>
      `Halo Rabouquet.in! Saya tertarik dengan ${productName}. Bisa info lebih lanjut mengenai ketersediaan dan harga?`,

    category: (categoryName) =>
      `Halo Rabouquet.in! Saya ingin melihat koleksi ${categoryName}. Bisa dibantu?`,

    customOrder: 'Halo Rabouquet.in! Saya ingin pesan custom buket. Bisa diskusi detail pesanan saya?',

    backdrop: 'Halo Rabouquet.in! Saya tertarik menyewa backdrop untuk acara pernikahan. Bisa info lebih lanjut?'
  }
};

/**
 * Generate WhatsApp URL
 */
export const getWhatsAppUrl = (message = whatsappConfig.messages.general) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
};

/**
 * SEO Meta Content
 */
export const seoContent = {
  default: {
    title: 'Rabouquet.in - Buket Bunga & Hadiah Kreatif Bogor',
    description: 'Rabouquet.in menyediakan buket bunga asli, artificial, snack, boneka, dan backdrop nikahan di Bogor. Hadiah spesial untuk orang tersayang. Pesan sekarang via WhatsApp!',
    keywords: 'buket bunga bogor, buket snack, buket uang, buket boneka, backdrop nikahan, toko bunga bogor, hadiah unik bogor'
  },

  home: {
    title: 'Rabouquet.in - Toko Buket Bunga & Hadiah Kreatif Terpercaya di Bogor',
    description: 'Pesan buket bunga segar, artificial, snack, boneka, dan sewa backdrop nikahan di Bogor. Pengiriman cepat, harga terjangkau, kualitas terjamin. Order via WhatsApp!',
    keywords: 'toko bunga bogor, buket murah, hadiah wisuda, hadiah ulang tahun, buket pernikahan, florist bogor'
  },

  products: {
    title: 'Katalog Produk - Buket Bunga & Hadiah Unik | Rabouquet.in',
    description: 'Lihat koleksi lengkap buket bunga asli, artificial, pita satin, kawat bulu, snack, uang, boneka, dan backdrop nikahan. Harga mulai Rp 45.000. Custom design tersedia!',
    keywords: 'katalog buket, harga buket bunga, buket custom, buket murah bogor'
  },

  about: {
    title: 'Tentang Kami - Rabouquet.in Bogor',
    description: 'Rabouquet.in adalah toko buket dan hadiah kreatif terpercaya di Bogor. Melayani dengan sepenuh hati. Quality, creativity, dan customer satisfaction adalah prioritas kami.',
    keywords: 'tentang rabouquet, toko bunga bogor, florist bogor'
  },

  contact: {
    title: 'Hubungi Kami - Order via WhatsApp | Rabouquet.in',
    description: 'Hubungi Rabouquet.in untuk konsultasi dan pemesanan buket. Fast response via WhatsApp. Lokasi di Bogor, melayani pengiriman se-Bogor dan sekitarnya.',
    keywords: 'kontak rabouquet, whatsapp buket, pesan buket bogor'
  }
};

/**
 * Hero Section Content
 */
export const heroContent = {
  mainTagline: 'Wujudkan Momen Spesial dengan Buket Istimewa',
  subTagline: 'Buket bunga segar, artificial, snack, boneka & backdrop nikahan - Dibuat dengan cinta untuk orang tersayang',

  cta: {
    primary: 'Lihat Katalog',
    secondary: 'Order via WhatsApp'
  },

  features: [
    {
      icon: '🌸',
      title: 'Kualitas Premium',
      description: 'Material terbaik dan rangkaian profesional'
    },
    {
      icon: '⚡',
      title: 'Fast Response',
      description: 'Konsultasi cepat via WhatsApp'
    },
    {
      icon: '🎨',
      title: 'Custom Design',
      description: 'Sesuaikan dengan keinginan Anda'
    },
    {
      icon: '🚚',
      title: 'Pengiriman Aman',
      description: 'Packing rapi, sampai dengan sempurna'
    }
  ]
};

/**
 * About Page Content
 */
export const aboutContent = {
  title: 'Tentang Rabouquet',

  story: {
    heading: 'Cerita Kami',
    paragraphs: [
      'Rabouquet.in dimulai dari kecintaan kami terhadap seni merangkai bunga dan menciptakan hadiah yang berkesan. Berawal dari hobi kecil, kini kami tumbuh menjadi salah satu penyedia buket dan hadiah kreatif terpercaya di Bogor.',

      'Kami percaya bahwa setiap momen spesial layak dirayakan dengan cara istimewa. Itulah mengapa kami menyediakan berbagai pilihan buket - dari bunga segar, artificial, snack, hingga boneka - serta backdrop nikahan untuk membuat acara Anda semakin berkesan.',

      'Dengan dedikasi tim yang berpengalaman, kami berkomitmen menghadirkan produk berkualitas tinggi dan pelayanan terbaik untuk setiap pelanggan. Kepuasan Anda adalah kebahagiaan kami.'
    ]
  },

  values: {
    heading: 'Nilai-Nilai Kami',
    items: [
      {
        icon: '💎',
        title: 'Kualitas',
        description: 'Kami hanya menggunakan material terbaik untuk setiap produk yang kami buat'
      },
      {
        icon: '🎨',
        title: 'Kreativitas',
        description: 'Setiap buket dirancang dengan sentuhan kreatif dan penuh perhatian terhadap detail'
      },
      {
        icon: '❤️',
        title: 'Kepuasan Pelanggan',
        description: 'Kebahagiaan pelanggan adalah prioritas utama kami dalam setiap pesanan'
      },
      {
        icon: '🤝',
        title: 'Kepercayaan',
        description: 'Kami membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi'
      }
    ]
  },

  services: {
    heading: 'Layanan Kami',
    items: [
      '🌹 Buket Bunga Asli - Mawar, tulip, bunga matahari, dan berbagai bunga segar pilihan',
      '🌺 Buket Bunga Artificial - Awet dan tahan lama untuk dekorasi atau hadiah',
      '🎀 Buket Pita Satin - Unik dan elegan dengan warna-warna cerah',
      '🧵 Buket Kawat Bulu - Kreatif dan lucu dengan berbagai bentuk',
      '🍫 Buket Snack - Keripik, cokelat, permen untuk hadiah yang berkesan',
      '💰 Buket Uang - Custom money bouquet untuk wisuda dan ulang tahun',
      '🧸 Buket Boneka - Boneka lucu dengan rangkaian bunga',
      '💒 Backdrop Nikahan - Sewa backdrop cantik untuk dekorasi pernikahan'
    ]
  },

  whyChooseUs: {
    heading: 'Mengapa Memilih Rabouquet?',
    reasons: [
      '✅ Pengalaman bertahun-tahun dalam industri buket dan hadiah',
      '✅ Tim profesional dan kreatif yang siap membantu Anda',
      '✅ Harga kompetitif dengan kualitas premium',
      '✅ Fast response dan konsultasi gratis via WhatsApp',
      '✅ Custom design sesuai keinginan Anda',
      '✅ Packing rapi dan pengiriman aman',
      '✅ Melayani area Bogor dan sekitarnya',
      '✅ Testimoni positif dari ratusan pelanggan puas'
    ]
  }
};

/**
 * Contact Page Content
 */
export const contactContent = {
  title: 'Hubungi Kami',
  subtitle: 'Kami siap membantu Anda menciptakan buket istimewa',

  info: {
    heading: 'Informasi Kontak',
    details: [
      {
        icon: '📱',
        label: 'WhatsApp',
        value: '+62 851-5757-2725',
        link: getWhatsAppUrl()
      },
      {
        icon: '📧',
        label: 'Email',
        value: 'info@rabouquet.in',
        link: 'mailto:info@rabouquet.in'
      },
      {
        icon: '📍',
        label: 'Lokasi',
        value: 'Kampung Pajeleran Gunung, Bogor, Indonesia 16913',
        link: null
      },
      {
        icon: '🕒',
        label: 'Jam Operasional',
        value: 'Senin - Minggu: 08:00 - 20:00 WIB',
        link: null
      }
    ]
  },

  socialMedia: {
    heading: 'Ikuti Kami',
    platforms: [
      {
        name: 'Instagram',
        icon: '📷',
        handle: '@rabouquet.in',
        url: 'https://instagram.com/rabouquet.in'
      }
    ]
  },

  faq: {
    heading: 'Pertanyaan Umum',
    items: [
      {
        question: 'Berapa lama waktu pemesanan?',
        answer: 'Untuk pesanan regular, kami butuh minimal 1-2 hari. Untuk pesanan mendesak (same day), silakan hubungi kami via WhatsApp untuk konfirmasi ketersediaan.'
      },
      {
        question: 'Apakah bisa custom design?',
        answer: 'Tentu! Kami menerima custom design sesuai keinginan Anda. Kirimkan referensi atau ide Anda via WhatsApp, dan kami akan bantu wujudkan.'
      },
      {
        question: 'Bagaimana cara pembayaran?',
        answer: 'Kami menerima transfer bank (BCA, Mandiri, BRI) dan e-wallet (GoPay, OVO, Dana, ShopeePay). Detail pembayaran akan diberikan setelah konfirmasi pesanan.'
      },
      {
        question: 'Area mana saja yang dilayani untuk pengiriman?',
        answer: 'Kami melayani pengiriman untuk area Bogor dan sekitarnya (Bogor Timur, Bogor Barat, Bogor Utara, Bogor Selatan, Cibinong, Sentul). Biaya pengiriman disesuaikan dengan jarak lokasi.'
      },
      {
        question: 'Berapa lama bunga segar bisa bertahan?',
        answer: 'Bunga segar dapat bertahan 3-7 hari tergantung perawatan. Kami sertakan tips perawatan di setiap pembelian buket bunga asli.'
      }
    ]
  }
};

/**
 * Product Category Descriptions
 */
export const categoryDescriptions = {
  'bunga-asli': {
    short: 'Bunga segar pilihan untuk momen istimewa',
    long: 'Koleksi buket bunga segar dengan berbagai jenis - mawar, tulip, bunga matahari, dan bouquet campur. Sempurna untuk mengungkapkan perasaan, merayakan momen spesial, atau sekadar membawa keceriaan. Setiap buket dirangkai dengan hati-hati oleh florist profesional kami.'
  },

  'bunga-artificial': {
    short: 'Bunga artificial awet dan tahan lama',
    long: 'Buket bunga artificial berkualitas tinggi yang terlihat seperti asli. Tidak layu, dapat digunakan berulang kali, dan sempurna untuk dekorasi rumah atau kantor. Pilihan ekonomis yang tetap cantik untuk jangka waktu lama.'
  },

  'pita-satin': {
    short: 'Buket pita satin warna-warni yang unik',
    long: 'Buket pita satin dengan gradasi warna yang indah dan elegan. Hadiah yang unik dan berbeda dari yang lain. Tahan lama dan dapat disimpan sebagai kenangan. Tersedia dalam berbagai tema warna - pelangi, pastel, monokrom, dan custom.'
  },

  'kawat-bulu': {
    short: 'Buket kawat bulu kreatif dan lucu',
    long: 'Buket dari kawat bulu (pipe cleaner/chenille stem) yang dibentuk menjadi bunga atau karakter lucu. Warna-warni cerah yang membawa keceriaan. Cocok untuk anak-anak atau siapa saja yang menyukai sesuatu yang cute dan playful.'
  },

  'buket-snack': {
    short: 'Buket snack favorit untuk hadiah berkesan',
    long: 'Kombinasi unik antara buket dan snack favorit! Berisi keripik, cokelat, permen, atau campur semuanya. Hadiah yang pasti bikin senang karena bisa dilihat, difoto, dan dimakan. Perfect untuk ulang tahun, ucapan terima kasih, atau surprise special.'
  },

  'buket-uang': {
    short: 'Buket uang untuk kado wisuda dan special moment',
    long: 'Money bouquet yang cantik dan kreatif. Cara unik memberikan uang sebagai hadiah untuk wisuda, ulang tahun, atau pernikahan. Kami akan rangkai uang Anda menjadi buket yang indah dan berkesan. Custom sesuai tema acara dan nominal yang diinginkan.'
  },

  'buket-boneka': {
    short: 'Buket boneka lucu untuk orang tersayang',
    long: 'Kombinasi boneka lucu dengan rangkaian bunga. Hadiah romantis yang menggemaskan untuk pacar, sahabat, atau keluarga. Boneka berkualitas dengan berbagai karakter - beruang, kelinci, atau karakter favorit. Ukuran dan jenis boneka dapat disesuaikan.'
  },

  'backdrop-nikahan': {
    short: 'Backdrop cantik untuk dekorasi pernikahan',
    long: 'Layanan sewa backdrop untuk acara pernikahan Anda. Berbagai tema dan desain - elegant, modern, rustic, luxury. Lengkap dengan setup dan instalasi. Membuat foto-foto pernikahan Anda semakin indah dan memorable. Konsultasi gratis untuk menyesuaikan dengan tema wedding Anda.'
  }
};

/**
 * Call-to-Action Texts
 */
export const ctaTexts = {
  orderNow: 'Pesan Sekarang',
  orderViaWhatsApp: 'Order via WhatsApp',
  seeDetails: 'Lihat Detail',
  viewCatalog: 'Lihat Katalog',
  customOrder: 'Pesan Custom',
  contactUs: 'Hubungi Kami',
  learnMore: 'Pelajari Lebih Lanjut',
  backToHome: 'Kembali ke Beranda',
  viewAllProducts: 'Lihat Semua Produk',
  filterByCategory: 'Filter Kategori'
};

/**
 * UI Labels
 */
export const uiLabels = {
  navigation: {
    home: 'Beranda',
    products: 'Produk',
    about: 'Tentang Kami',
    contact: 'Kontak',
    categories: 'Kategori'
  },

  product: {
    priceRange: 'Kisaran Harga',
    category: 'Kategori',
    featured: 'Produk Pilihan',
    newArrival: 'Produk Baru',
    bestSeller: 'Terlaris',
    allProducts: 'Semua Produk',
    noProducts: 'Tidak ada produk ditemukan'
  },

  filter: {
    all: 'Semua',
    sortBy: 'Urutkan',
    filterBy: 'Filter',
    reset: 'Reset Filter',
    apply: 'Terapkan'
  },

  search: {
    placeholder: 'Cari produk...',
    noResults: 'Tidak ada hasil pencarian',
    searching: 'Mencari...'
  }
};

/**
 * Footer Content
 */
export const footerContent = {
  brandDescription: 'Rabouquet.in menyediakan buket bunga, hadiah kreatif, dan backdrop nikahan untuk momen spesial Anda. Melayani dengan sepenuh hati di Bogor.',

  quickLinks: [
    { label: 'Beranda', path: '/' },
    { label: 'Produk', path: '/products' },
    { label: 'Tentang Kami', path: '/about' },
    { label: 'Kontak', path: '/contact' }
  ],

  categories: [
    { label: 'Buket Bunga Asli', path: '/products?category=bunga-asli' },
    { label: 'Buket Snack', path: '/products?category=buket-snack' },
    { label: 'Buket Boneka', path: '/products?category=buket-boneka' },
    { label: 'Backdrop Nikahan', path: '/products?category=backdrop-nikahan' }
  ],

  copyright: `© ${new Date().getFullYear()} Rabouquet.in. All rights reserved.`,

  madeWith: 'Made with ❤️ in Bogor'
};

export default {
  whatsappConfig,
  getWhatsAppUrl,
  seoContent,
  heroContent,
  aboutContent,
  contactContent,
  categoryDescriptions,
  ctaTexts,
  uiLabels,
  footerContent
};
