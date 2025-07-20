import { describe, expect, it, test } from "vitest";
import { isAddress } from "./wallet-address";

test("check wallet address is valid", () => {
  expect(isAddress("0x888777d851872Cd075D88C61BE8793Ff302C1FAd")).toBe(true);
  expect(isAddress("0x888999d851872Cd075D88C61BE8793Ff302C1FAd")).toBe(false);
  expect(isAddress("0xabc")).toBe(false);
  expect(isAddress("TWJ88TmUTG3ZcvPqR8WrPxA33esoXFFFFF", "tron")).toBe(true);
  expect(isAddress("TWJ88TmUTG3ZcvPqR8WrPxA33esoX77777", "tron")).toBe(false);
  expect(
    isAddress("FQh8Vkasb6h173nJ7mXmHwmbV7DX81N6jXBaNQNaP5RA", "solana"),
  ).toBe(true);
  expect(
    isAddress("FQh8Vkasb6h173nJ7mXmHwmbV7DX81N6jXBaNNNNNNN", "solana"),
  ).toBe(false);
});
