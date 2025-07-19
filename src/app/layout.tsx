import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { Providers } from '@/app/providers';
import type { PropsWithChildren } from 'react';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Traque',
  description: 'Error Tracking Service for Your Startup',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geist.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
