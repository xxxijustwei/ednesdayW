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
            ],
        },
    ],
};
