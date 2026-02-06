export type NewsArticle = {
  slug: string
  date: string
  title: string
  desc: string
  source?: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'rename-coffee-arabica-ethiopian-coffee',
    date: 'Feb 6, 2026',
    title: 'Researcher Proposes Renaming "Coffee Arabica" to "Ethiopian Coffee"',
    desc: 'The name "Coffee Arabica" should be renamed "Ethiopian coffee" to honor Ethiopia\'s historical and scientific contributions as coffee\'s birthplace, said a researcher.',
    source: 'Gazette Plus',
  },
  {
    slug: 'african-coffee-week-2026-addis-ababa',
    date: 'Feb 2, 2026',
    title: 'The Third African Coffee Week 2026 and IACO Meetings Open in Addis Ababa',
    desc: 'The third African Coffee Week and IACO meetings have officially opened in Addis Ababa under the theme "Advancing Climate Resilience & the Transformation of the African Coffee Sector."',
    source: 'IACO / African Coffee Week',
  },
  {
    slug: 'sidama-6000-tons-supplied-2026',
    date: 'Jan 4, 2026',
    title: 'More than 6,000 tons of coffee from Sidama region supplied to the central market',
    desc: 'Sidama region supplied over 6,000 tons to the central market; cluster farming, pruning, improved varieties and vermicompost programs are driving productivity.',
    source: 'EZEA',
  },
  {
    slug: 'ethiopia-coffee-production-foreign-exchange-2018',
    date: 'Jan 1, 2026',
    title: 'Ethiopia’s coffee production is creating significant potential for foreign exchange earnings',
    desc: 'Ethiopia is increasing export competitiveness through improved varieties and technologies, driving higher coffee productivity and export earnings.',
    source: 'Ethiopian Coffee and Tea Authority',
  },
  {
    slug: 'ecta-folur-workshop-2026',
    date: 'Jan 2, 2026',
    title: 'Consultative workshop reviews research proposals to transform the coffee value chain',
    desc: 'ECTA and project partners convened a consultative workshop in Bishoftu to refine research proposals focused on climate risk, gender, and technology in the coffee value chain.',
    source: 'ECTA',
  },
  {
    slug: 'disabled-peoples-coffee-development-2025',
    date: 'Jan 3, 2025',
    title: "Disabled People's coffee development project: pilot closing & technology handover",
    desc: 'Pilot project in Jimma Zone engaged disabled peoples associations with coffee seedlings, equipment, and training to support value-added production and market access.',
    source: 'Ashenafi Getahun',
  },
]
