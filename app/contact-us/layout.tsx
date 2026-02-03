import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Request Coffee Samples & Pricing | Ethio Coffee',
  description:
    'Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji. Professional export service for importers worldwide.',
  keywords: 'Ethiopian coffee samples, green coffee pricing, Ethiopian coffee quote, wholesale coffee inquiry, coffee supplier contact',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/contact-us',
  },
  openGraph: {
    title: 'Request Coffee Samples & Pricing | Ethio Coffee',
    description:
      'Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji. Professional export service for importers.',
    url: 'https://www.ethiocoffee.et/contact-us',
  },
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Ethio Coffee",
    "description": "Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji.",
    "url": "https://www.ethiocoffee.et/contact-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.et",
      "email": "info@ethiocoffee.et",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@ethiocoffee.et",
        "availableLanguage": ["English", "Amharic"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yesak Building, 3rd Floor, Office 301, Lideta",
        "addressLocality": "Addis Ababa",
        "addressCountry": "ET"
      }
    }
  }

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  )
}
