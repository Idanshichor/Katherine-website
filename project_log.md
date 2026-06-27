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

---



## ⚠️ Guidelines for Future Updates
1. **Feature Branching:** Do **NOT** push or commit directly to the `main` branch. Create a feature branch (e.g. `feature/name` or `fix/name`) for any edits. This allows Vercel to generate a **Preview Deployment** link to test changes before they go live. Once verified, merge the branch into `main`.
2. **Copy Modification:** Do **NOT** modify or change any of the copy on the landing page unless explicitly requested by the user.
3. **Build Verification:** Always run `npm run build` locally before pushing changes to verify that the TypeScript compiler and Turbopack bundler are completely free of errors.
4. **Deployment:** Pushing or merging to the `main` branch of the GitHub repository triggers the final production deployment on Vercel.

