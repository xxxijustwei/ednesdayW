import { cn } from "@/lib/utils";
import { ComponentPreview } from "./docs/component-preview";
import { ComponentSource } from "./docs/component-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HTMLAttributes } from "react";
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

export const MdxComponents = {
    ComponentPreview,
    ComponentSource,
    pre: (props: HTMLAttributes<HTMLPreElement>) => (
        <CodeBlock {...props} className="my-0">
            <Pre>{props.children}</Pre>
        </CodeBlock>
    ),
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
}