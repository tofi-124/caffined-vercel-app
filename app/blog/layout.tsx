import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Ethio Coffee',
  description:
    'Stories from Ethiopian coffee origin: culture, sourcing, and practical guidance for roasters and café partners.',
  alternates: {
    canonical: 'https://ethiocoffee.et/blog',
  },
  openGraph: {
    title: 'Blog | Ethio Coffee',
    description:
      'Stories from Ethiopian coffee origin: culture, sourcing, and practical guidance for roasters and café partners.',
    url: 'https://ethiocoffee.et/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
