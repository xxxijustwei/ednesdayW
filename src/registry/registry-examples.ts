import type { Registry } from "shadcn/registry";
import { colorInputExamples } from "./example/color-input/_registry";
import { colorPickerExamples } from "./example/color-picker/_registry";
import { inputExamples } from "./example/input/_registry";
import { phoneInputExamples } from "./example/phone-input/_registry";
import { selectExamples } from "./example/select/_registry";
import { useDisclosureExamples } from "./example/use-disclosure/_registry";

export const examples: Registry["items"] = [
    ...inputExamples,
    ...phoneInputExamples,
    ...selectExamples,
    ...useDisclosureExamples,
    ...colorPickerExamples,
    ...colorInputExamples,
];
