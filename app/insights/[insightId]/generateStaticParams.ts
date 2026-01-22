import { posts } from '@/app/data/data'

// Function to tell Next.js which insight IDs (indices) to generate pages for
export async function generateStaticParams() {
  return posts.map((post, index) => ({
    insightId: index.toString(), // Ensure insightId is a string
  }))
}