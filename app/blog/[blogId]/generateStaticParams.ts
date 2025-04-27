import { posts } from '@/app/data/data'

// Function to tell Next.js which blog IDs (indices) to generate pages for
export async function generateStaticParams() {
  return posts.map((post, index) => ({
    blogId: index.toString(), // Ensure blogId is a string
  }))
}