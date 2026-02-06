import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Export News | Industry Updates | Ethio Coffee',
  description:
    'Latest news and updates from the Ethiopian coffee export industry. Stay informed on policy changes, trade events, and market developments.',
  keywords: 'Ethiopian coffee news, coffee export news, Ethiopian coffee industry, IACO, African coffee, coffee trade updates, Ethiopian coffee market',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/ethiopia-coffee-export-news',
  },
  openGraph: {
    title: 'Ethiopian Coffee Export News | Industry Updates | Ethio Coffee',
    description:
      'Latest news and updates from the Ethiopian coffee export industry.',
    url: 'https://www.ethiocoffee.et/ethiopia-coffee-export-news',
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
