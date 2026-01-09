# Rabouquet Component Showcase

Visual guide to the design system components.

---

## 🎨 Design Philosophy

**Theme**: Elegant Pinkish - Matching Rabouquet's artisanal luxury brand
**Colors**: Pink (#f472b6) + Rose (#fb7185) gradients with sparkle accents
**Typography**: Playfair Display (serif headings) + Inter (body)
**Animations**: Gentle transitions (200-300ms), sparkle effects, hover lifts

---

## 📦 Components Overview

### 1. Button Component
**Purpose**: Primary interaction element with three variants

```svelte
<!-- Primary (Pink gradient with glow) -->
<Button variant="primary" size="md">Explorar</Button>

<!-- Secondary (White with pink border) -->
<Button variant="secondary" size="lg">Más Info</Button>

<!-- WhatsApp (Green brand color) -->
<Button variant="whatsapp">Contactar</Button>
```

**Visual Features**:
- ✨ Pink shadow glow on hover (primary)
- 🎯 Focus ring for accessibility
- 📱 Fully responsive sizing
- ⚡ 300ms smooth transitions

**Use Cases**:
- Primary CTAs (product exploration, checkout)
- Secondary actions (learn more, filters)
- WhatsApp contact buttons

---

### 2. ProductCard Component
**Purpose**: Showcase individual products with integrated WhatsApp CTA

```svelte
<ProductCard product={{
  id: "aretes-perlas",
  name: "Aretes de Perlas",
  category: "Joyería",
  description: "Elegantes aretes artesanales con perlas naturales",
  priceRange: "$25-$35",
  image: "/images/aretes-perlas.jpg"
}} />
```

**Visual Features**:
- 🎴 Square aspect ratio with gradient background
- ↗️ Lift effect on hover (-translate-y-2)
- 🔍 Image zoom (1.1x scale)
- ⭐ Sparkle icon animation
- 🏷️ Category badge (pink pill)
- 💬 WhatsApp CTA button

**Layout**:
```
┌─────────────────────┐
│                     │ ← Sparkle (appears on hover)
│     [Image]         │ ← Square, zooms on hover
│                     │
├─────────────────────┤
│ [Category Badge]    │ ← Pink pill
│ Product Name        │ ← Large serif font
│ Description...      │ ← 2-line clamp
│ $20-$30  [WhatsApp] │ ← Price + CTA
└─────────────────────┘
```

---

### 3. Hero Component
**Purpose**: Page header with animated background and CTA

```svelte
<Hero
  title="Rabouquet"
  subtitle="Detalles únicos que hacen la diferencia"
  ctaText="Ver Colección"
  ctaLink="/products"
/>
```

**Visual Features**:
- 🌊 Animated blob gradients (pink/rose)
- ✨ Floating sparkle decorations
- 📈 Fade-in-up animation sequence
- 🎨 Optional background image overlay
- 📱 Responsive typography (5xl → 7xl)

**Animation Sequence**:
1. Title fades in from bottom (0ms)
2. Subtitle appears (200ms delay)
3. CTA button slides up (400ms delay)
4. Sparkles pulse (1s, 2s delays)
5. Blobs continuously morph (7s loop)

---

### 4. Header Component
**Purpose**: Site navigation with logo and mobile menu

```svelte
<Header />
```

**Visual Features**:
- 📌 Sticky on scroll with glass effect
- 🎯 Logo: Pink gradient circle + "R" + sparkle
- 📱 Hamburger menu (mobile)
- 🔗 Active page indicator (underline)
- 💬 WhatsApp CTA (desktop)

**Navigation Items**:
- Inicio (/)
- Productos (/products)
- Sobre Nosotros (/about)
- Contacto (/contact)

**States**:
- **Scrolled**: White background, shadow, blur backdrop
- **Top**: Transparent background
- **Active Page**: Pink text + gradient underline

---

### 5. Footer Component
**Purpose**: Site footer with contact and social links

```svelte
<Footer />
```

**Layout (3-column grid)**:
```
┌──────────────────────────────────────────────────┐
│  [Logo + Brand]   │   Contact Info   │  Social  │
│  Description      │   📍 Location    │  🔗 IG   │
│                   │   📧 Email       │  💬 WA   │
│                   │   📱 Phone       │  Hours   │
├──────────────────────────────────────────────────┤
│         © 2026 Rabouquet. Hecho con ♥           │
└──────────────────────────────────────────────────┘
```

**Visual Features**:
- 🌑 Dark gradient background (gray-900 to gray-800)
- 🎨 Pink accent highlights
- 🔗 Hover effects on social icons
- 📱 Responsive column collapse

---

### 6. Section Component
**Purpose**: Content wrapper with consistent spacing

```svelte
<Section background="pink" padding="xl">
  <h2>Section Title</h2>
  <p>Content here</p>
</Section>
```

**Background Options**:
- `white` - Clean white
- `pink` - Gradient pink-50 to rose-50
- `gradient` - Pink-100 via rose-50 to white
- `rose` - Rose-50 solid

**Padding Options**:
- `sm` - py-8 (mobile-friendly)
- `md` - py-12
- `lg` - py-16 (default)
- `xl` - py-24 (hero sections)

**Features**:
- Max-width: 7xl (1280px)
- Auto-centering
- Responsive padding

---

### 7. CategoryFilter Component
**Purpose**: Product category filtering with active states

```svelte
<CategoryFilter
  categories={['Joyería', 'Accesorios', 'Decoración', 'Personalizados']}
  activeCategory={activeCategory}
  onFilter={(cat) => handleFilter(cat)}
/>
```

**Visual Features**:
- 🎯 "Todos" option always present
- 🌟 Active state: Pink gradient + scale(1.05)
- 💫 Pulse animation on active category
- 🖱️ Smooth hover transitions
- 📱 Wrapping flex layout (mobile)

**States**:
- **Inactive**: White background, gray border, hover effects
- **Active**: Pink gradient, shadow, pulse animation

---

### 8. WhatsAppButton Component
**Purpose**: Direct WhatsApp contact with pre-filled messages

```svelte
<!-- Floating (bottom-right) -->
<WhatsAppButton
  variant="floating"
  message="Hola! Me interesa el producto X"
/>

<!-- Inline (in cards/CTAs) -->
<WhatsAppButton variant="inline">
  Consultar
</WhatsAppButton>
```

**Floating Variant**:
- 📍 Fixed: bottom-6 right-6
- 📱 Z-index: 50 (above all content)
- 💚 Green circle (#25D366)
- 🌊 Pulse animation ring
- 💬 Tooltip on hover: "Chatea con nosotros"
- 📱 Mobile-optimized size

**Inline Variant**:
- 💚 WhatsApp green button
- 📱 Icon + text
- ↗️ Opens in new tab
- 🔗 Pre-filled message

**Message Format**:
```
https://wa.me/542616690701?text=Hola!%20Me%20interesa...
```

---

## 🎨 Color Usage Guide

### Primary Actions
- Background: `from-pink-400 to-rose-400`
- Hover: `from-pink-500 to-rose-500`
- Shadow: `shadow-pink-300/50`

### Secondary Actions
- Background: `white`
- Border: `border-pink-300`
- Hover: `bg-pink-50 border-pink-400`

### Text
- Headings: `text-gray-900` or gradient
- Body: `text-gray-700`
- Subtle: `text-gray-600`
- Muted: `text-gray-400`

### Backgrounds
- Light: `from-pink-50 to-rose-50`
- Medium: `from-pink-100 via-rose-50`
- Dark: Footer gradient (gray-900 to gray-800)

---

## ✨ Animation Patterns

### Hover Effects
1. **Lift**: `-translate-y-2` (cards, buttons)
2. **Glow**: `shadow-lg shadow-pink-300/50` (primary elements)
3. **Scale**: `scale-110` (images, icons)
4. **Color Shift**: Border/text color changes

### Entry Animations
1. **Fade In Up**: Content slides from bottom (600ms)
2. **Stagger**: Sequential delays (200ms, 400ms)
3. **Blob Movement**: Organic floating (7s infinite)
4. **Sparkle Pulse**: Rotate + scale (2s infinite)

### Duration Standards
- Micro: 200ms (color changes)
- Short: 300ms (hover effects)
- Medium: 600ms (page transitions)
- Long: 2-7s (ambient animations)

---

## 📱 Responsive Behavior

### Mobile (<768px)
- Header: Hamburger menu
- Hero: Smaller text (4xl)
- Grid: Single column
- Footer: Stacked layout
- WhatsApp: Floating button prominent

### Tablet (768px-1024px)
- Hero: Medium text (5xl)
- Grid: 2 columns
- Footer: 2-3 column hybrid

### Desktop (>1024px)
- Hero: Large text (6xl-7xl)
- Grid: 3-4 columns
- Full horizontal navigation
- Footer: 3 columns

---

## 🚀 Performance Optimizations

1. **CSS**: Tailwind purge removes unused classes
2. **Images**: Lazy loading with `loading="lazy"`
3. **Animations**: GPU-accelerated transforms
4. **Fonts**: Google Fonts with `display=swap`
5. **Components**: Tree-shakeable imports

---

## ♿ Accessibility Features

- ✅ Focus rings (pink-400) on all interactive elements
- ✅ ARIA labels on icon-only buttons
- ✅ Semantic HTML5 (nav, section, footer, header)
- ✅ Alt text required on all images
- ✅ Color contrast meets WCAG AA
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

---

## 🔧 Usage Best Practices

### DO ✅
- Use Section component for consistent spacing
- Add WhatsApp CTAs on product cards
- Include floating WhatsApp button on all pages
- Use Hero for landing/main pages
- Wrap content in Header + Footer
- Use semantic component combinations

### DON'T ❌
- Mix Button variants inappropriately
- Override component colors (use variants)
- Nest Sections deeply
- Use inline styles (use Tailwind)
- Skip alt text on ProductCard images
- Remove focus indicators

---

## 📊 Component File Sizes

```
Button.svelte        1.4 KB  ← Lightweight interaction
ProductCard.svelte   2.2 KB  ← Medium complexity
Section.svelte       698 B   ← Minimal wrapper
Hero.svelte          3.7 KB  ← Animation-rich
Header.svelte        4.8 KB  ← Navigation logic
Footer.svelte        6.5 KB  ← Content-heavy
CategoryFilter       1.3 KB  ← Interactive filter
WhatsAppButton       3.8 KB  ← Dual variants
```

**Total**: ~24 KB (uncompressed Svelte)

---

## 🎯 Next Steps for AGENT 3

1. Import components via `$lib/components`
2. Create page layouts using Section + components
3. Add product data for ProductCard
4. Configure WhatsApp messages per product
5. Test responsive behavior
6. Ensure all images have alt text
7. Add analytics tracking on Button clicks

**Ready for Integration**: ✅ All components production-ready

---

**Created by**: AGENT 2 (Design System & Components)
**For**: AGENT 3 (Page Implementation)
**Date**: January 2026
