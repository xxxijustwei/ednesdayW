import { createHash } from "crypto";
import bs58 from "bs58";
import { keccak256 } from "js-sha3";
import { isEVMAddress, isTronAddress } from "./wallet-address";

// ============ Types ============
interface Create2PredictAddressParams {
  implementation: string;
  deployer: string;
  salt: string;
}

// ============ Constants ============
// EIP-1167 Minimal Proxy Bytecode
const MINIMAL_PROXY = {
  PREFIX: "3d602d80600a3d3981f3363d3d373d3d3d363d73",
  EVM_SUFFIX: "5af43d82803e903d91602b57fd5bf3ff",
  TRON_SUFFIX: "5af43d82803e903d91602b57fd5bf341",
} as const;

// Bytecode Processing
const BYTECODE_CONFIG = {
  FIRST_PART_END: 110,
  SECOND_PART_END: 280,
  ADDRESS_SIZE: 40,
} as const;

// ============ Main Functions ============

/**
 * Predicts the deterministic address for a contract using CREATE2
 */
export function create2(
  data: Create2PredictAddressParams & { network?: "evm" | "tron" },
) {
  const { implementation, deployer, salt, network = "evm" } = data;
  if (network === "evm") {
    return predictDeterministicEVMAddress({ implementation, deployer, salt });
  }
  return predictDeterministicTronAddress({ implementation, deployer, salt });
}

/**
 * Predicts the deterministic address for an EVM contract using CREATE2
 */
export function predictDeterministicEVMAddress({
  implementation,
  deployer,
  salt,
}: Create2PredictAddressParams): string {
  // Validate inputs
  validateEVMAddress(implementation, "implementation");
  validateEVMAddress(deployer, "deployer");
  validateSalt(salt);

  // Prepare parameters
  const saltHex = stringToHex(salt, 32);
  const cleanImplementation = removeHexPrefix(implementation);
  const cleanDeployer = removeHexPrefix(deployer);

  // Build bytecode
  const bytecode = buildBytecode(
    cleanImplementation,
    cleanDeployer,
    saltHex,
    MINIMAL_PROXY.EVM_SUFFIX,
  );

  // Calculate address
  const addressHex = calculateAddressFromBytecode(bytecode);
  return toChecksumAddress(`0x${addressHex}`);
}

/**
 * Predicts the deterministic address for a TRON contract using CREATE2
 */
export function predictDeterministicTronAddress({
  implementation,
  deployer,
  salt,
}: Create2PredictAddressParams): string {
  // Validate inputs
  validateTronAddress(implementation, "implementation");
  validateTronAddress(deployer, "deployer");
  validateSalt(salt);

  // Prepare parameters
  const saltHex = stringToHex(salt, 32);
  const cleanImplementation = tronAddressToHex(implementation);
  const cleanDeployer = tronAddressToHex(deployer);

  // Build bytecode
  const bytecode = buildBytecode(
    cleanImplementation,
    cleanDeployer,
    saltHex,
    MINIMAL_PROXY.TRON_SUFFIX,
  );

  // Calculate address
  const addressHex = calculateAddressFromBytecode(bytecode);
  return hexToTronAddress(addressHex);
}

// ============ Validation Functions ============

function validateEVMAddress(address: string, name: string): void {
  if (!isEVMAddress(address)) {
    throw new Error(`Invalid ${name} address: ${address}`);
  }
}

function validateTronAddress(address: string, name: string): void {
  if (!isTronAddress(address)) {
    throw new Error(`Invalid ${name} address: ${address}`);
  }
}

function validateSalt(salt: string): void {
  if (salt.length > 32) {
    throw new Error(`Salt must be less than 32 characters: ${salt}`);
  }
}

// ============ Helper Functions ============

/**
 * Builds the complete bytecode for CREATE2 address calculation
 */
function buildBytecode(
  implementation: string,
  deployer: string,
  saltHex: string,
  suffix: string,
): string {
  let bytecode = `${MINIMAL_PROXY.PREFIX}${implementation}${suffix}${deployer}${saltHex}`;

  // Add first hash
  const firstPart = bytecode.slice(0, BYTECODE_CONFIG.FIRST_PART_END);
  const firstHash = keccak256(Buffer.from(firstPart, "hex"));
  bytecode += firstHash;

  return bytecode;
}

/**
 * Calculates the final address from bytecode
 */
function calculateAddressFromBytecode(bytecode: string): string {
  const secondPart = bytecode.slice(
    BYTECODE_CONFIG.FIRST_PART_END,
    BYTECODE_CONFIG.SECOND_PART_END,
  );
  const secondHash = keccak256(Buffer.from(secondPart, "hex"));
  return secondHash.slice(-BYTECODE_CONFIG.ADDRESS_SIZE);
}

/**
 * Converts a string to padded hex representation
 */
function stringToHex(str: string, size: number): string {
  const bytes = Buffer.from(str, "utf8");
  if (bytes.length > size) {
    throw new Error(`String is too long for size ${size}`);
  }

  const padded = Buffer.alloc(size);
  bytes.copy(padded);
  return padded.toString("hex");
}

/**
 * Removes hex prefix and converts to lowercase
 */
function removeHexPrefix(address: string): string {
  return address.slice(2).toLowerCase();
}

// ============ Crypto Functions ============

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

// ============ Address Conversion Functions ============

/**
 * Converts TRON address to hex format
 */
function tronAddressToHex(base58: string): string {
  const bytes = bs58.decode(base58);
  return Buffer.from(bytes.slice(1, 21)).toString("hex").toLowerCase();
}

/**
 * Converts hex to TRON address format
 */
function hexToTronAddress(hex: string): string {
  const addr = `41${hex}`;
  const addrBytes = hexToBytes(addr);
  const checksum = calculateTronChecksum(addrBytes);
  return bs58.encode(Buffer.concat([addrBytes, checksum]));
}

/**
 * Calculates TRON address checksum
 */
function calculateTronChecksum(addressBytes: Uint8Array): Buffer {
  const hash1 = sha256(addressBytes);
  const hash2 = sha256(hexToBytes(hash1));
  return Buffer.from(hash2.substring(0, 8), "hex");
}

/**
 * Converts address to EIP-55 checksum format
 */
function toChecksumAddress(address: string): string {
  const addr = address.toLowerCase().replace("0x", "");
  const hash = keccak256(Buffer.from(addr, "utf8"));

  let checksumAddress = "0x";
  for (let i = 0; i < addr.length; i++) {
    const char = addr[i];
    const hashChar = hash[i];

    if (!char || !hashChar) continue;

    const hashValue = Number.parseInt(hashChar, 16);
    checksumAddress +=
      Number.parseInt(char, 16) >= 10 && hashValue >= 8
        ? char.toUpperCase()
        : char;
  }

  return checksumAddress;
}
