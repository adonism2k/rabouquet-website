# Rabouquet Design System

Complete component library with elegant pinkish theme matching the Rabouquet brand.

## Color Palette

### Primary Colors
- **Pink 400**: `#f472b6` - Primary brand color
- **Rose 400**: `#fb7185` - Secondary accent
- **WhatsApp Green**: `#25D366` - Call-to-action

### Gradients
- Primary: `from-pink-400 to-rose-400`
- Background: `from-pink-50 to-rose-50`
- Text: `from-pink-600 to-rose-600`

## Typography

### Font Families
- **Headings**: Playfair Display (serif) - Elegant, sophisticated
- **Body**: Inter (sans-serif) - Clean, readable

### Scale
- H1: 4xl/5xl/6xl (responsive)
- H2: 3xl/4xl/5xl
- H3: 2xl/3xl
- Body: base (16px)

## Component API

### Button.svelte

```svelte
<Button variant="primary" size="md" href="/products">
  Ver Productos
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'whatsapp' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `href`: string (optional, creates link)
- `onclick`: function (optional)
- `disabled`: boolean (default: false)

**Features:**
- Pink glow on hover (primary)
- Smooth transitions (300ms)
- Focus ring for accessibility
- WhatsApp brand color variant

---

### ProductCard.svelte

```svelte
<ProductCard product={{
  id: "1",
  name: "Aretes de Perlas",
  category: "Joyería",
  description: "Elegantes aretes...",
  priceRange: "$20-$30",
  image: "/images/product.jpg"
}} />
```

**Props:**
- `product`: Object with:
  - `id`: string
  - `name`: string
  - `category`: string
  - `description`: string
  - `priceRange`: string
  - `image`: string (URL)

**Features:**
- Hover lift effect (-translate-y-2)
- Scale image on hover (1.1x)
- Sparkle icon animation
- Integrated WhatsApp CTA
- Category badge

---

### Hero.svelte

```svelte
<Hero
  title="Rabouquet"
  subtitle="Detalles únicos que hacen la diferencia"
  ctaText="Explorar Colección"
  ctaLink="/products"
  backgroundImage="/hero-bg.jpg"
/>
```

**Props:**
- `title`: string (required)
- `subtitle`: string (required)
- `ctaText`: string (required)
- `ctaLink`: string (required)
- `backgroundImage`: string (optional)

**Features:**
- Animated gradient background
- Floating blob animations
- Fade-in-up content animation
- Sparkle decorations
- Responsive sizing

---

### Header.svelte

```svelte
<Header />
```

**Features:**
- Sticky on scroll
- Glass morphism effect when scrolled
- Mobile hamburger menu
- Active page indicator
- Logo with sparkle
- WhatsApp CTA button

**Navigation:**
- Inicio (/)
- Productos (/products)
- Sobre Nosotros (/about)
- Contacto (/contact)

---

### Footer.svelte

```svelte
<Footer />
```

**Features:**
- Dark gradient background
- Social media links (Instagram, WhatsApp)
- Contact information
- Business hours
- Responsive grid layout

---

### Section.svelte

```svelte
<Section background="pink" padding="lg">
  <h2>Content here</h2>
</Section>
```

**Props:**
- `background`: 'white' | 'pink' | 'gradient' | 'rose' (default: 'white')
- `padding`: 'sm' | 'md' | 'lg' | 'xl' (default: 'lg')

**Features:**
- Consistent max-width (7xl)
- Responsive padding
- Auto-centering

---

### CategoryFilter.svelte

```svelte
<CategoryFilter
  categories={['Joyería', 'Accesorios', 'Decoración']}
  activeCategory="Joyería"
  onFilter={(cat) => handleFilter(cat)}
/>
```

**Props:**
- `categories`: string[] (required)
- `activeCategory`: string (required)
- `onFilter`: (category: string) => void (required)

**Features:**
- "Todos" option
- Active state with gradient
- Pulse animation on active
- Smooth transitions

---

### WhatsAppButton.svelte

```svelte
<!-- Floating -->
<WhatsAppButton
  variant="floating"
  message="Hola! Quiero más información"
/>

<!-- Inline -->
<WhatsAppButton variant="inline">
  Consultar
</WhatsAppButton>
```

**Props:**
- `variant`: 'floating' | 'inline' (default: 'inline')
- `message`: string (pre-filled message)

**Features:**
- Floating: Fixed bottom-right with pulse animation
- Inline: Compact button with icon
- Opens WhatsApp with pre-filled message
- WhatsApp brand green (#25D366)

---

## Animations

### Hover Effects
- **Pink Glow**: `shadow-lg shadow-pink-300/50`
- **Lift**: `-translate-y-2` with smooth transition
- **Scale**: Image scales to 1.1x

### Timing
- Transitions: 200-300ms
- Animations: 2-7s (blobs, sparkles)
- Delays: 200ms, 400ms, 1s, 2s, 4s

### Keyframes
- `blob`: Organic floating movement
- `fade-in-up`: Content reveal
- `sparkle`: Rotate and scale pulse
- `ping`: WhatsApp button pulse

---

## Spacing System

- **Padding**: 4px, 8px, 12px, 16px, 24px, 32px, 40px
- **Gap**: 3 (0.75rem), 6 (1.5rem), 8 (2rem)
- **Max Width**: 7xl (80rem / 1280px)

---

## Accessibility

- Focus rings on all interactive elements
- Semantic HTML (nav, section, footer, header)
- ARIA labels on icon buttons
- Alt text on images
- Proper heading hierarchy

---

## Usage Example

```svelte
<script>
  import { Header, Hero, Section, ProductCard, Footer } from '$lib/components';
</script>

<Header />

<Hero
  title="Rabouquet"
  subtitle="Detalles únicos"
  ctaText="Ver Más"
  ctaLink="/products"
/>

<Section background="pink" padding="xl">
  <h2>Productos Destacados</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <ProductCard product={product1} />
    <ProductCard product={product2} />
    <ProductCard product={product3} />
  </div>
</Section>

<Footer />
```

---

## Brand Guidelines

### Logo
- Pink/rose gradient circle with "R"
- Yellow sparkle accent (top-right)
- Playfair Display font for text

### Voice
- Elegant and sophisticated
- Warm and approachable
- Quality-focused
- Artisanal

### Imagery
- Soft, natural lighting
- Pink/rose color grading
- Clean, minimal backgrounds
- Close-up product details

---

## Next Steps for AGENT 3

All components are ready for integration. Import from:
```typescript
import { Button, Hero, Header, Footer, ProductCard, Section, CategoryFilter, WhatsAppButton } from '$lib/components';
```

Components use TypeScript for type safety and are fully responsive with mobile-first design.
