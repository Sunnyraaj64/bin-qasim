# BinQasim Technical Services – Complete Project Analysis

This document provides a full analysis of the **BinQasim** project: structure, functionality, and behavior. **No application code was changed**; this is analysis and documentation only.

---

## 1. Project Overview

| Item | Description |
|------|-------------|
| **Project name** | BinQasim (package: `sungo-react`) |
| **Business** | BinQasim Technical Services CO.LLC – glass and mirror solutions (Dubai) |
| **Document title** | *BinQasim Technical Services CO.LLC* (in `index.html`) |
| **Template base** | Sungo – Ecology & Solar Energy HTML template (ThemeWagon), adapted to React |
| **Type** | Single-page application (SPA) with multiple routes |

**Purpose:** Marketing and lead-generation website for a Dubai-based glass and mirror company: services, about, FAQ, contact, appointment/quote requests, pricing, projects, and testimonials.

---

## 2. Technology Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js |
| **Framework** | React 18 |
| **Build** | Vite 6 |
| **Language** | TypeScript 5.7 |
| **Routing** | React Router DOM 7 |
| **Styling** | Bootstrap 5.3, SCSS (Sass), Animate.css, custom SCSS modules |
| **Animations** | Motion (motion/react), WOW-style scroll animations via `useAnimation` |
| **Carousels / sliders** | Swiper 11 |
| **Other UI** | react-modal-video, react-select (via CustomDropdown), react-countup, react-intersection-observer, react-animate-height |
| **Deployment** | Vercel (SPA rewrites in `vercel.json`) |

---

## 3. Project Structure (High Level)

```
BinQasim/
├── public/                 # Static assets (images, favicons)
├── src/
│   ├── assets/             # CSS, SCSS, webfonts (e.g. Font Awesome)
│   ├── components/
│   │   ├── headers/        # Top bar, navbar, search, offcanvas, language
│   │   ├── sections/      # Page sections (about, hero, services, contact, etc.)
│   │   └── ui/             # Reusable UI (section title, dropdown, pagination, WhatsApp)
│   ├── db/                 # Data files (menu, pricing, services, projects, team, FAQ, etc.)
│   ├── hooks/              # useAnimation, useSticky
│   ├── layout/             # root.tsx and alternate layouts (layoutTwo, Three, Four)
│   ├── lib/                # Icons (e.g. SuCallMessage, SuEmail, SuLocation)
│   ├── pages/              # Route-level pages (Home, About, Contact, FAQ, 404, home-one-single)
│   ├── route/              # React Router config (router.tsx)
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── package.json
├── vercel.json
└── README.md (Sungo template notes)
```

---

## 4. Routing and Pages

Router is defined in `src/route/router.tsx` using `createBrowserRouter`.

### 4.1 Layout

- **Root layout:** `RootLayout` (`src/layout/root.tsx`)
  - Renders: `HeaderOne` → `Outlet` (page content) → `Footer` → `WhatsAppButton` → `ScrollRestoration`
  - Calls `useAnimation()` for scroll-based animations

### 4.2 Routes

| Path | Page component | Description |
|------|----------------|-------------|
| `/` | `Home` | Main landing: hero, marque, about, services, appointment form, projects, testimonials, pricing, FAQ, newsletter |
| `/home-one-single` | `HomeOneSingle` | Alternate home: same sections plus achievements and team carousel |
| `/about` | `About` | About Us: page title, about block, offer, projects, marque, team |
| `/faq` | `Faq` | FAQ: page title + accordion (FaqHomeFour) |
| `/contact` | `Contact` | Contact: page title, address + form, map |
| `/404` | `Error` | 404 with “Go Back Home” link |
| `*` (catch-all) | `Error` | Same 404 page for unknown routes |

---

## 5. Functionality by Area

### 5.1 Header (HeaderOne)

- **Top bar (TopHeaderOne):**
  - Email: `Issackuku83@gmail.com`
  - Phone: `+971 58 881 9493`
  - Language selector (LanguageSelector)
  - Social: Facebook, Instagram, TikTok
- **Main header:**
  - Logo → `/` (main-logo.png)
  - Navbar: menu from `menuData` (or `menuDataSingleHomePage` on `/home-one-single`)
  - Search popup (SearchPopup)
  - CTA: “Get A Quote” – smooth scroll to `#appointment-section`
  - Hamburger / extra info (ExtraInfoOffcanvas)
- **Sticky behavior:** `useSticky` adds class when `scrollY > 250`.

**Menu data (menuData):** Home, About, FAQ, Contact (no mega menu or submenus in current data).

### 5.2 Hero (HeroOne)

