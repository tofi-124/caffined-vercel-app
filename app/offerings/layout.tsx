import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Coffee Offerings | Ethio Coffee',
  description: 'Explore our premium Ethiopian coffee offerings for wholesale partners. Specialty grade beans with distinctive flavor profiles from the birthplace of coffee.',
  keywords: 'Ethiopian coffee offerings, coffee blends, specialty coffee, wholesale coffee, coffee varieties',
  openGraph: {
    title: 'Premium Ethiopian Coffee Offerings | Ethio Coffee',
    description: 'Explore our premium Ethiopian coffee offerings for wholesale partners.',
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