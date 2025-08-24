import { describe, expect, test } from "vitest";
import { create2 } from "./create2";
import { isEVMAddress } from "./wallet-address";

describe("create2", () => {
  describe("basic functionality", () => {
    test("should return the correct EVM address", () => {
      const address = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "test-salt-test",
      });
      expect(address).toBe("0x22FBFB2264B9Cd1ADe8ce5013012c817878D783C");
    });

    test("should return the correct TRON address", () => {
      const address = create2({
        implementation: "TL2ScqgY9ckK5h1VQExuMNrweyVSSdAtHa",
        deployer: "TFgphAx29XEwrS8feFMpPfqzypjYzNysSH",
        salt: "tron-network-salt",
        network: "tron",
      });
      expect(address).toBe("TQGeReoGywayLjiFDedvJTrxAALh7uZnqH");
    });
  });

  describe("edge cases - invalid addresses", () => {
    test("should throw error for invalid EVM implementation address", () => {
      expect(() =>
        create2({
          implementation: "invalid-address",
          deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
          salt: "test",
        }),
      ).toThrow("Invalid implementation address");
    });

    test("should throw error for invalid EVM deployer address", () => {
      expect(() =>
        create2({
          implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
          deployer: "not-an-address",
          salt: "test",
        }),
      ).toThrow("Invalid deployer address");
    });

    test("should throw error for invalid TRON implementation address", () => {
      expect(() =>
        create2({
          implementation: "invalid-tron",
          deployer: "TFgphAx29XEwrS8feFMpPfqzypjYzNysSH",
          salt: "test",
          network: "tron",
        }),
      ).toThrow("Invalid implementation address");
    });

    test("should throw error for invalid TRON deployer address", () => {
      expect(() =>
        create2({
          implementation: "TL2ScqgY9ckK5h1VQExuMNrweyVSSdAtHa",
          deployer: "invalid-tron",
          salt: "test",
          network: "tron",
        }),
      ).toThrow("Invalid deployer address");
    });

    test("should throw error for EVM address without 0x prefix", () => {
      expect(() =>
        create2({
          implementation: "a84c57e9966df7df79bff42f35c68aae71796f64",
          deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
          salt: "test",
        }),
      ).toThrow("Invalid implementation address");
    });

    test("should throw error for short EVM address", () => {
      expect(() =>
        create2({
          implementation: "0xa84c57e9966df7df79bff42f35c68aae",
          deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
          salt: "test",
        }),
      ).toThrow("Invalid implementation address");
    });

    test("should throw error for long EVM address", () => {
      expect(() =>
        create2({
          implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64aa",
          deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
          salt: "test",
        }),
      ).toThrow("Invalid implementation address");
    });

    test("should throw error when using TRON address for EVM network", () => {
      expect(() =>
        create2({
          implementation: "TL2ScqgY9ckK5h1VQExuMNrweyVSSdAtHa",
          deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
          salt: "test",
          network: "evm",
        }),
      ).toThrow("Invalid implementation address");
    });

    test("should throw error when using EVM address for TRON network", () => {
      expect(() =>
        create2({
          implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
          deployer: "TFgphAx29XEwrS8feFMpPfqzypjYzNysSH",
          salt: "test",
          network: "tron",
        }),
      ).toThrow("Invalid implementation address");
    });
  });

  describe("edge cases - salt validation", () => {
    test("should handle empty salt", () => {
      const address = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "",
      });
      expect(isEVMAddress(address)).toBe(true);
    });

    test("should handle maximum length salt (32 characters)", () => {
      const address = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "a".repeat(32),
      });
      expect(isEVMAddress(address)).toBe(true);
    });

    test("should throw error for salt longer than 32 characters", () => {
      expect(() =>
        create2({
          implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
          deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
          salt: "a".repeat(33),
        }),
      ).toThrow("Salt must be less than 32 characters");
    });

    test("should handle special characters in salt", () => {
      const address = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "!@#$%^&*()_+-=[]{}|;:,.<>?",
      });
      expect(isEVMAddress(address)).toBe(true);
    });

    test("should handle unicode characters in salt", () => {
      const address = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "测试盐值🚀",
      });
      expect(isEVMAddress(address)).toBe(true);
    });

    test("should handle numeric salt", () => {
      const address = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "1234567890",
      });
      expect(isEVMAddress(address)).toBe(true);
    });
  });

  describe("edge cases - deterministic behavior", () => {
    test("should produce same address for identical inputs", () => {
      const address1 = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "deterministic-test",
      });

      const address2 = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "deterministic-test",
      });

      expect(address1).toBe(address2);
    });

    test("should produce different addresses for different salts", () => {
      const address1 = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "salt1",
      });

      const address2 = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "salt2",
      });

      expect(address1).not.toBe(address2);
    });

    test("should produce different addresses for different implementations", () => {
      const address1 = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "same-salt",
      });

      const address2 = create2({
        implementation: "0xb84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "same-salt",
      });

      expect(address1).not.toBe(address2);
    });

    test("should produce different addresses for different deployers", () => {
      const address1 = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xfe15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "same-salt",
      });

      const address2 = create2({
        implementation: "0xa84c57e9966df7df79bff42f35c68aae71796f64",
        deployer: "0xae15afcb5b9831b8af5fd984678250e95de8e312",
        salt: "same-salt",
      });

      expect(address1).not.toBe(address2);
    });
  });
});
