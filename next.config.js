/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  i18n: {
    locales: ['pt', 'en', 'es', 'it'],
    defaultLocale: 'pt',
  }
}

module.exports = nextConfig
