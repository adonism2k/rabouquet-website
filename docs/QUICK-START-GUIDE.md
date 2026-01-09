# Quick Start Implementation Guide
**Project:** RABOUQUET.IN Website
**Status:** Directory structure only - Implementation needed
**Goal:** Get a working SvelteKit site in 30 minutes

---

## Prerequisites

```bash
# Check Node.js version (need 18+)
node --version

# If not installed, visit: https://nodejs.org
```

---

## Step 1: Setup Package.json (5 minutes)

Create `/Users/adon/project/rabouquet-website/package.json`:

```json
{
  "name": "rabouquet-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/adapter-static": "^3.0.0",
    "@sveltejs/kit": "^2.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "svelte": "^4.2.8",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.10"
  }
}
```

Then run:
```bash
cd /Users/adon/project/rabouquet-website
npm install
```

---

## Step 2: Configure SvelteKit (2 minutes)

Create `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: ['*']
    }
  }
};
```

Create `vite.config.js`:

```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()]
});
```

---

## Step 3: Configure Tailwind (3 minutes)

Create `tailwind.config.js`:

```javascript
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FFC0CB',
        'primary-light': '#FFD6E0',
        'primary-dark': '#FFB6C1',
        'accent': '#FF69B4',
        'accent-dark': '#FF1493',
        'rose': '#E91E63',
        'whatsapp': '#25D366'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
```

Create `postcss.config.js`:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

Create `src/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Step 4: Create App Template (2 minutes)

Create `src/app.html`:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
    %sveltekit.head%
  </head>
  <body>
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
```

---

## Step 5: Create Business Config (2 minutes)

Create `src/lib/config.js`:

```javascript
export const businessConfig = {
  name: 'RABOUQUET.IN',
  tagline: 'Bouquet Shop',
  whatsapp: {
    number: '6285157572725',
    formatted: '+62 851-5757-2725',
    link: 'https://wa.me/6285157572725'
  },
  instagram: {
    handle: '@rabouquet.in',
    url: 'https://www.instagram.com/rabouquet.in/'
  },
  address: {
    street: 'Kampung Pajeleran Gunung',
    city: 'Bogor',
    country: 'Indonesia',
    postal: '16913',
    full: 'Kampung Pajeleran Gunung, Bogor, Indonesia 16913'
  }
};

export const whatsappMessage = (product = '') => {
  const base = 'Halo Rabouquet! Saya tertarik';
  return product ? `${base} dengan ${product}. Bisa info lebih lanjut?` : `${base} untuk memesan buket.`;
};
```

---

## Step 6: Create Basic Layout (5 minutes)

Create `src/routes/+layout.svelte`:

```svelte
<script>
  import '../app.css';
  import { businessConfig } from '$lib/config.js';
</script>

<div class="min-h-screen bg-gradient-to-b from-primary-light to-white">
  <!-- Header -->
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="text-2xl font-serif font-bold text-accent">
          {businessConfig.name}
        </div>
      </div>

      <nav class="hidden md:flex gap-6">
        <a href="/" class="text-gray-700 hover:text-accent transition-colors">Home</a>
        <a href="/products" class="text-gray-700 hover:text-accent transition-colors">Produk</a>
        <a href="/about" class="text-gray-700 hover:text-accent transition-colors">Tentang</a>
        <a href="/contact" class="text-gray-700 hover:text-accent transition-colors">Kontak</a>
      </nav>

      <a
        href={businessConfig.whatsapp.link}
        target="_blank"
        class="bg-whatsapp text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors text-sm font-semibold"
      >
        WhatsApp
      </a>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    <slot />
  </main>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-8 mt-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="font-serif text-xl font-bold text-primary mb-4">{businessConfig.name}</h3>
          <p class="text-gray-400">{businessConfig.tagline}</p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Kontak</h4>
          <p class="text-gray-400 mb-2">WhatsApp: {businessConfig.whatsapp.formatted}</p>
          <p class="text-gray-400 mb-2">Instagram: {businessConfig.instagram.handle}</p>
          <p class="text-gray-400">{businessConfig.address.full}</p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Menu</h4>
          <div class="flex flex-col gap-2">
            <a href="/" class="text-gray-400 hover:text-primary transition-colors">Home</a>
            <a href="/products" class="text-gray-400 hover:text-primary transition-colors">Produk</a>
            <a href="/about" class="text-gray-400 hover:text-primary transition-colors">Tentang</a>
            <a href="/contact" class="text-gray-400 hover:text-primary transition-colors">Kontak</a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Button -->
  <a
    href={businessConfig.whatsapp.link}
    target="_blank"
    class="fixed bottom-6 right-6 bg-whatsapp text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110 z-50"
    aria-label="WhatsApp"
  >
    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
</div>
```

