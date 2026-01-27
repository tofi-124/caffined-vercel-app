import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug, products, Product } from '../../data/products'
import ProductDetail from '../../components/ProductDetail'
import ProductGrid from '../../components/ProductGrid'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found | Ethio Coffee',
    }
  }

  return {
    title: `${product.name} | Ethiopian Coffee | Ethio Coffee`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <ProductDetail product={product} />

        {/* Long Description */}
        <section className="mt-12 lg:mt-16">
          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-dark mb-4">About This Coffee</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              {product.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>

            {/* Origin Details */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-bold text-dark mb-4">Origin Details</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <dt className="text-sm text-gray-500">Origin</dt>
                  <dd className="font-medium text-dark">{product.origin}</dd>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <dt className="text-sm text-gray-500">Region</dt>
                  <dd className="font-medium text-dark">{product.region}</dd>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <dt className="text-sm text-gray-500">Altitude</dt>
                  <dd className="font-medium text-dark">{product.altitude}</dd>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <dt className="text-sm text-gray-500">Processing</dt>
                  <dd className="font-medium text-dark">{product.process}</dd>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <dt className="text-sm text-gray-500">Roast Level</dt>
                  <dd className="font-medium text-dark capitalize">{product.roastLevel.replace('-', ' ')}</dd>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <dt className="text-sm text-gray-500">Tasting Notes</dt>
                  <dd className="font-medium text-dark">{product.flavorNotes.join(', ')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12 lg:mt-16">
            <ProductGrid
              products={relatedProducts}
              title="You May Also Like"
              showViewAll
              viewAllLink={`/shop?category=${product.category}`}
            />
          </section>
        )}
      </div>
    </main>
  )
}
