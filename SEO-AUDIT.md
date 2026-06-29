# SEO Strategy & Audit — Katherine Velasquez

**Site:** https://ktvelasquez.com (Next.js 16.2.4 App Router on Vercel — verified by `npm run build` output)
**Codebase:** `/Users/idanshichor/Documents/App Dev/Websites /katherine-website`
**Initial audit:** 2026-06-27 · **Last updated:** 2026-06-29

> Companion PDFs (for sharing with Katherine — outside this repo):
> - English: `/Users/idanshichor/Documents/AI OS/reports/KTVelasquez-SEO-Strategy-EN.pdf`
> - Spanish: `/Users/idanshichor/Documents/AI OS/reports/KTVelasquez-Estrategia-SEO-ES.pdf`
> - Technical PDF: `/Users/idanshichor/Documents/AI OS/reports/Google-SEO-Report-www.ktvelasquez.com-full.pdf`

---

## 🤝 Agent Handoff State (read this first if you're picking this up cold)

### Where the work lives

- **Active branch:** `feature/seo-phase-1` (branched off `feature/podcast-page`)
- **Base branch:** `main`
- **Branching guideline from `project_log.md`:** never push directly to `main` — feature branches only, then merge after Vercel Preview verification
- **Build command before pushing:** `npm run build` (must be clean — Turbopack + TypeScript)
- **Untracked but expected files in repo root:** `SEO-AUDIT.md` (this file), `brand-book.html`, `design.md` — they existed before the SEO branch and travel with whatever branch is checked out

### What was shipped today (2026-06-29) — Phase 1A

✅ **`npm run build` clean. Visible design unchanged.** 4 changes, 5 files:

| Task | File | Change |
|---|---|---|
| #2 | `src/app/sitemap.ts` | www, removed `priority`/`changefreq`, added `/sobre-mi`+`/podcast`, excluded `/logos` (notFound in prod) |
| #3 | `src/app/robots.ts` | sitemap directive + `host` switched to www |
| #5 | `src/app/page.tsx` + `src/app/translations.ts` | `sr-only` keyword span in homepage H1 + `hero.h1_keyword` translation key (ES + EN) |
| #9 | `next.config.ts` | security headers (X-CTO, XFO, Referrer-Policy, Permissions-Policy, HSTS-preload) + 308 apex→www redirect |

Verified sitemap output (`.next/server/app/sitemap.xml.body`):
```xml
<url><loc>https://www.ktvelasquez.com</loc>...</url>
<url><loc>https://www.ktvelasquez.com/sobre-mi</loc>...</url>
<url><loc>https://www.ktvelasquez.com/podcast</loc>...</url>
```

**Not committed yet** — left staged for the user to review `git diff` before deciding to commit + push.

### What's open

**Pending — safe to ship next (no design impact, no Katherine input needed):**
- **#10** Refactor `/` to server-wrapper + client-child + page-specific metadata + WebSite/Person/Organization JSON-LD graph
- **#11** Refactor `/podcast` to server-wrapper + page-specific metadata + `PodcastSeries` schema
- **#12** Refactor `/sobre-mi` to server-wrapper + page-specific metadata + `ProfilePage` + `BreadcrumbList`
- **#13** Richer alt text on `/sobre-mi` (`page.tsx:47`) and `/podcast` (`page.tsx:137`) hero images
- **#16** Move Web3Forms `access_key` from hardcoded `page.tsx:33` to `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` env var (hygiene only — keys are public by design)

**Deferred — requires Katherine's input or visible design review:**
- **#6** Remove `unoptimized` from hero `<Image>` (visible quality risk — eyeball in Preview)
- **#7** Footer 3-column redesign with visible phone + WhatsApp + privacy link + service-area copy
- **#8** New `/privacidad` route content (Law 1581) — links from footer in #7
- **#14** Replace 5 podcast platform homepage links with real show URLs (need launch URLs)
- **#15** Add Credenciales section to `/sobre-mi` (need university names + graduation years)

**Decisions blocked on Katherine (see Section 5 below):**
- D1: approve flagship positioning ("Personal Brand for Founders/CEOs" as hero pillar)
- D2: keep EN, refactor to `/en/*` routed pages — or remove the toggle entirely
- D3: provide credential specifics for Person schema + `/sobre-mi` credentials section
- D4: confirm GBP status (does one exist? who owns verification?)
- D5: podcast launch date (or strip "Próximamente" until ready)

