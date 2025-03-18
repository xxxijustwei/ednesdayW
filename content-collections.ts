import { defineCollection, defineConfig } from '@content-collections/core';
import {
    createMetaSchema,
    createDocSchema,
    transformMDX,
} from '@fumadocs/content-collections/configuration';
import { remarkGfm } from 'fumadocs-core/mdx-plugins';
import { codeImport } from 'remark-code-import';
import rehypeSlug from 'rehype-slug';
import { rehypeComponent } from '@/lib/rehype-component';
import { visit } from "unist-util-visit";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import { createHighlighter } from 'shiki';

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

const docs = defineCollection({
    name: 'docs',
    directory: 'content/docs',
    include: '**/*.mdx',
    schema: createDocSchema,
    transform: async (document, context) => {
        return transformMDX(document, context, {
            remarkPlugins: [codeImport, remarkGfm],
            rehypePlugins: [
                rehypeSlug,
                rehypeComponent,
                () => (tree) => {
                    visit(tree, (node) => {
                        if (node?.type === "element" && node?.tagName === "pre") {
                            const [codeEl] = node.children;
                            if (codeEl.tagName !== "code") {
                                return;
                            }
                            if (codeEl.data?.meta) {
                                // Extract event from meta and pass it down the tree.
                                const regex = /event="([^"]*)"/;
                                const match = codeEl.data?.meta.match(regex);
                                if (match) {
                                    node.__event__ = match ? match[1] : null;
                                    codeEl.data.meta = codeEl.data.meta.replace(regex, "");
                                }
                            }
                            node.__rawstring__ = codeEl.children?.[0].value;
                            node.__src__ = node.properties?.__src__;
                            node.__style__ = node.properties?.__style__;
                        }
                    });
                },
                [rehypePrettyCode, prettyCodeOptions],
                () => (tree) => {
                    visit(tree, (node) => {
                        if (node?.type === "element" && node?.tagName === "figure") {
                            if (!("data-rehype-pretty-code-figure" in node.properties)) {
                                return;
                            }

                            const preElement = node.children.at(-1);
                            if (preElement.tagName !== "pre") {
                                return;
                            }

                            preElement.properties["__withmeta__"] =
                                node.children.at(0).tagName === "div";
                            preElement.properties["__rawstring__"] = node.__rawstring__;

                            if (node.__src__) {
                                preElement.properties["__src__"] = node.__src__;
                            }

                            if (node.__event__) {
                                preElement.properties["__event__"] = node.__event__;
                            }

                            if (node.__style__) {
                                preElement.properties["__style__"] = node.__style__;
                            }
                        }
                    });
                },
            ],
        });
    }
});

const metas = defineCollection({
    name: 'meta',
    directory: 'content/docs',
    include: '**/meta.json',
    parser: 'json',
    schema: createMetaSchema,
});

export default defineConfig({
    collections: [docs, metas],
});