"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import * as React from "react";

import BunIcon from "@/components/icons/bun";
import NpmIcon from "@/components/icons/npm";
import PnpmIcon from "@/components/icons/pnpm";
import YarnIcon from "@/components/icons/yarn";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useConfig } from "@/hooks/use-config";
import type { NpmCommands } from "@/types/unist";

const icons = {
    npm: NpmIcon,
    pnpm: PnpmIcon,
    yarn: YarnIcon,
    bun: BunIcon,
};

export function CodeBlockCommand({
    __npmCommand__,
    __yarnCommand__,
    __pnpmCommand__,
    __bunCommand__,
}: React.ComponentProps<"pre"> & NpmCommands) {
    const [config, setConfig] = useConfig();
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        if (hasCopied) {
            const timer = setTimeout(() => setHasCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [hasCopied]);

    const packageManager = config.packageManager;
    const tabs = React.useMemo(() => {
        return {
            npm: __npmCommand__,
            pnpm: __pnpmCommand__,
            yarn: __yarnCommand__,
            bun: __bunCommand__,
        };
    }, [__npmCommand__, __pnpmCommand__, __yarnCommand__, __bunCommand__]);

    const copyCommand = React.useCallback(() => {
        const command = tabs[packageManager];

        if (!command) {
            return;
        }

        navigator.clipboard.writeText(command);
        setHasCopied(true);
    }, [packageManager, tabs]);

    return (
        <div className="relative mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 dark:bg-zinc-900">
            <Tabs
                value={packageManager}
                onValueChange={(value) => {
                    setConfig({
                        ...config,
                        packageManager: value as
                            | "pnpm"
                            | "npm"
                            | "yarn"
                            | "bun",
                    });
                }}
            >
                <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3 pt-2.5">
                    <TabsList className="h-7 translate-y-[2px] gap-3 bg-transparent p-0 pl-1">
                        {Object.entries(tabs).map(([key]) => {
                            return (
                                <TabsTrigger
                                    key={key}
                                    value={key}
                                    className="rounded-none border-0 border-b border-transparent bg-transparent pt-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 dark:data-[state=active]:border-b-zinc-50 dark:data-[state=active]:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"
                                >
                                    <div className="flex items-center gap-2">
                                        {icons[key as keyof typeof icons]({
                                            className: "size-4",
                                        })}
                                        <span>{key}</span>
                                    </div>
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </div>
                {Object.entries(tabs).map(([key, value]) => {
                    return (
                        <TabsContent key={key} value={key} className="mt-0">
                            <pre className="overflow-x-auto px-4 py-5">
                                <code
                                    className="relative font-mono text-sm leading-none"
                                    data-language="bash"
                                >
                                    {value}
                                </code>
                            </pre>
                        </TabsContent>
                    );
                })}
            </Tabs>
            <Button
                size="icon"
                variant="ghost"
                className="absolute right-2.5 top-2 z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:size-3"
                onClick={copyCommand}
            >
                <span className="sr-only">Copy</span>
                {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
            </Button>
        </div>
    );
}
