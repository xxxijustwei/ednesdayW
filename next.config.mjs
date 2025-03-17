import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'ipfs.io',
      },
    ],
  },
};

export default withContentCollections(config);
