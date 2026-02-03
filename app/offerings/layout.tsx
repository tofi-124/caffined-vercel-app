import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethiopian Green Coffee Offerings | Ethio Coffee',
  description: 'Browse Ethiopian green coffee offerings (Grades 1-4): Yirgacheffe, Sidamo, Guji, Harar & Limu. Specialty and commercial grades available.',
  keywords: 'buy Ethiopian green coffee, Yirgacheffe coffee wholesale, Sidamo green coffee, Guji coffee beans, Ethiopian coffee for importers, specialty green coffee, Grade 1 Ethiopian coffee, commercial grade coffee',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/offerings',
  },
  openGraph: {
    title: 'Ethiopian Green Coffee Offerings | Ethio Coffee',
    description: 'Browse Ethiopian green coffee offerings (Grades 1-4): Yirgacheffe, Sidamo, Guji, Harar & Limu. Specialty and commercial grades available.',
    url: 'https://www.ethiocoffee.et/offerings',
  }
}

export default function OfferingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}