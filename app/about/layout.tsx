import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ethio Coffee | Ethiopian Coffee Exporter for Importers Worldwide',
  description: 'Ethio Coffee Export PLC is a dedicated Ethiopian coffee exporter founded by two brothers with 30+ years of family legacy. We serve importers worldwide with traceable Grade 1-4 green coffee.',
  keywords: 'Ethiopian coffee exporter, about Ethio Coffee, Ethiopian green coffee supplier, direct trade coffee Ethiopia, family coffee business Ethiopia, ethical coffee sourcing',
  openGraph: {
    title: 'About Ethio Coffee | Ethiopian Coffee Exporter for Importers',
    description: 'A family-built Ethiopian coffee export company founded by two brothers, connecting speciality traceable coffee with importers worldwide.',
    url: 'https://ethiocoffee.et/about',
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
