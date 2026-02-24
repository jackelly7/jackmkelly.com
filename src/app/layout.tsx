import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
