import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Grading System Explained | Grade 1-5 | Ethio Coffee',
  description: 'Complete guide to the Ethiopian coffee grading system. Understand Grade 1-5 classification, defect counts, cup scoring, and how grading affects pricing for importers.',
  keywords: 'ethiopian coffee grading, ethiopian coffee grades, coffee grading system ethiopia, ethiopia coffee grade 1, ethiopia coffee grade 2, ethiopian coffee quality grades, coffee bean grading ethiopia, ECX coffee grading, ethiopian coffee classification, specialty coffee grading ethiopia, coffee defect count ethiopia, coffee cup score ethiopia, SCA cupping score ethiopian coffee',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/coffee-grading-ethiopia',
  },
  openGraph: {
    title: 'Ethiopian Coffee Grading System (Grade 1-5) | Complete Guide | Ethio Coffee',
    description: 'Complete guide to Ethiopian coffee grading: Grade 1-5 classification, defect counts, cup scoring, processing standards, and what each grade means for importers.',
    url: 'https://www.ethiocoffee.et/coffee-grading-ethiopia',
    type: 'article',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian coffee grading - Grade 1 to Grade 5 green coffee beans',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Coffee Grading System | Grade 1-5 Guide',
    description: 'How Ethiopian coffee is graded: Grade 1-5 defect counts, SCA cup scores, and what each grade means for buyers.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

export default function CoffeeGradingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ethiopian Coffee Grading System Explained: Grade 1 to Grade 5",
    "description": "Complete guide to the Ethiopian coffee grading system — how green coffee is classified from Grade 1 (specialty) to Grade 5 (commercial), including defect count standards, SCA cupping scores, and pricing implications.",
    "url": "https://www.ethiocoffee.et/coffee-grading-ethiopia",
    "author": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.et"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.et"
    },
    "datePublished": "2026-02-09",
    "dateModified": "2026-02-09",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ethiocoffee.et" },
        { "@type": "ListItem", "position": 2, "name": "Coffee Grading Ethiopia", "item": "https://www.ethiocoffee.et/coffee-grading-ethiopia" }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Ethiopian coffee graded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethiopian coffee is graded on a scale of Grade 1 (highest) to Grade 5 (lowest) based on two primary factors: physical defect count per 300g green sample and cup quality score (SCA cupping protocol, 0-100 scale). Additional factors include bean size, moisture content, and processing method. The grading is administered through the Ethiopian Commodity Exchange (ECX) and the Ethiopian Coffee and Tea Authority (ECTA)."
        }
      },
      {
        "@type": "Question",
        "name": "What is Grade 1 Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grade 1 Ethiopian coffee is the highest quality designation, requiring 0-3 defects per 300g sample and a minimum SCA cup score of 85+. It represents the best lots from any given origin — clean, well-sorted, free of foreign matter, with outstanding cup character. Grade 1 commands the highest export prices and is sought by specialty roasters worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Grade 1 and Grade 2 Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grade 1 allows 0-3 defects per 300g and scores SCA 85+, while Grade 2 allows 4-12 defects and scores SCA 80+. In the cup, both are specialty quality, but Grade 1 lots are exceptionally clean with more outstanding clarity and complexity. Pricing for Grade 1 is typically 10-20% higher than Grade 2. Both grades are suitable for specialty single-origin offerings."
        }
      },
      {
        "@type": "Question",
        "name": "What grades are considered 'specialty' Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grade 1 and Grade 2 Ethiopian coffees are considered specialty grade, scoring SCA 80+ on cupping protocol. These grades meet the Specialty Coffee Association's definition of specialty coffee. Grade 3 coffees (scoring 75-79) are considered 'premium commercial' and can be high quality but don't meet the SCA specialty threshold."
        }
      },
      {
        "@type": "Question",
        "name": "Does coffee grade affect the price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, significantly. Grade 1 Ethiopian coffee commands the highest prices ($10-$13+/kg FOB), followed by Grade 2 ($9-$11/kg). Commercial grades (3-5) trade at lower levels. Within each grade, price is further influenced by origin (Yirgacheffe and Guji command premiums), processing method (naturals often price higher than washed), and seasonal supply conditions."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="grading-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="grading-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
