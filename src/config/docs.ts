import type { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
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
                    href: "/docs/input",
                    items: [],
                }
            ],
        },
    ],
}
