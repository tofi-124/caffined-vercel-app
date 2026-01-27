import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Ethiopian Coffee | Ethio Coffee',
  description: 'Shop our collection of premium Ethiopian coffee beans. Single origins, blends, and espresso roasts directly from Ethiopia to your cup.',
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
