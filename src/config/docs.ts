import type { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "docs",
            href: "/docs",
        },
    ],
    sidebarNav: [
        {
            title: "Components",
            items: [
                {
                    title: "Input",
                    href: "/docs/components/input",
                    items: [],
                },
                {
                    title: "Phone Input",
                    href: "/docs/components/phone-input",
                    items: [],
                },
                {
                    title: "Button",
                    href: "/docs/components/button",
                    items: [],
                },
                {
                    title: "Select",
                    href: "/docs/components/select",
                    items: [],
                },
                {
                    title: "Color Picker",
                    href: "/docs/components/color-picker",
                    items: [],
                },
                {
                    title: "Color Input",
                    href: "/docs/components/color-input",
                    items: [],
                },
                {
                    title: "Pagination",
                    href: "/docs/components/pagination",
                    items: [],
                },
            ],
        },
        {
            title: "Hooks",
            items: [
                {
                    title: "useDisclosure",
                    href: "/docs/hooks/use-disclosure",
                    items: [],
                },
                {
                    title: "useRipple",
                    href: "/docs/hooks/use-ripple",
                    items: [],
                },
                {
                    title: "useCountdown",
                    href: "/docs/hooks/use-countdown",
                    items: [],
                },
                {
                    title: "useDeviceDetection",
                    href: "/docs/hooks/use-device-detection",
                    items: [],
                },
            ],
        },
    ],
};
