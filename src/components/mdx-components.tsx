import { cn } from "@/lib/utils";
import { Event } from "@/lib/events";
import { ComponentPreview } from "./docs/component-preview";
import { ComponentSource } from "./docs/component-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlockCommand } from "./docs/code-block-command";
import { CopyButton } from "./docs/copy-button";

export const MdxComponents = {
    ComponentPreview,
    ComponentSource,
    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
        <h3
            className={cn(
                "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    Steps: ({ ...props }) => (
        <div
            className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
            {...props}
        />
    ),
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
        <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
    ),
    TabsList: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsList>) => (
        <TabsList
            className={cn(
                "w-full justify-start rounded-none border-b bg-transparent p-0",
                className,
            )}
            {...props}
        />
    ),
    TabsTrigger: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
        <TabsTrigger
            className={cn(
                "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
                className,
            )}
            {...props}
        />
    ),
    TabsContent: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsContent>) => (
        <TabsContent
            className={cn(
                "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                className,
            )}
            {...props}
        />
    ),
    pre: ({
        className,
        __rawstring__,
        __npmcommand__,
        __pnpmcommand__,
        __yarncommand__,
        __buncommand__,
        __withmeta__,
        __src__,
        __event__,
        __name__,
        ...props
    }: React.HTMLAttributes<HTMLPreElement> & {
        __rawstring__?: string;
        __npmcommand__?: string;
        __pnpmcommand__?: string;
        __yarncommand__?: string;
        __buncommand__?: string;
        __withmeta__?: boolean;
        __src__?: string;
        __event__?: Event["name"];
        __name__?: string;
    }) => {
        const isNpmCommand =
            __npmcommand__ && __yarncommand__ && __pnpmcommand__ && __buncommand__;

        if (isNpmCommand) {
            return (
                <CodeBlockCommand
                    __npmcommand__={__npmcommand__}
                    __yarncommand__={__yarncommand__}
                    __pnpmcommand__={__pnpmcommand__}
                    __buncommand__={__buncommand__}
                />
            );
        }

        return (
            <>
                <pre
                    className={cn(
                        "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900",
                        className,
                    )}
                    {...props}
                />
                {__rawstring__ && __src__ && __event__ && (
                    <CopyButton
                        value={__rawstring__}
                        src={__src__}
                        event={__event__}
                        className={cn("absolute right-4 top-4", __withmeta__ && "top-16")}
                    />
                )}
            </>
        );
    },
}