/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Disable the 'canvas' module
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };

    return config;
  },
};

export default nextConfig;
