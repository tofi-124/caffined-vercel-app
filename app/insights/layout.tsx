import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Blog | Sourcing Guides & Industry Insights | Ethio Coffee',
  description:
    'Learn about Ethiopian coffee sourcing, processing methods, flavor profiles, and industry trends. Expert guides for roasters, cafés, and green coffee buyers.',
  keywords: 'Ethiopian coffee blog, coffee sourcing guide, Ethiopian coffee regions, green coffee buying guide, coffee industry insights, roaster resources',
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
