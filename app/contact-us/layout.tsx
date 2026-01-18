import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Ethio Coffee',
  description:
    'Request pricing, samples, and availability for Ethiopian green coffee exports. Tell us your needs and we will respond with next steps.',
  alternates: {
    canonical: 'https://ethiocoffee.et/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Ethio Coffee',
    description:
      'Request pricing, samples, and availability for Ethiopian green coffee exports.',
    url: 'https://ethiocoffee.et/contact-us',
  },
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
