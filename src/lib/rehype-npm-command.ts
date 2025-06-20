import { visit } from "unist-util-visit";

import type { UnistNode, UnistTree } from "@/types/unist";

export function rehypeNpmCommand() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }

      // npm install.
      if (node.properties?.__raw_string__?.startsWith("npm install")) {
        const npmCommand = node.properties?.__raw_string__;
        node.properties.__npmCommand__ = npmCommand;
        node.properties.__yarnCommand__ = npmCommand.replace(
          "npm install",
          "yarn add",
        );
        node.properties.__pnpmCommand__ = npmCommand.replace(
          "npm install",
          "pnpm add",
        );
        node.properties.__bunCommand__ = npmCommand.replace(
          "npm install",
          "bun add",
        );
      }

      // npx create-.
      if (node.properties?.__raw_string__?.startsWith("npx create-")) {
        const npmCommand = node.properties?.__raw_string__;
        node.properties.__npmCommand__ = npmCommand;
        node.properties.__yarnCommand__ = npmCommand.replace(
          "npx create-",
          "yarn create ",
        );
        node.properties.__pnpmCommand__ = npmCommand.replace(
          "npx create-",
          "pnpm create ",
        );
        node.properties.__bunCommand__ = npmCommand.replace(
          "npx",
          "bunx --bun",
        );
      }

      // npm create.
      if (node.properties?.__raw_string__?.startsWith("npm create")) {
        const npmCommand = node.properties?.__raw_string__;
        node.properties.__npmCommand__ = npmCommand;
        node.properties.__yarnCommand__ = npmCommand.replace(
          "npm create",
          "yarn create",
        );
        node.properties.__pnpmCommand__ = npmCommand.replace(
          "npm create",
          "pnpm create",
        );
        node.properties.__bunCommand__ = npmCommand.replace(
          "npm create",
          "bun create",
        );
      }

      // npx.
      if (
        node.properties?.__raw_string__?.startsWith("npx") &&
        !node.properties?.__raw_string__?.startsWith("npx create-")
      ) {
        const npmCommand = node.properties?.__raw_string__;
        node.properties.__npmCommand__ = npmCommand;
        node.properties.__yarnCommand__ = npmCommand.replace("npx", "yarn dlx");
        node.properties.__pnpmCommand__ = npmCommand.replace("npx", "pnpm dlx");
        node.properties.__bunCommand__ = npmCommand.replace(
          "npx",
          "bunx --bun",
        );
      }

      // biome-ignore lint/performance/noDelete: <explanation>
      delete node.properties?.style;
    });
  };
}
