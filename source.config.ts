import { rehypeComponent } from '@/lib/rehype-component';
import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import prettyCode, { Options } from 'rehype-pretty-code';
import { createHighlighter } from 'shiki';
import { remarkInstall } from 'fumadocs-docgen';

const prettyCodeOptions: Options = {
    theme: "github-dark",
    keepBackground: true,
    getHighlighter: (options) =>
        createHighlighter({
            ...options,
        }),
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and allow empty
        // lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
        }
    },
    onVisitHighlightedLine(node) {
        if (!node.properties.className) {
            node.properties.className = [];
        }
        node.properties.className.push("line--highlighted");
    },
    onVisitHighlightedChars(node) {
        if (!node.properties.className) {
            node.properties.className = [];
        }
        node.properties.className = ["word--highlighted"];
    },
};

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
        remarkInstall,
    ],
    rehypePlugins: [
        rehypeComponent,
        [prettyCode, prettyCodeOptions]
    ]
  },
});

