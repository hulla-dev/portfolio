const nextConfig = {
  experimental: {
    serverComponents: true,
    runtime: 'edge',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
