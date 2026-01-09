Create a static marketing website for "Rabouquet" (bouquet business) using SvelteKit with static adapter for Vercel deployment.

## Project Overview
Build a complete, production-ready marketing website with elegant/minimal design using pinkish color scheme. The site should be fully static, optimized for Vercel free tier, and include a product catalog system. Local development should use Docker Compose.

## Business Information (USE THESE EXACT DETAILS)
- **Business Name:** RABOUQUET.IN - Bouquet Shop
- **WhatsApp:** +6285157572725
- **Instagram:** https://www.instagram.com/rabouquet.in/
- **Location:** Kampung Pajeleran Gunung, Bogor, Indonesia 16913
- **Logo:** Provided (pink background with flowers, text "RABOUQUET.IN" with "BOUQUET SHOP" tagline)

---

## AGENT 1: Project Setup & Architecture
**Your focus: Foundation and configuration**

Set up the project structure:
- Initialize SvelteKit project with @sveltejs/adapter-static
- Configure TailwindCSS with custom pinkish color palette matching the logo:
  * Primary pink: similar to logo background (#FFC0CB, #FFB6C1 range)
  * Accent pink: deeper pink for CTAs
  * Light pink: for backgrounds/sections
  * Dark pink/rose: for text accents
  * Neutrals: whites, light grays
- Set up proper project structure: routes, components, lib folders
- Configure svelte.config.js for static generation
- Create vercel.json if needed
- Set up proper .gitignore

**Docker Setup for Local Development:**
- Create Dockerfile for Node.js development environment
- Create docker-compose.yml with:
  * SvelteKit dev server (with hot reload/HMR)
  * Volume mounts for live code changes
  * Port mapping (expose dev server port, suggest 5173)
  * Proper environment configuration
- Add .dockerignore
- Configure for optimal development experience (fast rebuilds, HMR working)

**Business Configuration:**
- Create `src/lib/config.js` with:
  * WhatsApp number: 6285157572725 (formatted for wa.me)
  * Instagram URL: https://www.instagram.com/rabouquet.in/
  * Business name: RABOUQUET.IN
  * Address: Kampung Pajeleran Gunung, Bogor, Indonesia 16913
- Add logo to `static/logo.png` (include placeholder + instructions to replace)

**Output:** Complete project scaffold with all configs and Docker setup ready

---

## AGENT 2: Design System & Reusable Components
**Your focus: UI components and design consistency**

Create a cohesive design system matching the logo aesthetic:
- Define Tailwind color palette with pinkish theme (matching logo colors)
- Choose elegant typography (suggest serif for headings, sans-serif for body - elegant/minimal feel)
- Create reusable components:
  * Button component (primary pink, secondary, WhatsApp green CTA variants)
  * ProductCard component (image, title, description, price range, CTA)
  * Section component (consistent spacing/padding)
  * Hero component
  * Navigation/Header (with logo, mobile hamburger menu)
  * Footer (with Instagram, WhatsApp, address)
  * CategoryFilter component
  * WhatsAppButton component (floating and inline variants)

Add subtle animations:
- Hover effects on cards and buttons (gentle pink glow)
- Smooth transitions
- Page transition effects
- Sparkle/shine effects (logo has sparkle elements)

**Coordinate with AGENT 3:** Provide component APIs/props structure
**Output:** Complete component library with examples

---

## AGENT 3: Pages & Content Structure
**Your focus: Page layouts and content organization**

Build all pages using components from AGENT 2:

**Home Page (+/src/routes/+page.svelte):**
- Hero section with tagline and WhatsApp CTA
  * Use: "Hadirkan Momen Istimewa dengan Buket dari Rabouquet" or similar
- Brief intro about Rabouquet (bouquet untuk berbagai momen)
- Featured products (3-4 items dari kategori terpopuler)
- Why choose us section (3-4 points: kualitas, custom, cepat, dll)
- Final CTA section with WhatsApp button

**Products Page (+/src/routes/products/+page.svelte):**
- Category filter/navigation
- Product grid (responsive)
- 8 total products to showcase:
  * 7 bouquet categories: Bunga Asli, Bunga Artificial, Pita Satin, Kawat Bulu, Snack, Uang, Boneka
  * 1 extra: Backdrop untuk Nikahan

**About Page (+/src/routes/about/+page.svelte):**
- Company story section (tentang Rabouquet)
- Values/mission section
- Location: Kampung Pajeleran Gunung, Bogor

**Contact Page (+/src/routes/contact/+page.svelte):**
- Business info:
  * WhatsApp: +62 851-5757-2725
  * Instagram: @rabouquet.in
  * Alamat: Kampung Pajeleran Gunung, Bogor, Indonesia 16913
- Prominent WhatsApp CTA button
- Google Maps embed placeholder for Bogor location
- Instagram feed link/button

**Coordinate with AGENT 2:** Use provided components
**Coordinate with AGENT 4:** Pass data structure for products
**Output:** All page layouts with Indonesian content

---

## AGENT 4: Data & Content Management
**Your focus: Product data and content structure**

Create product data structure:
- Design JSON/JS structure for products (id, name, category, description, price range, image placeholder)
- Create sample data for all 8 product types with Indonesian names:
  * Buket Bunga Asli (fresh roses, tulips, etc.)
  * Buket Bunga Artificial (artificial arrangements)
  * Buket Pita Satin (satin ribbon bouquets)
  * Buket Kawat Bulu (pipe cleaner/chenille bouquets)
  * Buket Snack (snack arrangements)
  * Buket Uang (money bouquets)
  * Buket Boneka (plush toy bouquets)
  * Backdrop Nikahan (wedding backdrop rentals)

Write content in Bahasa Indonesia:
- Product names and descriptions
- Category descriptions
- Page content (hero taglines, about text, etc.)
- WhatsApp message templates:
  * "Halo Rabouquet! Saya tertarik dengan [product]. Bisa info lebih lanjut?"

Set up product filtering logic:
- Category filtering system
- All/specific category views

**Coordinate with AGENT 3:** Provide data structure
**Output:** Product data file and content constants

---

## AGENT 5: SEO & Performance Optimization
**Your focus: Technical optimization**

Implement SEO best practices:
- Page titles and meta tags:
  * Home: "Rabouquet.in - Toko Buket Bunga & Hadiah di Bogor"
  * Products: "Katalog Buket - Rabouquet.in"
  * Etc.
- Meta descriptions in Indonesian
- Open Graph tags (og:image use logo)
- Add structured data for LocalBusiness (JSON-LD):
  * Name: RABOUQUET.IN
  * Address: Kampung Pajeleran Gunung, Bogor, Indonesia 16913
  * Telephone: +6285157572725
- Set up sitemap generation
- Configure robots.txt

Optimize performance:
- Image optimization strategy (use placeholder service or SVG placeholders)
- Lazy loading where appropriate
- Prerender configuration
- Minimize bundle size

WhatsApp Integration:
- Implement wa.me link: `https://wa.me/6285157572725?text=[pre-filled message]`
- Create WhatsApp button component (use WhatsApp green #25D366)
- Add floating WhatsApp button (bottom right, mobile-friendly)
- Multiple strategic CTA placements

**Output:** SEO configs, optimization setup, WhatsApp integration

---

## AGENT 6: Final Integration & Documentation
**Your focus: Assembly and developer documentation**

Integrate all parts:
- Ensure logo is properly placed in header
- Verify all contact info matches business details
- Ensure all pages use design system correctly
- Verify routing works properly
- Test responsive behavior (mobile, tablet, desktop)
- Verify static generation works
- Check all WhatsApp links go to: wa.me/6285157572725
- Check Instagram link goes to: instagram.com/rabouquet.in

Create comprehensive documentation:
- README with:
  * **Quick Start with Docker:**
```bash
    docker-compose up
    # Visit http://localhost:5173
```
  * **Development workflow:**
    - How to access the dev server
    - How to install new npm packages in Docker
    - Troubleshooting common Docker issues
  * **Customization:**
    - Logo location: `/static/logo.png`
    - Colors: `tailwind.config.js`
    - Business info: `src/lib/config.js`
    - Content: `src/lib/content.js` or data files
  * **Deployment to Vercel:**
    - `npm run build` to test production build
    - Connect to Vercel via GitHub
    - Auto-deploy on push
- Code comments for key customization points
- Document component props and usage

**Output:** Production-ready project with full documentation

---

## Hive-Mind Coordination Notes

**Shared Context:**
- Design language: Elegant, minimal, vibrant pinkish colors (match logo)
- Target: Static site, Vercel free tier
- Language: Bahasa Indonesia for all content
- Key feature: WhatsApp integration to +6285157572725
- Development: Docker Compose with hot reload
- Location: Bogor, Indonesia

**Business Assets:**
- Logo: Pink background, floral design, "RABOUQUET.IN - BOUQUET SHOP"
- Colors: Soft pinks matching logo aesthetic
- WhatsApp: +62 851-5757-2725
- Instagram: @rabouquet.in

**Critical Handoffs:**
- AGENT 1 → All: Docker environment + config file with business details
- AGENT 2 → AGENT 3: Component APIs (especially WhatsApp buttons)
- AGENT 4 → AGENT 3: Product data structure with Indonesian content
- All agents → AGENT 6: Final integration checklist

**Quality Gates:**
- Docker Compose setup with working HMR
- Mobile-first responsive design
- Fast loading (<3s)
- All Indonesian content
- WhatsApp integration working correctly
- Instagram link present
- Clean, maintainable code
- Logo integrated in header

---

Generate a complete, production-ready website that:
1. Can be developed locally using `docker-compose up`
2. Uses the exact business information provided
3. Has elegant pink design matching the logo
4. All content in Bahasa Indonesia
5. Ready to deploy to Vercel immediately