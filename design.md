# 🎨 Katherine Velasquez — Design System & Guidelines

This document details the visual identity, styling rules, typography, color systems, and UI component standards for **Katherine Velasquez | Consultoría Estratégica 360** (`https://ktvelasquez.com`).

---

## 🌟 Brand Direction
The website is designed to project a **premium, elegant, and corporate yet modern** image. The identity merges civil engineering structure (structure, processes, system) with digital marketing and communication strategy. The design uses spacious layouts, clean background spaces, refined typography, and warm, creative tones (pinks and golds).

---

## 🎨 Color Palette
The colors are configured in [src/app/globals.css](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/globals.css) via the Tailwind CSS `@theme` directive:

| Token Name | Class Name | Hex Code | Visual Use Cases |
| :--- | :--- | :--- | :--- |
| **Brand Pink** | `bg-brand-pink` | `#FFB4C8` | Main banners, decorative bullet highlights, gradients |
| **Brand Pink Light** | `bg-brand-pink-light` | `#FFDFE8` | Highlight sections (About preview, Podcast, Final CTA) |
| **Brand Gold** | `bg-brand-gold` | `#EBBF7E` | Main CTA background, section accents, border lines |
| **Brand Gold Light**| `bg-brand-gold-light`| `#F5E5CD` | Alternate section backgrounds (Quién Soy, Servicios, FAQ) |
| **Brand Cream** | `bg-brand-cream` | `#FFFFFF` | Core website background (clean, spacious, high contrast) |
| **Brand Black** | `bg-brand-black` | `#1A1A1A` | Main text color, high-contrast button text, marquee background |
| **Brand Purple*** | `bg-brand-purple` | `#7244D4` | Hover states, secondary action buttons, text gradient end |

*\*Note: Brand Purple hover color is `#7244D4`, and Brand Pink hover color is `#E01E79`.*

---

## ✍️ Typography
The typography system pairs classic editorial serifs with clean, geometric sans-serifs and elegant script accents.

### Font Families
1. **Heading Font (`--font-heading`):** `Playfair Display`, serif.
   * *Usage:* Main titles, section headers, italic highlights.
2. **Body Font (`--font-body`):** `Inter`, sans-serif.
   * *Usage:* Explanations, descriptions, button labels, navigation links.
3. **Script Font (`--font-script`):** `Great Vibes`, cursive.
   * *Usage:* Personal accents, handwriting overlays (e.g., *“Dirección estratégica...”* or *“para quienes”*).

### Text Styles
* **Main CTA Buttons:** Bold uppercase, tracking-widest (`tracking-widest`), small font size (`text-[10px]` or `text-xs`).
* **Section Taglines:** Small, bold, uppercase, highly spaced (`text-xs font-bold uppercase tracking-[0.3em]`).
* **Hero Title:** Large, compact line-height, uppercase (`text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase`).

---

## ⚡ UI Effects & Animations
To make the interface feel alive, elegant, and interactive, specific CSS classes and keyframes are implemented:

### 1. Shadows
* **Soft Shadow (`shadow-soft`):** `0 4px 20px rgba(0, 0, 0, 0.06)`. Used on testimonial cards and secondary service cards.
* **Elevated Shadow (`shadow-elevated`):** `0 20px 60px -15px rgba(0, 0, 0, 0.12)`. Used for the newsletter form card, the featured service tier, and the podcast card.

### 2. Scroll Reveal (`.reveal`)
* Controlled via the client component [src/components/scroll-reveal.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/scroll-reveal.tsx).
* Elements start with `opacity: 0` and `transform: translateY(30px)`.
* When visible in the viewport, the class `.visible` is appended, smoothly transitioning the opacity to `1` and translating it back to `0` over `0.8s`.

### 3. Marquee Banner (`.marquee-track`)
* Configured in [src/components/marquee.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/marquee.tsx).
* Moves items infinitely in a line using `marquee-scroll 30s linear infinite` translating `-50%` horizontally.
* Styled with a dark background (`#1A1A1A`) and white semi-transparent uppercase text (`text-white/70`), separated by pink stars (`✦`).

### 4. Interactive Hovers
* **Hover Scale/Lift:** Cards hover lift using `hover:-translate-y-1` or `hover:-translate-y-2` combined with `transition-all duration-300`.
* **Grayscale Transition:** Client logos in the brand strip are grayscale and low-opacity by default (`grayscale opacity-40`). On hover, they transition smoothly to full color and higher opacity (`grayscale-0 opacity-90 transition-all duration-400`).

---

## 🔲 Grid & Layout System
The layout enforces breathing room (generous whitespace) to maintain a premium editorial feel.

* **Section Padding:** Sections use vertical padding of `py-24` or `py-32` to isolate concepts.
* **Containers:**
  * Standard blocks use `max-w-7xl mx-auto px-6 md:px-16`.
  * Hero section uses `max-w-[1400px]` to push text alignment further to the left.
  * Banners and central cards use a tighter `max-w-4xl` layout to group text in readable paragraph widths.
* **Fixed Navigation Header:** Fixed top navigation (`fixed top-0 z-50 w-full`) with a height of `h-20` on mobile and `h-24` on desktop. Incorporates background opacity and backdrop blurring (`bg-white/90 backdrop-blur-xl`) with a thin bottom border (`border-b border-gray-200`).

---

## 🧩 Component Designs

### 1. Navigation Bar ([navbar.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/navbar.tsx))
* **Logo:** Centered vertical layout on mobile; left-aligned on desktop.
* **Language Switcher:** A custom pill slider button (`w-[68px] h-9 rounded-full bg-gray-100`) containing a sliding black circle that highlights the selected language code (`ES` or `EN`) with smooth transition styling.

### 2. Service Cards ([page.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/page.tsx#L250-L317))
* **Standard Tier:** White background, simple soft shadow, outline action button.
* **Featured Tier (Center):** Bordered with a gold frame (`border-2 border-brand-gold`), deeper shadow (`shadow-elevated`), and features a dark pill ribbon badge (`RECOMENDADO` / `RECOMMENDED`) floating over the top border.

### 3. Image Frame Styling
* In the "Quién Soy" section, the main image has a decorative, offset thin gold line frame behind the photo. This is achieved using an absolute-positioned container (`absolute inset-0 border border-brand-gold top-10 bottom-0 left-0 right-10 z-0`) sitting behind the image container.

---

## 📸 Image Specifications & Optimizations

* **Hero Image (`KT_Hero.webp`):** Bypasses standard Next.js automated image optimization (`unoptimized` attribute) because it is pre-compressed to ~240 KB. This prevents visual blur. The position is offset using tailwind positioning (`object-[82%_40%] md:object-[75%_center]`) to keep Katherine centered on different screens.
* **Second Profile Photo (`KTSecondPhoto.webp`):** Uses Next.js responsive sizing (`sizes="(max-width: 768px) 100vw, 50vw"`) and quality parameter (`quality={90}`) to optimize a large 2.8 MB source file for fast mobile loads without sacrificing facial clarity.
