# RABOUQUET.IN - Bouquet Shop Website

Elegant marketing website for Rabouquet, a bouquet business in Bogor, Indonesia.

## 🚨 PROJECT STATUS

**Current State:** Project structure initialized, implementation pending

**Created:**
- ✅ Directory structure (`src/lib/components`, `src/routes/*`)
- ✅ Claude Flow coordination setup
- ✅ Project documentation

**Pending Implementation:**
- ⏳ SvelteKit configuration files
- ⏳ Component implementations
- ⏳ Page implementations
- ⏳ Docker setup
- ⏳ Business configuration files
- ⏳ Product data

---

## 🚀 Quick Start with Docker (When Implemented)

```bash
# Start development server
docker-compose up

# Visit http://localhost:5173
```

---

## 📦 Required Implementation Steps

### 1. Project Setup (Agent 1 - Pending)

**Package Configuration (`package.json`):**
```json
{
  "name": "rabouquet-website",
  "version": "1.0.0",
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

**SvelteKit Configuration (`svelte.config.js`):**
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

**TailwindCSS Configuration (`tailwind.config.js`):**
```javascript
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Pink theme matching logo
        'primary': '#FFC0CB',      // Light pink
        'primary-light': '#FFD6E0',
        'primary-dark': '#FFB6C1',
        'accent': '#FF69B4',       // Hot pink for CTAs
        'accent-dark': '#FF1493',
        'rose': '#E91E63',
        'whatsapp': '#25D366'      // WhatsApp green
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

**Docker Configuration (`Dockerfile`):**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
```

**Docker Compose (`docker-compose.yml`):**
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev -- --host
```

**Business Configuration (`src/lib/config.js`):**
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
  },
  location: {
    lat: -6.5950,
    lng: 106.8160
  }
};
```

---

### 2. Component Library (Agent 2 - Pending)

**Required Components in `src/lib/components/`:**

- `Button.svelte` - Primary, secondary, WhatsApp variants
- `ProductCard.svelte` - Product display with image, title, description, CTA
- `Hero.svelte` - Hero section for home page
- `Header.svelte` - Navigation with logo and mobile menu
- `Footer.svelte` - Contact info and social links
- `Section.svelte` - Consistent section wrapper
- `CategoryFilter.svelte` - Product category filtering
- `WhatsAppButton.svelte` - Floating and inline WhatsApp CTAs

**Example Button Component:**
```svelte
<!-- src/lib/components/Button.svelte -->
<script>
  export let variant = 'primary'; // primary, secondary, whatsapp
  export let href = null;
  export let type = 'button';
</script>

