import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import { ActiveThemeProvider } from "@/components/active-theme";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { META_THEME_COLORS, siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";
import { LayoutClient } from "./client";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
        "Headless UI",
        "Web3 Component",
    ],
    authors: [
        {
            name: "xxxijustwei",
            url: "https://github.com/xxxijustwei",
        },
    ],
    creator: "xxxijustwei",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@justwei6",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
    themeColor: META_THEME_COLORS.light,
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = await cookies();
    const activeTheme = cookieStore.get("active_theme")?.value;

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
                    activeTheme ? `theme-${activeTheme}` : "",
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
                    <ActiveThemeProvider initialTheme={activeTheme}>
                        <TooltipProvider>
                            <LayoutClient>{children}</LayoutClient>
                        </TooltipProvider>
                        <Toaster />
                    </ActiveThemeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
