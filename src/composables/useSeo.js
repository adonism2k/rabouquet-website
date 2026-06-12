import { onMounted } from 'vue';
import { getPageMetadata, getStructuredData } from '../lib/seo';

function setMetaTag(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonicalLink(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function setStructuredData(data) {
  let script = document.head.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/**
 * Apply per-page SEO metadata (title, meta tags, canonical, structured data)
 * @param {string} page - Page identifier (home, products, about, contact)
 */
export function useSeo(page) {
  onMounted(() => {
    const meta = getPageMetadata(page);

    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'keywords', meta.keywords);
    setCanonicalLink(meta.canonical);

    setMetaTag('property', 'og:type', meta.openGraph.type);
    setMetaTag('property', 'og:url', meta.openGraph.url);
    setMetaTag('property', 'og:title', meta.openGraph.title);
    setMetaTag('property', 'og:description', meta.openGraph.description);
    setMetaTag('property', 'og:image', meta.openGraph.image);
    setMetaTag('property', 'og:site_name', meta.openGraph.siteName);
    setMetaTag('property', 'og:locale', meta.openGraph.locale);

    setMetaTag('name', 'twitter:card', meta.twitter.card);
    setMetaTag('name', 'twitter:title', meta.twitter.title);
    setMetaTag('name', 'twitter:description', meta.twitter.description);
    setMetaTag('name', 'twitter:image', meta.twitter.image);

    setStructuredData(getStructuredData());
  });
}
