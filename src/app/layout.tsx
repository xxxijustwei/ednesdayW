'use client'

import { ThemeProvider } from "next-themes"

import { THEMES } from "@/config/colors"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"

import "@/styles/globals.css"
import "@/styles/themes.css"

import { Toaster } from "@/components/ui/sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface RootLayoutProps {
    children: React.ReactNode
}

const queryClient = new QueryClient();

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-svh overflow-x-hidden bg-background font-sans antialiased",
                    fontSans.variable,
                    fontMono.variable
                )}
            >
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider
                        themes={THEMES}
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                        enableColorScheme
                    >
                        <TooltipProvider>
                            <div className="relative flex min-h-svh flex-col bg-background">
                                {children}
                            </div>
                        </TooltipProvider>
                        <Toaster />
                    </ThemeProvider>
                </QueryClientProvider>
            </body>
        </html>
    )
}
