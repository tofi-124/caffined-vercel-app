import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Blog | Sourcing Guides & Industry Insights | Ethio Coffee',
  description:
    'Learn about Ethiopian coffee sourcing, processing methods, flavor profiles, and industry trends. Expert guides for importers and green coffee buyers.',
  keywords: 'Ethiopian coffee blog, coffee sourcing guide, Ethiopian coffee regions, green coffee buying guide, coffee industry insights, importer resources',
  alternates: {
    canonical: 'https://ethiocoffee.et/insights',
  },
  openGraph: {
    title: 'Ethiopian Coffee Blog | Sourcing Guides & Industry Insights',
    description:
      'Learn about Ethiopian coffee sourcing, processing methods, flavor profiles, and industry trends.',
    url: 'https://ethiocoffee.et/insights',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children
}
