/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    storyblokApiToken: 'STORYBLOK_API_TOKEN',
  },
}

module.exports = nextConfig
