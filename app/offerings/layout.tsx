import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Ethiopian Green Coffee Beans | Yirgacheffe, Sidamo, Guji | Ethio Coffee',
  description: 'Browse our Ethiopian green coffee offerings (Grades 1-4): Yirgacheffe, Sidamo, Guji, Harar & Limu. Specialty and commercial grades, washed and natural processed. Request samples today.',
  keywords: 'buy Ethiopian green coffee, Yirgacheffe coffee wholesale, Sidamo green coffee, Guji coffee beans, Ethiopian coffee for roasters, specialty green coffee, Grade 1 Ethiopian coffee, commercial grade coffee',
  alternates: {
    canonical: 'https://ethiocoffee.et/offerings',
  },
  openGraph: {
    title: 'Buy Ethiopian Green Coffee | Grades 1-4 Available | Ethio Coffee',
    description: 'Browse our Ethiopian green coffee offerings (Grades 1-4): Yirgacheffe, Sidamo, Guji, Harar & Limu.',
    url: 'https://ethiocoffee.et/offerings',
  }
}

export default function OfferingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}