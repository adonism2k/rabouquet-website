// Business Configuration
export const config = {
  business: {
    name: 'RABOUQUET.IN',
    tagline: 'Buket Hadiah Cantik untuk Momen Istimewa',
    description: 'Toko buket bunga dan hadiah di Bogor - Buket hadiah custom untuk berbagai acara spesial Anda',
    phone: '+6285157572725',
    formatted_phone: '+62 851-5757-2725',
    email: 'info@rabouquet.in',
    whatsapp: '6285157572725', // Format: 62xxx without + or -
    address: {
      street: 'Kampung Pajeleran Gunung',
      city: 'Bogor',
      province: 'Jawa Barat',
      country: 'Indonesia',
      postalCode: '16913',
      full: 'Kampung Pajeleran Gunung, Bogor, Indonesia 16913'
    },
    socialMedia: {
      instagram: 'https://instagram.com/rabouquet.in',
      handle: '@rabouquet.in'
    },
    location: {
      lat: -6.5971,
      lng: 106.8060
    }
  },

  // Business hours
  hours: {
    weekdays: '08:00 - 20:00',
    weekends: '08:00 - 20:00',
    display: 'Senin - Minggu: 08:00 - 20:00 WIB'
  },

  // Delivery information
  delivery: {
    areas: ['Bogor', 'Bogor Timur', 'Bogor Barat', 'Bogor Utara', 'Bogor Selatan', 'Cibinong', 'Sentul'],
    fee: 'Disesuaikan dengan lokasi pengiriman',
    note: 'Pengiriman cepat dan aman untuk area Bogor dan sekitarnya'
  },

  // Payment methods
  payment: {
    methods: ['Transfer Bank (BCA, Mandiri, BRI)', 'E-Wallet (GoPay, OVO, Dana, ShopeePay)'],
    note: 'Detail pembayaran akan diberikan setelah konfirmasi pesanan via WhatsApp'
  }
}

export default config
