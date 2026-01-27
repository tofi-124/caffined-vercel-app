import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout | Ethio Coffee',
  description: 'Complete your order for premium Ethiopian coffee.',
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
