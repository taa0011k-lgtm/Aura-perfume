import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AETHERIA | Crafted for Presence',
  description: 'Luxury fragrances designed to leave an unforgettable signature.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />
      </head>
      <body className="bg-black text-neutral-200 antialiased selection:bg-gold-500/30 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
