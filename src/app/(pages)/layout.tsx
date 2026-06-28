import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { AppProviders } from '@/providers/AppProviders';
import SmoothScroll from '@/components/common/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Portfolio | Senior Full-Stack Developer',
  description: 'Premium 3D interactive portfolio showcasing cutting-edge web experiences.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Three.js',
    'WebGL',
    'Creative Developer',
  ],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Portfolio | Senior Full-Stack Developer',
    description: 'Premium 3D interactive portfolio showcasing cutting-edge web experiences.',
    siteName: 'Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Senior Full-Stack Developer',
    description: 'Premium 3D interactive portfolio showcasing cutting-edge web experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <AppProviders>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </AppProviders>
      </body>
    </html>
  );
}
