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
      title: "Get Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/intro",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Autocomplete",
          href: "/docs/components/autocomplete",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Field Input",
          href: "/docs/components/field-input",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
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
          title: "Tag Input",
          href: "/docs/components/tag-input",
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
        {
          title: "Cap Widget",
          href: "/docs/components/cap-widget",
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
      ],
    },
    {
      title: "Lib",
      items: [
        {
          title: "Wallet Address",
          href: "/docs/lib/wallet-address",
          items: [],
        },
        {
          title: "Create2",
          href: "/docs/lib/create2",
          items: [],
        },
      ],
    },
  ],
};
