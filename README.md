# RABOUQUET.IN - Bouquet Shop Website

Elegant marketing website for Rabouquet, a bouquet business in Bogor, Indonesia.

## 🚀 Project Status

**Status:** ✅ **COMPLETE & PRODUCTION-READY**

This is a fully functional Vue 3 application with all features implemented and ready for deployment.

---

## 📦 Tech Stack

- **Frontend Framework:** Vue 3 (Composition API with `<script setup>`)
- **Build Tool:** Vite 5.0
- **Styling:** TailwindCSS 3.4 with custom pink/rose theme
- **Routing:** Vue Router 4.2.5
- **Language:** JavaScript
- **Deployment:** Vercel (via GitHub Actions)

---

## 🎨 Features

### ✅ Implemented
- Modern Vue 3 with Composition API
- Responsive mobile-first design
- 9 reusable components
- 4 complete pages (Home, Products, About, Contact)
- 30 products across 8 categories
- WhatsApp integration for ordering
- Instagram integration
- SEO optimized (meta tags, structured data, sitemap)
- Docker development environment
- Vercel deployment pipeline
- Pink/rose themed design system

### 📁 Project Structure

```
rabouquet-website/
├── src/
│   ├── assets/                # CSS files
│   │   └── app.css           # Tailwind imports
│   ├── components/           # Vue components
│   │   ├── Button.vue
│   │   ├── CategoryFilter.vue
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── ProductCard.vue
│   │   ├── Section.vue
│   │   └── WhatsAppButton.vue
│   ├── pages/                # Page components
│   │   ├── Home.vue
│   │   ├── Products.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── lib/                  # Utilities & data
│   │   ├── config.js         # Business configuration
│   │   ├── products.js       # Product data (30 products)
│   │   ├── content.js        # Content strings (Bahasa Indonesia)
│   │   ├── seo.js            # SEO utilities & structured data
│   │   └── imageOptimization.js
│   ├── App.vue              # Root component
│   └── main.js              # Application entry
├── public/                  # Static assets
│   ├── logo.png
│   ├── favicon.png
│   ├── robots.txt
│   └── sitemap.xml
├── docs/                    # Documentation
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose setup
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind customization
└── package.json            # Dependencies

```

---

## 🚀 Quick Start

### Using Docker (Recommended)

```bash
# Start development server
docker-compose up

# Visit http://localhost:5173
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

## 📞 Business Information

- **Business Name:** RABOUQUET.IN
- **WhatsApp:** [+62 851-5757-2725](https://wa.me/6285157572725)
- **Instagram:** [@rabouquet.in](https://www.instagram.com/rabouquet.in/)
- **Location:** Kampung Pajeleran Gunung, Bogor, Indonesia 16913
- **Hours:** Senin - Minggu: 08:00 - 20:00 WIB

---

## 🎯 Product Categories

1. **Buket Bunga Asli** - Fresh flower bouquets (roses, tulips, lilies)
2. **Buket Bunga Artificial** - Artificial flower arrangements
3. **Buket Pita Satin** - Satin ribbon bouquets
4. **Buket Kawat Bulu** - Pipe cleaner/chenille stem bouquets
5. **Buket Snack** - Snack arrangement bouquets
6. **Buket Uang** - Money bouquets
7. **Buket Boneka** - Plush toy bouquets
8. **Backdrop Nikahan** - Wedding backdrop rentals

---

## 🎨 Design System

### Color Palette (TailwindCSS)
- **Pink Shades:** 50-900 (primary brand colors)
- **Rose Shades:** 50-900 (accent colors)
- **WhatsApp Green:** #25D366 (CTA buttons)

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

## 🌐 Deployment

### Vercel (Current)

The project is configured for automatic deployment to Vercel:

1. **Automatic Deployments:**
   - Every push to `main` branch triggers auto-deployment
   - Pull requests get preview deployments

2. **GitHub Actions Workflow:**
   - Located at `.github/workflows/vercel-deploy.yml`
   - Runs build verification before deploy
   - Integrates with Vercel deployment hook

3. **Manual Deployment:**
```bash
# Build production bundle
npm run build