### Suggested next sessions

1. **Push current branch → Vercel Preview, verify `/robots.txt`, `/sitemap.xml`, HTTP headers via curl, eyeball the homepage to confirm no visual regression** → then commit & PR
2. **Phase 1B refactor batch:** tasks #10, #11, #12, #13, #16 — same `feature/seo-phase-1` branch, single coherent PR
3. **Wait for Katherine sign-off** on positioning + EN strategy + GBP, then start Phase 2 (`/servicios/*`, `/metodologia`, blog, hreflang)

### Key reference files

- `project_log.md` — chronological dev log (start here for project history)
- `design.md` — brand colors, typography, layout, animations
- `brand-book.html` — open in browser for visual brand reference
- `AGENTS.md` — multi-agent instructions for this repo
- `CLAUDE.md` — project-specific instructions

---

## 0. Codebase Reality Check (updated after seeing the repo)

These findings supersede the original live-site-only audit because some assumptions changed once the codebase was visible.

### What already exists (good news)

| Route | File | Status |
|---|---|---|
| `/` | `src/app/page.tsx` | Live homepage |
| `/sobre-mi` | `src/app/sobre-mi/page.tsx` | **Real route exists** (originally thought to be anchor-only) |
| `/podcast` | `src/app/podcast/page.tsx` | **Real route exists** |
| `/logos` | `src/app/logos/page.tsx` | Client logos page |
| `/api/an-token` | `src/app/api/an-token/route.ts` | 21st-SDK auth endpoint |

### What's still missing (work remains)

- `/servicios/marca-personal` — flagship Personal Brand service landing
- `/servicios/consultoria-premium` — 1:1 SME/startup advisory
- `/servicios/talleres-in-company` — workshops
- `/metodologia` — Ecosystem 360 deep page
- `/privacidad` — privacy policy (Colombia Law 1581 required)
- `/blog` and `/blog/[slug]` — content engine
- `/en/*` — English mirror (currently client-side toggle only)

### Key technical findings from the code

| Issue | File:line | Severity | Already fixable |
|---|---|---|---|
| `metadataBase` uses apex, not www | `src/app/layout.tsx:10` | Critical | ✅ |
| No `alternates.canonical` set | `src/app/layout.tsx` (metadata) | Critical | ✅ |
| Sitemap only lists `/` but `/sobre-mi`, `/podcast`, `/logos` exist on disk | `src/app/sitemap.ts` | High | ✅ |
| Sitemap also uses apex, not www | `src/app/sitemap.ts:6` | Medium | ✅ |
| robots.ts sitemap directive uses apex | `src/app/robots.ts:9` | Medium | ✅ |
| No JSON-LD anywhere | `src/app/layout.tsx` | Critical | ✅ |
| H1 splits "Katherine" / "Velasquez" into 2 spans, no keyword span | `src/app/page.tsx:65-68` | Critical | ✅ |
| Hero `<Image>` has `priority` but also `unoptimized` — defeats Next.js responsive srcset | `src/app/page.tsx:47` | High | ✅ |
| Language toggle defaults to EN on mobile (caused the earlier "English CTA on Spanish page" finding) | `src/context/language-context.tsx` | High | ✅ Small fix |
| ES `hero.cta` copy is already correct (`"Hablemos de tu proyecto"`) — only EN says "Let's discuss your project" | `src/app/translations.ts:20` | n/a | Original finding was a render-time bug, not a copy issue |
| Client-side language only, no `/en` route | `src/context/language-context.tsx` | High | ⚠ Larger refactor |
| `next.config.ts` is essentially empty — no security headers, no redirect rules | `next.config.ts` | Medium | ✅ |
| Newsletter via Web3Forms | `src/components/web3-form.tsx` | OK | n/a |

### Three corrections to the original audit (after reading the code)

1. **Hero image priority** — Original audit said "missing `fetchpriority=high`". Reality: `<Image priority unoptimized />` is set, so Next.js does emit `fetchpriority="high"`. The actual issue is `unoptimized` — it disables Next.js's responsive srcset generation, which is what makes the mobile LCP 3.3s. Fix is to remove `unoptimized` (and optionally add `sizes="100vw"`), not to add `fetchpriority`.
2. **Spanish CTA** — Original audit said "CTA reads 'LET'S DISCUSS YOUR PROJECT' on Spanish page". Reality: `translations.ts` has the correct Spanish copy (`"Hablemos de tu proyecto"`). The mobile screenshot caught the page in EN mode because the language toggle was defaulting to English. Fix the toggle default, not the copy.
3. **Multi-page architecture** — Original audit said "single-page site needs multi-page architecture". Reality: it's partially started — `/sobre-mi`, `/podcast`, `/logos` already exist as real Next.js routes. The work remaining is `/servicios/*`, `/metodologia`, `/blog`, `/privacidad`, plus surfacing the existing routes in the navigation and sitemap.

