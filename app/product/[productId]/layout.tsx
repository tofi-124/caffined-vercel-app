import type { Metadata } from 'next'
import { offerings } from '@/app/data/offerings'

type Props = {
  params: Promise<{ productId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params
  const product = offerings.find((o) => o.id === productId)

  if (!product) {
    return {
      title: 'Offering Not Found | Ethio Coffee',
      description: 'The offering you are looking for is not available.',
      alternates: { canonical: 'https://ethiocoffee.et/offerings' },
    }
  }

  const title = `${product.name} | Ethio Coffee`
  const description = product.desc

  return {
    title,
    description,
    alternates: {
      canonical: `https://ethiocoffee.et/product/${product.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://ethiocoffee.et/product/${product.id}`,
      images: [{ url: `/images/${product.image_url}` }],
    },
  }
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children
}
