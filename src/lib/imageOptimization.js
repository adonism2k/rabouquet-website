/**
 * Image Optimization Utilities for Rabouquet.in
 * Handles lazy loading, placeholders, and responsive images
 */

/**
 * Generate placeholder SVG for images
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} text - Placeholder text
 * @returns {string} Data URI for SVG placeholder
 */
export function generatePlaceholder(width = 400, height = 300, text = 'Loading...') {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text
        x="50%"
        y="50%"
        font-family="Arial, sans-serif"
        font-size="16"
        fill="#9ca3af"
        text-anchor="middle"
        dominant-baseline="middle"
      >${text}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

/**
 * Generate srcset for responsive images
 * @param {string} baseUrl - Base image URL
 * @param {Array<number>} sizes - Array of width sizes
 * @returns {string} srcset string
 */
export function generateSrcSet(baseUrl, sizes = [320, 640, 768, 1024, 1280]) {
  // For now, return base URL (can be extended with image CDN)
  return sizes.map(size => `${baseUrl}?w=${size} ${size}w`).join(', ');
}

/**
 * Lazy load image configuration
 * @returns {object} Intersection Observer options
 */
export const lazyLoadConfig = {
  root: null,
  rootMargin: '50px', // Start loading 50px before entering viewport
  threshold: 0.01
};

/**
 * Initialize lazy loading for images
 * @param {HTMLElement} element - Image element to observe
 * @param {Function} callback - Callback when image enters viewport
 */
export function setupLazyLoading(element, callback) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, lazyLoadConfig);

    observer.observe(element);
    return () => observer.disconnect();
  } else {
    // Fallback for browsers without IntersectionObserver
    callback(element);
  }
}

/**
 * Product image configuration
 */
export const productImageSizes = {
  thumbnail: { width: 200, height: 200 },
  card: { width: 400, height: 400 },
  detail: { width: 800, height: 800 },
  hero: { width: 1200, height: 600 }
};

/**
 * Optimize image loading attributes
 * @param {string} priority - 'high' | 'low' | 'auto'
 * @returns {object} HTML attributes for image tag
 */
export function getImageLoadingAttributes(priority = 'auto') {
  const attributes = {
    loading: priority === 'high' ? 'eager' : 'lazy',
    decoding: priority === 'high' ? 'sync' : 'async'
  };

  if (priority === 'high') {
    attributes.fetchpriority = 'high';
  }

  return attributes;
}

/**
 * Generate responsive image sizes attribute
 * @param {string} context - 'thumbnail' | 'card' | 'detail' | 'hero'
 * @returns {string} sizes attribute value
 */
export function getImageSizes(context = 'card') {
  const sizesMap = {
    thumbnail: '(max-width: 640px) 150px, 200px',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
    detail: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px',
    hero: '100vw'
  };

  return sizesMap[context] || sizesMap.card;
}

/**
 * Preload critical images
 * @param {Array<string>} imageUrls - Array of image URLs to preload
 */
export function preloadImages(imageUrls) {
  if (typeof window === 'undefined') return;

  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}
