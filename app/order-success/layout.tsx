import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmed | Ethio Coffee',
  description: 'Thank you for your order. Your Ethiopian coffee is on its way!',
}

export default function OrderSuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