### New finding only visible in the codebase

- **Sitemap is out of sync with reality** — `sitemap.ts` returns one URL (`/`) but three real route files exist on disk (`/sobre-mi`, `/podcast`, `/logos`). Google can crawl them via internal links if any exist, but they're not advertised in the sitemap, which delays discovery and indexing. **Note:** `/logos` returns `notFound()` in production (dev-only), so it should be excluded from the sitemap.

### 🆕 Critical structural finding (affects all pages)

**Every page is `"use client"`** — `src/app/page.tsx`, `src/app/podcast/page.tsx`, `src/app/sobre-mi/page.tsx` all start with `"use client";`. In Next.js App Router, client components **cannot export `metadata` or `generateMetadata`**. Consequence: every page currently inherits the root layout's metadata, so:

- Same title on every page: `"Katherine Velasquez | Consultoría Estratégica 360"`
- Same description on every page
- Same OG image on every page
- Same canonical (if we naively set one at root)

This is the single biggest SEO problem in the codebase and **it changes the Phase 1 plan**. Setting `alternates: { canonical: "/" }` at the root layout would cascade to `/sobre-mi` and `/podcast`, telling Google they are duplicates of the homepage — strictly worse than no canonical.

**Required pattern: split each page into server wrapper + client child.**

```tsx
// src/app/podcast/page.tsx (SERVER component, no "use client")
import type { Metadata } from "next";
import PodcastPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Estrategia 360 — El Podcast | Katherine Velasquez",
  description: "Conversaciones honestas y herramientas estratégicas para CEOs, fundadoras y emprendedoras. Sin pelos en la lengua.",
  alternates: { canonical: "/podcast" },
  openGraph: { /* page-specific OG */ },
};

export default function PodcastPage() {
  return <PodcastPageClient />;
}

// src/app/podcast/page.client.tsx (CLIENT component)
"use client";
// ... existing podcast page body
```

This wrapper pattern applies to all three pages (`/`, `/podcast`, `/sobre-mi`).

---

## 0.5 Per-page audits (added after reading both pages)

### `/podcast` — `src/app/podcast/page.tsx` (404 lines)

**Page purpose:** Pre-launch landing page for *Estrategia 360* podcast + guest application form via Web3Forms.

**Strengths:**
- H1 is well-structured: `<h1>{t("podcastPage.heroTitlePart1")}<br /><span>{t("podcastPage.heroTitlePart2")}</span></h1>` (line 120-123) — single `<h1>` with proper visual split, no fragmentation issue like the homepage.
- Hero image has `priority` AND responsive `sizes="(max-width: 768px) 100vw, 450px"` (line 139-141) — correct setup, unlike homepage.
- 3 value cards with proper H3 hierarchy.
- Real content body, not thin.

**Findings:**

| # | Severity | Issue | File:line | Fix |
|---|---|---|---|---|
| P-C1 | Critical | No page-specific metadata (inherits homepage title/desc/OG/canonical) | `src/app/podcast/page.tsx:1` | Server-wrapper pattern with own `metadata` export |
| P-C2 | Critical | No `PodcastSeries` JSON-LD schema | (entire page) | Add `PodcastSeries` schema with hosts, language, image, description; once episodes launch, add `PodcastEpisode` entries |
| P-H1 | High | All 5 platform links go to platform homepages, not Katherine's podcast | `page.tsx:55, 65, 77, 87, 97` | Replace with actual show URLs when podcast launches; until then, consider hiding the platform strip or labeling it "Próximamente disponible en:" |
| P-H2 | High | Page is marketed as a live podcast but is pre-launch (`Próximamente` flag from homepage) | (whole page) | Either add launch date + first episode, or rename the page tone to "Próximamente" with a clear waitlist CTA. Current state makes promises Google's QRG flags as broken-promise pages. |
| P-M1 | Medium | Web3Forms `access_key` hardcoded in JS bundle | `page.tsx:33` | Already public by design (Web3Forms intends client-side use). Move to `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` env var for rotation hygiene — see task #16. Not a security fix. Also check `src/components/web3-form.tsx` for the same pattern. |
| P-M2 | Medium | Hero image alt is generic `"KT360 Podcast Artwork"` | `page.tsx:137` | Make it descriptive: `"Estrategia 360 — Podcast de Katherine Velasquez para CEOs y fundadoras"` |
| P-M3 | Medium | No `<meta name="theme-color">` or page-specific OG image | n/a | Add an OG image showing the podcast cover + title |
| P-L1 | Low | Form fields have hardcoded English/Spanish toggle in subject line, good UX but consider passing locale explicitly | `page.tsx:34` | Optional |

