import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Providers } from '@/app/providers';
import type { PropsWithChildren } from 'react';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Traque',
  description: 'Error Tracking Service for Your Startup',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
