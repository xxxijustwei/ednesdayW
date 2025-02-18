import { OpenInV0Button } from "@/components/open-in-v0-button"
import { CodeBlock } from "@/registry/code-block/code-block"

export const CodeBlockExample = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                    A Code Block
                </h2>
                <OpenInV0Button name="code-block" className="w-fit" />
            </div>
            <div className="flex items-center justify-center min-h-[500px] relative">
                <CodeBlock lang="typescript" code={exampleCode} />
            </div>
        </div>
    )
}

const exampleCode = String.raw`import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Props {
    lang: string;
    code: string;
    maxHeight?: string;
}

export const CodeBlock = async (
    { lang, code, maxHeight = '460px' }: Props
) => {
    const highlightedCode = await highlightCode(code);
    return (
        <div className='w-full bg-[#22272d] p-1 rounded-xl'>
            <ScrollArea
                className='flex flex-col overflow-y-auto w-full p-4'
                style={{
                    maxHeight: maxHeight,
                }}
            >

                <section
                    dangerouslySetInnerHTML={{
                        __html: highlightedCode,
                    }}
                />
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}

const highlightCode = async (code: string) => {
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })
        .use(rehypeStringify)
        .process(code);

    return String(file);
}`