# Component API Reference for AGENT 3

## Quick Import
```typescript
import {
  Button,
  ProductCard,
  Section,
  Hero,
  Header,
  Footer,
  CategoryFilter,
  WhatsAppButton
} from '$lib/components';
```

## Component Summary

### 1. Button
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/Button.svelte`

```svelte
<Button variant="primary" size="md" href="/products">Click Me</Button>
<Button variant="secondary" size="lg" onclick={() => alert('Hi')}>Action</Button>
<Button variant="whatsapp" href="https://wa.me/542616690701">WhatsApp</Button>
```

### 2. ProductCard
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/ProductCard.svelte`

```svelte
<ProductCard product={{
  id: "1",
  name: "Product Name",
  category: "Category",
  description: "Description text",
  priceRange: "$20-$30",
  image: "/path/to/image.jpg"
}} />
```

### 3. Hero
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/Hero.svelte`

```svelte
<Hero
  title="Rabouquet"
  subtitle="Detalles únicos que hacen la diferencia"
  ctaText="Explorar"
  ctaLink="/products"
/>
```

### 4. Header
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/Header.svelte`

```svelte
<Header />
```
Auto-includes navigation, logo, mobile menu.

### 5. Footer
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/Footer.svelte`

```svelte
<Footer />
```
Auto-includes contact info, social links, copyright.

### 6. Section
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/Section.svelte`

```svelte
<Section background="pink" padding="lg">
  <h2>Your content here</h2>
</Section>
```

### 7. CategoryFilter
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/CategoryFilter.svelte`

```svelte
<CategoryFilter
  categories={['Joyería', 'Accesorios', 'Decoración']}
  activeCategory={activeCategory}
  onFilter={(cat) => handleFilter(cat)}
/>
```

### 8. WhatsAppButton
**File**: `/Users/adon/project/rabouquet-website/src/lib/components/WhatsAppButton.svelte`

```svelte
<!-- Floating button (bottom-right) -->
<WhatsAppButton variant="floating" message="Hola!" />

<!-- Inline button -->
<WhatsAppButton variant="inline">Consultar</WhatsAppButton>
```

---

## Page Layout Example

```svelte
<script>
  import { Header, Hero, Section, ProductCard, CategoryFilter, Footer, WhatsAppButton } from '$lib/components';

  let products = [...]; // Your product data
  let categories = ['Joyería', 'Accesorios', 'Decoración'];
  let activeCategory = 'all';
</script>

<Header />

<main>
  <Hero
    title="Rabouquet"
    subtitle="Detalles únicos que hacen la diferencia"
    ctaText="Ver Productos"
    ctaLink="/products"
  />

  <Section background="white" padding="xl">
    <h2 class="text-4xl font-serif text-center mb-8">Nuestros Productos</h2>

    <div class="mb-12">
      <CategoryFilter
        {categories}
        {activeCategory}
        onFilter={(cat) => activeCategory = cat}
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each products as product}
        <ProductCard {product} />
      {/each}
    </div>
  </Section>
</main>

<Footer />

<!-- Floating WhatsApp button -->
<WhatsAppButton variant="floating" message="Hola! Me gustaría más información sobre sus productos." />
```

---

## Tailwind Configuration

**File**: `/Users/adon/project/rabouquet-website/tailwind.config.js`

### Custom Colors Available
- `pink-{50-900}` - Primary brand colors
- `rose-{50-900}` - Secondary accent colors
- `whatsapp` - WhatsApp green (#25D366)

### Custom Utilities
- `.gradient-text` - Pink gradient text effect
- `.animated-gradient` - Animated background gradient
- `.pink-glow` - Pink shadow effect
- `.lift-hover` - Hover lift animation

---

## Global Styles

**File**: `/Users/adon/project/rabouquet-website/src/app.css`

Includes:
- Google Fonts (Playfair Display, Inter)
- Custom animations (blob, sparkle, fade-in-up)
- Scrollbar styling
- Selection colors (pink)
- Mobile optimizations

---

## Color System

### Primary Palette (Pinkish Theme)
- **Pink 400**: `#f472b6` - Main brand color
- **Pink 300**: `#f9a8d4` - Hover states
- **Pink 200**: `#fbcfe8` - Backgrounds
- **Pink 100**: `#fce7f3` - Light backgrounds
- **Pink 50**: `#fdf2f8` - Subtle backgrounds

### Secondary (Rose)
- **Rose 400**: `#fb7185` - Accent color
- **Rose 300**: `#fda4af` - Secondary hover
- **Rose 200**: `#fecdd3` - Light accents

### Functional
- **WhatsApp**: `#25D366` - CTA buttons
- **Gray**: Standard neutral palette

---

## Typography

### Fonts
- **Serif (Headings)**: Playfair Display - 400, 600, 700, 800
- **Sans (Body)**: Inter - 300, 400, 500, 600, 700

### Scale
```css
h1: 4xl → 5xl → 6xl (responsive)
h2: 3xl → 4xl → 5xl
h3: 2xl → 3xl
h4: xl → 2xl
body: base (16px)
```

---

## Animation Timings

- **Transitions**: 200-300ms (smooth interactions)
- **Hover Effects**: 300ms
- **Page Transitions**: 600ms
- **Blob Animations**: 7s infinite
- **Sparkle Pulse**: 2s infinite
- **WhatsApp Ping**: 1.5s infinite

---

## Contact Information (for WhatsApp integration)

- **Phone**: +54 261 669 0701
- **WhatsApp Number**: 542616690701
- **Location**: Godoy Cruz, Mendoza, Argentina
- **Instagram**: @rabouquet
- **Email**: contacto@rabouquet.com

---

## Responsive Breakpoints

```css
sm: 640px   /* Tablets */
md: 768px   /* Small desktops */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large */
```

---

## Accessibility Features

- Focus rings on all interactive elements (pink-400)
- ARIA labels on icon buttons
- Semantic HTML5 elements
- Alt text support for images
- Keyboard navigation support
- Color contrast ratios meet WCAG AA

---

## Notes for Integration

1. All components are TypeScript-ready
2. Mobile-first responsive design
3. WhatsApp CTA integrated throughout
4. Sparkle effects match logo aesthetic
5. Pink/rose gradient theme is consistent
6. All components tested with Svelte 5 syntax
7. Tailwind classes are optimized for production

---

## Contact AGENT 2 for:

- Component API questions
- Design system modifications
- New component requests
- Animation adjustments
- Color palette changes
- Typography updates

**Status**: ✅ Complete and ready for AGENT 3 integration
