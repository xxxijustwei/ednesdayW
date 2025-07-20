import { Point } from "@noble/ed25519";
import bs58 from "bs58";
import { hexToBytes, isAddress as isEVMAddress, sha256 } from "viem";

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

const TRON_ADDRESS_SIZE = 34;
const TRON_ADDRESS_PREFIX_BYTE = 0x41;

const isTronAddress = (address: string) => {
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

const SOLANA_PUBKEY_BYTES = 32;
const SOLANA_ADDRESS_REGEX = /^[1-9A-HJ-NP-Za-km-z]{43,44}$/;

const isSolanaAddress = (address: string): boolean => {
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
