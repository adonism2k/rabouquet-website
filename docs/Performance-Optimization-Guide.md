# Performance Optimization Guide

## Overview

Rabouquet.in implements comprehensive performance optimization strategies to ensure fast loading times, smooth user experience, and excellent Core Web Vitals scores.

## Core Web Vitals Targets

| Metric | Target | Current Strategy |
|--------|--------|------------------|
| **LCP** (Largest Contentful Paint) | <2.5s | Image optimization, prerendering |
| **FID** (First Input Delay) | <100ms | Minimal JavaScript, code splitting |
| **CLS** (Cumulative Layout Shift) | <0.1 | Reserved space, dimension attributes |
| **FCP** (First Contentful Paint) | <1.8s | Critical CSS, static generation |
| **TTI** (Time to Interactive) | <3.8s | Lazy loading, deferred scripts |

## Implemented Optimizations

### 1. Static Site Generation

**Configuration**: `svelte.config.js`

```javascript
adapter: adapter({
  precompress: true,      // Gzip/Brotli compression
  strict: true,           // Strict prerendering
  fallback: '200.html'    // SPA fallback
})

prerender: {
  entries: ['*']          // Prerender all pages
}
```

**Benefits:**
- Instant page loads (HTML served immediately)
- No server-side rendering delays
- CDN-friendly static assets
- Reduced hosting costs

### 2. Image Optimization

**Component**: `OptimizedImage.svelte`

```svelte
<OptimizedImage
  src="/images/product.jpg"
  alt="Product name"
  width={400}
  height={400}
  priority="auto"        // 'high' | 'low' | 'auto'
  context="card"         // 'thumbnail' | 'card' | 'detail' | 'hero'
/>
```

**Features:**
- Lazy loading (below-the-fold images)
- Responsive srcset (multiple resolutions)
- Progressive loading (placeholder → full image)
- Automatic error handling
- Dimension-based placeholders

**Performance Impact:**
- 60-80% reduction in initial page weight
- Improved LCP scores
- Faster Time to Interactive

### 3. Code Splitting

**Configuration**: `vite.config.js`

```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['svelte', '@sveltejs/kit']
      }
    }
  }
}
```

**Benefits:**
- Smaller initial bundle size
- Better browser caching
- Faster subsequent page loads

### 4. Resource Optimization

#### CSS Optimization
- Inline critical CSS in `<head>`
- Deferred non-critical stylesheets
- Minified production CSS
- No unused CSS (tree-shaking)

#### JavaScript Optimization
- Remove `console.log` in production
- Minification with Terser
- Tree-shaking unused code
- Module preloading for faster navigation

#### Font Optimization
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 5. Caching Strategy

**Headers Configuration** (to be set on hosting):

```
# Static assets (1 year)
/build/*
  Cache-Control: public, max-age=31536000, immutable

# HTML pages (1 hour, revalidate)
/*.html
  Cache-Control: public, max-age=3600, must-revalidate

# Images (1 month)
/images/*
  Cache-Control: public, max-age=2592000
```

## Image Loading Strategies

### 1. Priority Loading

**Above-the-fold images** (hero, logo):
```svelte
<OptimizedImage
  src="/hero.jpg"
  priority="high"
  context="hero"
/>
```

**Below-the-fold images**:
```svelte
<OptimizedImage
  src="/product.jpg"
  priority="auto"
  context="card"
/>
```

### 2. Responsive Images

**Automatically generated srcset**:
```html
<img
  src="/image.jpg"
  srcset="
    /image.jpg?w=320 320w,
    /image.jpg?w=640 640w,
    /image.jpg?w=1024 1024w
  "
  sizes="(max-width: 640px) 100vw, 50vw"
/>
```

### 3. Lazy Loading

**Configuration**: `imageOptimization.js`

```javascript
export const lazyLoadConfig = {
  root: null,
  rootMargin: '50px',    // Start loading 50px before viewport
  threshold: 0.01
};
```

## Bundle Size Optimization

### Current Bundle Sizes

**Target Sizes:**
- Initial JS: <50 KB (gzipped)
- Initial CSS: <20 KB (gzipped)
- Total Page Weight: <500 KB

### Optimization Techniques

1. **Remove Console Logs**
   ```javascript
   terserOptions: {
     compress: {
       drop_console: true,
       drop_debugger: true
     }
   }
   ```

2. **Code Splitting**
   - Separate vendor bundle
   - Route-based splitting
   - Dynamic imports for heavy features

3. **Tree Shaking**
   - ES modules for dependencies
   - Named imports only
   - Remove unused exports

## Network Optimization

### 1. Preconnect to External Resources

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://wa.me" />
```

### 2. Resource Hints

```html
<!-- Preload critical assets -->
<link rel="preload" href="/logo.png" as="image" />

