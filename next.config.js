/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // Faster builds
    experimental: {
      serverActions: true, // if you're using Server Actions
    },
    // No need for 'output: export' unless you need a static-only site
  }
  
  module.exports = nextConfig
  