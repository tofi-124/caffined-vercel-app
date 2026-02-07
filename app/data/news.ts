export type NewsArticle = {
  slug: string
  date: string
  title: string
  desc: string
  source?: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'ethiopia-coffee-production-foreign-exchange',
    date: '2026-01-01',
    title: 'Ethiopia’s coffee production is creating significant potential for foreign exchange earnings',
    desc: 'Ethiopia is increasing export competitiveness through improved varieties and technologies, driving higher coffee productivity and export earnings.',
    source: 'Ethiopian Coffee and Tea Authority',
  },
  {
    slug: 'ecta-folur-workshop',
    date: '2026-01-02',
    title: 'Consultative workshop reviews research proposals to transform the coffee value chain',
    desc: 'ECTA and project partners convened a consultative workshop in Bishoftu to refine research proposals focused on climate risk, gender, and technology in the coffee value chain.',
    source: 'ECTA',
  },
  {
    slug: 'disabled-peoples-coffee-development',
    date: '2026-01-03',
    title: "Disabled People's coffee development project: pilot closing & technology handover",
    desc: 'Pilot project in Jimma Zone engaged disabled peoples associations with coffee seedlings, equipment, and training to support value-added production and market access.',
    source: 'Ashenafi Getahun',
  }, 
  {
    slug: 'sidama-6000-tons-supplied',
    date: '2026-01-04',
    title: 'More than 6,000 tons of coffee from Sidama region supplied to the central market',
    desc: 'Sidama region supplied over 6,000 tons to the central market; cluster farming, pruning, improved varieties and vermicompost programs are driving productivity.',
    source: 'EZEA',
  },
  {
    slug: 'premium-price-international-standards',
    date: '2026-01-05',
    title: 'Premium prices possible when coffee meets international standards',
    desc: 'A workshop announced that Ethiopia can obtain premium prices for coffee by meeting international standards and pursuing GI/IP-based strategies.',
    source: 'Ethiopian Coffee and Tea Authority',
  },
  {
    slug: 'improved-coffee-varieties-west-hararge',
    date: '2026-01-06',
    title: 'Improved coffee varieties being prepared to increase productivity',
    desc: 'West Hararge Zone prepares 41+ million improved coffee seedlings to expand production across 12 districts; thousands of farmers participate in nursery and planting activities.',
    source: 'EZEA',
  },
   {
    slug: 'rename-coffee-arabica-ethiopian-coffee',
    date: '2026-02-06',
    title: 'Researcher Proposes Renaming "Coffee Arabica" to "Ethiopian Coffee"',
    desc: 'The name "Coffee Arabica" should be renamed "Ethiopian coffee" to honor Ethiopia\'s historical and scientific contributions as coffee\'s birthplace, said a researcher.',
    source: 'Gazette Plus',
  },
  {
    slug: 'african-coffee-week-addis-ababa',
    date: '2026-02-02',
    title: 'The Third African Coffee Week 2026 and IACO Meetings Open in Addis Ababa',
    desc: 'The third African Coffee Week and IACO meetings have officially opened in Addis Ababa under the theme "Advancing Climate Resilience & the Transformation of the African Coffee Sector."',
    source: 'IACO / African Coffee Week',
  }
  ,
  {
    slug: 'eu-acknowledges-tangible-progress-deforestation-rules',
    date: '2026-02-04',
    title: 'EU Acknowledges “Tangible” Progress in Ethiopia’s Coffee Sector Under Deforestation Rules',
    desc: 'The European Union says Ethiopia’s coffee sector is making tangible progress in meeting the EU’s deforestation-free supply chain requirements, citing advances in digital traceability systems and land registration in key coffee-producing areas.',
    source: 'Yared Seyoum',
  }
]
