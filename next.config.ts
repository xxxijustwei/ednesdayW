import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

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
};

export default withContentCollections(config);
