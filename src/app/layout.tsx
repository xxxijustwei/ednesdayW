import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import { ActiveThemeProvider } from "@/components/active-theme";
import {
  BreadcrumbStructuredData,
  StructuredData,
} from "@/components/seo/structured-data";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { META_THEME_COLORS, siteConfig } from "@/config/site";
import type { Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { LayoutClient } from "./client";
import { metadata } from "./metadata";

export { metadata };

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-8346899919126115" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WRGZQXNEWV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-WRGZQXNEWV');
                        `,
          }}
        />
        <StructuredData type="WebSite" />
        <StructuredData type="SoftwareApplication" />
        <StructuredData type="Organization" />
        <BreadcrumbStructuredData
          items={[
            { name: "Components", url: `${siteConfig.url}/docs/components` },
          ]}
        />
      </head>
      <body
        className={cn(
          "min-h-svh overflow-x-hidden bg-background font-sans antialiased",
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <ActiveThemeProvider>
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
