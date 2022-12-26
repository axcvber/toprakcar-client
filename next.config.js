/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru', 'uk'],
    localeDetection: false,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    SERVER_API: process.env.SERVER_API,
  },
}

module.exports = nextConfig
