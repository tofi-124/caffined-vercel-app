import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Request Coffee Samples & Pricing | Ethio Coffee',
  description:
    'Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji. Professional export service for importers worldwide.',
  keywords: 'Ethiopian coffee samples, green coffee pricing, Ethiopian coffee quote, wholesale coffee inquiry, coffee supplier contact',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/contact-us',
  },
  openGraph: {
    title: 'Request Coffee Samples & Pricing | Ethio Coffee',
    description:
      'Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji. Professional export service for importers.',
    url: 'https://www.ethiocoffee.co/contact-us',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Request Ethiopian green coffee samples and pricing from Ethio Coffee',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Coffee Samples & Pricing | Ethio Coffee',
    description: 'Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji.',
    images: ['/images/coffee-pack-1.webp'],
  },
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Ethio Coffee",
    "description": "Get a quote for Ethiopian green coffee. Request samples of Yirgacheffe, Sidamo, or Guji.",
    "url": "https://www.ethiocoffee.co/contact-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.co",
      "email": "coffee@ethiocoffee.co",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "coffee@ethiocoffee.co",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ethiocoffee.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://www.ethiocoffee.co/contact-us"
      }
    ]
  }

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
