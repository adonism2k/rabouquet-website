// Business Configuration
export const config = {
  business: {
    name: 'Rabouquet',
    tagline: 'Buket Hadiah Cantik untuk Momen Istimewa',
    description: 'Buket hadiah custom untuk berbagai acara spesialmu',
    phone: '+62-XXX-XXXX-XXXX', // Update with actual phone number
    email: 'info@rabouquet.com', // Update with actual email
    whatsapp: '62XXXXXXXXXX', // Update with actual WhatsApp number (format: 62xxx without + or -)
    address: 'Jakarta, Indonesia', // Update with actual address
    socialMedia: {
      instagram: 'https://instagram.com/rabouquet',
      facebook: 'https://facebook.com/rabouquet',
      tiktok: 'https://tiktok.com/@rabouquet'
    }
  },

  // Business hours
  hours: {
    weekdays: '09:00 - 18:00',
    weekends: '10:00 - 16:00'
  },

  // Delivery information
  delivery: {
    areas: ['Jakarta', 'Depok', 'Bekasi', 'Tangerang', 'Bogor'],
    fee: 'Gratis untuk area Jakarta Selatan',
    note: 'Ongkir disesuaikan untuk area lainnya'
  },

  // Payment methods
  payment: {
    methods: ['Transfer Bank', 'E-Wallet (GoPay, OVO, Dana)', 'Cash on Delivery'],
    bankAccounts: [
      { bank: 'BCA', number: 'XXX-XXX-XXXX', name: 'Rabouquet' },
      { bank: 'Mandiri', number: 'XXX-XXX-XXXX', name: 'Rabouquet' }
    ]
  }
}

export default config
