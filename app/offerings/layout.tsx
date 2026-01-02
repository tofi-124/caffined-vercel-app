import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Coffee | Ethio Coffee',
  description: 'Shop premium Ethiopian coffee. Bright, floral, fruit-forward coffees from the birthplace of coffee—delivered to your door.',
  keywords: 'Ethiopian coffee, specialty coffee, coffee beans, buy coffee online',
  openGraph: {
    title: 'Shop Ethiopian Coffee | Ethio Coffee',
    description: 'Shop premium Ethiopian coffee delivered to your door.',
    url: 'https://ethiocoffee.com/offerings',
  }
}

export default function OfferingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}