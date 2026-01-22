import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | Ethio Coffee',
  description:
    'Stories from Ethiopian coffee origin: culture, sourcing, and practical guidance for roasters and café partners.',
  alternates: {
    canonical: 'https://ethiocoffee.et/insights',
  },
  openGraph: {
    title: 'Insights | Ethio Coffee',
    description:
      'Stories from Ethiopian coffee origin: culture, sourcing, and practical guidance for roasters and café partners.',
    url: 'https://ethiocoffee.et/insights',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children
}
