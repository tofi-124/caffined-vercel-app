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
      small_image_url: 'launch.webp',
      large_image_url: 'launch.webp',
      date: 'Jan 01, 2026',
      title: 'ETHIO COFFEE LAUNCHES CANADIAN OPERATIONS',
      slug: 'ethio-coffee-canada-operations-launch',
      category: 'Company News',
      keywords: [
        'Ethiopian coffee Canada',
        'green coffee supplier Canada',
        'Ethiopian coffee importer',
        'specialty coffee wholesale Canada',
        'Ethio Coffee Canada',
        'Ethiopian green beans Toronto',
        'coffee roasters Canada',
        'direct trade coffee Canada',
        'African coffee supplier North America'
      ],
      desc: 'Ethio Coffee officially launches Canadian operations through Ethio Coffee Company Inc., making premium Ethiopian green coffee more accessible to roasters and cafés across Canada with local warehousing, simplified logistics, and direct-from-origin traceability.'
    },
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
    },
    {
      small_image_url: 'green-coffee-sourcing.webp',
      large_image_url: 'green-coffee-sourcing.webp',
      date: 'Aug 10, 2025',
      title: 'HOW TO SOURCE GREEN COFFEE FROM ETHIOPIA: A COMPLETE BUYER\'S GUIDE FOR ROASTERS',
      slug: 'how-to-source-green-coffee-from-ethiopia',
      category: 'Sourcing Guide',
      keywords: [
        'how to source green coffee from Ethiopia',
        'Ethiopian green coffee supplier',
        'buy green coffee beans wholesale',
        'Ethiopian coffee for roasters',
        'green coffee importing',
        'wholesale Ethiopian coffee beans',
        'direct trade Ethiopian coffee',
        'specialty green coffee supplier'
      ],
      desc: 'A complete guide for roasters and cafés on how to source green coffee from Ethiopia covering direct trade, quality grades, shipping logistics, and what to look for in an Ethiopian green coffee supplier.'
    },
    {
      small_image_url: 'yirgacheffe-vs-sidamo.webp',
      large_image_url: 'yirgacheffe-vs-sidamo.webp',
      date: 'May 23, 2025',
      title: 'YIRGACHEFFE VS SIDAMO VS GUJI: WHICH ETHIOPIAN COFFEE IS RIGHT FOR YOUR ROASTERY?',
      slug: 'yirgacheffe-vs-sidamo-vs-guji-comparison',
      category: 'Coffee Profiles',
      keywords: [
        'Yirgacheffe vs Sidamo',
        'Guji coffee profile',
        'Ethiopian coffee regions comparison',
        'best Ethiopian coffee for espresso',
        'Ethiopian coffee flavor profiles',
        'specialty coffee buying guide',
        'Ethiopian single origin coffee',
        'wholesale Yirgacheffe coffee'
      ],
      desc: 'Compare Ethiopia\'s top coffee regions Yirgacheffe, Sidamo, and Guji to find the best origin for your roastery\'s needs. Includes flavor profiles, processing methods, and wholesale buying tips.'
    },
    {
      small_image_url: 'washed-vs-natural.webp',
      large_image_url: 'washed-vs-natural.webp',
      date: 'Jun 02, 2025',
      title: 'WASHED VS NATURAL PROCESSED ETHIOPIAN COFFEE: WHAT ROASTERS NEED TO KNOW',
      slug: 'washed-vs-natural-ethiopian-coffee-processing',
      category: 'Processing Methods',
      keywords: [
        'washed vs natural coffee',
        'Ethiopian coffee processing methods',
        'natural processed Ethiopian coffee',
        'washed Ethiopian coffee',
        'coffee processing for roasters',
        'green coffee processing methods',
        'specialty coffee processing',
        'Ethiopian natural coffee flavor'
      ],
      desc: 'Understand the key differences between washed and natural processed Ethiopian coffee how each method affects flavor, roasting, and what your customers will taste in the cup.'
    },
    {
      small_image_url: 'ethiopian-coffee-exporter-2025.webp',
      large_image_url: 'ethiopian-coffee-exporter-2025.webp',
      date: 'Jan 15, 2025',
      title: 'BEST ETHIOPIAN COFFEE EXPORTER, IMPORTER & SUPPLIER FOR ROASTERS WORLDWIDE',
      slug: 'best-ethiopian-coffee-exporter-importer-supplier',
      category: 'Company / Sourcing',
      keywords: [
        'ethio coffee',
        'ethiocoffee',
        'ethiopian coffee importers',
        'ethiopian coffee suppliers',
        'ethiopian coffee distributors',
        'ethiopian coffee company',
        'ethio cafe',
        'coffee suppliers ethiopia',
        'ethiopian coffee exporter',
        'green coffee exporter ethiopia',
        'best ethiopian coffee supplier',
        'wholesale ethiopian coffee',
        'ethiopian coffee beans wholesale',
        'buy ethiopian green coffee',
        'ethiopian coffee for roasters',
        'direct trade ethiopian coffee',
        'specialty coffee ethiopia',
        'ethiopian arabica supplier',
        'yirgacheffe coffee exporter',
        'sidamo coffee supplier',
        'guji coffee exporter'
      ],
      desc: 'Looking for a trusted Ethiopian coffee exporter, importer, or supplier? Ethio Coffee delivers premium green beans from Yirgacheffe, Sidamo, Guji, and more directly to roasters worldwide with full traceability and competitive pricing.'
    }
]
