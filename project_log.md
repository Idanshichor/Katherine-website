# Project Development Log & Decisions

This log serves as a source of truth for the development, configuration, and design decisions of the Katherine Velasquez website. All future AI agents and developers working on this project must consult and keep this document updated.

---

## 📋 Project Overview
* **Website:** Katherine Velasquez | Consultoría Estratégica 360 (`https://ktvelasquez.com`)
* **Tech Stack:** Next.js (with Turbopack/App Router), TailwindCSS / Custom HSL brand styles.
* **Hosting Platform:** Vercel (Live deployment: `kt-velasquez-website` under Vercel account `katherinevelasquez366@gmail.com`).
* **Git Repositories & Remotes:**
  * `origin`: `github.com/Idanshichor/Katherine-website.git` (workspace repository).
  * `live`: `github.com/Idanshichor/kt-velasquez-website.git` (the live Vercel-linked repository. Deploy by pushing here using `git push live main` or `git push live main --force`).
* **Domain Registrar:** Hostinger (nameservers pointed to Vercel).
* **DNS Management:** Managed via Vercel DNS dashboard.

---

## 🛠️ DNS & Hosting Configuration
* **Root Domain (`ktvelasquez.com`):** Configured with an **A** record pointing to `76.76.21.21`.
  * *Note:* This custom A record overrides Vercel's default ALIAS records which previously resolved to Hostinger's old parked server IPs (`2.57.91.91` and `216.198.79.1`).
* **Subdomain (`www.ktvelasquez.com`):** Configured with a **CNAME** record pointing to `cname.vercel-dns.com.`.
* **Verification Status:** Fully propagated and routing correctly to Vercel's servers.

---

