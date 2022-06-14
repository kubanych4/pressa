/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
// const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['koom.press'],
    // disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    outputStandalone: true,
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
// module.exports = withPlugins([[withImages]], nextConfig)


