"use client";

import { Currency } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Currency className="size-5" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs/components/input"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/docs")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  );
}
