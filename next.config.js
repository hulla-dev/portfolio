/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    outputStandalone: true,
    runtime: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true
}

module.exports = nextConfig
