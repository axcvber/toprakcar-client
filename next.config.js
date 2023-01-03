/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru', 'uk'],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    // SERVER_API: process.env.SERVER_API,
    SERVER_API: 'https://toprakcar-admin.herokuapp.com',
  },
}

module.exports = nextConfig
