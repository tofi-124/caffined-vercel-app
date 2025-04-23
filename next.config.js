/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' to enable server-side rendering on Vercel
  // Enable Next.js image optimization
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // No need for assetPrefix on Vercel
  
  // Add redirects for wholesale-inquiry page
  async redirects() {
    return [
      {
        source: '/wholesale-inquiry',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/product',
        destination: '/offerings',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
