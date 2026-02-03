import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ordering Info & FAQ | Ethio Coffee',
  description:
    'Everything about ordering Ethiopian green coffee from Ethio Coffee. Learn about our process, shipping, payment terms, quality guarantees, and more.',
  keywords:
    'Ethiopian coffee ordering, green coffee FAQ, coffee shipping, wholesale coffee order, coffee payment terms, coffee samples, Ethiopian coffee export, coffee import guide',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/ordering-info',
  },
  openGraph: {
    title: 'Ordering Info & FAQ | Ethio Coffee',
    description:
      'Complete guide to ordering Ethiopian green coffee. Shipping, payment, samples, quality standards, and more.',
    url: 'https://www.ethiocoffee.et/ordering-info',
    type: 'website',
  },
}

export default function OrderingInfoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
