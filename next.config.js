/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['a.storyblok.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coches',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
