"use client";

import {
    CheckIcon,
    MoonIcon,
    PaletteIcon,
    RepeatIcon,
    SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import { THEMES } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { useThemeConfig } from "./active-theme";

export function ThemeCustomizer() {
    return (
        <div className="items-center">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <PaletteIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    align="end"
                    className="z-999 w-[340px] rounded-[12px] p-6"
                    sideOffset={10}
                >
                    <Customizer />
                </PopoverContent>
            </Popover>
        </div>
    );
}

export function Customizer() {
    const [mounted, setMounted] = React.useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    const { activeTheme, setActiveTheme } = useThemeConfig();
    const { setMetaColor } = useMetaColor();

    const toggleTheme = React.useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        setMetaColor(
            resolvedTheme === "dark"
                ? META_THEME_COLORS.light
                : META_THEME_COLORS.dark,
        );
    }, [resolvedTheme, setTheme, setMetaColor]);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="w-full">
            <div className="flex items-start pt-4 md:pt-0">
                <div className="space-y-1 pr-2">
                    <div className="font-semibold leading-none tracking-tight">
                        Customize
                    </div>
                    <div className="text-xs text-muted-foreground">
                        Pick a style and color for the website.
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col space-y-4 md:space-y-6 mt-2">
                <div className="flex flex-wrap gap-2">
                    {THEMES.map((color) => {
                        const isActive = activeTheme === color.value;

                        return mounted ? (
                            <Button
                                variant={"outline"}
                                size="sm"
                                key={color.name}
                                onClick={() => {
                                    setActiveTheme(color.value);
                                }}
                                className={cn(
                                    "justify-start",
                                    isActive && "border-2 border-primary",
                                )}
                                style={
                                    {
                                        "--theme-primary": `oklch(${
                                            color.activeColor?.[
                                                resolvedTheme === "dark"
                                                    ? "dark"
                                                    : "light"
                                            ]
                                        })`,
                                    } as React.CSSProperties
                                }
                            >
                                <span
                                    className={cn(
                                        "mr-1 flex size-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-(--theme-primary)",
                                    )}
                                >
                                    {isActive && (
                                        <CheckIcon className="size-4 text-white" />
                                    )}
                                </span>
                                {color.name}
                            </Button>
                        ) : (
                            <Skeleton className="h-8 w-full" key={color.name} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
