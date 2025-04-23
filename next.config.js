/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' to enable server-side rendering on Vercel
  // Enable Next.js image optimization
  images: {
    domains: [],
  },
  // No need for assetPrefix on Vercel
}

module.exports = nextConfig
