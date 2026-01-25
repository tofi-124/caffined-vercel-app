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
  
  // Add redirects for old URLs
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
      // Redirect old numeric insight URLs to new slug-based URLs
      {
        source: '/insights/0',
        destination: '/insights/ethio-coffee-canada-operations-launch',
        permanent: true,
      },
      {
        source: '/insights/1',
        destination: '/insights/birthplace-of-coffee-ethiopia',
        permanent: true,
      },
      {
        source: '/insights/2',
        destination: '/insights/ethiopian-coffee-ceremony',
        permanent: true,
      },
      {
        source: '/insights/3',
        destination: '/insights/direct-trade-ethiopian-farmers',
        permanent: true,
      },
      {
        source: '/insights/4',
        destination: '/insights/specialty-coffee-trends-2026',
        permanent: true,
      },
      {
        source: '/insights/5',
        destination: '/insights/guide-ethiopian-coffee-origins',
        permanent: true,
      },
      {
        source: '/insights/6',
        destination: '/insights/how-to-source-green-coffee-from-ethiopia',
        permanent: true,
      },
      {
        source: '/insights/7',
        destination: '/insights/yirgacheffe-vs-sidamo-vs-guji-comparison',
        permanent: true,
      },
      {
        source: '/insights/8',
        destination: '/insights/washed-vs-natural-ethiopian-coffee-processing',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
