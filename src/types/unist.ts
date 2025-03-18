import type { Node } from "unist";
export interface UnistNode extends Node {
    type: string;
    name?: string;
    tagName?: string;
    value?: string;
    properties?: {
        __rawstring__?: string;
        __className__?: string;
        __event__?: string;
        [key: string]: unknown;
    } & NpmCommands;
    attributes?: {
        name: string;
        value: unknown;
        type?: string;
    }[];
    children?: UnistNode[];
}

export interface UnistTree extends UnistNode {
    children: UnistNode[];
}

export interface NpmCommands {
    __npmcommand__?: string;
    __yarncommand__?: string;
    __pnpmcommand__?: string;
    __buncommand__?: string;
}