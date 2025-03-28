import type { Registry } from "shadcn/registry";
import { inputExamples } from "./example/input/_registry";
import { selectExamples } from "./example/select/_registry";

export const examples: Registry["items"] = [
    ...inputExamples,
    ...selectExamples,
];