- Swiper slider: fade effect, autoplay 7s, loop, prev/next buttons.
- Two slides with:
  - Image (slider1.jpeg, slider2.jpeg)
  - Title: “WELCOME TO BINQASIM TECHNICAL SERVICES”
  - Headline (e.g. “Premium Glass & Mirror Solutions…”)
  - Short description and “Get a Quote” button → smooth scroll to `#appointment-section`
- Animations via Motion (opacity and slide-in on active slide).

### 5.3 Marquees

- **MarqueOne / MarqueTwo:** Tickering / marquee sections (likely logo or text strips).

### 5.4 About

- **AboutOne (home):** Two-column layout: counter “6,561+”, video popup (AboutRoundedTextVideoPopup), images, “Welcome To BinQasim Technical Services”, two feature blocks (Quality Craftsmanship, Expert Consultation), “Explore More” → `/about`, author card (Ronald Richards, Co-Founder).
- **AboutTwo (about page):** Used on `/about` with Offer, ProjectsTwo, MarqueTwo, TeamesThree.

### 5.5 Services

- **ServicesOne:** Section “Comprehensive Glass & Mirror Solutions” with Swiper carousel of service cards.
- **Data (serviceOneData):** 8 services (e.g. Glass Installation, Mirror Services, Glass Cutting & Fabrication, Shower Glass, Repair & Replacement, Custom Solutions, Partitions, Commercial Glass); each has title, description, icon, link (e.g. `/service-details`).

### 5.6 Appointment (Get a Quote)

- **Section id:** `appointment-section` (target of header and hero CTAs).
- **AppointmentForm:** Form with:
  - Name, Email, Phone
  - Service type: CustomDropdown with options (Smart Glass, Smart Film, Tempered Glass, Laminated Glass, Mirror Installation, Glass Repair, Custom Fabrication, Commercial/Residential Glass)
  - Message textarea
  - Submit: “Send Appointment Request”
- **Form action:** `appointment.php` (POST) – backend not in repo; form is present for integration.

### 5.7 Projects

- **ProjectsOne (home):** Grid/carousel of projects from project DB.
- **ProjectsTwo (about page):** Alternate projects layout.
- Data sources: `projectsOneData`, `projectsTwoData`, `projectsThreeData`, `projectsFourData`.

### 5.8 Testimonials

- **TestimonialOne:** Carousel of testimonials.
- Data: `testimonialsOneData`, `testimonialsTwoData`, `testimonialFourData`.

### 5.9 Pricing

- **PriceGridOne:** Pricing cards from `pricingData`.
- Three tiers:
  - Basic Service: AED 299 (starting from), 5 features, “Get Quote” → `/contact`
  - Most Popular: AED 599, 6 features, “Get Quote” → `/contact`
  - Premium Service: Custom/quote-based, 7 features, “Contact Us” → `/contact`

### 5.10 FAQ

- **FaqHomeOne (home):** FAQ block on landing.
- **FaqHomeFour (FAQ page):** Full FAQ page section.
- Data: `faqData`.

### 5.11 Newsletter

- **NewsLetter:** Signup section (likely email capture; no backend in repo).

### 5.12 Contact Page

- **PageTitle:** “Contact Us”.
- **ContactAddress:** Phone, email, location (Hor Al Anz East, Deira, Dubai, UAE) + ContactVideoPopup.
- **ContactForm:** Name, email, message; submit “Send Message”; action `contact.php` (POST).
- **ContactMap:** Embedded map section.

### 5.13 Footer

- **Contact strip:** Same phone, email, location as header/footer content.
- **Widgets:** Logo, short company description (glass and mirror solutions in Dubai), social (Facebook, Instagram, TikTok), Quick Links (About Us, FAQ’s, Contact Us).
- **Bottom:** “© All Copyright 2025 by BinQasim Technical Services”, scroll-to-top icon.

### 5.14 WhatsApp Button (UI)

- Fixed floating button linking to `https://wa.me/00971588819493`.
- Styled in `whatsappButton.scss`.

### 5.15 404 Page

- Page title “Page Not Found”, image `/img/404.png`, message “Whoops! This Page got Lost in converstion”, “Go Back Home” link to `/`.

---

## 6. Data Layer (`src/db/`)