---

## Step 7: Create Home Page (5 minutes)

Create `src/routes/+page.svelte`:

```svelte
<script>
  import { businessConfig, whatsappMessage } from '$lib/config.js';

  const features = [
    { icon: '🌹', title: 'Kualitas Premium', desc: 'Buket berkualitas tinggi dengan bahan pilihan' },
    { icon: '🎨', title: 'Custom Design', desc: 'Desain sesuai keinginan dan tema acara' },
    { icon: '⚡', title: 'Proses Cepat', desc: 'Pengerjaan cepat dan tepat waktu' },
    { icon: '💝', title: 'Berbagai Pilihan', desc: '8 jenis buket untuk berbagai momen' }
  ];

  const products = [
    { name: 'Buket Bunga Asli', icon: '🌹', price: 'Rp 100K - 500K' },
    { name: 'Buket Snack', icon: '🍫', price: 'Rp 100K - 400K' },
    { name: 'Buket Uang', icon: '💵', price: 'Custom' },
    { name: 'Buket Boneka', icon: '🧸', price: 'Rp 150K - 500K' }
  ];
</script>

<svelte:head>
  <title>Rabouquet.in - Toko Buket Bunga & Hadiah di Bogor</title>
  <meta name="description" content="Buket bunga asli, artificial, snack, uang, boneka, dan backdrop nikahan di Bogor. Pesan sekarang via WhatsApp!" />
</svelte:head>

<!-- Hero Section -->
<section class="container mx-auto px-4 py-16 text-center">
  <h1 class="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
    Hadirkan Momen Istimewa dengan
    <span class="text-accent">Buket dari Rabouquet</span>
  </h1>
  <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
    Buket cantik untuk berbagai momen spesial Anda. Dari bunga asli, snack, uang, hingga boneka.
  </p>
  <a
    href={`${businessConfig.whatsapp.link}?text=${encodeURIComponent(whatsappMessage())}`}
    target="_blank"
    class="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl hover:scale-105"
  >
    Pesan Sekarang via WhatsApp
  </a>
</section>

<!-- Features Section -->
<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-serif font-bold text-center mb-12">Kenapa Pilih Rabouquet?</h2>
    <div class="grid md:grid-cols-4 gap-8">
      {#each features as feature}
        <div class="text-center p-6 rounded-lg hover:bg-primary-light transition-colors">
          <div class="text-5xl mb-4">{feature.icon}</div>
          <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
          <p class="text-gray-600">{feature.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Products Preview Section -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-serif font-bold text-center mb-12">Produk Unggulan Kami</h2>
  <div class="grid md:grid-cols-4 gap-6 mb-8">
    {#each products as product}
      <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center">
        <div class="text-6xl mb-4">{product.icon}</div>
        <h3 class="font-semibold text-lg mb-2">{product.name}</h3>
        <p class="text-accent font-bold mb-4">{product.price}</p>
        <a
          href={`${businessConfig.whatsapp.link}?text=${encodeURIComponent(whatsappMessage(product.name))}`}
          target="_blank"
          class="inline-block bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm"
        >
          Pesan
        </a>
      </div>
    {/each}
  </div>
  <div class="text-center">
    <a href="/products" class="text-accent hover:text-accent-dark font-semibold text-lg">
      Lihat Semua Produk →
    </a>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-primary to-accent py-16">
  <div class="container mx-auto px-4 text-center text-white">
    <h2 class="text-4xl font-serif font-bold mb-4">Siap Memesan Buket Impian Anda?</h2>
    <p class="text-xl mb-8">Hubungi kami sekarang via WhatsApp untuk konsultasi gratis!</p>
    <a
      href={`${businessConfig.whatsapp.link}?text=${encodeURIComponent(whatsappMessage())}`}
      target="_blank"
      class="inline-block bg-white text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
    >
      Chat via WhatsApp
    </a>
  </div>
</section>
```

---

## Step 8: Create Placeholder Pages (3 minutes)

Create `src/routes/products/+page.svelte`:

