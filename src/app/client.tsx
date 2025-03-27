"use client";

import { ThemeProvider } from "next-themes";

import { ActiveThemeProvider } from "@/components/active-theme";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

export const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    const [activeTheme, setActiveTheme] = useState<string | undefined>(
        undefined,
    );

    useEffect(() => {
        // 在客户端获取 cookie
        const activeThemeValue = document.cookie
            .split("; ")
            .find((row) => row.startsWith("active_theme="))
            ?.split("=")[1];

        setActiveTheme(activeThemeValue);
    }, []);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
        >
            <ActiveThemeProvider initialTheme={activeTheme}>
                <TooltipProvider>
                    <QueryClientProvider client={queryClient}>
                        <div className="relative flex min-h-svh flex-col bg-background">
                            {children}
                        </div>
                    </QueryClientProvider>
                </TooltipProvider>
                <Toaster />
            </ActiveThemeProvider>
        </ThemeProvider>
    );
};
