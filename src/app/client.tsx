"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-svh flex-col bg-background">
        {children}
      </div>
    </QueryClientProvider>
  );
};
