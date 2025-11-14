'use client';

import { getQueryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = getQueryClient();

export function DefaultProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
  );
}