### `/sobre-mi` — `src/app/sobre-mi/page.tsx` (384 lines)

**Page purpose:** Long-form 8-chapter narrative about Katherine's story (Raíces → Maratón Académica → Choque/Quiebra → Resiliencia → Emigrar → Chocoaventuras/Mango → Pregunta → Nace Estrategia 360).

**Strengths:**
- **This is the strongest E-E-A-T asset on the entire site.** Real first-person narrative, named businesses (Chocoaventuras, Mango Creative), real adversity (Chapter 3: "Choque y Quiebra"), real geographic emigration story. This is the kind of content Google's September 2025 QRG explicitly rewards for "Experience" pillar.
- H1 is well-formed: `<h1>{t("aboutPage.heroTitlePart1")}<br /><span>{t("aboutPage.heroTitlePart2")}</span></h1>` (line 30-33).
- Hero image has `priority` + responsive `sizes`.
- 8 H2s for chapter titles — proper heading hierarchy.
- Internal CTA to WhatsApp with personalized message body.

**Findings:**

| # | Severity | Issue | File:line | Fix |
|---|---|---|---|---|
| A-C1 | Critical | No page-specific metadata | `src/app/sobre-mi/page.tsx:1` | Server-wrapper pattern; title like `"Quién es Katherine Velasquez — Mi Historia | Estratega 360"`, description from the page subtitle |
| A-C2 | Critical | No `ProfilePage` + `Person` JSON-LD schema | (entire page) | Wrap content in `ProfilePage` schema with `mainEntity` of `Person` referencing the root `Person` `@id` |
| A-H1 | High | No visible institutional credentials | (entire page) | Add a "Credenciales" section listing universities, graduation years, certifications. The chapter narrative is strong on Experience but light on verifiable Expertise signals. |
| A-H2 | High | No `BreadcrumbList` schema | n/a | Add Home → Sobre Mí breadcrumb schema for SERP breadcrumb rich result |
| A-M1 | Medium | Hero image alt is just `"Katherine Velasquez"` | `page.tsx:47` | Make it richer: `"Katherine Velasquez — Estratega 360 e Ingeniera Civil"` |
| A-M2 | Medium | No publication or modification date visible | (entire page) | Add `datePublished` + `dateModified` to ProfilePage schema (silently — no visual date needed) |
| A-M3 | Medium | Each chapter is one paragraph; could be longer-form for AI citation | translations.ts `aboutPage.ch1Text` etc. | Optional content expansion per chapter |
| A-L1 | Low | No links from chapters to related pages (e.g. Chapter 8 "Nace Estrategia 360" → `/servicios`) | (entire page) | Add internal links once service pages exist |

---

## 0.6 Revised Phase 1 (after per-page audits)

The original Phase 1 plan needs four changes:

### Reverted from "ready to ship"

- ❌ ~~Task #1: Add `alternates: { canonical: "/" }` to root metadata~~ — would cascade incorrectly to `/podcast` and `/sobre-mi`. **New plan:** add per-page canonical via the server-wrapper pattern.
- ❌ ~~Task #4: Add JSON-LD only at root layout~~ — root gets WebSite/Person/Organization graph; each subpage needs its own `PodcastSeries` / `ProfilePage` block.
- ❌ ~~Task #5: Add H1 keyword span only on homepage~~ — `/podcast` and `/sobre-mi` H1s are already well-formed; only homepage H1 needs the keyword span. (Confirmed correct, no change.)

### Still safe to ship as-is