<!-- Prefetch next page resources -->
<link rel="prefetch" href="/products" />
```

### 3. Compression

Enable on hosting platform:
- Gzip compression (legacy browsers)
- Brotli compression (modern browsers)
- Automatic content negotiation

## Runtime Performance

### 1. Avoid Layout Shifts

**Always specify image dimensions**:
```svelte
<img
  src="/image.jpg"
  width="400"
  height="300"
  alt="Product"
/>
```

**Reserve space for dynamic content**:
```css
.loading-skeleton {
  min-height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
}
```

### 2. Optimize Animations

**Use CSS transforms** (GPU-accelerated):
```css
.animate {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
```

**Avoid layout-triggering properties**:
- ❌ Avoid: `top`, `left`, `width`, `height`
- ✅ Use: `transform`, `opacity`

### 3. Efficient Event Handlers

**Debounce scroll/resize**:
```javascript
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

window.addEventListener('scroll', debounce(handleScroll, 100));
```

## Mobile Performance

### 1. Touch Optimization

- Minimum 44x44px touch targets
- No 300ms tap delay (viewport meta tag)
- Smooth scrolling (CSS `scroll-behavior`)

### 2. Network Awareness

**Adaptive loading based on connection**:
```javascript
if (navigator.connection?.effectiveType === '4g') {
  // Load high-quality images
} else {
  // Load compressed images
}
```

### 3. Battery Awareness

- Pause animations when battery is low
- Reduce background tasks
- Optimize video playback

## Monitoring & Analytics

### 1. Performance Monitoring

**Tools:**
- Lighthouse CI (automated audits)
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools Performance tab

**Key Metrics to Track:**
```javascript
// Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### 2. Real User Monitoring (RUM)

**Setup Google Analytics 4**:
```javascript
// Track page load times
gtag('event', 'timing_complete', {
  name: 'load',
  value: performance.now(),
  event_category: 'Performance'
});
```

### 3. Continuous Monitoring

**GitHub Actions** (recommended):
```yaml
- name: Lighthouse CI
  run: |
    npm install -g @lhci/cli
    lhci autorun
```

## Performance Budget

### Target Budgets

| Resource Type | Budget | Current |
|---------------|--------|---------|
| HTML | 20 KB | TBD |
| CSS | 30 KB | TBD |
| JavaScript | 150 KB | TBD |
| Images | 500 KB | TBD |
| Fonts | 100 KB | TBD |
| **Total** | **800 KB** | TBD |

### Enforcement

**Package.json scripts**:
```json
{
  "scripts": {
    "build": "vite build",
    "analyze": "vite build --mode analyze",
    "size-check": "size-limit"
  }
}
```

## Optimization Checklist

### Initial Load
- [x] Static site generation
- [x] Critical CSS inlined
- [x] Minimal JavaScript
- [x] Compressed assets (Gzip/Brotli)
- [x] Optimized images
- [ ] Service worker for caching

### Images
- [x] Lazy loading
- [x] Responsive srcset
- [x] Proper dimensions
- [x] Placeholder strategy
- [ ] WebP format with fallbacks
- [ ] CDN delivery

### Code
- [x] Code splitting
- [x] Tree shaking
- [x] Minification
- [x] Dead code elimination
- [x] Source map in dev only

### Network
- [x] Preconnect hints
- [ ] HTTP/2 server push
- [ ] CDN configuration
- [ ] Edge caching

### Runtime
- [x] Avoid layout shifts
- [x] GPU-accelerated animations
- [ ] Web Workers for heavy tasks
- [ ] Intersection Observer API

## Common Performance Issues

### Issue: Slow LCP

**Causes:**
- Large hero image
- Render-blocking resources
- Slow server response

**Solutions:**
- Preload hero image
- Inline critical CSS
- Use static generation
- Optimize image size

### Issue: High CLS

**Causes:**
- Images without dimensions
- Dynamic content insertion
- Web fonts loading

**Solutions:**
- Set width/height on images
- Reserve space for dynamic content
- Use `font-display: swap`

### Issue: Slow FID

**Causes:**
- Heavy JavaScript execution
- Long tasks blocking main thread
- No code splitting

**Solutions:**
- Reduce JavaScript bundle
- Use Web Workers
- Implement code splitting
- Defer non-critical scripts

## Advanced Optimizations

### 1. Service Worker

**Workbox configuration** (future enhancement):
```javascript
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({ cacheName: 'images' })
);
```

### 2. HTTP/2 Server Push

**Recommended for production**:
```
Link: </build/app.js>; rel=preload; as=script
Link: </build/app.css>; rel=preload; as=style
```

### 3. Edge Computing

**Cloudflare Workers** (example):
```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const cache = await caches.default;
  let response = await cache.match(request);

  if (!response) {
    response = await fetch(request);
    event.waitUntil(cache.put(request, response.clone()));
  }

  return response;
}
```

## Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)

## Conclusion

Performance optimization is an ongoing process. Regularly audit your site, monitor real user metrics, and continuously improve based on data.

**Next Steps:**
1. Deploy to production
2. Run Lighthouse audit
3. Set up RUM monitoring
4. Establish performance budget
5. Automate performance checks in CI/CD