## 🔍 Technical SEO & Crawlability
* **Crawler Access (`robots.txt`):** Configured via [src/app/robots.ts](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/robots.ts) to permit all bots:
  ```typescript
  userAgent: '*'
  allow: '/'
  ```
  *(Fixes previous issue where Hostinger's parked page returned a blocking robots file to SEO scanners).*
* **Sitemap (`sitemap.xml`):** Generated dynamically via [src/app/sitemap.ts](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/sitemap.ts), pointing to `https://ktvelasquez.com`.
* **Metadata Base:** Defined in [src/app/layout.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/layout.tsx) as `https://ktvelasquez.com`.
* **Favicon:** Pointed to `images/KT_LOGO.webp`.
* **Social Sharing Preview (OpenGraph / Twitter):**
  * Image: Katherine's hero image (`/images/KT_Hero.webp`), *not* the logo.
  * Card Type: `summary_large_image`.

---

## ✉️ Newsletter & Forms
* **Service:** Web3Forms.
* **Access Key:** `7bd1aa94-7d33-4738-b627-5b9378af65d4` (embedded in [src/components/web3-form.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/web3-form.tsx)).
* **Implementation:** Runs entirely client-side via AJAX fetch submissions.
  * No page redirects on submit.
  * Disables inputs and button state to prevent double-submitting.
  * Updates button text to `"¡Suscrito!"` on success.

---

## 🎨 Layout & Image Optimizations
* **Hero Image (`KT_Hero.webp`):** Bypasses Next.js default image optimization with the `unoptimized` flag:
  ```tsx
  <Image src="/images/KT_Hero.webp" ... unoptimized />
  ```
  *(Since the WebP file is already optimized at 240 KB, this prevents Next.js's automatic compressor from double-compressing and blurring the image).*
* **Second Profile Photo (`KTSecondPhoto.webp`):** Optimized using:
  * `sizes="(max-width: 768px) 100vw, 50vw"` to serve the correct resolution size.
  * `quality={90}` to maintain premium visual definition while compressing the original 2.8 MB image.
* **Typography:** Custom brand fonts imported: `Playfair_Display`, `Inter`, and script font `Great_Vibes` (`--font-script`).
* **Hero Content Rules:**
  * The main text "Consultoría Estratégica 360" must remain on a **single line** on all screen sizes.
  * The subheader text beginning with *"Dirección estratégica..."* is hidden on mobile layout.
  * Mobile layout button is prioritized at the top of the hero group.

---

## 🌎 Multi-Language Support (ES / EN)
* **Architecture:** Driven by a React Context Provider (`LanguageProvider`) in [src/context/language-context.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/context/language-context.tsx).
* **Translation Storage:** Centralized in [src/app/translations.ts](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/translations.ts). It holds copywriter-grade, context-appropriate translations (not literal dictionary lookups).
* **Toggling & State:**
  * Interactive sliding pill toggle switches in [src/components/navbar.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/navbar.tsx) (desktop header, and top navigation bar next to the hamburger icon on mobile view).
  * Automatically detects `?lang=en` or `?lang=es` on initialization.
  * Falls back to `localStorage` cached preference, or browser language settings.
  * Smooth, client-side translation of headers, marquee items, forms, FAQs, and testimonials with zero layout shifts or route refreshes.


## 📝 Development Log
* **2026-06-19:** Updated testimonial author name from "Idan Shichor" to "Pnina Shichor" and role to "Founder, Bound to Travel" (localized for ES/EN) in [src/app/page.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/page.tsx) under the `feature/update-review-author` branch.
* **2026-06-19:** Deleted the private/personal `sobre-mi` page (`src/app/sobre-mi/page.tsx`) and removed all associated translation strings from `src/app/translations.ts` to prevent public access.
* **2026-06-19:** Restricted the `/logos` route (`src/app/logos/page.tsx`) to local development only by returning `notFound()` if `process.env.NODE_ENV === "production"`.
* **2026-06-27:** Created a comprehensive [design.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/design.md) file documenting the brand colors, typography, layout guidelines, component specs, and animations used throughout the site.
* **2026-06-27:** Created an interactive [brand-book.html](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/brand-book.html) file to serve as a local, browser-openable style guide and brand book preview.
* **2026-06-27:** Created the new Podcast page (`/podcast`) under branch `feature/podcast-page`. Implemented full bilingual copy (ES/EN) in `translations.ts`, integrated navigation links into desktop and mobile menus in `navbar.tsx`, linked the homepage podcast section CTA to the new page in `page.tsx`, and added a premium Web3Forms guest application form. Verified local production build compiles successfully.
* **2026-06-27:** Created the new dedicated bilingual About Me page (`/sobre-mi`) on the same branch. Added comprehensive translations to `translations.ts`, updated navbar desktop/mobile menu links to direct to `/sobre-mi` instead of the homepage anchor `/#quien-soy`, and designed a premium chapter-based visual timeline.
* **2026-06-29:** Started SEO program. Ran full audit (homepage + `/sobre-mi` + `/podcast`) and produced [SEO-AUDIT.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/SEO-AUDIT.md) plus bilingual positioning PDFs for Katherine's approval (located outside this repo). Created branch `feature/seo-phase-1` off `feature/podcast-page`.
* **2026-06-29:** Phase 1A (invisible SEO fixes, no design change) applied on `feature/seo-phase-1` — `npm run build` clean, all 10 static pages generated:
  * `src/app/sitemap.ts` — switched to www, removed deprecated `priority`/`changefreq`, now includes `/sobre-mi` and `/podcast` (excludes `/logos` since it `notFound()`s in production). Verified output at `.next/server/app/sitemap.xml.body`.
  * `src/app/robots.ts` — switched sitemap directive and `host` to www.
  * `next.config.ts` — added security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS-preload) on every route, plus a permanent (308) apex → www redirect rule.
  * `src/app/page.tsx` — added an `sr-only` keyword span inside the existing hero `<h1>` so crawlers see "Consultoría Estratégica 360 para fundadores y marcas en Colombia" without changing the visible design. New `hero.h1_keyword` translation key added in both ES and EN.
  * Per-page metadata, canonical, and JSON-LD schema **deferred** to Phase 1B because every page is `"use client"` — requires a server-wrapper + client-child refactor (tasks #10-#12 in the SEO audit).
* **2026-06-29:** Phase 1B (page metadata & structured data refactor) applied on `feature/seo-phase-1` — `npm run build` clean, all pages compile:
  * Split `/` page into [page.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/page.tsx) (server wrapper with metadata & WebSite/Person graph) and [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/page.client.tsx) (client component).
  * Split `/podcast` page into [page.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/podcast/page.tsx) (server wrapper with metadata & PodcastSeries graph) and [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/podcast/page.client.tsx) (client component).
  * Split `/sobre-mi` page into [page.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/sobre-mi/page.tsx) (server wrapper with metadata & ProfilePage/BreadcrumbList graph) and [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/sobre-mi/page.client.tsx) (client component).
  * Updated the Spanish podcast name across the homepage and `/podcast` to *"Estrategia 360 - Sin Pelos en la Lengua"*.
  * Updated hero image alt texts on `/podcast` and `/sobre-mi` to be descriptive and keyword-focused.
  * Removed `unoptimized` and added `sizes="100vw"` to the homepage hero `<Image>` component in [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/page.client.tsx) to improve mobile LCP.
  * Redesigned the footer in [footer.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/footer.tsx) into a 3-column layout featuring contact details, service area coverage, and a link to the new privacy policy page.
  * Created the new `/privacidad` route with [page.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/privacidad/page.tsx) and [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/privacidad/page.client.tsx) to display a bilingual privacy policy (complying with Colombia's Law 1581 of 2012).
  * Updated [sitemap.ts](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/sitemap.ts) to include the new `/privacidad` route.
  * Corrected the location from Bogotá to **Medellín, Colombia** in the footer translations and the privacy policy text.
  * Added explicit privacy policy consent disclaimers linking to `/privacidad` on the homepage and footer newsletter forms ([web3-form.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/web3-form.tsx)) and the podcast guest application form ([page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/podcast/page.client.tsx)) to ensure bulletproof legal compliance.
  * Fixed language toggle bug in [language-context.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/context/language-context.tsx) by removing browser language auto-detection (making Spanish the universal default for new visitors).
  * Optimized text color contrast across all pages to meet WCAG AA standards (4.5:1 ratio), ensuring readability and maximizing Lighthouse Accessibility scores.
  * Environmentalized Web3Forms keys in [web3-form.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/web3-form.tsx) and [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/podcast/page.client.tsx) using `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
  * Added the Consistency Check rule to [AGENTS.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/AGENTS.md) and [project_log.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/project_log.md).
* **2026-06-30:** Typography and FAQ readability improvements applied:
  * Imported `Playball` (`--font-script-readable`) from Google Fonts in [layout.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/layout.tsx) for longer cursive texts.
  * Added `--font-script-readable` and `--color-brand-purple` (#7244D4) to [globals.css](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/globals.css).
  * Updated [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/page.client.tsx) to use `font-script-readable` for the hero subtitle.
  * Updated [page.client.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/app/podcast/page.client.tsx) to use `font-script-readable` and adjusted text sizing for the podcast manifesto quote.
  * Updated [faq-accordion.tsx](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/src/components/faq-accordion.tsx) to use dark brand pink (`#E01E79`) for the active state and hover colors (replacing gold for contrast). Darkened the answer text to `text-gray-800` (font-normal) to ensure excellent readability.
  * Documented the cursive font usage rules in [design.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/design.md).
* **2026-06-30:** Brand Book creation:
  * Created the [brand_book](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/brand_book) directory in the project root.
  * Authored a comprehensive brand manual in Spanish: [manual_de_marca.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/brand_book/manual_de_marca.md) and compiled it into a premium PDF [manual_de_marca.pdf](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/brand_book/manual_de_marca.pdf) (using an intermediate [manual_de_marca.html](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/brand_book/manual_de_marca.html) layout with WeasyPrint), covering the brand's philosophy, verbal identity (writing style/copywriting guidelines), visual identity (colors, typography, web effects), and description of photo assets.
  * Copied the brand logo (`KT_LOGO.webp`, `KT_White_Logo.webp`) and different photos used on the website (`KT_Hero.webp`, `KTSecondPhoto.webp`, `KT_Podcast.webp`) into the [brand_book](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/brand_book) folder.
* **2026-07-03:** New photo set integrated (branch `feature/about-photos-gallery`). Source originals delivered in the untracked `KT Photos/` folder (now gitignored); all images optimized locally with `dwebp`/`cwebp` before being added to the repo (hero: 1.35 MB → 93 KB at 1200px; gallery: 1–13.8 MB → 60–307 KB at 1600px long edge, q78):
  * **About Me hero swap:** `/sobre-mi` hero now uses the new studio portrait [KT_About_Hero.webp](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/public/images/KT_About_Hero.webp) (replacing `KTSecondPhoto.webp` on that page only — the homepage still uses `KTSecondPhoto.webp`, unchanged).
  * **Travel gallery:** added a new "La vida detrás de la estrategia" masonry gallery section on `/sobre-mi`, placed between Chapter 07 (La Pregunta de los Viajeros) and Chapter 08, since the 13 photos ([public/images/gallery/](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/public/images/gallery/)) depict the India/Thailand travels narrated in Chapters 06–07. New bilingual keys `aboutPage.galleryTag/galleryTitle/gallerySubtitle` in `translations.ts`; descriptive Spanish alt texts per photo.
  * **Podcast page photo:** added [KT_Podcast_Katherine.webp](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/public/images/KT_Podcast_Katherine.webp) (already optimized at 42 KB) to the sticky left column of the "values" section on `/podcast`, with the brand's offset gold frame. The existing hero image `KT_Podcast.webp` was NOT replaced.
  * `npm run build` verified clean (all 11 routes).
* **2026-07-12:** Redesigned the travel gallery on `/sobre-mi` and cleaned up typography:
  * Replaced the static masonry columns grid layout with a premium auto-scrolling, hover-pausing React image carousel component.
  * The carousel is fully responsive: showing 3 cards on desktop, 2 on tablet, and 1 on mobile, using custom aspect-ratio containers (`aspect-[4/5]`) and layout preservation.
  * Added custom pagination indicator dots and manual chevron controls. Removed the visible text description overlays on hover, keeping descriptions strictly in the `alt` tag for maximum SEO value.
  * Sped up the autoscrolling timer from 3 seconds to 2 seconds to make the slider more dynamic.
  * Aligned the viewport crop of `KT_Gallery_11.webp` to the left (`object-left`) to frame its subject perfectly.
  * Removed prepended numbers (`01 /`, `02 /`, etc.) from all chapter title translation strings in `translations.ts` (in both ES and EN) to prevent redundant numbering next to the large background number markers.
  * **Updated gallery photos**: Removed 3 old photos and integrated 11 new photos. Automatically optimized the new images (resized to 1600px max long-edge at WebP q78) to maintain fast page load speed, re-sequenced all 21 gallery files (`KT_Gallery_01.webp` to `KT_Gallery_21.webp`), and shuffled their sequence with photos `04`, `07`, and `08` positioned at the very beginning to load first.

---



## ⚠️ Guidelines for Future Updates
1. **Feature Branching:** Do **NOT** push or commit directly to the `main` branch. Create a feature branch (e.g. `feature/name` or `fix/name`) for any edits. This allows Vercel to generate a **Preview Deployment** link to test changes before they go live. Once verified, merge the branch into `main`.
2. **Copy Modification:** Do **NOT** modify or change any of the copy on the landing page unless explicitly requested by the user.
3. **Build Verification:** Always run `npm run build` locally before pushing changes to verify that the TypeScript compiler and Turbopack bundler are completely free of errors.
4. **Deployment:** Pushing or merging to the `main` branch of the GitHub repository triggers the final production deployment on Vercel.
5. **Consistency Check:** Whenever there is a change to something visual that has implications on SEO or other pages, or any text/copy changes that have implications on the rest of the website, or any change with cross-page implications, you MUST always ask the user if you should update it everywhere.