- ✅ Task #2: sitemap.ts — include `/sobre-mi` and `/podcast`, exclude `/logos`
- ✅ Task #3: robots.ts — switch to www
- ✅ Task #9: next.config.ts — security headers + 308 redirect
- ✅ Task #5 (homepage only): H1 keyword span via `sr-only`

### New tasks created from per-page audit

- 🆕 Refactor `/` page to server-wrapper + client-child pattern; add page-specific metadata + canonical + WebSite/Person/Organization JSON-LD graph
- 🆕 Refactor `/podcast` page to server-wrapper + client-child pattern; add page-specific metadata + canonical + `PodcastSeries` JSON-LD
- 🆕 Refactor `/sobre-mi` page to server-wrapper + client-child pattern; add page-specific metadata + canonical + `ProfilePage` + `BreadcrumbList` JSON-LD
- 🆕 Replace generic alt text on `/sobre-mi` hero (`"Katherine Velasquez"`) and `/podcast` hero (`"KT360 Podcast Artwork"`)
- 🆕 Address pre-launch podcast platform links (P-H1)
- 🆕 Add Credenciales section to `/sobre-mi` (A-H1)

---

## 1. Niche & Positioning (Awaiting Katherine's approval)

> **This must be approved before any content or routing work begins.**
> Hand the PDF (`reports/KTVelasquez-Estrategia-SEO-ES.pdf`) to Katherine for sign-off.

**Proposed flagship positioning:**

> Premium Strategic Consulting & Personal Branding for **Founders, CEOs and Leaders**.
> Personal Branding is the hero pillar. Corporate & startup strategy supports it.

**Why this framing wins over "general strategic consulting":**

- "Consultoría estratégica" SERPs in Colombia/LATAM are owned by EY, BDO, Castrillón, 360MS — a personal brand can't outrank a firm with 300 indexed pages.
- "Personal Brand for Founders/CEOs" is a niche where competitors are either agencies *or* communication coaches — none have Katherine's hybrid (Civil Engineer + double Master's in Marketing & Digital Comms + ops track record).
- This positioning makes her credentials an unfair advantage instead of a parity claim.

**Target audience:**
- Startup founders raising/scaling
- Corporate executives building professional legacy
- Senior consultants/advisors packaging expertise
- Boutique service firm owners who are the face of their business
- Income/revenue floor: USD $200K+ per year
- Primary platform: LinkedIn (always)
- Disqualifiers: starting from zero, sub-USD-$5K budgets, coaching seekers

**Service hierarchy:**

| Tier | Service | Anchor keyword | Audience |
|---|---|---|---|
| 1 (Hero) | Personal Brand Mentorship 360° | mentoría de marca personal para fundadores | Founders, CEOs, executives |
| 2 | 1:1 Premium Strategy Consulting | consultoría estratégica para startups y PYMEs | SMEs, scaling startups |
| 3 | Workshops & In-Company | talleres de estrategia 360 in-company | Mature brand leadership teams |

---

## 2. Keyword Directory

### 2.1 Spanish — Personal Brand Mentorship (Flagship Cluster)

| Keyword | Intent | Competition | Strategic value |
|---|---|---|---|
| mentoría de marca personal | T | Medium | Direct match for flagship. Anchor of `/servicios/marca-personal`. |
| marca personal para fundadores | T | Low-Med | Highest-qualifying segment. |
| marca personal para directivos | T | Low-Med | CEOs & executives. |
| consultoría de marca personal CEO | T | Low | Premium leadership advisory. |
| asesor de marca personal ejecutivo | T | Low | High-intent, high-ticket. |
| estrategia de marca personal LinkedIn | C | Medium | LinkedIn-aligned. |
| cómo crear marca de autoridad | I | Low | Intro blog post. |
| pilares de marca personal | I | Medium | Education + positioning. |
| posicionamiento de marca personal LinkedIn | C | Medium | Core pain point. |
| marca personal auténtica sin postureo | C | Low | Matches existing messaging exactly. |

### 2.2 Spanish — Strategic Consulting (SMEs/Startups)

| Keyword | Intent | Competition | Strategic value |
|---|---|---|---|
| consultoría estratégica para startups | T | Medium | Companies ready to audit ops. |
| consultor de estrategia empresarial PYMEs | T | High-Med | Highest competition — needs strong pillar. |
| mentor de negocios para startups | T | Medium | Structured-program intent. |
| optimizar operaciones empresa de servicios | C | Low | Matches ops methodology. |
| plan estratégico de 90 días | C | Low-Med | Maps to Consultoría Premium; lead magnet. |
| cuellos de botella en el crecimiento de PYMEs | I | Low | Informational article. |

