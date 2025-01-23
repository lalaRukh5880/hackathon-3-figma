/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode for better error handling
  swcMinify: true, // Enables SWC-based minification
  compiler: {
      styledComponents: true, // Enables styled-components SWC transform
  },
  webpack(config, { isServer }) {
      // Customize Webpack config if needed
      return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
