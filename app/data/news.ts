export type NewsArticle = {
  slug: string
  date: string
  title: string
  desc: string
  source?: string
  keywords?: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'ethiopia-coffee-production-foreign-exchange',
    date: '2026-01-01',
    title: 'Ethiopia’s coffee production is creating significant potential for foreign exchange earnings',
    desc: 'Ethiopia is increasing export competitiveness through improved varieties and technologies, driving higher coffee productivity and export earnings.',
    source: 'Ethiopian Coffee and Tea Authority',
    keywords: 'Ethiopian coffee production, coffee foreign exchange earnings, Ethiopian coffee export revenue, coffee export competitiveness',
  },
  {
    slug: 'ecta-folur-workshop',
    date: '2026-01-02',
    title: 'Consultative workshop reviews research proposals to transform the coffee value chain',
    desc: 'ECTA and project partners convened a consultative workshop in Bishoftu to refine research proposals focused on climate risk, gender, and technology in the coffee value chain.',
    source: 'ECTA',
    keywords: 'Ethiopian Coffee and Tea Authority, coffee value chain Ethiopia, ECTA workshop, coffee research Ethiopia, climate resilient coffee',
  },
  {
    slug: 'disabled-peoples-coffee-development',
    date: '2026-01-03',
    title: "Disabled People's coffee development project: pilot closing & technology handover",
    desc: 'Pilot project in Jimma Zone engaged disabled peoples associations with coffee seedlings, equipment, and training to support value-added production and market access.',
    source: 'Ashenafi Getahun',
    keywords: 'Ethiopian coffee development, Jimma coffee, inclusive coffee production, coffee seedlings Ethiopia, coffee market access',
  }, 
  {
    slug: 'sidama-6000-tons-supplied',
    date: '2026-01-04',
    title: 'More than 6,000 tons of coffee from Sidama region supplied to the central market',
    desc: 'Sidama region supplied over 6,000 tons to the central market; cluster farming, pruning, improved varieties and vermicompost programs are driving productivity.',
    source: 'EZEA',
    keywords: 'Sidama coffee, Ethiopian coffee market supply, coffee production Sidama, Ethiopian green coffee, Sidama region coffee export',
  },
  {
    slug: 'premium-price-international-standards',
    date: '2026-01-05',
    title: 'Premium prices possible when coffee meets international standards',
    desc: 'A workshop announced that Ethiopia can obtain premium prices for coffee by meeting international standards and pursuing GI/IP-based strategies.',
    source: 'Ethiopian Coffee and Tea Authority',
    keywords: 'Ethiopian coffee premium price, coffee international standards, geographical indication coffee, Ethiopian coffee GI certification, coffee IP strategy',
  },
  {
    slug: 'improved-coffee-varieties-west-hararge',
    date: '2026-01-06',
    title: 'Improved coffee varieties being prepared to increase productivity',
    desc: 'West Hararge Zone prepares 41+ million improved coffee seedlings to expand production across 12 districts; thousands of farmers participate in nursery and planting activities.',
    source: 'EZEA',
    keywords: 'Ethiopian coffee varieties, West Hararge coffee, improved coffee seedlings, coffee productivity Ethiopia, Harar coffee',
  },
  {
    slug: 'tea-seedling-training-gewata',
    date: '2026-02-08',
    title: 'Tea seedling training in Gewata supports Rural Transformation Agenda',
    desc: 'Training on acclimatizing and planting tea seedlings to boost tea cultivation, productivity and market supply in Gewata Woreda.',
    source: 'ECTA',
    keywords: 'Ethiopian tea production, Gewata tea, ECTA tea training, tea cultivation Ethiopia, rural transformation',
  },
   {
    slug: 'rename-coffee-arabica-ethiopian-coffee',
    date: '2026-02-06',
    title: 'Researcher Proposes Renaming "Coffee Arabica" to "Ethiopian Coffee"',
    desc: 'The name "Coffee Arabica" should be renamed "Ethiopian coffee" to honor Ethiopia\'s historical and scientific contributions as coffee\'s birthplace, said a researcher.',
    source: 'Gazette Plus',
    keywords: 'Coffee Arabica origin, Ethiopian coffee history, coffee birthplace Ethiopia, rename Coffee Arabica, Ethiopian coffee heritage',
  },
  {
    slug: 'coffee-exports-first-half-2018',
    date: '2026-02-08',
    title: 'Ethiopia earns $1.345 billion from coffee exports in first six months of 2018 E.C.',
    desc: 'The Ethiopian Coffee and Tea Authority reported $1.345 billion earnings from coffee exports in the first half of 2018, noting digitalization and expanded markets as key drivers.',
    source: 'EZA',
    keywords: 'Ethiopian coffee export earnings, coffee export revenue Ethiopia, Ethiopian coffee trade, billion dollar coffee export, ECTA report',
  },
  {
    slug: 'african-coffee-week-addis-ababa',
    date: '2026-02-02',
    title: 'The Third African Coffee Week 2026 and IACO Meetings Open in Addis Ababa',
    desc: 'The third African Coffee Week and IACO meetings have officially opened in Addis Ababa under the theme "Advancing Climate Resilience & the Transformation of the African Coffee Sector."',
    source: 'IACO / African Coffee Week',
    keywords: 'African Coffee Week 2026, IACO meeting Addis Ababa, African coffee sector, climate resilience coffee, Ethiopian coffee conference',
  }
  ,
  {
    slug: 'eu-acknowledges-tangible-progress-deforestation-rules',
    date: '2026-02-04',
    title: 'EU Acknowledges “Tangible” Progress in Ethiopia’s Coffee Sector Under Deforestation Rules',
    desc: 'The European Union says Ethiopia’s coffee sector is making tangible progress in meeting the EU’s deforestation-free supply chain requirements, citing advances in digital traceability systems and land registration in key coffee-producing areas.',
    source: 'Yared Seyoum',    keywords: 'EUDR Ethiopian coffee, EU deforestation regulation coffee, Ethiopian coffee traceability, deforestation free coffee, EU coffee import rules',  }
]
