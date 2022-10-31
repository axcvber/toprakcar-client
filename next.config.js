/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru'],
    localeDetection: false,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
