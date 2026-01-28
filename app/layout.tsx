// src/app/layout.tsx
import type { Metadata } from 'next';
import { Barlow_Condensed, Roboto_Condensed } from 'next/font/google';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import './globals.css';
import CookieConsent from '@/components/common/CookieConsent';

// Load fonts
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Growth Space Lanka - AI & Web Development Agency',
  description: 'We deliver cutting-edge web development and AI solutions that transform businesses.',
  icons: {
    icon: [
      { url: '/growthspacelanka.png', type: 'image/png' },
      { url: '/growthspacelanka.png', sizes: '32x32', type: 'image/png' },
      { url: '/growthspacelanka.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/growthspacelanka.png',
    apple: '/growthspacelanka.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${barlowCondensed.variable} ${robotoCondensed.variable} antialiased bg-white text-neutral-dark`}
      >
        <Header />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}