### 2.3 English — Personal Branding for Leaders (Secondary Market)

| Keyword | Intent | Competition |
|---|---|---|
| personal brand mentor for CEOs | T | Low |
| executive personal branding consultant | T | Medium |
| thought leadership strategy for founders | C | Low-Med |
| personal brand positioning for entrepreneurs | C | Low |
| LinkedIn brand strategy for executives | C | Low-Med |
| how to build executive presence on LinkedIn | I | Medium |
| personal branding framework for founders | I | Low |

### 2.4 English — Business Strategy (Secondary)

| Keyword | Intent | Competition |
|---|---|---|
| business operations consultant for startups | T | Medium |
| startup growth strategist | T | Med-High |
| 1 on 1 startup advisory program | T | Low |
| how to scale operations without burning out | I | Low |
| aligning marketing and operations strategy | I | Low |

Intent legend: **T** = Transactional · **C** = Commercial · **I** = Informational

---

## 3. Current Performance Baseline (Real PageSpeed Data)

Captured via Google PageSpeed Insights API on 2026-06-27.

| Metric | Mobile | Desktop | Status |
|---|---|---|---|
| Lighthouse Performance | 90/100 | 100/100 | ✅ |
| Lighthouse SEO | 100/100 | 100/100 | ✅ (surface checks only) |
| Lighthouse Accessibility | 96/100 | 96/100 | ⚠ 2 issues |
| Lighthouse Best Practices | 100/100 | 100/100 | ✅ |
| LCP | **3.3s** | 0.8s | ⚠ Mobile above 2.5s threshold |
| CLS | 0.000 | 0.001 | ✅ |
| TBT | 10 ms | 10 ms | ✅ low INP risk |
| FCP | 0.9s | 0.2s | ✅ |
| CrUX field data | n/a | n/a | Insufficient traffic (normal) |

**Real Lighthouse opportunities (mobile):**
- Improve image delivery (save 14 KiB)
- Render-blocking requests (save 110 ms)
- Reduce unused JavaScript (save 25 KiB)
- Legacy JavaScript (save 14 KiB)

**Real accessibility issues:**
- Insufficient color contrast in some elements
- Button labels don't match accessible names (likely WhatsApp / language toggle)

---

## 4. Action Plan

### ✅ Phase 1 — Status as of 2026-06-29

Phase 1 split into two sub-batches once the per-page audits surfaced the `"use client"` metadata constraint. The first batch (invisible, safe) is now **shipped on `feature/seo-phase-1`** and verified via `npm run build`.

#### 1A — Shipped ✅ (branch `feature/seo-phase-1`, build clean)

- [x] **#2** `src/app/sitemap.ts` — switched to www, dropped deprecated `priority`/`changefreq`, added `/sobre-mi` and `/podcast`, excluded `/logos` (production `notFound`). Generated `.xml` verified.
- [x] **#3** `src/app/robots.ts` — sitemap directive + `host` now point to www.
- [x] **#5** `src/app/page.tsx:65-69` — added `sr-only` span with the new `hero.h1_keyword` translation key inside the existing `<h1>`. Visible design unchanged.
- [x] **#9** `next.config.ts` — added security headers (X-CTO, XFO=SAMEORIGIN, Referrer-Policy, Permissions-Policy, HSTS-preload) on every route + permanent 308 redirect rule for apex → www.

#### 1B — Pending (deferred until tasks #10-#12 land)

- [ ] **#10** Refactor `/` page → server wrapper + client child + page-specific `metadata` (canonical, OG) + WebSite/Person/Organization JSON-LD graph
- [ ] **#11** Refactor `/podcast` page → server wrapper + page-specific metadata + `PodcastSeries` JSON-LD
- [ ] **#12** Refactor `/sobre-mi` page → server wrapper + page-specific metadata + `ProfilePage` + `BreadcrumbList` JSON-LD
- [ ] **#13** Improve hero alt text on `/sobre-mi` (`"Katherine Velasquez"` → richer) and `/podcast` (`"KT360 Podcast Artwork"` → richer)
- [ ] **#16** Move Web3Forms `access_key` from hardcoded string to `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` env var (hygiene, not a security fix — Web3Forms keys are public by design)

