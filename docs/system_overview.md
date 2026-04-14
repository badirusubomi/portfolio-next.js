# docs/system_overview.md — Auto-generated per auto_documentation skill

## System Overview

### Architecture
A portfolio web application built with:

| Layer | Technology |
|---|---|
| **Framework** | Next.js (latest, App Router) |
| **Styling** | Tailwind CSS v4 (CSS-first config) |
| **Animation** | Framer Motion (scroll-linked) + CSS keyframes |
| **CMS** | Sanity.io (with mock data fallback) |
| **Fonts** | Geist Sans + Geist Mono |
| **Deployment** | Static/SSG-ready |

### Folder Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, Navbar
│   ├── page.tsx            # Home (Hero + Projects + Experience + Contact)
│   ├── globals.css         # Design system: @theme tokens, animations, utilities
│   └── project/[slug]/
│       └── page.tsx        # Dynamic project detail page
├── components/
│   ├── Navbar.tsx          # Fixed nav with backdrop-blur, mobile menu
│   ├── Hero.tsx            # Full-viewport hero with staggered CSS animations
│   ├── ProjectCard.tsx     # Sticky card with Framer Motion scroll transforms
│   ├── ProjectStack.tsx    # Cascading scroll container
│   ├── Experience.tsx      # Timeline with IntersectionObserver reveals
│   └── Contact.tsx         # Contact section + footer
├── lib/
│   ├── mockData.ts         # Placeholder data mirroring Sanity schema
│   ├── sanity.client.ts    # Sanity client config
│   ├── sanity.queries.ts   # GROQ queries with mock fallback
│   └── sanity.image.ts     # Image URL builder
└── sanity/schemas/
    └── project.ts          # Sanity document schema
```

### Design System
- **Background**: #0a0a0a (deep grey)
- **Text**: #ededed primary, #a1a1a1 muted, #666666 dim
- **Accent**: #f5a623 (warm amber)
- **Surfaces**: Glassmorphism with rgba(255,255,255,0.03) fills and border-white/10
- **Cards**: `.glass-card` utility with hover state transitions
- **Tags**: `.tag-pill` monospace labels with hover accent color

### Key Feature: Cascading Sticky Scroll
Projects use `position: sticky` with increasing `top` offsets. Framer Motion's `useScroll` and `useTransform` hooks modulate `scale` (1→0.95) and `opacity` (1→0.6) as each card is covered by the next. Spring physics: `stiffness: 100, damping: 30`.

### Data Strategy
When `NEXT_PUBLIC_SANITY_PROJECT_ID` is not set, the app falls back to `mockData.ts`. This allows full UI development without a Sanity account.
