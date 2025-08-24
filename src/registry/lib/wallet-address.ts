import { createHash } from "node:crypto";
import { Point } from "@noble/ed25519";
import bs58 from "bs58";
import { keccak256 } from "js-sha3";

type Network = "evm" | "tron" | "solana";

export const isAddress = (address: string, network: Network = "evm") => {
  switch (network) {
    case "evm":
      return isEVMAddress(address);
    case "tron":
      return isTronAddress(address);
    case "solana":
      return isSolanaAddress(address);
  }
};

// ============ EVM ============

const EVM_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

export const isEVMAddress = (address: string, strict = true) => {
  if (!EVM_ADDRESS_REGEX.test(address)) return false;
  if (address.toLowerCase() === address) return true;
  if (strict) return checksumAddress(address) === address;
  return true;
};

const checksumAddress = (address: string, chainId?: number) => {
  const hexAddress = chainId
    ? `${chainId}${address.toLowerCase()}`
    : address.substring(2).toLowerCase();
  const hash = keccak256.array(stringToBytes(hexAddress));
  const addr = (
    chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress
  ).split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash[i >> 1] >> 4 >= 8 && addr[i]) {
      addr[i] = addr[i].toUpperCase();
    }
    if ((hash[i >> 1] & 0x0f) >= 8 && addr[i + 1]) {
      addr[i + 1] = addr[i + 1].toUpperCase();
    }
  }
  return `0x${addr.join("")}`;
};

const stringToBytes = (str: string) => {
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
};

// ============ Tron ============

const TRON_ADDRESS_SIZE = 34;
const TRON_ADDRESS_PREFIX_BYTE = 0x41;

export const isTronAddress = (address: string) => {
  if (address.length !== TRON_ADDRESS_SIZE) return false;

  let decodeAddr = bs58.decode(address);
  if (decodeAddr.length !== 25) return false;

  if (decodeAddr[0] !== TRON_ADDRESS_PREFIX_BYTE) return false;

  const checkSum = decodeAddr.slice(21);
  decodeAddr = decodeAddr.slice(0, 21);

  const hash0 = hexToBytes(sha256(decodeAddr));
  const hash1 = hexToBytes(sha256(hash0));
  const checkSum1 = hash1.slice(0, 4);

  if (
    checkSum[0] === checkSum1[0] &&
    checkSum[1] === checkSum1[1] &&
    checkSum[2] === checkSum1[2] &&
    checkSum[3] === checkSum1[3]
  )
    return true;

  return false;
};

/**
 * SHA256 hash function
 */
function sha256(data: Uint8Array): string {
  return createHash("sha256").update(data).digest("hex");
}

/**
 * Converts hex string to Uint8Array
 */
function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

// ============ Solana ============

const SOLANA_PUBKEY_BYTES = 32;
const SOLANA_ADDRESS_REGEX = /^[1-9A-HJ-NP-Za-km-z]{43,44}$/;

export const isSolanaAddress = (address: string): boolean => {
  if (!SOLANA_ADDRESS_REGEX.test(address)) {
    return false;
  }

  try {
    const decoded = bs58.decode(address);
    if (decoded.length !== SOLANA_PUBKEY_BYTES) {
      return false;
    }

    if (decoded.every((byte) => byte === 0)) {
      return false;
    }

    Point.fromBytes(decoded);
    return true;
  } catch {
    return false;
  }
};
