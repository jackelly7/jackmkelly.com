# CODING TASK: Fix Liquid Splash Portfolio

## The Problem
The current site looks NOTHING like the spec. The liquid blob is tiny and shoved into a corner. Nav links are scattered as plain text. Massive dead space. No splash animation. It needs a complete visual overhaul of the 3D scene and overlay positioning.

The architecture (Zustand store, component structure, shaders, sections) is fine. The CONTENT is fine. What's broken is the VISUAL EXECUTION — sizing, positioning, animation, and the relationship between the 3D blobs and the HTML overlay.

## What the Spec Calls For (READ SPEC.md for full details)
1. **Load**: A LARGE liquid blob drops from above, splashes into center, fills ~60% of viewport
2. **Idle**: One big breathing blob in center with "Jack Kelly" text overlaid ON it
3. **Scroll**: The single blob STRETCHES and SEPARATES into 5 smaller blobs that drift to positions
4. **Hover**: Hovered blob inflates, wobbles more, colors intensify
5. **Click**: Clicked blob EXPANDS to fill viewport, others shrink to edges as mini-nav
6. **Back**: Reverse animation

## Specific Fixes Required

### 1. BLOB SIZE — This is the #1 problem
The blobs are microscopic. They need to be MASSIVE.

**Camera**: Currently `position: [0, 0, 9.6], fov: 32` — this makes everything tiny.
- Change to `fov: 50-55` or move camera to `z: 5-6`. The blob needs to fill ~60% of the viewport in idle state.

**MarchingCubes scale**: Currently `0.7`. Increase to `1.8-2.5` for the hero state.

**Blob sizes in constants.ts**: Current sizes are 0.52-0.76. These need to be much larger. The hero (merged) state should be one cohesive mass, not 5 tiny separated things.

**Key principle**: In the IDLE state (before scroll), all 5 blobs should be CLOSE TOGETHER forming what LOOKS like ONE large organic blob. Their cluster positions should overlap/merge via the MarchingCubes iso-surface. It should look like a single liquid mass, not 5 separate dots.

### 2. INITIAL STATE — One Merged Blob
The `clusterPositions` in MetaBalls.tsx are too spread out:
```
[-1.35, 0.92, -0.7], [1.1, 0.7, -0.55], [1.28, -0.75, -0.8], [-1.05, -0.86, -0.6], [0.0, -1.38, -0.7]
```
These should be MUCH tighter — like `[-0.3, 0.2, 0], [0.25, 0.15, -0.1], [0.3, -0.2, 0], [-0.2, -0.25, 0], [0, -0.35, 0]` — so the marching cubes merge them into one blobby shape.

### 3. SEPARATION — Scroll-Driven Split
The separated positions also need adjustment. They should spread to fill the viewport:
- About: upper-left area
- Projects: center-right (LARGEST blob)
- Experience: right side
- Blog: lower-left
- Contact: lower-right (smallest)

The separation animation should feel like the blob is STRETCHING apart, like pulling taffy. The `smoothstep(0.14, 0.6, scrollProgress)` range is fine but the positions need to be further apart.

### 4. LANDING ANIMATION
Currently there's a basic `loadDropOffset` that shifts Y by 6.2 and a `landingProgress` smoothstep over 0-2s. This needs to feel more dramatic:
- Start blob at y+8 (off screen above)
- Drop quickly (0-0.8s) 
- Overshoot slightly below center
- Bounce back up and settle (rubber band effect)
- Scale: start at 0.3, overshoot to 1.1, settle at 1.0
- Add a slight squash on landing (scale x wider, y shorter momentarily)

### 5. HERO TEXT POSITIONING
The hero overlay has `top: 20vh` which puts it way above the blob. The text needs to be CENTERED on the blob itself. Since the blob is in the center of the viewport:
- Center the hero text both horizontally and vertically in the viewport
- Remove the `::before` pseudo-element dark gradient hack — the text should sit ON the iridescent surface
- Text should have strong text-shadow for legibility against the colorful blob
- "Jack Kelly" should be BIG (the current sizing is fine, just positioning is off)

### 6. NAV BAR
The top nav pill bar should NOT show in idle/loading state. It should fade in AFTER scroll begins (when blobs start separating). Currently it's always visible.

In the Navigation component, check `scrollProgress` or `mode` from the store — only show when `mode === 'separated'` or `scrollProgress > 0.2`.

### 7. BLOB LABELS
The labels are positioned using a rough formula `50 + pos[0] * 11` which doesn't match actual blob screen positions. Consider:
- Using `@react-three/drei`'s `Html` component to position labels IN the 3D scene attached to each blob group
- OR: project 3D positions to screen coords using `useThree` + `camera.project()`
- Labels should appear BELOW each blob, not on top of it

### 8. IRIDESCENT SHADER — Make It Pop
The shader is decent but the colors are too dark/subtle. The blob should look like mercury/chrome/oil-on-water — vivid iridescent colors.

In `iridescent.frag`:
- Increase the spectral palette brightness: change `vec3 a` from `(0.14, 0.15, 0.18)` to `(0.25, 0.26, 0.3)`
- Increase `b` values for more color range
- The `liquid` mix factor `fresnel * 0.68 + 0.13` could be pushed to `fresnel * 0.85 + 0.2`
- The final alpha `0.88` could be `0.92-0.95` for more presence

### 9. CSS CLEANUP
- `.scroll-space` height `320vh` might need adjustment — ensure full separation happens within first 60% of scroll, leaving room for the expanded view
- The `.hero-overlay::before` dark radial gradient defeats the purpose of seeing the blob behind text — remove it
- `.blob-label` cursor should be `pointer` since they're clickable

## DO NOT CHANGE
- The section content (About, Projects, Experience, Blog, Contact) — leave as-is
- The Zustand store API shape — keep the same state/actions
- The shader architecture (custom shader material via `extend`) — just tune values
- The overall file structure
- Package dependencies

## Testing
After changes:
1. `npm run dev` — must compile clean
2. On load: you should see a LARGE iridescent blob filling center of screen with "Jack Kelly" text on top
3. On scroll: blob should visibly split into 5 smaller blobs with labels
4. On hover: blob should react (inflate, color shift)
5. On click: blob should expand, content panel should appear
6. Performance: should be smooth 60fps on desktop

## Reference
- SPEC.md has the full design spec
- The Codrops metaball tutorial (ray marching approach) shows how fullscreen SDF metaballs work, but we're using MarchingCubes from drei which is fine — just need to scale them up
- Think mercury thermometer, oil slick, chrome — that's the vibe
