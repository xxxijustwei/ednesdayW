import {
  encodePacked,
  getAddress,
  isAddress,
  keccak256,
  stringToHex,
} from "viem";

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

export const predictDeterministicAddress = ({
  implementation,
  deployer,
  salt,
}: Create2PredictAddressParams) => {
  if (!isAddress(implementation)) {
    throw new Error(`Invalid implementation address: ${implementation}`);
  }

  if (!isAddress(deployer)) {
    throw new Error(`Invalid deployer address: ${deployer}`);
  }

  if (salt.length > 32) {
    throw new Error(`Salt must be less than 32 characters: ${salt}`);
  }

  const saltHex = stringToHex(salt, { size: 32 }).slice(2);
  const cleanImplementation = implementation.slice(2).toLowerCase();
  const cleanDeployer = deployer.slice(2).toLocaleLowerCase();
  let bytecode = `${MIN_PROXY_BYTECODE_PREFIX}${cleanImplementation}${MIN_PROXY_BYTECODE_SUFFIX}${cleanDeployer}${saltHex}`;
  bytecode += keccak256(
    encodePacked(["bytes"], [`0x${bytecode.slice(0, 110)}`]),
  ).slice(2);
  const hash = keccak256(
    encodePacked(["bytes"], [`0x${bytecode.slice(110, 280)}`]),
  ).slice(-40);

  return getAddress(`0x${hash}`);
};
