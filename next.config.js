/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
