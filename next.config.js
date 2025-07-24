/**
 * File: next.config.js
 * Path: next.config.js
 * Description: Next.js configuration for TripQuest application with proper image
 *              handling and standalone output for Docker deployment.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.bstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig