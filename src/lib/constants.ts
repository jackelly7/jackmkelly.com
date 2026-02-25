export type SectionId = 'about' | 'projects' | 'experience' | 'blog' | 'contact';

export type BlobConfig = {
  id: SectionId;
  label: string;
  size: number;
  desktopPosition: [number, number, number];
  mobilePosition: [number, number, number];
  colorBias: [number, number, number];
};

export const SECTION_ORDER: SectionId[] = ['about', 'projects', 'experience', 'blog', 'contact'];

export const BLOBS: BlobConfig[] = [
  {
    id: 'about',
    label: 'About',
    size: 0.78,
    desktopPosition: [-1.5, 0.8, -0.2],
    mobilePosition: [0, 2.8, 0],
    colorBias: [0.92, 0.86, 1.15],
  },
  {
    id: 'projects',
    label: 'Projects',
    size: 0.92,
    desktopPosition: [0.4, 0.4, 0.15],
    mobilePosition: [0, 1.3, 0],
    colorBias: [1.15, 0.95, 1.2],
  },
  {
    id: 'experience',
    label: 'Experience',
    size: 0.78,
    desktopPosition: [1.7, -0.2, -0.15],
    mobilePosition: [0, -0.2, 0],
    colorBias: [0.88, 1.1, 1.18],
  },
  {
    id: 'blog',
    label: 'Blog',
    size: 0.72,
    desktopPosition: [-1.1, -1.0, 0.2],
    mobilePosition: [0, -1.7, 0],
    colorBias: [1.2, 1.03, 0.9],
  },
  {
    id: 'contact',
    label: 'Contact',
    size: 0.65,
    desktopPosition: [1.3, -1.1, 0],
    mobilePosition: [0, -3.2, 0],
    colorBias: [0.9, 1.15, 1.03],
  },
];

export const HERO_LINES = {
  name: 'Jack Kelly',
  tagline: 'Builder. Optimist. AI founder.',
  subtitle: 'Founder of Vuely · BYU · Full-Stack + ML',
};

export const PANEL_TITLES: Record<SectionId, string> = {
  about: 'About',
  projects: 'Projects',
  experience: 'Experience',
  blog: 'Blog',
  contact: 'Contact',
};
