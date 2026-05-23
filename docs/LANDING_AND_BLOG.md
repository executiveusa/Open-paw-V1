# Landing Page and Blog Specification

## Purpose

The public site should make Open Paw immediately understandable to non-technical animal welfare teams while still signaling credibility to developers, funders, and nonprofit partners.

Design standard: simple, polished, Webflow-like, Apple-level clarity, light/dark mode, accessible, responsive.

## Steve Krug usability rules

- Do not make users think.
- Make the product purpose obvious above the fold.
- Use plain language.
- Keep one primary call to action.
- Make pages scannable.
- Make next steps obvious.
- Hide complexity until needed.
- Avoid clever navigation labels.

## Hero copy

```txt
Open-source software for animal rescues, shelters, and veterinary welfare teams.

Track animals, find funding, publish adoptable pets, and keep your data local.
```

Primary CTA: `Download Free`

Secondary CTA: `View GitHub`

## Landing sections

1. Hero
2. Proof bar
   - Local-first
   - Open-source
   - Grant-ready
   - One-click install
3. What it does
   - animal records
   - foster/adoption workflow
   - medical notes
   - lost/found
   - grant finder
   - public adoption pages
4. Who it helps
   - rescues
   - shelters
   - fosters
   - vet welfare clinics
   - fiscal sponsors
5. Funding Radar
6. Data privacy and security
7. Desktop, mobile, self-host
8. Blog/resources
9. Developer/contributor section
10. Final CTA

## Navigation

- Product
- Funding Radar
- Blog
- Docs
- GitHub
- Download

## Blog name

Recommended: **Open Paw Field Notes**

## Blog categories

- Grants
- Shelter Ops
- Vet Welfare
- Lost and Found
- Open Source
- Case Studies
- Felipe Notes

## First ten posts

1. Why Animal Welfare Software Should Be Local-First
2. The Open Paw Funding Radar: Finding Grants Without Losing the Plot
3. How to Track Foster Capacity Without a Spreadsheet Explosion
4. A Simple Vaccine Reminder Workflow for Rescue Teams
5. How to Write Better Adoption Bios With AI and Human Review
6. What Small Rescues Need From Software Before They Need AI
7. Open Source for Shelters: What Data Portability Actually Means
8. Lost and Found Workflows That Help Reunite Pets Faster
9. How Fiscal Sponsors Can Support Animal Welfare Programs With Shared Tools
10. Felipe Reviews Your Intake Workflow

## Visual direction

- Soft neutral backgrounds
- High-contrast typography
- Large rounded cards
- Animal photography placeholders
- Subtle paw/tiger pattern accents
- No clutter
- No cartoon overload in professional sections
- Mascot appears as controlled delight, not as the core interface

## Accessibility

- WCAG-friendly contrast
- semantic HTML
- keyboard navigation
- visible focus states
- alt text for all images
- no text locked inside images

## SEO targets

- open-source animal shelter software
- free animal rescue software
- pet adoption management software
- animal shelter grant finder
- local-first veterinary software
- foster animal tracking software
- lost and found pet software
- nonprofit animal welfare software

## Technical recommendation

Use Astro or Next.js.

Recommended for V1: Astro + React islands if the site is mostly static.
Recommended for app-heavy future: Next.js.

Content should live in MDX files under `content/blog` or equivalent.
