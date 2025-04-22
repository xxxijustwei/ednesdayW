"use client";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { useRipple } from "@/registry/hooks/use-ripple";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";

const buttonVariants = cva(
    cn(
        "group inline-flex items-center justify-center gap-2 shrink-0 outline-none relative overflow-hidden",
        "text-sm font-medium whitespace-nowrap rounded-md transition-all cursor-pointer",
        "active:scale-98 transition-all duration-100",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:dark:ring-destructive/40",
    ),
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                destructive: cn(
                    "bg-destructive text-white shadow-xs hover:bg-destructive/90",
                    "focus-visible:ring-destructive/20 focus-visible:dark:ring-destructive/40 dark:bg-destructive/60",
                ),
                outline: cn(
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
                    "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                ),
                secondary:
                    "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
                md: "h-9 px-4 py-2 has-[>svg]:px-3",
                lg: "h-10 px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
);

function Button({
    className,
    variant,
    size,
    disabled = false,
    asChild = false,
    isLoading = false,
    onClick,
    children,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
        isLoading?: boolean;
    }) {
    const [loading, setLoading] = useState(isLoading);
    const {
        ripples,
        onClick: handleRippleClick,
        onClear: handleRippleClear,
    } = useRipple();

    const Comp = asChild ? Slot : "button";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        handleRippleClick(event);
        if (!onClick) return;

        if (
            typeof onClick === "function" &&
            onClick.constructor.name === "AsyncFunction"
        ) {
            setLoading(true);
            Promise.resolve(onClick(event)).finally(() => {
                setLoading(false);
            });
            return;
        }

        onClick(event);
    };

    return (
        <Comp
            data-slot="button"
            data-loading={loading}
            className={cn(buttonVariants({ variant, size, className }))}
            disabled={disabled || loading}
            onClick={handleClick}
            {...props}
        >
            <LoaderIcon
                className="size-4 shrink-0 animate-spin group-data-[loading=false]:hidden"
                aria-hidden="true"
            />
            <span className="sr-only">Loading</span>
            {children}
            {ripples.map((ripple) => {
                const duration = Math.min(
                    Math.max(0.01 * ripple.size, 0.2),
                    ripple.size > 100 ? 0.75 : 0.5,
                );
                return (
                    <LazyMotion key={ripple.id} features={domAnimation}>
                        <AnimatePresence mode="popLayout">
                            <m.span
                                initial={{
                                    transform: "scale(0)",
                                    opacity: 0.35,
                                }}
                                animate={{ transform: "scale(2)", opacity: 0 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: "absolute",
                                    backgroundColor: "currentColor",
                                    borderRadius: "100%",
                                    transformOrigin: "center",
                                    pointerEvents: "none",
                                    overflow: "hidden",
                                    inset: 0,
                                    zIndex: 0,
                                    top: ripple.y,
                                    left: ripple.x,
                                    width: `${ripple.size}px`,
                                    height: `${ripple.size}px`,
                                }}
                                transition={{ duration }}
                                onAnimationComplete={() => {
                                    handleRippleClear(ripple.id);
                                }}
                            />
                        </AnimatePresence>
                    </LazyMotion>
                );
            })}
        </Comp>
    );
}

export { Button, buttonVariants };