| File | Purpose |
|------|--------|
| `menuData.ts` | Main nav: Home, About, FAQ, Contact (types: MenuItemDataType, MegaMenu, SubMenu) |
| `menuDataSingleHomePage.ts` | Alternate menu for `/home-one-single` |
| `faqData.ts` | FAQ questions/answers |
| `pricingData.ts` | Three pricing plans (Basic, Most Popular, Premium) |
| `serviceOneData.ts` | Services for ServicesOne carousel |
| `servicesTwoData.ts`, `serviceThreeData.ts` | Other service lists |
| `projectsOneData.ts` – `projectsFourData.ts` | Project items for different project sections |
| `partnersOneData.ts` | Partner/brand logos or links |
| `testimonialsOneData.ts`, `testimonialsTwoData.ts`, `testimonialFourData.ts` | Testimonial content |
| `teamMembersOneData.ts` – `teamMembersFourData.ts` | Team members for team sections |
| `workProcessData.ts` | Work process / steps content |

All are TypeScript modules exporting typed arrays or objects; no API calls.

---

## 7. Hooks

| Hook | File | Behavior |
|------|------|----------|
| `useAnimation` | `hooks/useAnimation.tsx` | IntersectionObserver + Motion: elements with `.slideUp`, `.slideLeft`, `.slideRight` and optional `data-delay` animate into view (translateY/translateX to 0). |
| `useSticky` | `hooks/useSticky.tsx` | Returns `[isSticky]`; `true` when `window.scrollY > 250`, used for sticky header class. |

---

## 8. Key UI Components

| Component | Role |
|-----------|------|
| `SectionTitle` | Subtitle + title for sections (with optional className). |
| `CustomDropdown` | Select/dropdown (used for appointment service type; can back react-select). |
| `Pagination` | Pagination control (e.g. for project/blog lists if used). |
| `WhatsAppButton` | Floating WhatsApp link. |
| `PageTitle` | Breadcrumb-style page title (title + currentPage). |

---

## 9. Styling and Assets

- **Entry:** `main.tsx` imports `all.min.css` (Font Awesome), `main.scss`, `animate.css`, Bootstrap JS, and `react-modal-video` SCSS.
- **SCSS:** `assets/scss/main.scss` and partials (e.g. `_header`, `_footer`, `_hero`, `_about`, `_service`, `_contact`, `_variables`, `_mixins`, etc.).
- **Images:** Under `public/img/` (hero, about, service, project, team, testimonial, logo, shapes, etc.) and favicons in `public/`.
- **Icons:** Font Awesome (webfonts in `assets/webfonts`), plus custom SVGs in `lib/icons.tsx` and inline in components.

---

## 10. Build and Run

- **Dev:** `npm run dev` (Vite dev server).
- **Build:** `npm run build` → `tsc -b` then `vite build`.
- **Preview:** `npm run preview` (production build preview).
- **Lint:** `npm run lint` (ESLint).

Vite is configured with:
- `@` alias → `./src`
- SCSS with `silenceDeprecations: ['import']` for legacy `@import`.

---

## 11. Deployment (Vercel)

- `vercel.json`: Single rewrite `"source": "/(.*)", "destination": "/"` for SPA fallback so all routes serve `index.html`.

---

## 12. Summary Table of Functionality

| Feature | Implemented | Notes |
|--------|-------------|--------|
| Multi-page routing | Yes | Home, About, FAQ, Contact, 404, home-one-single |
| Sticky header | Yes | useSticky + scroll |
| Hero slider | Yes | Swiper, 2 slides, Motion |
| Services carousel | Yes | Swiper + serviceOneData |
| Appointment form | Yes | CustomDropdown for service; POST to appointment.php |
| Contact form | Yes | POST to contact.php |
| Pricing display | Yes | 3 plans, links to /contact |
| FAQ accordion | Yes | FaqHomeOne (home), FaqHomeFour (FAQ page) |
| Projects display | Yes | Multiple project sections/data files |
| Testimonials | Yes | Carousel + data files |
| Team section | Yes | Used on about & home-one-single |
| Newsletter block | Yes | UI only |
| WhatsApp CTA | Yes | Floating button, fixed number |
| Scroll animations | Yes | useAnimation + Motion |
| Search UI | Yes | SearchPopup in header |
| Language selector | Yes | LanguageSelector in top bar |
| Map on contact | Yes | ContactMap component |
| Video popups | Yes | About and contact video popups |
| Backend (PHP) | Not in repo | Forms point to appointment.php, contact.php |

---

## 13. Conclusion

**BinQasim** is a React + Vite SPA for **BinQasim Technical Services CO.LLC**, built on the Sungo template. It provides:

- Branded landing and alternate home layout
- About, FAQ, and Contact pages with clear CTAs
- Quote/appointment and contact forms (front-end only; backend endpoints not in repo)
- Services, projects, testimonials, team, and pricing sections driven by local data
- Sticky header, hero slider, scroll animations, WhatsApp button, and Vercel-ready SPA routing

This analysis describes the project and all its functionality as implemented in the codebase; no code was modified.
