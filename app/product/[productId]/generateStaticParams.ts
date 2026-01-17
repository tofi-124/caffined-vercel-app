import { offerings } from '../../data/offerings'

// Function to tell Next.js which product IDs to generate pages for at build time
export async function generateStaticParams() {
  return offerings.map((product) => ({
    productId: product.id,
  }))
}