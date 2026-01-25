import { posts } from '@/app/data/data'

// Function to tell Next.js which insight slugs to generate pages for
export async function generateStaticParams() {
  return posts.map((post) => ({
    insightId: post.slug || '', // Use slug for SEO-friendly URLs
  }))
}