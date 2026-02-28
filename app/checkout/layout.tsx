import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout | Ethio Coffee',
  description: 'Complete your coffee sample order with DHL worldwide shipping.',
  robots: 'noindex, nofollow',
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children
}
