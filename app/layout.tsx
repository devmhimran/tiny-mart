import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';
import { Loading } from '@/components/shared';
import { DefaultProvider } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tiny Mart',
  description: 'A simple e-commerce application built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <DefaultProvider>{children}</DefaultProvider>
        </Suspense>
      </body>
    </html>
  );
}