```svelte
<script>
  import { businessConfig } from '$lib/config.js';
</script>

<svelte:head>
  <title>Katalog Produk - Rabouquet.in</title>
</svelte:head>

<div class="container mx-auto px-4 py-16">
  <h1 class="text-4xl font-serif font-bold text-center mb-8">Katalog Produk Kami</h1>
  <p class="text-center text-gray-600 mb-12">8 jenis buket untuk berbagai momen istimewa Anda</p>

  <div class="text-center">
    <p class="text-lg text-gray-700 mb-8">Halaman produk dalam pengembangan. Silakan hubungi kami via WhatsApp untuk melihat katalog lengkap!</p>
    <a
      href={businessConfig.whatsapp.link}
      target="_blank"
      class="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-colors"
    >
      Chat via WhatsApp
    </a>
  </div>
</div>
```

Create `src/routes/about/+page.svelte`:

```svelte
<svelte:head>
  <title>Tentang Kami - Rabouquet.in</title>
</svelte:head>

<div class="container mx-auto px-4 py-16">
  <h1 class="text-4xl font-serif font-bold text-center mb-8">Tentang Rabouquet</h1>
  <div class="max-w-3xl mx-auto prose prose-lg">
    <p class="text-gray-700 mb-4">
      Rabouquet adalah toko buket terpercaya di Bogor yang menyediakan berbagai jenis buket untuk momen spesial Anda.
    </p>
    <p class="text-gray-700">
      Dengan dedikasi untuk kualitas dan kepuasan pelanggan, kami menawarkan 8 jenis buket berbeda - dari bunga asli, artificial, snack, uang, boneka, hingga backdrop nikahan.
    </p>
  </div>
</div>
```

Create `src/routes/contact/+page.svelte`:

```svelte
<script>
  import { businessConfig } from '$lib/config.js';
</script>

<svelte:head>
  <title>Kontak - Rabouquet.in</title>
</svelte:head>

<div class="container mx-auto px-4 py-16">
  <h1 class="text-4xl font-serif font-bold text-center mb-12">Hubungi Kami</h1>

  <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
    <div class="space-y-6">
      <div>
        <h3 class="font-semibold text-lg mb-2">WhatsApp</h3>
        <a href={businessConfig.whatsapp.link} target="_blank" class="text-accent hover:text-accent-dark">
          {businessConfig.whatsapp.formatted}
        </a>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-2">Instagram</h3>
        <a href={businessConfig.instagram.url} target="_blank" class="text-accent hover:text-accent-dark">
          {businessConfig.instagram.handle}
        </a>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-2">Alamat</h3>
        <p class="text-gray-700">{businessConfig.address.full}</p>
      </div>

      <div class="pt-6">
        <a
          href={businessConfig.whatsapp.link}
          target="_blank"
          class="block w-full bg-whatsapp text-white text-center px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
        >
          Chat via WhatsApp
        </a>
      </div>
    </div>
  </div>
</div>
```

---

## Step 9: Test the Site (3 minutes)

```bash
# Start dev server
npm run dev

# Open browser to: http://localhost:5173

# Test navigation:
# - Home page
# - Products page
# - About page
# - Contact page
# - Click WhatsApp buttons
```

---

## Step 10: Test Production Build (2 minutes)

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Check build output in /build directory
```

---

## Success Criteria

After completing all steps, you should have:

✅ Working SvelteKit site with 4 pages
✅ Pink color scheme matching brand
✅ Responsive navigation with header and footer
✅ WhatsApp integration (floating button + CTAs)
✅ Business contact information displayed
✅ Static site generation working
✅ Production build ready

---

## Next Steps

After basic setup is working:

1. **Add Logo:** Place logo file at `/static/logo.png` and update Header component
2. **Enhance Products Page:** Add full product catalog with filtering
3. **Add Product Data:** Create comprehensive product data in `src/lib/products.js`
4. **Docker Setup:** Create Dockerfile and docker-compose.yml for local development
5. **SEO Enhancement:** Add more detailed meta tags and structured data
6. **Image Optimization:** Add product images and optimize them
7. **Deploy to Vercel:** Connect repository and deploy

---

## Troubleshooting

**"Cannot find module" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind classes not working:**
- Check `postcss.config.js` exists
- Check `src/app.css` imports tailwind
- Check `+layout.svelte` imports `../app.css`

**Build errors:**
```bash
# Clear SvelteKit cache
rm -rf .svelte-kit
npm run build
```

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Maintenance
npm install <package>    # Install new package
rm -rf node_modules      # Reset node_modules
npm install              # Reinstall dependencies
```

---

**Estimated Total Time:** 30 minutes
**Result:** Working website ready for customization and deployment