#### Deferred for Katherine's input

- [ ] **#6** Remove `unoptimized` from hero `<Image>` (visible quality change — needs eyeball)
- [ ] **#7** Footer redesign — 3-column layout with visible phone + WhatsApp link + privacy link + service-area copy
- [ ] **#8** New `/privacidad` route + content (Law 1581 compliance)
- [ ] **#14** Decide podcast platform link strategy (currently 5 links go to platform homepages, not Katherine's show)
- [ ] **#15** Add Credenciales section to `/sobre-mi` (university names, graduation years, certifications)

### 🔒 Phase 2 — Requires Katherine's positioning approval (Section 1 sign-off)

- [ ] **2.1** Build `/servicios/marca-personal` — flagship Personal Brand landing
- [ ] **2.2** Build `/servicios/consultoria-premium` — 1:1 SME/startup advisory
- [ ] **2.3** Build `/servicios/talleres-in-company` — workshops
- [ ] **2.4** Build `/metodologia` — Ecosystem 360 in depth
- [ ] **2.5** Add Service-type JSON-LD to each new service page
- [ ] **2.6** Decide on EN strategy:
  - **Option A:** Implement `/en/*` mirror routes with hreflang pair (large refactor — move language from context to URL segment)
  - **Option B:** Remove EN toggle entirely, commit to Spanish-only
- [ ] **2.7** Rewrite homepage copy with the new positioning (hero focus on personal brand for founders, secondary on strategy)
- [ ] **2.8** Update `translations.ts` with new positioning copy

### 🚀 Phase 3 — Content engine & authority (Month 2+)

- [ ] **3.1** Launch `/blog` index page + `/blog/[slug]` dynamic route
- [ ] **3.2** Write first 4 posts:
  - "Marca personal para fundadores: el marco de los 4 pilares"
  - "Posicionamiento en LinkedIn para CEOs sin postureo"
  - "Mentoría vs. consultoría de marca personal: cuál necesitas"
  - "Plan estratégico de 90 días para fundadores que escalan"
- [ ] **3.3** Add Article schema to blog post pages
- [ ] **3.4** Expand existing FAQ answers to 130-160 words each (for AI citation)
- [ ] **3.5** Add `FAQPage` schema once expanded
- [ ] **3.6** Link testimonials to LinkedIn profiles of named clients
- [ ] **3.7** Replace WhatsApp-primary CTA with Cal.com/Calendly on premium-persona pages

### 🌱 Phase 4 — Off-site & long-term

- [ ] **4.1** Create + verify Google Business Profile as SAB consultant
- [ ] **4.2** Submit to LATAM citation directories (Páginas Amarillas CO, Kompass CO, Clutch.co, Cámara de Comercio de Bogotá)
- [ ] **4.3** Launch *Estrategia 360* podcast with a dated first episode (or remove the "Próximamente" label)
- [ ] **4.4** Transcribe podcast episodes into `/podcast/[slug]` pages
- [ ] **4.5** Configure IndexNow via Vercel
- [ ] **4.6** Add Search Console + GA4 OAuth credentials → unlocks `/seo google` real query data
- [ ] **4.7** Re-audit at Month 6 using `/seo drift compare`

---

## 5. Decision Points for Katherine

| # | Decision | Why it blocks work |
|---|---|---|
| D1 | **Approve flagship positioning** (Personal Brand for Founders/CEOs as hero) | Without this, services pages and homepage copy can't be finalized. |
| D2 | **EN strategy:** keep + route, or remove? | Determines whether Phase 2 includes `/en/*` refactor or strips it. |
| D3 | **Provide credential specifics** — university names, graduation years, institutional affiliations, press mentions | Powers Person schema + `/sobre-mi` rewrite. |
| D4 | **Confirm GBP status** — does one exist already, even unverified? Who owns verification? | GBP is the #1 local-search lever. |
| D5 | **Podcast launch timing** — real date in 30/60/90 days, or remove "Próximamente" section? | Determines Phase 3 vs Phase 4 timing for podcast assets. |

---

## 6. References

- Original audit PDFs: `reports/KTVelasquez-SEO-Strategy-EN.pdf`, `reports/KTVelasquez-Estrategia-SEO-ES.pdf`
- Technical SEO Report: `reports/Google-SEO-Report-www.ktvelasquez.com-full.pdf`
- Audit data (JSON, for regeneration): see scratchpad in claude-seo session
