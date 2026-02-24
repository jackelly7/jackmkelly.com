import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jackmkelly.com'),
  title: {
    default: 'Jack Kelly | Builder. Optimist. AI Founder.',
    template: '%s | Jack Kelly',
  },
  description:
    'Modern personal website for Jack Kelly — AI founder, builder, and optimist.',
  openGraph: {
    title: 'Jack Kelly | Builder. Optimist. AI Founder.',
    description:
      'Founder of Vuely. BYU Information Systems. Full-stack + ML engineer building practical AI products.',
    url: 'https://jackmkelly.com',
    siteName: 'Jack Kelly',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Jack Kelly personal website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Kelly | Builder. Optimist. AI Founder.',
    description:
      'Founder of Vuely. BYU Information Systems. Full-stack + ML engineer building practical AI products.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
