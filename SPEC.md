# jackmkelly.com — Liquid Splash Portfolio

## Overview
A dark, immersive portfolio where the entire UI is built around a 3D liquid splash. A blob of iridescent liquid lands on screen, then separates into interactive blobs — each one a section of the site. It should feel alive, organic, and unlike any portfolio on the internet.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- React Three Fiber + @react-three/drei — 3D liquid/metaball simulation
- Custom GLSL shaders — iridescent chromatic surface
- Framer Motion — HTML content animations (fade, expand)
- GSAP (optional) — complex timeline sequencing if needed
- MDX — blog posts

## Design

### Color & Aesthetic
- **Background:** Near-black (#050505 or similar)
- **Liquid surface:** Iridescent chromatic — shifts between colors as it moves and catches "light." Chrome that reflects a rainbow. Think mercury/oil-on-water.
- **Content text:** White/light gray on dark backgrounds
- **Typography:** Sharp sans-serif (Geist or Inter)
- **Overall feel:** Premium, futuristic, alive

### The Splash Lifecycle

#### 1. Load → Splash Landing (0-2s)
- Screen is dark
- A liquid blob drops from above and splashes into the center of the viewport
- It spreads, wobbles, and settles into a cohesive organic shape
- "Jack Kelly" appears — either embedded in/on the liquid surface or floating just above it
- Tagline fades in below: "Builder. Optimist. AI founder."
- Subtitle: "Founder of Vuely · BYU · Full-Stack + ML"

#### 2. Idle → Breathing (after landing)
- The blob slowly undulates — gentle, breathing motion
- Iridescent colors shift across the surface like oil on water
- Feels alive but calm — not distracting
- Two CTA hints: "Scroll to explore" or subtle down-arrow animation

#### 3. Scroll → Separation
- As the user scrolls down, the hero blob stretches vertically
- It then *separates* into 5-6 smaller blobs that drift to their positions on screen
- Each blob is a different size (Projects = largest, Contact = smallest)
- Small text labels fade in near each blob as they settle:
  - About
  - Projects
  - Experience
  - Blog
  - Contact

#### 4. Hover → Blob Reaction
- Hovered blob inflates slightly and wobbles
- Iridescent highlights intensify — like light hitting from a new angle
- Subtle ripple effect on the surface
- Label becomes more prominent

#### 5. Click → Content Expand
- Clicked blob smoothly expands to fill most of the viewport
- The liquid surface becomes a living border/frame around the content panel
- Other blobs shrink and drift to screen edges (become a floating nav)
- Content fades in on top of the expanded blob area
- Content area: clean dark background, sharp typography, fully readable
- Subtle liquid-themed accents at edges (gentle shimmer)

#### 6. Back → Collapse
- Close button or click-outside to return
- Content fades out
- Blob shrinks back to its position among the others
- Smooth reverse animation

### Navigation
- In hero state: no traditional nav needed (the splash IS the nav)
- In expanded state: other blobs along the edge act as nav items
- Optional: minimal top bar with name/logo that appears after scroll past hero
- Mobile: hamburger menu as fallback

## Architecture

### 3D Layer (React Three Fiber)
- Full-viewport `<Canvas>` as background layer (z-index: 0)
- Metaball geometry for liquid blobs — use marching cubes or SDF ray marching
- Custom GLSL fragment shader for iridescent surface:
  - Fresnel-based color shifting
  - Environment map reflections (subtle)
  - Chromatic dispersion effect
  - Animated noise for surface movement
- Lighting: 2-3 point lights + ambient for iridescent highlights
- Camera: orthographic or perspective with subtle parallax on mouse move

### HTML Overlay Layer
- Positioned absolutely over the canvas (z-index: 1, pointer-events: none by default)
- Content sections are HTML/React components (NOT rendered in WebGL)
- When a blob expands, its corresponding HTML content panel fades in with pointer-events restored
- This ensures text is crisp, accessible, selectable, and SEO-friendly

### State Management
- Global state: which blob is active/expanded, scroll progress, interaction mode
- React context or Zustand for sharing state between R3F scene and HTML overlay
- Scroll progress (0-1) drives the separation animation

## Content Sections

### About
- Conversational tone, personal
- Key points: AI founder (Vuely), optimistic about AI and engineering, lived in Shanghai/Boston/Mexico City, married, BYU IS graduating April 2026
- Subtle mentions: Eagle Scout, Arizona state volleyball champion
- Photo placeholder with liquid-border effect

### Projects
- **Vuely** (featured/hero card — largest blob area):
  - AI-powered mockup generation for sign companies
  - Next.js, React, Python ML
  - ~80% design time reduction
  - Link to vuely.co
- **ATTY X ERP System**:
  - Rebuilt entire ERP from scratch
  - 36+ tools, 200+ employees adopted
  - 250% increase in monthly installs
- More projects slot — "More coming soon"

### Experience
- Vertical timeline, clean:
  - Vuely (May 2025–Present) — ML Software Engineer / Founder
  - ATTY X (May 2024–Aug 2025) — Software Engineer
  - Profit Docs (Sep–Dec 2023) — Project Intern
  - LDS Mission (2020–2022) — Boston & Mexico City
  - Shanghai (2019) — English Immersion Instructor

### Blog
- Grid of blog post cards
- MDX-based (/content/blog/)
- Empty state: "Coming soon — thoughts on AI, building products, and founder life."

### Contact
- "Let's connect"
- Email: johnmcmillankelly@gmail.com
- LinkedIn, GitHub, Twitter/X links
- Minimal and clean

## Mobile Strategy
- Reduce shader complexity (fewer iridescence passes, simpler noise)
- Blobs arranged vertically in a scroll sequence rather than free-floating
- Tap once = highlight + show label, tap again = expand
- Scroll-triggered expansion as alternative to click
- Touch-friendly blob sizes (min 80px tap targets)
- Fallback: if WebGL not supported, show a beautiful CSS gradient version with the same layout

## Performance
- Lazy load the R3F canvas (show a simple CSS gradient splash as placeholder)
- Use `useFrame` throttling — cap at 60fps, reduce to 30 on mobile
- LOD (level of detail) — fewer metaball samples on mobile/low-end
- Content sections are code-split
- Target: smooth 60fps on modern desktop, acceptable 30fps on mobile

## File Structure
```
src/
  app/
    page.tsx              — Main page (canvas + overlay)
    blog/
      page.tsx            — Blog index
      [slug]/page.tsx     — Individual posts
    layout.tsx
  components/
    scene/
      LiquidScene.tsx     — Main R3F scene orchestrator
      MetaBalls.tsx       — Metaball geometry + animation
      IridescentMaterial.tsx — Custom shader material
      BlobInteraction.tsx — Hover/click handlers for blobs
      Lighting.tsx        — Scene lighting setup
    overlay/
      ContentOverlay.tsx  — HTML overlay container
      HeroOverlay.tsx     — Name, tagline, CTAs
      SectionPanel.tsx    — Expanded section content panel
      BlobLabels.tsx      — Floating labels near blobs
    sections/
      About.tsx
      Projects.tsx
      Experience.tsx
      Blog.tsx
      Contact.tsx
    ui/
      Navigation.tsx      — Minimal nav (appears after scroll)
      Footer.tsx
      BlogCard.tsx
      ProjectCard.tsx
      TimelineItem.tsx
  shaders/
    iridescent.vert       — Vertex shader
    iridescent.frag       — Fragment shader (chromatic/fresnel)
    metaball.glsl         — Metaball SDF functions
    noise.glsl            — Noise functions for animation
  content/
    blog/                 — MDX files
  lib/
    blog.ts               — MDX utilities
    store.ts              — Global state (Zustand)
    constants.ts          — Blob positions, sizes, section config
  hooks/
    useScrollProgress.ts  — Scroll position → 0-1 progress
    useBlobState.ts       — Which blob is active/hovered
  styles/
    globals.css
```

## Dependencies to Add
- @react-three/fiber
- @react-three/drei
- three
- zustand (state management)
- gsap (if needed for complex timelines)
- @types/three

## Notes
- The splash shape does NOT need to match the JK logo — use whatever looks best
- Wow factor > load times — go all out on the visual experience
- Content must remain readable — liquid is the frame, not the enemy of legibility
- SEO still matters — HTML content overlay ensures crawlability
