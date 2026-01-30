import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Ethiopian Coffee Samples & Pricing | Contact Ethio Coffee',
  description:
    'Get a quote for Ethiopian green coffee exports. Request samples of Yirgacheffe, Sidamo, or Guji. Professional export service for importers worldwide. Fast response guaranteed.',
  keywords: 'Ethiopian coffee samples, green coffee pricing, Ethiopian coffee quote, wholesale coffee inquiry, coffee supplier contact',
  alternates: {
    canonical: 'https://ethiocoffee.et/contact-us',
  },
  openGraph: {
    title: 'Request Ethiopian Coffee Samples & Pricing | Ethio Coffee',
    description:
      'Get a quote for Ethiopian green coffee exports. Request samples of Yirgacheffe, Sidamo, or Guji.',
    url: 'https://ethiocoffee.et/contact-us',
  },
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
