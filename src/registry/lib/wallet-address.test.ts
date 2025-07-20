import { describe, expect, it, test } from "vitest";
import { isAddress } from "./wallet-address";

test("check wallet address is valid", () => {
  expect(isAddress("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045")).toBe(true);
  expect(isAddress("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA98888")).toBe(false);
  expect(isAddress("0xabc")).toBe(false);
  expect(isAddress("TU3kjFuhtEo42tsCBtfYUAZxoqQ4yuSLQ5", "tron")).toBe(true);
  expect(isAddress("TU3kjFuhtEo42tsCBtfYUAZxoqQ4yuSLQ8", "tron")).toBe(false);
  expect(
    isAddress("52C9T2T7JRojtxumYnYZhyUmrN7kqzvCLc4Ksvjk7TxD", "solana"),
  ).toBe(true);
  expect(isAddress("AJKqp326RZCHnAAbew9MDdui3iCKWco7f9sVuZTX2", "solana")).toBe(
    false,
  );
});
