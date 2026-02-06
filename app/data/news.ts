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
    slug: 'ethiopia-coffee-production-foreign-exchange-2018',
    date: 'Jan 1, 2026',
    title: 'Ethiopia’s coffee production is creating significant potential for foreign exchange earnings',
    desc: 'Ethiopia is increasing export competitiveness through improved varieties and technologies, driving higher coffee productivity and export earnings.',
    source: 'Ethiopian Coffee and Tea Authority',
  },
]
