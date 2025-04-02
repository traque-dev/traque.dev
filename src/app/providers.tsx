'use client';

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootProvider as FumadocsRootProvider } from 'fumadocs-ui/provider';

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <FumadocsRootProvider>{children}</FumadocsRootProvider>
    </QueryClientProvider>
  );
}
