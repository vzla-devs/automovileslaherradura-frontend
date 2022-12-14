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
        source: '/coches',
        destination: '/',
        permanent: true,
      },
    ]
  },
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ]
}

module.exports = nextConfig
