/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponents: true,
    outputStandalone: true,
    runtime: 'edge',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true
}

module.exports = nextConfig
