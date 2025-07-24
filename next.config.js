/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['cf.bstatic.com'], // For Booking.com images in the future
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.bstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Remove the problematic env section - Next.js handles NODE_ENV automatically
  // Remove experimental.appDir - it's now stable and default in Next.js 14+
}

module.exports = nextConfig