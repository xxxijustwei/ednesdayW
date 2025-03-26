import { ThemeProvider } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import { ActiveThemeProvider } from "@/components/active-theme";
import { Toaster } from "@/components/ui/sonner";
import { META_THEME_COLORS } from "@/config/site";
import { cookies } from "next/headers";
import { LayoutClient } from "./client";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    const cookieStore = await cookies();
    const activeThemeValue = cookieStore.get("active_theme")?.value;

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                                }
                            } catch (_) {}
                        `,
                    }}
                />
            </head>
            <body
                className={cn(
                    "min-h-svh overflow-x-hidden bg-background font-sans antialiased",
                    activeThemeValue ? `theme-${activeThemeValue}` : "",
                    fontSans.variable,
                    fontMono.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    enableColorScheme
                >
                    <ActiveThemeProvider initialTheme={activeThemeValue}>
                        <TooltipProvider>
                            <LayoutClient>{children}</LayoutClient>
                        </TooltipProvider>
                        <Toaster />
                    </ActiveThemeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