{#if href}
  <a {href} class="btn btn-{variant}" target={variant === 'whatsapp' ? '_blank' : '_self'}>
    <slot />
  </a>
{:else}
  <button {type} class="btn btn-{variant}">
    <slot />
  </button>
{/if}

<style>
  .btn {
    @apply px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg;
  }
  .btn-primary {
    @apply bg-accent text-white hover:bg-accent-dark;
  }
  .btn-secondary {
    @apply bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white;
  }
  .btn-whatsapp {
    @apply bg-whatsapp text-white hover:bg-green-600;
  }
</style>
```

---

### 3. Pages (Agent 3 - Pending)

**Home Page (`src/routes/+page.svelte`):**
```svelte
<script>
  import Hero from '$lib/components/Hero.svelte';
  import Section from '$lib/components/Section.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import Button from '$lib/components/Button.svelte';
  import { businessConfig } from '$lib/config.js';
</script>

<svelte:head>
  <title>Rabouquet.in - Toko Buket Bunga & Hadiah di Bogor</title>
  <meta name="description" content="Buket bunga asli, artificial, snack, uang, boneka, dan backdrop nikahan di Bogor. Pesan sekarang via WhatsApp!" />
</svelte:head>

<Hero />

<Section>
  <h2>Buket untuk Berbagai Momen Istimewa</h2>
  <!-- Featured products -->
</Section>

<Section>
  <h2>Kenapa Pilih Rabouquet?</h2>
  <!-- Why choose us -->
</Section>

<!-- WhatsApp CTA -->
```

**Products Page (`src/routes/products/+page.svelte`):**
- Category filter
- Product grid (8 product types)
- WhatsApp ordering CTAs

**About Page (`src/routes/about/+page.svelte`):**
- Company story
- Values/mission
- Location information

**Contact Page (`src/routes/contact/+page.svelte`):**
- Business information display
- WhatsApp CTA
- Instagram link
- Google Maps embed (Bogor location)

---

### 4. Product Data (Agent 4 - Pending)

**Product Data Structure (`src/lib/products.js`):**
```javascript
export const productCategories = [
  {
    id: 'bunga-asli',
    name: 'Buket Bunga Asli',
    description: 'Rangkaian bunga segar seperti mawar, tulip, dan lily',
    icon: '🌹',
    priceRange: 'Rp 100.000 - Rp 500.000'
  },
  {
    id: 'bunga-artificial',
    name: 'Buket Bunga Artificial',
    description: 'Bunga artificial yang awet dan elegan',
    icon: '🌸',
    priceRange: 'Rp 80.000 - Rp 350.000'
  },
  {
    id: 'pita-satin',
    name: 'Buket Pita Satin',
    description: 'Kreasi buket dari pita satin berwarna-warni',
    icon: '🎀',
    priceRange: 'Rp 75.000 - Rp 250.000'
  },
  {
    id: 'kawat-bulu',
    name: 'Buket Kawat Bulu',
    description: 'Buket unik dari kawat bulu (pipe cleaner)',
    icon: '🧸',
    priceRange: 'Rp 50.000 - Rp 200.000'
  },
  {
    id: 'snack',
    name: 'Buket Snack',
    description: 'Rangkaian snack favorit dalam bentuk buket',
    icon: '🍫',
    priceRange: 'Rp 100.000 - Rp 400.000'
  },
  {
    id: 'uang',
    name: 'Buket Uang',
    description: 'Money bouquet untuk hadiah spesial',
    icon: '💵',
    priceRange: 'Custom sesuai budget'
  },
  {
    id: 'boneka',
    name: 'Buket Boneka',
    description: 'Buket boneka lucu untuk hadiah romantis',
    icon: '🧸',
    priceRange: 'Rp 150.000 - Rp 500.000'
  },
  {
    id: 'backdrop',
    name: 'Backdrop Nikahan',
    description: 'Sewa backdrop untuk acara pernikahan',
    icon: '💐',
    priceRange: 'Rp 500.000 - Rp 2.000.000'
  }
];

export const whatsappTemplates = {
  general: 'Halo Rabouquet! Saya tertarik untuk memesan buket.',
  product: (productName) => `Halo Rabouquet! Saya tertarik dengan ${productName}. Bisa info lebih lanjut?`,
  custom: 'Halo Rabouquet! Saya ingin pesan buket custom. Bisa dibantu?'
};
```

---

### 5. SEO & Performance (Agent 5 - Pending)

**App HTML Template (`src/app.html`):**
```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:image" content="%sveltekit.assets%/logo.png" />

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "RABOUQUET.IN",
      "description": "Toko buket bunga dan hadiah di Bogor",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kampung Pajeleran Gunung",
        "addressLocality": "Bogor",
        "addressCountry": "ID",
        "postalCode": "16913"
      },
      "telephone": "+6285157572725",
      "url": "https://rabouquet.in"
    }
    </script>

    %sveltekit.head%
  </head>
  <body>
    <div>%sveltekit.body%</div>
  </body>
</html>
```

**WhatsApp Integration:**
- Use `https://wa.me/6285157572725?text=[message]` format
- Floating WhatsApp button (bottom right, fixed position)
- Multiple strategic CTA placements throughout site
- Pre-filled message templates for different product categories

