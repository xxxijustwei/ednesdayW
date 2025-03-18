// source: https://github.com/magicuidesign/magicui/blob/main/lib/rehype-npm-command.ts

import { UnistNode, UnistTree } from "@/types/unist";
import { visit } from "unist-util-visit";

export function rehypeNpmCommand() {
    return (tree: UnistTree) => {
        visit(tree, (node: UnistNode) => {
            if (node.type !== "element" || node?.tagName !== "pre") {
                return;
            }

            // npm install.
            if (node.properties?.["__rawstring__"]?.startsWith("npm install")) {
                const npmCommand = node.properties?.["__rawstring__"];
                node.properties["__npmcommand__"] = npmCommand;
                node.properties["__yarncommand__"] = npmCommand.replace(
                    "npm install",
                    "yarn add",
                );
                node.properties["__pnpmcommand__"] = npmCommand.replace(
                    "npm install",
                    "pnpm add",
                );
                node.properties["__buncommand__"] = npmCommand.replace(
                    "npm install",
                    "bun add",
                );
            }

            // npx create-.
            if (node.properties?.["__rawstring__"]?.startsWith("npx create-")) {
                const npmCommand = node.properties?.["__rawstring__"];
                node.properties["__npmcommand__"] = npmCommand;
                node.properties["__yarncommand__"] = npmCommand.replace(
                    "npx create-",
                    "yarn create ",
                );
                node.properties["__pnpmcommand__"] = npmCommand.replace(
                    "npx create-",
                    "pnpm create ",
                );
                node.properties["__buncommand__"] = npmCommand.replace(
                    "npx",
                    "bun x --bun",
                );
            }

            // npm create.
            if (node.properties?.["__rawstring__"]?.startsWith("npm create")) {
                const npmCommand = node.properties?.["__rawstring__"];
                node.properties["__npmcommand__"] = npmCommand;
                node.properties["__yarncommand__"] = npmCommand.replace(
                    "npm create",
                    "yarn create",
                );
                node.properties["__pnpmcommand__"] = npmCommand.replace(
                    "npm create",
                    "pnpm create",
                );
                node.properties["__buncommand__"] = npmCommand.replace(
                    "npm create",
                    "bun create",
                );
            }

            // npx.
            if (
                node.properties?.["__rawstring__"]?.startsWith("npx") &&
                !node.properties?.["__rawstring__"]?.startsWith("npx create-")
            ) {
                const npmCommand = node.properties?.["__rawstring__"];
                node.properties["__npmcommand__"] = npmCommand;
                node.properties["__yarncommand__"] = npmCommand;
                node.properties["__pnpmcommand__"] = npmCommand.replace(
                    "npx",
                    "pnpm dlx",
                );
                node.properties["__buncommand__"] = npmCommand.replace(
                    "npx",
                    "bun x --bun",
                );
            }

            // npm run.
            if (node.properties?.["__rawstring__"]?.startsWith("npm run")) {
                const npmCommand = node.properties?.["__rawstring__"];
                node.properties["__npmcommand__"] = npmCommand;
                node.properties["__yarncommand__"] = npmCommand.replace(
                    "npm run",
                    "yarn",
                );
                node.properties["__pnpmcommand__"] = npmCommand.replace(
                    "npm run",
                    "pnpm",
                );
                node.properties["__buncommand__"] = npmCommand.replace(
                    "npm run",
                    "bun",
                );
            }
        });
    };
}