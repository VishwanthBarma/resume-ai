// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations...

  webpack: (config) => {
    // Disable the 'canvas' module
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
