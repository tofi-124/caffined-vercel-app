export type Post = {
  small_image_url: string
  large_image_url: string
  date: string
  title: string
  desc: string
  category?: string
  keywords?: string[]
  slug?: string
}

export const posts: Post[] = [
    {
      small_image_url: 'cofee-blog-1-1.png',
      large_image_url: 'cofee-blog-1-2.png',
      date: 'Apr 20, 2025',
      title: 'THE BIRTHPLACE OF COFFEE: ETHIOPIA\'S RICH HERITAGE',
      slug: 'birthplace-of-coffee-ethiopia',
      keywords: ['Ethiopian coffee origin', 'Arabica coffee history', 'Kaffa region', 'coffee birthplace', 'Ethiopian highlands'],
      desc: 'Discover the ancient origins of coffee in Ethiopia, where the Arabica coffee plant was first discovered over a thousand years ago in the lush forests of the southwestern highlands.'
    },
    {
      small_image_url: 'cofee-blog-2-1.png',
      large_image_url: 'cofee-blog-2-2.jpg',
      date: 'Apr 10, 2025',
      title: 'ETHIOPIAN COFFEE CEREMONIES: TRADITION MEETS BUSINESS',
      slug: 'ethiopian-coffee-ceremony',
      keywords: ['Ethiopian coffee ceremony', 'jebena', 'coffee culture', 'traditional brewing', 'coffee hospitality'],
      desc: 'Ethiopia\'s traditional coffee ceremony is more than just brewing it\'s a cultural ritual that informs how coffee is respected and handled throughout the supply chain from farm to cup.'
    },
    {
      small_image_url: 'cofee-blog-7-1.png',
      large_image_url: 'cofee-blog-7-2.jpg',
      date: 'Mar 28, 2025',
      title: 'DIRECT TRADE PARTNERSHIPS: SUPPORTING ETHIOPIAN FARMERS',
      slug: 'direct-trade-ethiopian-farmers',
      keywords: ['direct trade coffee', 'Ethiopian farmers', 'fair trade', 'coffee sourcing', 'farmer partnerships'],
      desc: 'Our direct relationships with Ethiopian coffee farmers ensure fair compensation while delivering exceptional quality beans to businesses worldwide.'
    },
    {
      small_image_url: 'cofee-blog-3-1.png',
      large_image_url: 'cofee-blog-3-1.png',
      date: 'Jan 18, 2026',
      title: 'THE FUTURE IS FLORAL: 5 SPECIALTY COFFEE TRENDS DEFINING 2026',
      slug: 'specialty-coffee-trends-2026',
      category: 'Market Insights / Sourcing',
      keywords: ['specialty coffee trends', '2026 coffee trends', 'experimental processing', 'hyper-traceability', 'Ethiopian specialty coffee'],
      desc: 'Five specialty coffee trends shaping 2026-hyper-traceability, experimental processing, climate resilience, flash chill growth, and story-driven premiumization-and why Ethiopian origins are positioned to lead.'
    },
    {
      small_image_url: 'Ethiopia_Coffee_Map.png',
      large_image_url: 'Ethiopia_Coffee_Map.png',
      date: 'Jan 20, 2026',
      title: 'A PRACTICAL GUIDE TO ETHIOPIAN GREEN COFFEE ORIGINS',
      slug: 'guide-ethiopian-coffee-origins',
      category: 'Market Insights / Sourcing',
      keywords: ['Ethiopian coffee regions', 'Yirgacheffe', 'Sidamo', 'Guji', 'green coffee buying guide', 'coffee traceability'],
      desc: 'A buyer-friendly overview of Ethiopia\'s key coffee regions, what "origin" means in practice, and how to source green coffee with better clarity on processing, profile, and traceability.'
    }
]
