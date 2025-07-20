import path from "node:path";
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";
import withRspack from "next-rspack";

/** @type {import('next').NextConfig} */
const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "ipfs.io",
      },
    ],
  },
  webpack: (config, _context) => {
    config.resolve.alias.jotai = path.resolve(__dirname, "node_modules/jotai");

    config.resolve.fallback = {
      ...config.resolve.fallback,
      bufferutil: false,
      "utf-8-validate": false,
    };

    return config;
  },
};

export default withRspack(withContentCollections(config));
