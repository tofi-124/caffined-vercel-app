import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About Ethio Coffee | Ethiopian Coffee Exporter for Importers Worldwide',
  description: 'Ethiopian coffee exporter founded by two brothers with 30+ years family legacy. We serve importers worldwide with traceable Grade 1-4 green coffee.',
  keywords: 'Ethiopian coffee exporter, about Ethio Coffee, Ethiopian green coffee supplier, direct trade coffee Ethiopia, family coffee business Ethiopia, ethical coffee sourcing',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/about',
  },
  openGraph: {
    title: 'About Ethio Coffee | Ethiopian Coffee Exporter for Importers',
    description: 'A family-built Ethiopian coffee export company founded by two brothers, connecting speciality traceable coffee with importers worldwide.',
    url: 'https://www.ethiocoffee.et/about',
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Ethio Coffee",
    "description": "Ethiopian coffee exporter founded by two brothers with 30+ years family legacy. We serve importers worldwide with traceable Grade 1-4 green coffee.",
    "url": "https://www.ethiocoffee.et/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.et",
      "logo": "https://www.ethiocoffee.et/images/new-logo.png",
      "foundingDate": "2022",
      "founders": [
        {
          "@type": "Person",
          "name": "Ethio Coffee Founders"
        }
      ],
      "knowsAbout": [
        "Ethiopian Coffee Export",
        "Green Coffee Beans",
        "Specialty Coffee",
        "Direct Trade",
        "Coffee Sourcing"
      ]
    }
  }

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  )
}
