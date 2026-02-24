'use client';

import HeroOverlay from '@/components/overlay/HeroOverlay';
import BlobLabels from '@/components/overlay/BlobLabels';
import SectionPanel from '@/components/overlay/SectionPanel';
import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useSiteStore } from '@/lib/store';

export default function ContentOverlay() {
  useScrollProgress();

  const activeBlob = useSiteStore((state) => state.activeBlob);

  return (
    <div className={`overlay-root ${activeBlob ? 'interactive' : ''}`}>
      <Navigation />
      <HeroOverlay />
      <BlobLabels />
      <SectionPanel />
      <Footer />
    </div>
  );
}
