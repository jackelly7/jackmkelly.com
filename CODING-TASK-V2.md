# CODING TASK V2: Parameter Tuning Pass

The architecture is solid. This is a TUNING pass — specific value changes only. Do NOT restructure code, just change the numbers listed below.

## READ FIRST
- `SPEC.md` — the design vision
- `src/components/scene/MetaBalls.tsx` — blob animation logic
- `src/lib/constants.ts` — blob configs
- `src/components/scene/LiquidScene.tsx` — camera
- `src/components/overlay/BlobLabels.tsx` — label positioning
- `src/styles/globals.css` — hero overlay styles

## Current State
The site is mostly working. Camera at fov 50, z=5.5, MarchingCubes scale 2.0. Blobs cluster together initially and separate on scroll. But:

1. **Blob cluster is slightly upper-left of center** — needs to shift right and down
2. **Separated blobs partially off-screen** — some blobs drift too far or are too small
3. **Blob shapes get faceted/triangular** when small — marching cubes artifact
4. **"loading" mode never transitions to "idle"** — fix in store.ts
5. **The mode transition from loading to idle needs a timer** — after 2.2s landing animation

## EXACT CHANGES

### 1. `src/lib/constants.ts` — Separated positions need to be tighter
Change the BLOBS array desktopPositions and sizes to:
```ts
{ id: 'about',      size: 0.78, desktopPosition: [-1.5, 0.8, -0.2] }
{ id: 'projects',   size: 0.92, desktopPosition: [0.4, 0.4, 0.15] }
{ id: 'experience', size: 0.78, desktopPosition: [1.7, -0.2, -0.15] }
{ id: 'blog',       size: 0.72, desktopPosition: [-1.1, -1.0, 0.2] }
{ id: 'contact',    size: 0.65, desktopPosition: [1.3, -1.1, 0] }
```
These positions keep all 5 blobs within the visible viewport (viewport is ~5.1 wide × ~3.2 tall at fov 50, z=5.5).

### 2. `src/components/scene/MetaBalls.tsx` — Cluster positions
The cluster center of mass needs to be at (0, -0.05) to align with viewport center. Change clusterPositions to:
```ts
[-0.08, 0.1, 0],
[0.12, 0.06, -0.05],
[0.15, -0.1, 0.03],
[-0.08, -0.15, -0.03],
[0.03, -0.22, 0],
```
These are tighter and more centered than before.

### 3. `src/components/scene/MetaBalls.tsx` — Separation scale
Change separation scale from 0.72 to 0.8:
```ts
const separationScale = MathUtils.lerp(1.0, 0.8, separation);
```
0.72 was making small blobs invisible. 0.8 keeps them visible while still shrinking enough to not overlap.

### 4. `src/components/scene/MetaBalls.tsx` — MarchingCubes inner positions
The 3 MarchingCube sub-balls inside each blob need tighter positions so the shape is more spherical and less faceted:
```tsx
<MarchingCube strength={0.72 * blob.size} subtract={0.88} color={new Color(0xffffff)} position={[0, 0, 0]} />
<MarchingCube strength={0.52 * blob.size} subtract={0.88} color={new Color(0xffffff)} position={[0.18, 0.08, -0.05]} />
<MarchingCube strength={0.44 * blob.size} subtract={0.88} color={new Color(0xffffff)} position={[-0.16, -0.14, 0.03]} />
```
Key changes: higher strength (more spherical), lower subtract (smoother blending), tighter positions (less faceted).

### 5. `src/lib/store.ts` — Fix loading→idle transition
The current logic keeps mode as 'loading' forever until scroll > 0.24. The landing animation finishes at 2.0s. Add logic so that after the landing completes, mode transitions to 'idle'.

In `setScrollProgress`, change:
```ts
: state.mode === 'loading'
  ? 'loading'
  : 'idle';
```
to:
```ts
: 'idle';
```
This allows mode to become 'idle' as soon as scrollProgress is set (which happens on any scroll/resize event). The 'loading' state is only the initial value before the first scroll event fires.

### 6. `src/components/overlay/BlobLabels.tsx` — Label positioning
The labels need a Y offset so they sit BELOW each blob, not on top. Change:
```ts
const x = 50 + pos[0] * 13;
const y = 50 - pos[1] * 15 + 6;
```
to:
```ts
const x = 50 + pos[0] * 12;
const y = 50 - pos[1] * 14 + 10;
```
The +10 offset puts labels below blob centers.

### 7. `src/components/scene/LiquidScene.tsx` — Camera tweak
Move camera slightly forward for larger blobs, add slight upward offset so blobs are more centered:
```ts
camera={{ position: [0, -0.15, 5.2], fov: 50 }}
```
The y=-0.15 shifts the viewport down slightly, centering the blob cluster which has a slight downward bias.

## DO NOT CHANGE
- Section content (About, Projects, etc.)
- Shader code (iridescent.frag/vert)
- Lighting
- HeroOverlay
- CSS (already fixed)
- Navigation component

## Testing
1. Run `npm run dev` — must compile clean
2. Verify at localhost:3005:
   - Initial state: one big merged blob centered behind "Jack Kelly" text
   - Scroll: blob splits into 5 visible blobs spread across viewport
   - All 5 labels visible and positioned below their blobs
   - No blobs off-screen at full separation
   - Blob shapes are smooth/organic, not faceted triangles

When finished, run: `openclaw system event --text "Done: V2 tuning pass — blob centering, separation sizing, smoother shapes, store fix" --mode now`
