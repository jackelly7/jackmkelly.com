import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jackmkelly.com'),
  title: {
    default: 'Jack Kelly — Builder, Optimist, AI Founder',
    template: '%s | Jack Kelly',
  },
  description:
    'Personal website of Jack Kelly — AI founder, builder, and optimist.',
  openGraph: {
    title: 'Jack Kelly — Builder, Optimist, AI Founder',
    description:
      'Founder of Vuely. BYU Information Systems. Full-stack + ML engineer.',
    url: 'https://jackmkelly.com',
    siteName: 'Jack Kelly',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
