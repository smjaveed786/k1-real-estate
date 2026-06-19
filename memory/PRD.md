# K1 Real Estate & Marketing — PRD

## Overview
Landing page for K1 Real Estate and Marketing business. Single-page design with dark luxury theme.

**Live URL:** https://property-showcase-k1.preview.emergentagent.com  
**Admin Panel:** https://property-showcase-k1.preview.emergentagent.com/admin

---

## Architecture

### Backend (FastAPI + MongoDB)
- `POST /api/contact` — save contact inquiry to MongoDB
- `GET /api/contacts` — retrieve all inquiries (admin)

### Frontend (React)
- Pages: `LandingPage`, `AdminPage`
- Components: `Navbar`, `Hero`, `About`, `Services`, `Listings`, `Gallery`, `ContactForm`, `Footer`

---

## What's Been Implemented — 2026-06-19 (Update 2)

### New Features Added
- **Real Google Business Details** from Justdial/PinkBazaar:
  - Address: Hussain Nagar 1st Line, Guntur–Ponnur Rd, Guntur, AP 522003
  - Phone: +91 93921 40148
  - Hours: Mon–Sun 9:00 AM – 8:00 PM
  - Google Maps link with Place ID: ChIJib6s_OULSjoRundCpbAYxvw
  - Rating: 4.9★
- **3D Particle Canvas Background** — 160 gold particles rotating in 3D space with mouse parallax, covers entire page (fixed canvas below all sections)
- **Dark/Light Theme Toggle** — Sun/Moon button in navbar, toggles all section backgrounds and text colors via `ThemeContext` and `useColors()` hook
- **WhatsApp Button** — Direct chat link (+91 93921 40148) on Hero and Contact sections
- **Guntur-Based Listings** — All 6 property listings updated with Guntur localities (Budampadu, Ponnur Road, NH-16, Lalapet, Hussain Nagar, CBD)
- **Real About Section** — KBN branding, Guntur AP location, real stat cards

### Landing Page Sections
- **Navbar** — Sticky glassmorphism, logo, nav links, mobile menu, "Get In Touch" CTA
- **Hero** — Full-viewport luxury background (modern villa with pool), Playfair Display heading, gold accent, CTA buttons, scroll indicator
- **About** — Two-column layout, company description, 4 stats (10+ years, 500+ properties, 1000+ clients, 50+ listings), team photo with grayscale hover
- **Services** — 4 service cards: Residential Sales, Commercial Properties, RE Marketing, Property Consultation
- **Listings** — 6 property cards (villa, apartment, premium, house, modern, commercial), Google Business link, "View All on Google" CTA
- **Gallery** — 6-image grid with hover zoom effect
- **Contact Form** — Name, Mobile, Requirement fields, saves to MongoDB, success state
- **Footer** — Logo, quick links, contact info, Google Business link, social icons

### Admin Panel (`/admin`)
- View all contact inquiries in a table
- Shows Name, Mobile, Requirement, Date

### Design
- Dark Luxury theme (#0A0A0B background, #D4AF37 gold accent)
- Playfair Display headings + Manrope body
- framer-motion scroll animations
- Mobile responsive

---

## Core Requirements (Static)
- Business name: K1 Real Estate and Marketing
- Contact form: Name, Mobile, Requirement
- Google Business: K1 Real Estate Marketing (linked via search)
- Property listings (static, 6 featured properties)
- Photo gallery

---

## Prioritized Backlog

### P0 — Critical
- [x] Landing page live
- [x] Contact form working with DB storage
- [x] Admin panel to view leads

### P1 — High Value
- [ ] Email notifications (Resend/SendGrid) on form submission
- [ ] Real Google Maps embed with actual business location
- [ ] Real Google reviews integration (Google Places API)
- [ ] Admin email configuration in .env
- [ ] Phone number and actual address in footer

### P2 — Nice to Have
- [ ] WhatsApp floating button
- [ ] Google Analytics integration
- [ ] SEO meta tags (og:title, og:image, description)
- [ ] Admin login protection
- [ ] Property inquiry tracking by listing

---

## Next Tasks
1. Add admin email to .env for email notifications
2. Add real phone number and address
3. Add Google Places API for real listings
4. Enable email service (Resend/SendGrid)