---

## 📁 Expected Project Structure

```
rabouquet-website/
├── src/
│   ├── routes/                    # Pages
│   │   ├── +page.svelte          # Home page
│   │   ├── +layout.svelte        # Layout with header/footer
│   │   ├── products/
│   │   │   └── +page.svelte      # Products catalog
│   │   ├── about/
│   │   │   └── +page.svelte      # About page
│   │   └── contact/
│   │       └── +page.svelte      # Contact page
│   ├── lib/
│   │   ├── components/           # Reusable components
│   │   │   ├── Button.svelte
│   │   │   ├── ProductCard.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Section.svelte
│   │   │   ├── CategoryFilter.svelte
│   │   │   └── WhatsAppButton.svelte
│   │   ├── config.js             # Business configuration
│   │   ├── products.js           # Product data
│   │   └── content.js            # Content strings (Bahasa Indonesia)
│   └── app.html                  # HTML template
├── static/
│   ├── logo.png                  # Rabouquet logo (pink with flowers)
│   ├── favicon.png               # Favicon
│   └── robots.txt                # SEO robots file
├── Dockerfile                    # Docker configuration
├── docker-compose.yml            # Docker Compose setup
├── package.json                  # Dependencies
├── svelte.config.js              # SvelteKit config
├── tailwind.config.js            # Tailwind customization
├── postcss.config.js             # PostCSS config
├── vite.config.js                # Vite config
└── README.md                     # This file
```

---

## 🎨 Design System

### Color Palette (Tailwind)
- **Primary Pink:** `#FFC0CB` - Soft, elegant pink matching logo
- **Primary Light:** `#FFD6E0` - Lighter pink for backgrounds
- **Primary Dark:** `#FFB6C1` - Slightly darker pink
- **Accent:** `#FF69B4` - Vibrant pink for CTAs
- **Accent Dark:** `#FF1493` - Deep pink for hover states
- **Rose:** `#E91E63` - Rose accent
- **WhatsApp:** `#25D366` - WhatsApp green for CTA buttons

### Typography
- **Headings:** Playfair Display (serif) - Elegant, classic
- **Body:** Inter (sans-serif) - Clean, modern, readable

### Component Patterns
- Rounded buttons with shadow effects
- Soft pink glows on hover
- Smooth transitions (300ms)
- Card-based layouts with gentle shadows
- Mobile-first responsive design

---

## 🛠️ Development Workflow

### Using Docker (Recommended)
```bash
# Start development server with hot reload
docker-compose up

# Install new packages
docker-compose exec web npm install <package-name>

# Rebuild containers
docker-compose up --build

# Stop containers
docker-compose down
```

### Without Docker
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment to Vercel

### Prerequisites
- GitHub repository
- Vercel account (free tier)

### Deployment Steps

1. **Test Production Build Locally:**
```bash
npm run build
npm run preview
```

2. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

3. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect SvelteKit settings
   - Click "Deploy"

4. **Automatic Deployments:**
   - Every push to `main` branch triggers auto-deployment
   - Preview deployments for pull requests

### Vercel Configuration
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Framework Preset:** SvelteKit
- **Node Version:** 18.x or higher

---

## 📞 Business Contact Information

