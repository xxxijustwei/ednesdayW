import { createContentlayerPlugin } from "next-contentlayer2"

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: "ipfs.io",
            },
        ],
    },
};

const withContentlayer = createContentlayerPlugin({
    // Additional Contentlayer config options
})

export default withContentlayer(config)
