import { ComponentPreview } from "./docs/component-preview";
import { ComponentSource } from "./docs/component-source";
import { HTMLAttributes } from "react";
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { Tab, Tabs, TabsProps } from 'fumadocs-ui/components/tabs';

export const MdxComponents = {
    Tab: (props: TabsProps) => (
        <Tab {...props} className="" />
    ),
    Tabs: (props: TabsProps) => (
        <Tabs {...props} />
    ),
    ComponentPreview,
    ComponentSource,
    pre: (props: HTMLAttributes<HTMLPreElement>) => (
        <CodeBlock {...props} className="my-0">
            <Pre>{props.children}</Pre>
        </CodeBlock>
    ),
}