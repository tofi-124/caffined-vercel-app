import { products } from '../../lib/ProductLine'

// Function to tell Next.js which product IDs to generate pages for at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }))
}