- **Business Name:** RABOUQUET.IN - Bouquet Shop
- **WhatsApp:** [+62 851-5757-2725](https://wa.me/6285157572725)
- **Instagram:** [@rabouquet.in](https://www.instagram.com/rabouquet.in/)
- **Location:** Kampung Pajeleran Gunung, Bogor, Indonesia 16913

---

## 🎯 Features Checklist

### Implemented
- ✅ Directory structure created
- ✅ Project documentation

### Pending Implementation
- ⏳ SvelteKit static adapter configuration
- ⏳ TailwindCSS with pink theme setup
- ⏳ Reusable component library (8 components)
- ⏳ All pages (Home, Products, About, Contact)
- ⏳ Product data for 8 bouquet types
- ⏳ Business configuration file
- ⏳ WhatsApp integration (wa.me links)
- ⏳ Instagram integration
- ⏳ SEO optimization (meta tags, structured data)
- ⏳ Responsive design (mobile-first)
- ⏳ Docker development environment
- ⏳ Logo integration in header
- ⏳ Floating WhatsApp button
- ⏳ All content in Bahasa Indonesia

---

## 🛠️ Customization Guide

### Changing Business Information
Edit `src/lib/config.js`:
```javascript
export const businessConfig = {
  whatsapp: {
    number: 'YOUR_NUMBER_HERE', // Without + or spaces
    formatted: '+XX XXX-XXXX-XXXX'
  },
  instagram: {
    handle: '@your_handle',
    url: 'https://www.instagram.com/your_handle/'
  }
  // ... other settings
};
```

### Changing Logo
Replace `/static/logo.png` with your logo:
- Recommended size: 200x200px
- Format: PNG with transparency
- Optimize for web (< 100KB)

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#YOUR_COLOR',
      'accent': '#YOUR_ACCENT'
    }
  }
}
```

### Adding New Products
Edit `src/lib/products.js`:
```javascript
export const productCategories = [
  // Add your product here
  {
    id: 'your-product-id',
    name: 'Product Name',
    description: 'Product description',
    icon: '🎁',
    priceRange: 'Rp XX.XXX - Rp XXX.XXX'
  }
];
```

---

## 🚨 Troubleshooting

### Docker Issues

**Port 5173 already in use:**
```yaml
# In docker-compose.yml, change:
ports:
  - "5174:5173"  # Use different host port
```

**Hot Module Replacement (HMR) not working:**
```yaml
# Ensure volumes are properly mounted in docker-compose.yml
volumes:
  - .:/app
  - /app/node_modules
```

**Container build errors:**
```bash
# Remove containers and rebuild
docker-compose down
docker-compose up --build
```

### Build Issues

**Node version errors:**
- Ensure you're using Node 18 or higher
- Dockerfile uses `node:18-alpine`

**Dependency errors:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tailwind classes not working:**
```bash
# Ensure PostCSS is configured
# Check postcss.config.js exists with tailwindcss plugin
```

---

## 📋 8 Product Types

1. **Buket Bunga Asli** - Fresh flower bouquets (roses, tulips, lilies)
2. **Buket Bunga Artificial** - Artificial flower arrangements
3. **Buket Pita Satin** - Satin ribbon bouquets
4. **Buket Kawat Bulu** - Pipe cleaner/chenille stem bouquets
5. **Buket Snack** - Snack arrangement bouquets
6. **Buket Uang** - Money bouquets
7. **Buket Boneka** - Plush toy bouquets
8. **Backdrop Nikahan** - Wedding backdrop rentals

---

## 🎓 Implementation Notes

### For Developers

**Component Best Practices:**
- Keep components under 200 lines
- Use props for customization
- Document prop types with JSDoc
- Follow mobile-first responsive design
- Use Tailwind utility classes

**Code Style:**
- Use consistent naming (camelCase for JS, kebab-case for CSS)
- Add comments for complex logic
- Keep functions small and focused
- Use semantic HTML elements

**Performance:**
- Lazy load images where possible
- Optimize images (WebP format, proper sizing)
- Minimize bundle size (code splitting)
- Use static generation for all pages

---

## 📄 License

This project is proprietary and confidential.
© 2024 RABOUQUET.IN. All rights reserved.

---

## 🙏 Support

For technical questions or issues with the website implementation, please refer to:
- SvelteKit Documentation: https://kit.svelte.dev
- TailwindCSS Documentation: https://tailwindcss.com
- Docker Documentation: https://docs.docker.com

For business inquiries, contact via WhatsApp: +62 851-5757-2725

---

**Built with SvelteKit, TailwindCSS, and ❤️**
