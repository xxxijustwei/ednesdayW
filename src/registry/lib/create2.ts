import { keccak256 } from "js-sha3";

/**
 * Minimal Proxy (EIP-1167) Bytecode Template
 * A minimal proxy contract that delegates all calls to the implementation contract
 */
const MIN_PROXY_BYTECODE_PREFIX = "3d602d80600a3d3981f3363d3d373d3d3d363d73";
const MIN_PROXY_BYTECODE_SUFFIX = "5af43d82803e903d91602b57fd5bf3ff";

interface Create2PredictAddressParams {
  implementation: `0x${string}`;
  deployer: `0x${string}`;
  salt: string;
}

function isValidAddress(address: string): boolean {
  if (address.length !== 42 || !address.startsWith("0x")) {
    return false;
  }

  const hex = address.slice(2);
  return /^[0-9a-fA-F]{40}$/.test(hex);
}

function stringToHex(str: string, size: number): string {
  const bytes = Buffer.from(str, "utf8");
  if (bytes.length > size) {
    throw new Error(`String is too long for size ${size}`);
  }

  const padded = Buffer.alloc(size);
  bytes.copy(padded);

  return padded.toString("hex");
}

function getChecksumAddress(address: string): string {
  const addr = address.toLowerCase().replace("0x", "");
  const hash = keccak256(Buffer.from(addr, "utf8"));

  let checksumAddress = "0x";
  for (let i = 0; i < addr.length; i++) {
    const char = addr[i];
    const hashChar = hash[i];

    if (!char || !hashChar) continue;

    const hashValue = Number.parseInt(hashChar, 16);

    if (Number.parseInt(char, 16) >= 10) {
      checksumAddress += hashValue >= 8 ? char.toUpperCase() : char;
    } else {
      checksumAddress += char;
    }
  }

  return checksumAddress;
}

export const predictDeterministicAddress = ({
  implementation,
  deployer,
  salt,
}: Create2PredictAddressParams): string => {
  if (!isValidAddress(implementation)) {
    throw new Error(`Invalid implementation address: ${implementation}`);
  }

  if (!isValidAddress(deployer)) {
    throw new Error(`Invalid deployer address: ${deployer}`);
  }

  if (salt.length > 32) {
    throw new Error(`Salt must be less than 32 characters: ${salt}`);
  }

  const saltHex = stringToHex(salt, 32);
  const cleanImplementation = implementation.slice(2).toLowerCase();
  const cleanDeployer = deployer.slice(2).toLowerCase();

  let bytecode = `${MIN_PROXY_BYTECODE_PREFIX}${cleanImplementation}${MIN_PROXY_BYTECODE_SUFFIX}${cleanDeployer}${saltHex}`;

  const firstPart = bytecode.slice(0, 110);
  const firstBytes = Buffer.from(firstPart, "hex");
  const firstHash = keccak256(firstBytes);
  bytecode += firstHash;

  const secondPart = bytecode.slice(110, 280);
  const secondBytes = Buffer.from(secondPart, "hex");
  const secondHash = keccak256(secondBytes);

  const addressHex = secondHash.slice(-40);

  return getChecksumAddress(`0x${addressHex}`);
};
