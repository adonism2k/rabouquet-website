/**
 * Product Data for Rabouquet
 * All 8 product types with Indonesian content
 */

export const products = [
  // 1. Buket Bunga Asli
  {
    id: 'fresh-roses-red',
    name: 'Buket Mawar Merah',
    category: 'bunga-asli',
    description: 'Buket mawar merah segar untuk mengungkapkan cinta dan kasih sayang. Cocok untuk anniversary, Valentine, atau momen romantis.',
    priceRange: 'Rp 100.000 - Rp 250.000',
    image: '/images/products/fresh-roses-red.jpg',
    featured: true
  },
  {
    id: 'fresh-tulips-mix',
    name: 'Buket Tulip Campuran',
    category: 'bunga-asli',
    description: 'Tulip segar dengan warna-warni cerah yang indah. Sempurna untuk hadiah ulang tahun atau ucapan selamat.',
    priceRange: 'Rp 120.000 - Rp 200.000',
    image: '/images/products/fresh-tulips-mix.jpg',
    featured: false
  },
  {
    id: 'fresh-sunflowers',
    name: 'Buket Bunga Matahari',
    category: 'bunga-asli',
    description: 'Bunga matahari ceria yang membawa energi positif. Ideal untuk ucapan semangat dan doa kesembuhan.',
    priceRange: 'Rp 75.000 - Rp 180.000',
    image: '/images/products/fresh-sunflowers.jpg',
    featured: true
  },
  {
    id: 'fresh-mixed-premium',
    name: 'Buket Campur Premium',
    category: 'bunga-asli',
    description: 'Kombinasi bunga segar pilihan florist untuk tampilan mewah dan elegan.',
    priceRange: 'Rp 150.000 - Rp 300.000',
    image: '/images/products/fresh-mixed-premium.jpg',
    featured: false
  },

  // 2. Buket Bunga Artificial
  {
    id: 'artificial-roses-elegant',
    name: 'Buket Mawar Artificial Elegan',
    category: 'bunga-artificial',
    description: 'Mawar artificial berkualitas tinggi yang awet dan tahan lama. Tidak layu, bisa dipakai berulang kali.',
    priceRange: 'Rp 80.000 - Rp 200.000',
    image: '/images/products/artificial-roses-elegant.jpg',
    featured: true
  },
  {
    id: 'artificial-lily-white',
    name: 'Buket Lily Putih Artificial',
    category: 'bunga-artificial',
    description: 'Lily putih artificial yang anggun dan sempurna untuk dekorasi rumah atau kantor.',
    priceRange: 'Rp 90.000 - Rp 180.000',
    image: '/images/products/artificial-lily-white.jpg',
    featured: false
  },
  {
    id: 'artificial-colorful-mix',
    name: 'Buket Artificial Warna-Warni',
    category: 'bunga-artificial',
    description: 'Kombinasi bunga artificial dengan warna cerah yang bikin ruangan jadi lebih ceria.',
    priceRange: 'Rp 50.000 - Rp 150.000',
    image: '/images/products/artificial-colorful-mix.jpg',
    featured: false
  },

  // 3. Buket Pita Satin
  {
    id: 'satin-rainbow-bouquet',
    name: 'Buket Pita Satin Pelangi',
    category: 'pita-satin',
    description: 'Buket pita satin dengan gradasi warna pelangi yang cantik dan unik. Hadiah yang berbeda dan berkesan.',
    priceRange: 'Rp 75.000 - Rp 180.000',
    image: '/images/products/satin-rainbow-bouquet.jpg',
    featured: true
  },
  {
    id: 'satin-pastel-elegant',
    name: 'Buket Pita Satin Pastel',
    category: 'pita-satin',
    description: 'Pita satin warna pastel lembut untuk tampilan elegan dan feminim.',
    priceRange: 'Rp 70.000 - Rp 160.000',
    image: '/images/products/satin-pastel-elegant.jpg',
    featured: false
  },
  {
    id: 'satin-red-luxury',
    name: 'Buket Pita Satin Merah Mewah',
    category: 'pita-satin',
    description: 'Pita satin merah dengan detail gold yang mewah, cocok untuk acara formal.',
    priceRange: 'Rp 60.000 - Rp 150.000',
    image: '/images/products/satin-red-luxury.jpg',
    featured: false
  },

  // 4. Buket Kawat Bulu
  {
    id: 'chenille-flower-colorful',
    name: 'Buket Bunga Kawat Bulu Warna-Warni',
    category: 'kawat-bulu',
    description: 'Buket kawat bulu bentuk bunga dengan warna cerah yang lucu dan kreatif.',
    priceRange: 'Rp 50.000 - Rp 120.000',
    image: '/images/products/chenille-flower-colorful.jpg',
    featured: true
  },
  {
    id: 'chenille-character-cute',
    name: 'Buket Kawat Bulu Karakter',
    category: 'kawat-bulu',
    description: 'Kawat bulu dibentuk menjadi karakter lucu yang menggemaskan. Sempurna untuk anak-anak.',
    priceRange: 'Rp 45.000 - Rp 150.000',
    image: '/images/products/chenille-character-cute.jpg',
    featured: false
  },
  {
    id: 'chenille-rose-pastel',
    name: 'Buket Mawar Kawat Bulu Pastel',
    category: 'kawat-bulu',
    description: 'Mawar dari kawat bulu dengan warna pastel yang soft dan menenangkan.',
    priceRange: 'Rp 55.000 - Rp 130.000',
    image: '/images/products/chenille-rose-pastel.jpg',
    featured: false
  },

  // 5. Buket Snack
  {
    id: 'snack-chips-deluxe',
    name: 'Buket Snack Keripik Deluxe',
    category: 'buket-snack',
    description: 'Buket snack berisi berbagai keripik favorit. Hadiah unik untuk yang suka ngemil.',
    priceRange: 'Rp 100.000 - Rp 250.000',
    image: '/images/products/snack-chips-deluxe.jpg',
    featured: true
  },
  {
    id: 'snack-chocolate-premium',
    name: 'Buket Cokelat Premium',
    category: 'buket-snack',
    description: 'Rangkaian cokelat premium dalam bentuk buket cantik. Manis dan berkesan.',
    priceRange: 'Rp 120.000 - Rp 300.000',
    image: '/images/products/snack-chocolate-premium.jpg',
    featured: true
  },
  {
    id: 'snack-candy-colorful',
    name: 'Buket Permen Warna-Warni',
    category: 'buket-snack',
    description: 'Buket permen dengan berbagai warna dan rasa. Ceria dan menyenangkan.',
    priceRange: 'Rp 80.000 - Rp 180.000',
    image: '/images/products/snack-candy-colorful.jpg',
    featured: false
  },
  {
    id: 'snack-mixed-party',
    name: 'Buket Snack Campur Party',
    category: 'buket-snack',
    description: 'Kombinasi keripik, cokelat, dan permen dalam satu buket besar. Perfect untuk pesta.',
    priceRange: 'Rp 150.000 - Rp 350.000',
    image: '/images/products/snack-mixed-party.jpg',
    featured: false
  },

  // 6. Buket Uang
  {
    id: 'money-graduation-special',
    name: 'Buket Uang Wisuda Spesial',
    category: 'buket-uang',
    description: 'Buket uang dengan dekorasi toga dan hiasan wisuda. Hadiah istimewa untuk kelulusan.',
    priceRange: 'Custom (tergantung nominal uang)',
    image: '/images/products/money-graduation-special.jpg',
    featured: true
  },
  {
    id: 'money-birthday-elegant',
    name: 'Buket Uang Ulang Tahun Elegan',
    category: 'buket-uang',
    description: 'Rangkaian uang dengan dekorasi ulang tahun yang elegan dan mewah.',
    priceRange: 'Custom (tergantung nominal uang)',
    image: '/images/products/money-birthday-elegant.jpg',
    featured: false
  },
  {
    id: 'money-wedding-luxury',
    name: 'Buket Uang Pernikahan Mewah',
    category: 'buket-uang',
    description: 'Buket uang dengan tema pernikahan untuk hadiah angpau yang berkesan.',
    priceRange: 'Custom (tergantung nominal uang)',
    image: '/images/products/money-wedding-luxury.jpg',
    featured: false
  },

  // 7. Buket Boneka
  {
    id: 'plush-bear-large',
    name: 'Buket Boneka Beruang Besar',
    category: 'buket-boneka',
    description: 'Boneka beruang lucu ukuran besar dengan rangkaian bunga. Hadiah romantis yang menggemaskan.',
    priceRange: 'Rp 150.000 - Rp 350.000',
    image: '/images/products/plush-bear-large.jpg',
    featured: true
  },
  {
    id: 'plush-bunny-cute',
    name: 'Buket Boneka Kelinci Lucu',
    category: 'buket-boneka',
    description: 'Boneka kelinci imut dengan telinga panjang dan bunga warna-warni.',
    priceRange: 'Rp 120.000 - Rp 280.000',
    image: '/images/products/plush-bunny-cute.jpg',
    featured: false
  },
  {
    id: 'plush-character-mix',
    name: 'Buket Boneka Karakter Campuran',
    category: 'buket-boneka',
    description: 'Kombinasi boneka karakter favorit dengan bunga artificial. Unik dan spesial.',
    priceRange: 'Rp 100.000 - Rp 300.000',
    image: '/images/products/plush-character-mix.jpg',
    featured: false
  },

  // 8. Backdrop Nikahan
  {
    id: 'backdrop-elegant-cream',
    name: 'Backdrop Nikahan Elegan Cream',
    category: 'backdrop-nikahan',
    description: 'Backdrop pernikahan dengan tema cream dan gold yang elegan. Sempurna untuk foto resepsi.',
    priceRange: 'Rp 800.000 - Rp 1.500.000',
    image: '/images/products/backdrop-elegant-cream.jpg',
    featured: true
  },
  {
    id: 'backdrop-modern-minimalist',
    name: 'Backdrop Nikahan Modern Minimalis',
    category: 'backdrop-nikahan',
    description: 'Desain minimalis modern dengan sentuhan bunga segar. Cocok untuk pernikahan outdoor.',
    priceRange: 'Rp 700.000 - Rp 1.200.000',
    image: '/images/products/backdrop-modern-minimalist.jpg',
    featured: false
  },
  {
    id: 'backdrop-rustic-wooden',
    name: 'Backdrop Nikahan Rustic Kayu',
    category: 'backdrop-nikahan',
    description: 'Backdrop dengan tema rustic menggunakan kayu dan bunga vintage. Natural dan hangat.',
    priceRange: 'Rp 900.000 - Rp 1.800.000',
    image: '/images/products/backdrop-rustic-wooden.jpg',
    featured: false
  },
  {
    id: 'backdrop-luxury-crystal',
    name: 'Backdrop Nikahan Mewah Crystal',
    category: 'backdrop-nikahan',
    description: 'Backdrop mewah dengan hiasan crystal dan lampu LED. Glamor dan berkilauan.',
    priceRange: 'Rp 1.500.000 - Rp 2.500.000',
    image: '/images/products/backdrop-luxury-crystal.jpg',
    featured: true
  }
];

