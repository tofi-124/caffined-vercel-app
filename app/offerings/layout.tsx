import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethiopian Green Coffee Offerings | Yirgacheffe, Sidamo, Guji | Ethio Coffee',
  description: 'Browse our Ethiopian green coffee offerings (Grades 1-4): Yirgacheffe, Sidamo, Guji, Harar & Limu. Specialty and commercial grades, washed and natural processed. Export direct from Ethiopia.',
  keywords: 'buy Ethiopian green coffee, Yirgacheffe coffee wholesale, Sidamo green coffee, Guji coffee beans, Ethiopian coffee for importers, specialty green coffee, Grade 1 Ethiopian coffee, commercial grade coffee',
  alternates: {
    canonical: 'https://ethiocoffee.et/offerings',
  },
  openGraph: {
    title: 'Ethiopian Green Coffee Offerings | Grades 1-4 | Ethio Coffee',
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