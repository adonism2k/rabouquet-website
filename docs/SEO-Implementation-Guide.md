# SEO Implementation Guide

## Overview

Rabouquet.in implements comprehensive SEO best practices to ensure maximum visibility in search engines, particularly for local Bogor searches.

## Key Features

### 1. Page Metadata

Each page has optimized metadata in Indonesian:

```javascript
import { getPageMetadata } from '$lib/seo.js';

const metadata = getPageMetadata('home');
// Returns: title, description, keywords, canonical, openGraph, twitter
```

#### Pages Configuration

**Home Page**
- Title: "Rabouquet.in - Toko Buket Bunga & Hadiah di Bogor"
- Focus: Brand awareness, local search
- Keywords: buket bunga bogor, toko buket bogor

**Products Page**
- Title: "Katalog Buket - Rabouquet.in | Bunga, Snack, Boneka & Lainnya"
- Focus: Product discovery
- Keywords: buket wisuda, buket snack, buket custom

**About Page**
- Title: "Tentang Rabouquet.in - Toko Buket Terpercaya di Bogor"
- Focus: Trust building
- Keywords: toko buket terpercaya, florist bogor

**Contact Page**
- Title: "Hubungi Kami - Rabouquet.in"
- Focus: Lead generation
- Keywords: kontak florist, pesan buket bogor

### 2. Structured Data (JSON-LD)

Implemented LocalBusiness schema for rich search results:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RABOUQUET.IN",
  "description": "Toko Buket Bunga dan Hadiah di Bogor",
  "telephone": "+6285157572725",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kampung Pajeleran Gunung",
    "addressLocality": "Bogor",
    "postalCode": "16913"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.5971",
    "longitude": "106.8060"
  }
}
```

### 3. Open Graph Tags

Optimized for social media sharing:

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="/logo.png" />
<meta property="og:locale" content="id_ID" />
```

### 4. Sitemap

Located at `/static/sitemap.xml` with all public pages:

- Home: Priority 1.0, Weekly updates
- Products: Priority 0.9, Daily updates
- About: Priority 0.7, Monthly updates
- Contact: Priority 0.8, Monthly updates

### 5. Robots.txt

Configured to allow all search engines at `/static/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://rabouquet.in/sitemap.xml
```

## Local SEO Strategy

### Target Keywords

**Primary Keywords:**
- buket bunga bogor
- toko buket bogor
- florist bogor
- buket wisuda bogor

**Secondary Keywords:**
- buket snack bogor
- buket boneka
- custom bouquet
- hadiah anniversary bogor

**Long-tail Keywords:**
- buket bunga murah di bogor
- toko buket terpercaya bogor
- pesan buket online bogor
- florist delivery bogor

### Geographic Optimization

1. **City-specific content**: All copy mentions "Bogor"
2. **Local address**: Full address in structured data
3. **Indonesian language**: All content in Bahasa Indonesia
4. **Local phone number**: Indonesian phone format (+62)

## Technical SEO

### 1. Performance Optimization

```javascript
// svelte.config.js - Static adapter with prerendering
adapter: adapter({
  precompress: true,  // Gzip/Brotli compression
  strict: true
})
```

### 2. Image Optimization

- Lazy loading for below-the-fold images
- Responsive srcset for different screen sizes
- WebP format with fallbacks
- Proper alt text for accessibility

### 3. Mobile Optimization

- Responsive design (mobile-first)
- Touch-friendly buttons (44px minimum)
- Fast loading (<3s)
- No horizontal scrolling

### 4. Page Speed

**Target Metrics:**
- First Contentful Paint (FCP): <1.8s
- Largest Contentful Paint (LCP): <2.5s
- Time to Interactive (TTI): <3.8s
- Cumulative Layout Shift (CLS): <0.1

## Content Strategy

### 1. Page Structure

```html
<h1>Main Title (once per page)</h1>
<h2>Section Headings</h2>
<h3>Subsections</h3>

<!-- Semantic HTML -->
<article>, <section>, <nav>, <footer>
```

### 2. Internal Linking

- Link from home to all main pages
- Breadcrumb navigation
- Related products linking
- Footer navigation

### 3. Content Guidelines

- Minimum 300 words per page
- Natural keyword usage (2-3% density)
- Engaging, informative copy
- Clear calls-to-action

## Monitoring & Analytics

### Recommended Tools

1. **Google Search Console**
   - Submit sitemap
   - Monitor search performance
   - Fix indexing issues

2. **Google Analytics 4**
   - Track user behavior
   - Monitor conversions
   - Analyze traffic sources

3. **PageSpeed Insights**
   - Monitor performance scores
   - Identify optimization opportunities

4. **Google My Business**
   - Local business listing
   - Customer reviews
   - Business hours and location

## Implementation Checklist

- [x] Page metadata for all pages
- [x] Open Graph tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Mobile-responsive design
- [x] Image optimization
- [x] Performance optimization
- [ ] Submit to Google Search Console
- [ ] Setup Google Analytics
- [ ] Register Google My Business
- [ ] Build backlinks from local directories

## Maintenance

### Weekly Tasks
- Monitor search rankings
- Check for broken links
- Review analytics data

### Monthly Tasks
- Update content
- Add new blog posts (if applicable)
- Refresh product images
- Update sitemap dates

### Quarterly Tasks
- Comprehensive SEO audit
- Competitor analysis
- Update keywords strategy
- Performance review

## Advanced Optimization

### 1. Schema Markup Extensions

Consider adding:
- Product schema for individual items
- Offer schema for pricing
- Review schema for testimonials
- FAQ schema for common questions

### 2. Rich Snippets

Optimize for:
- Star ratings
- Price ranges
- Business hours
- Location map

### 3. Voice Search

Optimize for conversational queries:
- "Toko buket terdekat dari saya"
- "Dimana beli buket wisuda di Bogor"
- "Harga buket bunga di Bogor"

## Common Issues & Solutions

**Issue**: Pages not indexed
- **Solution**: Submit sitemap to Search Console

**Issue**: Low ranking for target keywords
- **Solution**: Add more quality content, build backlinks

**Issue**: High bounce rate
- **Solution**: Improve page speed, enhance UX

**Issue**: Poor mobile performance
- **Solution**: Optimize images, reduce JavaScript

## Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev Performance Guide](https://web.dev/performance/)

## Support

For SEO questions or assistance, contact the development team or refer to:
- `/src/lib/seo.js` - Core SEO functions
- `/src/routes/+layout.svelte` - Meta tags implementation
- `/static/sitemap.xml` - Sitemap configuration