/**
 * Product Categories
 */
export const categories = [
  {
    id: 'bunga-asli',
    name: 'Buket Bunga Asli',
    slug: 'bunga-asli',
    description: 'Bunga segar pilihan untuk momen istimewamu',
    icon: '🌹'
  },
  {
    id: 'bunga-artificial',
    name: 'Buket Bunga Artificial',
    slug: 'bunga-artificial',
    description: 'Bunga artificial awet dan tahan lama',
    icon: '🌺'
  },
  {
    id: 'pita-satin',
    name: 'Buket Pita Satin',
    slug: 'pita-satin',
    description: 'Buket pita satin warna-warni yang unik',
    icon: '🎀'
  },
  {
    id: 'kawat-bulu',
    name: 'Buket Kawat Bulu',
    slug: 'kawat-bulu',
    description: 'Buket kawat bulu kreatif dengan berbagai bentuk',
    icon: '🧵'
  },
  {
    id: 'buket-snack',
    name: 'Buket Snack',
    slug: 'buket-snack',
    description: 'Buket snack favorit untuk hadiah berkesan',
    icon: '🍫'
  },
  {
    id: 'buket-uang',
    name: 'Buket Uang',
    slug: 'buket-uang',
    description: 'Buket uang untuk kado wisuda dan ulang tahun',
    icon: '💰'
  },
  {
    id: 'buket-boneka',
    name: 'Buket Boneka',
    slug: 'buket-boneka',
    description: 'Buket boneka lucu untuk orang tersayang',
    icon: '🧸'
  },
  {
    id: 'backdrop-nikahan',
    name: 'Backdrop Nikahan',
    slug: 'backdrop-nikahan',
    description: 'Backdrop cantik untuk dekorasi pernikahan',
    icon: '💒'
  }
];

/**
 * Filter products by category
 */
export const getProductsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') {
    return products;
  }
  return products.filter(product => product.category === categoryId);
};

/**
 * Get featured products
 */
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

/**
 * Get product by ID
 */
export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

/**
 * Get category by ID
 */
export const getCategoryById = (categoryId) => {
  return categories.find(category => category.id === categoryId);
};

/**
 * Search products by name or description
 */
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};
