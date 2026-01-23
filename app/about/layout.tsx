import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ethio Coffee | Ethiopian Green Coffee Exporter Since 2022',
  description: 'Ethio Coffee Import and Export PLC is a trusted Ethiopian coffee exporter with 30+ years of family legacy. We supply traceable Grade 1-4 green coffee to roasters and cafés worldwide. Specialty to commercial grades.',
  keywords: 'Ethiopian coffee exporter, about Ethio Coffee, Ethiopian green coffee supplier, direct trade coffee Ethiopia, family coffee business Ethiopia, ethical coffee sourcing',
  openGraph: {
    title: 'About Ethio Coffee | Ethiopian Green Coffee Exporter',
    description: 'A family-built Ethiopian origin coffee company with 30+ years of legacy, connecting premium traceable coffee with roasters worldwide.',
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
