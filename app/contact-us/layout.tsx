import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Coffee Samples & Pricing | Ethio Coffee',
  description:
    'Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji. Professional export service for importers worldwide.',
  keywords: 'Ethiopian coffee samples, green coffee pricing, Ethiopian coffee quote, wholesale coffee inquiry, coffee supplier contact',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/contact-us',
  },
  openGraph: {
    title: 'Request Coffee Samples & Pricing | Ethio Coffee',
    description:
      'Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji. Professional export service for importers.',
    url: 'https://www.ethiocoffee.et/contact-us',
  },
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