# Test production build locally
npm run preview

# Push to main branch (triggers auto-deploy)
git push origin main
```

### Vercel Configuration
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework Preset:** Vite
- **Node Version:** 18.x or higher

---

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server on http://localhost:5173

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Docker
docker-compose up    # Start with Docker
docker-compose down  # Stop Docker containers
```

### Adding New Products

Edit `src/lib/products.js`:

```javascript
export const products = [
  {
    id: 'your-product-id',
    name: 'Product Name',
    category: 'bunga-asli',
    description: 'Product description',
    priceRange: 'Rp XX.XXX - Rp XXX.XXX',
    image: '/images/products/your-image.jpg'
  }
];
```

### Customizing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      pink: { /* your pink shades */ },
      rose: { /* your rose shades */ }
    }
  }
}
```

### Customizing Business Information

Edit `src/lib/config.js`:

```javascript
export const config = {
  business: {
    name: 'YOUR_BUSINESS_NAME',
    phone: '+62XXXXXXXXXXX',
    whatsapp: '62XXXXXXXXXXX',
    // ... other settings
  }
};
```

---

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
- Path alias `@` for cleaner imports
- Manual chunk splitting for better caching
- Terser minification with console removal
- Server config for Docker compatibility

### TailwindCSS Configuration (`tailwind.config.js`)
- Custom pink/rose color palette (10 shades each)
- WhatsApp green for CTA buttons
- Custom fonts (Playfair Display + Inter)
- Custom animations (blob, pulse, ping)
- Custom box shadows for pink glow effects

### Docker Configuration
- **Development:** Hot module replacement support
- **Production:** Multi-stage build with optimization
- **Port:** 5173 (dev), 3000 (production)

---

## 📈 SEO & Performance

### SEO Features
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD) for LocalBusiness
- ✅ Sitemap.xml with all pages
- ✅ Robots.txt properly configured
- ✅ Semantic HTML
- ✅ Indonesian language (lang="id")

### Performance Features
- ✅ Code splitting (vendor chunks)
- ✅ Terser minification
- ✅ CSS purging via Tailwind
- ✅ Lazy loading utilities
- ✅ Optimized bundle size

---

## 🐳 Docker Setup

### Development Environment

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

### Production Build

```dockerfile
# Multi-stage Dockerfile
FROM node:18-alpine AS builder
# Build stage...

FROM node:18-alpine AS production
# Production stage with serve
```

---

## 🤝 Contributing

### Code Style
- Use Vue 3 Composition API with `<script setup>`
- Follow mobile-first responsive design
- Use Tailwind utility classes
- Keep components under 200 lines
- Add comments for complex logic

### Component Best Practices
- Use props for customization
- Emit events for parent communication
- Keep components focused and reusable
- Use semantic HTML elements

---

## 📋 Maintenance

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install <package>@latest
```

### Monitoring

The application includes:
- GitHub Actions workflow for CI/CD
- Build verification before deployment
- Error tracking (implement analytics if needed)

---

## 🚨 Troubleshooting

### Port Already in Use

```bash
# Find and kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 5174
```

### Docker Issues

```bash
# Remove containers and rebuild
docker-compose down
docker-compose up --build

# Clear Docker cache
docker system prune -a
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

---

## 📄 License

This project is proprietary and confidential.
© 2024 RABOUQUET.IN. All rights reserved.

---

## 🙏 Support

### Technical Documentation
- Vue 3: https://vuejs.org
- Vite: https://vitejs.dev
- TailwindCSS: https://tailwindcss.com
- Vue Router: https://router.vuejs.org

### Business Inquiries
Contact via WhatsApp: +62 851-5757-2725

---

**Built with Vue 3, Vite, TailwindCSS, and ❤️ in Bogor**
