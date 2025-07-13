import path from "node:path";
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

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
    return config;
  },
};

export default withContentCollections(config);
