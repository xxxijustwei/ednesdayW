import type { Registry } from "shadcn/registry";
import { autocompleteExamples } from "./example/autocomplete/_registry";
import { buttonExamples } from "./example/button/_registry";
import { colorInputExamples } from "./example/color-input/_registry";
import { colorPickerExamples } from "./example/color-picker/_registry";
import { create2Examples } from "./example/create2/_registry";
import { fieldInputExamples } from "./example/field-input/_registry";
import { fieldTextareaExamples } from "./example/field-textarea/_registry";
import { inputExamples } from "./example/input/_registry";
import { paginationExamples } from "./example/pagination/_registry";
import { phoneInputExamples } from "./example/phone-input/_registry";
import { selectExamples } from "./example/select/_registry";
import { tagInputExamples } from "./example/tag-input/_registry";
import { textareaExamples } from "./example/textarea/_registry";
import { useCountdownExamples } from "./example/use-countdown/_registry";
import { useDeviceDetectionExamples } from "./example/use-device-detection/_registry";
import { useDisclosureExamples } from "./example/use-disclosure/_registry";
import { useRippleExamples } from "./example/use-ripple/_registry";
import { walletAddressExamples } from "./example/wallet-address/_registry";

export const examples: Registry["items"] = [
  ...inputExamples,
  ...fieldInputExamples,
  ...textareaExamples,
  ...fieldTextareaExamples,
  ...phoneInputExamples,
  ...selectExamples,
  ...colorPickerExamples,
  ...colorInputExamples,
  ...buttonExamples,
  ...useDisclosureExamples,
  ...useRippleExamples,
  ...paginationExamples,
  ...useCountdownExamples,
  ...useDeviceDetectionExamples,
  ...autocompleteExamples,
  ...tagInputExamples,
  ...walletAddressExamples,
  ...create2Examples,
];
