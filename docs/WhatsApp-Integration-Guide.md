# WhatsApp Integration Guide

## Overview
This guide explains how to use the WhatsApp integration components in the Rabouquet.in website.

## Components

### WhatsAppButton Component

The `WhatsAppButton` component provides a flexible, ready-to-use WhatsApp contact button with three variants.

#### Usage

```svelte
<script>
  import WhatsAppButton from '$components/WhatsAppButton.svelte';
  import { whatsappMessages } from '$lib/seo.js';
</script>

<!-- Floating button (default on all pages) -->
<WhatsAppButton variant="floating" />

<!-- Inline button -->
<WhatsAppButton variant="inline" size="md" message={whatsappMessages.order} />

<!-- Call-to-action button -->
<WhatsAppButton variant="cta" size="lg" message={whatsappMessages.custom}>
  Pesan Buket Custom
</WhatsAppButton>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | string | `whatsappMessages.general` | Pre-filled WhatsApp message |
| `variant` | string | `'floating'` | Button style: `'floating'`, `'inline'`, `'cta'` |
| `size` | string | `'md'` | Button size: `'sm'`, `'md'`, `'lg'` |

#### Variants

**1. Floating Button**
- Fixed position at bottom-right
- Visible on all pages
- Subtle bounce animation
- Mobile-optimized touch target

**2. Inline Button**
- Circular icon button
- Use within content sections
- Hover scale animation

**3. CTA Button**
- Full button with text and icon
- Perfect for prominent calls-to-action
- Customizable slot for button text

## Pre-defined Messages

The `seo.js` library provides pre-defined WhatsApp messages:

```javascript
import { whatsappMessages } from '$lib/seo.js';

// Available messages:
whatsappMessages.general  // "Halo Rabouquet.in! Saya ingin bertanya..."
whatsappMessages.order    // "Halo! Saya ingin memesan buket..."
whatsappMessages.custom   // "Halo! Saya ingin membuat custom buket..."
whatsappMessages.inquiry  // "Halo! Saya ingin bertanya tentang..."
```

## Strategic Placements

### 1. Hero Section (Home Page)

```svelte
<script>
  import WhatsAppButton from '$components/WhatsAppButton.svelte';
  import { whatsappMessages } from '$lib/seo.js';
</script>

<section class="hero">
  <h1>Buket Terbaik di Bogor</h1>
  <p>Pesan sekarang untuk momen spesial Anda</p>

  <div class="cta-buttons">
    <WhatsAppButton
      variant="cta"
      size="lg"
      message={whatsappMessages.order}
    >
      Pesan Sekarang via WhatsApp
    </WhatsAppButton>
  </div>
</section>
```

### 2. Product Cards

```svelte
<script>
  import WhatsAppButton from '$components/WhatsAppButton.svelte';
  import { getWhatsAppLink } from '$lib/seo.js';

  export let product;

  $: productMessage = `Halo! Saya tertarik dengan ${product.name}. Bisa tanya detail dan harga?`;
  $: whatsappUrl = getWhatsAppLink(productMessage);
</script>

<article class="product-card">
  <img src={product.image} alt={product.name} />
  <h3>{product.name}</h3>
  <p>{product.description}</p>

  <div class="card-actions">
    <a href={whatsappUrl} class="whatsapp-link">
      <WhatsAppButton variant="inline" size="sm" message={productMessage} />
      <span>Tanya via WhatsApp</span>
    </a>
  </div>
</article>
```

### 3. Contact Page

```svelte
<script>
  import WhatsAppButton from '$components/WhatsAppButton.svelte';
  import { siteConfig, whatsappMessages } from '$lib/seo.js';
</script>

<section class="contact-methods">
  <div class="contact-card whatsapp-card">
    <WhatsAppButton variant="inline" size="lg" />
    <h3>WhatsApp</h3>
    <p>Respon cepat untuk konsultasi dan pemesanan</p>
    <WhatsAppButton variant="cta" message={whatsappMessages.inquiry}>
      Chat via WhatsApp
    </WhatsAppButton>
    <p class="phone-number">{siteConfig.phone}</p>
  </div>
</section>
```

### 4. Footer

```svelte
<script>
  import WhatsAppButton from '$components/WhatsAppButton.svelte';
  import { siteConfig } from '$lib/seo.js';
</script>

<footer>
  <div class="footer-contact">
    <h4>Hubungi Kami</h4>
    <div class="contact-item">
      <WhatsAppButton variant="inline" size="sm" />
      <span>{siteConfig.phone}</span>
    </div>
  </div>
</footer>
```

## Custom Messages

Create custom WhatsApp messages for specific contexts:

```svelte
<script>
  import { getWhatsAppLink } from '$lib/seo.js';

  const customMessage = 'Halo! Saya ingin konsultasi untuk acara pernikahan.';
  const whatsappUrl = getWhatsAppLink(customMessage);
</script>

<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
  Custom WhatsApp Link
</a>
```

## Styling

The WhatsApp button uses the official WhatsApp green color (`#25D366`) with a gradient effect for visual appeal.

### Color Variables

```css
--whatsapp-green: #25D366;
--whatsapp-dark: #128C7E;
--whatsapp-darker: #075E54;
```

### Custom Styling

You can add custom classes to the WhatsApp button:

```svelte
<WhatsAppButton variant="cta" class="my-custom-class">
  Custom Styled Button
</WhatsAppButton>
```

## Accessibility

The WhatsApp button component includes:
- Proper `aria-label` attributes
- High contrast colors
- Large touch targets for mobile (minimum 44x44px)
- Keyboard navigation support
- Screen reader friendly

## Performance

- Minimal JavaScript footprint
- CSS-only animations
- No external dependencies
- Optimized for mobile devices

## Best Practices

1. **Message Clarity**: Use clear, friendly Indonesian messages
2. **Context-Specific**: Customize messages based on user intent
3. **Mobile-First**: Ensure buttons are easily tappable on mobile
4. **Consistent Placement**: Use floating button on all pages for consistency
5. **Test Messages**: Verify that encoded messages display correctly in WhatsApp

## Testing

To test WhatsApp integration:

1. Open the website on a mobile device
2. Click any WhatsApp button
3. Verify the correct message appears in WhatsApp
4. Ensure the phone number is correct (+6285157572725)

## Troubleshooting

**Issue**: WhatsApp doesn't open
- **Solution**: Ensure WhatsApp is installed or use WhatsApp Web

**Issue**: Message is garbled
- **Solution**: Check URL encoding in `getWhatsAppLink()` function

**Issue**: Button not visible on mobile
- **Solution**: Verify z-index and positioning in CSS

## Future Enhancements

- [ ] Add click tracking analytics
- [ ] Implement A/B testing for different messages
- [ ] Add business hours indicator
- [ ] Integrate with chatbot for automated responses
