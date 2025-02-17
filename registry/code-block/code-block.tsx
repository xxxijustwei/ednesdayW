import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Props {
    lang?: string;
    code?: string;
    maxHeight?: string;
}

export const CodeBlock = async (
    { lang = "typescript", code = "console.log('Hello, world!');", maxHeight = '460px' }: Props
) => {
    const content = `\`\`\`${lang}\n${code}\n\`\`\``;

    const highlightedCode = await highlightCode(content);
    return (
        <div className='w-full bg-[#22272d] p-4 pr-2 rounded-xl'>
            <ScrollArea
                className='flex flex-col items-center justify-center min-h-[28px] overflow-y-auto w-full'
                style={{
                    maxHeight: maxHeight,
                }}
            >
                <section
                    className="[&_pre]:!static"
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
}