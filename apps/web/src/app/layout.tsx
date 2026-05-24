import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeScript } from '@/components/layout/ThemeScript';

export const metadata: Metadata = {
  title: {
    default: 'Open Paw — Free Animal Welfare Software',
    template: '%s | Open Paw',
  },
  description:
    'Open-source software for animal rescues, shelters, and veterinary welfare teams. Track animals, find funding, publish adoptable pets, and keep your data local.',
  metadataBase: new URL('https://open-paw-v1.vercel.app'),
  openGraph: {
    type: 'website',
    siteName: 'Open Paw',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
