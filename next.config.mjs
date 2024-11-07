/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
  },
  async rewrites() {
    return [
      {
        source: "/account/:slug",
        destination: "/account/:slug/overview",
      },
    ]
  }
};

export default nextConfig;
