# jackmkelly.com — Personal Website Spec

## Overview
Modern, bold, dark personal website for Jack Kelly — AI founder, builder, optimist.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- Framer Motion for animations
- MDX for blog posts
- Deploy target: Vercel

## Design Direction
- **Dark theme** by default (optional light toggle later)
- **Bold, techy** — inspired by parallel.ai (clean dark + sharp typography) and PostHog (personality + developer brand)
- Sharp sans-serif typography (Inter or Geist)
- Subtle scroll-triggered animations (fade in, slide up)
- Animated gradient mesh or subtle particle effect on hero
- Responsive / mobile-first

## Pages & Sections

### 1. Hero (full viewport)
- Jack's name, large and bold
- Tagline: "Builder. Optimist. AI founder who thinks we need more engineers, not less."
- Subtitle: "Founder of Vuely · BYU · Full-Stack + ML"
- Two CTA buttons: "See my work" (scrolls to projects) + "Get in touch" (scrolls to contact)
- Animated background — gradient mesh or subtle geometric animation

### 2. About
- Conversational tone, NOT resume-speak
- Key points to weave in naturally:
  - AI founder building Vuely — smart mockups for sign companies (and soon all industries)
  - Extremely positive outlook on AI: "We need more engineers, not less. At Vuely, we're on the front lines of AI, buying servers to host AI agents, and we're still hiring more engineers."
  - Lived in Shanghai (teaching English), Boston & Mexico City (mission, fluent Spanish)
  - Married, values being a husband, friend, and future father
  - BYU Information Systems, graduating April 2026
- Subtle mentions (small, not loud): Eagle Scout, Arizona state volleyball champion
- Photo placeholder (rounded, with a nice border/glow effect)

### 3. Projects
Interactive cards with hover effects:

**Vuely** (featured/hero card — larger):
- AI-powered mockup generation for sign companies
- Built with Next.js, React, Python ML models
- Generates photorealistic renderings, reducing design time by ~80%
- Link to vuely.co
- Placeholder for screenshot/demo

**ATTY X ERP System**:
- Rebuilt entire ERP system from scratch
- 36+ operational tools (sales dashboards, finance, ordering)
- PHP, React, SQL, TypeScript
- Customer-facing HVAC ordering site → 250% increase in monthly installs
- Adopted by 200+ employees company-wide

**More projects slot** — empty card with "More coming soon" or similar

### 4. Experience
Clean vertical timeline, not a resume dump. Key stops:
- **Vuely** (May 2025–Present) — ML Software Engineer / Founder
- **ATTY X** (May 2024–Aug 2025) — Software Engineer
- **Profit Docs** (Sep–Dec 2023) — Project Intern
- **LDS Mission** (2020–2022) — Boston & Mexico City, coordinated 150+ reps
- **Shanghai** (2019) — English Immersion Instructor

Each entry: title, company, date, 1-2 line description with personality.

### 5. Blog
- Grid layout for blog post cards
- MDX-based (files in /content/blog/)
- Each post: title, date, excerpt, read time, tags
- Empty state: "Coming soon — thoughts on AI, building products, and founder life."
- Individual post pages with clean typography

### 6. Contact
- "Let's connect" header
- Email: johnmcmillankelly@gmail.com
- Links: LinkedIn, GitHub, Twitter/X
- Optional: simple contact form (or just mailto link)
- Clean, minimal section

### Navigation
- Fixed top nav, semi-transparent with blur backdrop
- Links: About, Projects, Experience, Blog, Contact
- Mobile: hamburger menu with slide-in drawer
- Logo/name on left

### Footer
- Simple: "© 2026 Jack Kelly" + social links
- Maybe a fun easter egg line

## Technical Details
- Single page with smooth scroll for main sections
- Blog is separate pages (/blog, /blog/[slug])
- SEO: proper meta tags, OG images
- Favicon placeholder
- Performance: aim for 95+ Lighthouse score
- No heavy dependencies — keep it fast

## Content Tone
Jack is a builder and optimist. The site should feel confident but not arrogant. Personal but professional. Like meeting someone at a tech conference who you immediately want to grab coffee with.

## File Structure
```
src/
  app/
    page.tsx          (home — all sections)
    blog/
      page.tsx        (blog index)
      [slug]/page.tsx (individual posts)
    layout.tsx
  components/
    Hero.tsx
    About.tsx
    Projects.tsx
    Experience.tsx
    Blog.tsx
    Contact.tsx
    Navigation.tsx
    Footer.tsx
    BlogCard.tsx
    ProjectCard.tsx
    TimelineItem.tsx
  content/
    blog/             (MDX files go here)
  lib/
    blog.ts           (MDX utilities)
  styles/
    globals.css
```
