# Design: Liquid Splash Portfolio

## Concept
The entire website is a dark canvas. On load, a liquid splash animation lands in the center — iridescent, chromatic, alive. As the user scrolls, the liquid stretches, separates, and morphs into distinct blob-sections, each containing a part of Jack's portfolio. Hovering makes blobs wobble and react. The experience feels organic, fluid, premium.

## Tech Stack
- Next.js 15 (App Router) + Tailwind CSS
- **React Three Fiber** (@react-three/fiber) + **Drei** (@react-three/drei) for 3D WebGL
- **Custom GLSL shaders** for iridescent liquid material
- **GSAP** for scroll-triggered animations and timeline control
- **Framer Motion** for UI element animations
- Three.js (via R3F) for metaball geometry and post-processing

## Visual Language
- **Background:** Near-black (#050505)
- **Liquid material:** Iridescent/chromatic — shifts between blues, purples, pinks, teals as it moves and catches light. Think chrome reflecting a rainbow. Use environment mapping + custom fresnel shader.
- **Text:** White (#f5f5f5) with subtle opacity variations
- **Typography:** Geist Sans (headings bold) + Geist Mono (accents)
- **UI elements:** Glass-morphism panels that float over or emerge from the liquid — semi-transparent, backdrop-blur, subtle borders

## Page Structure & Flow

### Phase 1: Hero (viewport 1)
- Dark canvas, liquid blob lands in center with a satisfying splash animation
- The blob is a 3D metaball cluster rendered with iridescent shader
- Jack's name appears in large bold text, overlaid on or near the blob
- Tagline: "Builder. Optimist. AI founder who thinks we need more engineers, not less."
- Subtle prompt to scroll down (animated chevron or "scroll" text)
- The blob gently undulates and responds to mouse movement (subtle distortion following cursor)

### Phase 2: Scroll Transition
- As user scrolls, the central blob stretches vertically
- It then splits/separates into 5-6 smaller blobs that drift to different positions
- Each blob settles into a position on the page, becoming an anchor for a section
- Between the 3D blobs, glass-morphism content panels fade in with the actual content

### Phase 3: Sections (scrolling through)
Each section has a liquid blob as a visual anchor/decoration, with content in clean glass panels nearby:

**About**
- Blob on the right, content panel on the left
- Conversational bio text, photo placeholder
- The blob here gently morphs/breathes

**Projects**  
- Two medium blobs, one for each project
- Vuely (featured, larger blob) + ATTY X ERP
- Hover on blob → it expands slightly, reveals project preview
- Click → smooth expand to project detail

**Experience**
- Vertical arrangement, small blobs as timeline markers
- Each blob connects to a glass panel with role/company/description
- Blobs pulse subtly in sequence as you scroll through

**Blog**
- Single blob with content cards floating around it
- "Coming soon" state with magazine-style empty cards

**Contact**
- Final blob at bottom, most colorful/active
- Email, social links in a centered glass panel
- The blob here is the most reactive to mouse — playful send-off

### Phase 4: Mobile
- Simplified: Use 2D CSS metaball/blob effect instead of full WebGL (or a lightweight canvas)
- Same dark theme, iridescent gradient blobs (CSS radial-gradient + filter: blur for gooey effect)
- Content sections stack vertically with blob decorations
- Still feels liquid and organic, just lighter weight
- Detect via `window.innerWidth` or media query, conditionally render Canvas vs CSS blobs

## Technical Implementation

### 3D Liquid (Desktop)
```
Components needed:
- LiquidScene.tsx — Main R3F Canvas wrapper
- IridescentBlob.tsx — Single metaball blob with custom shader
- BlobCluster.tsx — Group of blobs that can split/merge
- LiquidMaterial.tsx — Custom shader material (iridescent fresnel)
- ScrollController.tsx — GSAP ScrollTrigger to control blob positions
- MouseFollower.tsx — Raycast mouse position to distort nearest blob
```

### Iridescent Shader (GLSL)
- Fresnel effect for edge glow
- Environment map sampling for reflections (use an HDR or generated env)
- Chromatic aberration on the reflection
- Time-based animation for gentle morphing
- Mouse proximity uniform for interactive distortion

### Metaball Geometry
- Use marching cubes or SDF (signed distance field) for blobby merged shapes
- OR: Use sphere geometries with custom vertex displacement shaders for organic wobble
- The simpler approach (displaced spheres with gooey post-processing) will look great and perform better

### Scroll Animation (GSAP)
- ScrollTrigger pins the canvas
- Timeline: single blob → stretch → split into N blobs → each blob animates to its section position
- Content panels fade in as their associated blob reaches position
- Scrubbing: scroll position maps to timeline progress

### Glass Panels
- `bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl`
- Positioned alongside blobs via CSS grid or absolute positioning
- Fade in with Framer Motion as scroll triggers them

## File Structure
```
src/
  app/
    page.tsx              — Main page, conditionally renders desktop (3D) vs mobile (2D)
    blog/                 — Same as before
    layout.tsx
  components/
    // 3D components
    LiquidScene.tsx       — R3F Canvas + scene setup + lights + environment
    IridescentBlob.tsx    — Single blob mesh with custom shader
    BlobField.tsx         — Manages multiple blobs, their positions, split animation
    ScrollAnimator.tsx    — GSAP ScrollTrigger integration
    // UI components  
    Navigation.tsx        — Floating glass pill nav
    Hero.tsx              — Hero text overlay
    About.tsx             — About section content
    Projects.tsx          — Project cards
    Experience.tsx        — Timeline
    Blog.tsx              — Blog section
    Contact.tsx           — Contact section
    GlassPanel.tsx        — Reusable glass-morphism container
    // Mobile
    MobileBlobBg.tsx      — CSS-based blob backgrounds for mobile
  shaders/
    iridescent.vert       — Vertex shader (displacement + wobble)
    iridescent.frag       — Fragment shader (fresnel + env map + chromatic)
  lib/
    blog.ts
  styles/
    globals.css
```

## Content (same as SPEC.md)
Refer to SPEC.md for all text content, bio, project descriptions, experience timeline, etc.

## Performance Targets
- Desktop: 60fps with blobs, acceptable drop to 30fps during heavy scroll animation
- Mobile: CSS fallback, no WebGL, 60fps
- Lighthouse: Accept lower score on desktop due to WebGL (aim for 70+), mobile should be 85+
- Lazy load the 3D scene — show a simple CSS gradient splash initially, then hydrate with WebGL

## Key Principles
1. The liquid IS the site — it's not decoration, it's the structure
2. Every blob serves a purpose (anchors a section)
3. Interactions feel physical — momentum, wobble, settle
4. Content is always readable — glass panels provide contrast
5. Mobile gets the same vibe, lighter execution
