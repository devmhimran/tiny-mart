'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

import { getQueryClient } from '@/lib/react-query';
import { Footer, Header } from '../shared';
import { Separator } from '../ui/separator';

const queryClient = getQueryClient();

export function DefaultProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Separator />
      <main className='min-h-[calc(100vh-90px)]'>{children}</main>
      <Separator />
      <Footer />
      <Toaster richColors position='top-center' />
    </QueryClientProvider>
  );
}
