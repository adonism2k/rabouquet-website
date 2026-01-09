# Quick Reference Guide - Rabouquet.in

## 🚀 Essential Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Code formatting
npm run format

# Linting
npm run lint
```

---

## 📁 Project Structure

```
rabouquet-website/
├── src/
│   ├── lib/
│   │   ├── seo.js                      # SEO metadata & WhatsApp utils
│   │   └── imageOptimization.js        # Image optimization utils
│   ├── components/
│   │   ├── WhatsAppButton.svelte       # WhatsApp contact button
│   │   └── OptimizedImage.svelte       # Lazy-loading image
│   └── routes/
│       └── +layout.svelte              # Global layout with SEO
├── static/
│   ├── sitemap.xml                     # XML sitemap
│   ├── robots.txt                      # Robots directives
│   ├── favicon.png                     # Site favicon
│   └── logo.png                        # Business logo
├── docs/
│   ├── WhatsApp-Integration-Guide.md
│   ├── SEO-Implementation-Guide.md
│   ├── Performance-Optimization-Guide.md
│   └── Implementation-Summary.md
├── svelte.config.js                    # SvelteKit config
├── vite.config.js                      # Vite build config
└── package.json                        # Dependencies
```

---

## 🎯 Quick Code Snippets

### SEO Metadata
```javascript
import { getPageMetadata } from '$lib/seo.js';
const metadata = getPageMetadata('products');
```

### WhatsApp Button
```svelte
<script>
  import WhatsAppButton from '$components/WhatsAppButton.svelte';
  import { whatsappMessages } from '$lib/seo.js';
</script>

<!-- Floating -->
<WhatsAppButton variant="floating" />

<!-- CTA -->
<WhatsAppButton variant="cta" message={whatsappMessages.order}>
  Pesan Sekarang
</WhatsAppButton>
```

### Optimized Image
```svelte
<script>
  import OptimizedImage from '$components/OptimizedImage.svelte';
</script>

<OptimizedImage
  src="/images/product.jpg"
  alt="Product"
  width={400}
  height={400}
  priority="auto"
  context="card"
/>
```

### WhatsApp Link
```javascript
import { getWhatsAppLink } from '$lib/seo.js';
const url = getWhatsAppLink('Halo! Saya ingin pesan buket.');
```

---

## 📋 Key Information

### Business Details
- **Name:** RABOUQUET.IN
- **Phone:** +6285157572725
- **WhatsApp:** 6285157572725
- **Address:** Kampung Pajeleran Gunung, Bogor 16913, Indonesia
- **Instagram:** @rabouquet.in

### SEO Titles (Indonesian)
- **Home:** "Rabouquet.in - Toko Buket Bunga & Hadiah di Bogor"
- **Products:** "Katalog Buket - Rabouquet.in | Bunga, Snack, Boneka & Lainnya"
- **About:** "Tentang Rabouquet.in - Toko Buket Terpercaya di Bogor"
- **Contact:** "Hubungi Kami - Rabouquet.in"

### Target Keywords
- buket bunga bogor
- toko buket bogor
- florist bogor
- buket wisuda bogor
- buket snack bogor
- custom bouquet

---

## 🎨 Design Tokens

### Colors
```css
/* WhatsApp */
--whatsapp-green: #25D366;
--whatsapp-dark: #128C7E;
--whatsapp-darker: #075E54;

/* Neutral */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-600: #6b7280;
```

### Spacing
```css
/* Button sizes */
--btn-sm: 48px;   /* 12x12 icon */
--btn-md: 56px;   /* 14x14 icon */
--btn-lg: 64px;   /* 16x16 icon */
```

---

## ⚡ Performance Targets

| Metric | Target |
|--------|--------|
| LCP | <2.5s |
| FID | <100ms |
| CLS | <0.1 |
| Bundle Size | <150 KB |
| Images | Lazy loaded |

---

## 🔗 Important URLs

- **Sitemap:** https://rabouquet.in/sitemap.xml
- **Robots:** https://rabouquet.in/robots.txt
- **WhatsApp:** https://wa.me/6285157572725

---

## 📱 WhatsApp Messages

```javascript
import { whatsappMessages } from '$lib/seo.js';

// Pre-defined messages:
whatsappMessages.general   // General inquiry
whatsappMessages.order     // Order request
whatsappMessages.custom    // Custom bouquet
whatsappMessages.inquiry   // Product inquiry
```

---

## 🛠️ Component Props

### WhatsAppButton
| Prop | Type | Default | Options |
|------|------|---------|---------|
| variant | string | 'floating' | 'floating', 'inline', 'cta' |
| size | string | 'md' | 'sm', 'md', 'lg' |
| message | string | general | Any string |

### OptimizedImage
| Prop | Type | Default | Options |
|------|------|---------|---------|
| src | string | required | Image URL |
| alt | string | required | Alt text |
| width | number | 400 | Any number |
| height | number | 300 | Any number |
| priority | string | 'auto' | 'high', 'low', 'auto' |
| context | string | 'card' | 'thumbnail', 'card', 'detail', 'hero' |

---

## 🎯 Next Agent Tasks

### Agent 1: Design & Branding
- Create logo.png (place in /static/)
- Design color scheme
- Create brand guidelines
- Design hero images

### Agent 2: Content & Pages
- Use `getPageMetadata()` for each page
- Add `<WhatsAppButton>` in strategic locations
- Use `<OptimizedImage>` for all images
- Follow SEO title structure

### Agent 3: Product Catalog
- Import `OptimizedImage` for product images
- Add WhatsApp CTA to each product card
- Use lazy loading (priority="auto")
- Set proper alt text for SEO

### Agent 4: Contact & Forms
- Prominent WhatsApp CTA on contact page
- Use `siteConfig` for business details
- Display phone number with WhatsApp button
- Add map integration

---

## ✅ Testing Checklist

- [ ] Run `npm install`
- [ ] Start dev server (`npm run dev`)
- [ ] Check all pages load
- [ ] Verify WhatsApp buttons work
- [ ] Test image lazy loading
- [ ] Check mobile responsiveness
- [ ] Validate SEO meta tags
- [ ] Build production (`npm run build`)
- [ ] Test production preview

---

## 📞 Support

For questions about:
- **SEO:** See `/docs/SEO-Implementation-Guide.md`
- **WhatsApp:** See `/docs/WhatsApp-Integration-Guide.md`
- **Performance:** See `/docs/Performance-Optimization-Guide.md`
- **Summary:** See `/docs/Implementation-Summary.md`

---

*Quick reference for Rabouquet.in development team*
