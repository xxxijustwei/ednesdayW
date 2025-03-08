'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
    subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <RootProvider>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </RootProvider>
            </body>
        </html>
    );
}
