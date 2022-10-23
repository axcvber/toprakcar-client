/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru'],
  },
}

module.exports = nextConfig
