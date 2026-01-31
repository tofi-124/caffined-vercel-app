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
      date: 'Jan 01, 2022',
      title: 'ETHIO COFFEE LAUNCHES: YOUR TRUSTED ETHIOPIAN EXPORT PARTNER',
      slug: 'ethio-coffee-export-launch',
      category: 'Company News',
      keywords: [
        'Ethiopian coffee exporter',
        'green coffee supplier Ethiopia',
        'Ethiopian coffee for importers',
        'specialty coffee export Ethiopia',
        'Ethio Coffee Export',
        'Ethiopian green beans wholesale',
        'coffee importers worldwide',
        'direct trade coffee Ethiopia',
        'African coffee exporter'
      ],
      desc: 'Ethio Coffee Export PLC officially launches, bringing premium Ethiopian green coffee to importers worldwide. Founded by two brothers with deep roots in Ethiopian coffee, we offer traceable sourcing, professional export service, and the reliability importers need.'
    },
    {
      small_image_url: 'cofee-blog-1-1.png',
      large_image_url: 'cofee-blog-1-2.png',
      date: 'May 15, 2025',
      title: 'THE BIRTHPLACE OF COFFEE: ETHIOPIA\'S RICH HERITAGE',
      slug: 'birthplace-of-coffee-ethiopia',
      keywords: ['Ethiopian coffee origin', 'Arabica coffee history', 'Kaffa region', 'coffee birthplace', 'Ethiopian highlands'],
      desc: 'Discover the ancient origins of coffee in Ethiopia, where the Arabica coffee plant was first discovered over a thousand years ago in the lush forests of the southwestern highlands.'
    },
    {
      small_image_url: 'cofee-blog-2-1.png',
      large_image_url: 'cofee-blog-2-2.jpg',
      date: 'Feb 01, 2025',
      title: 'ETHIOPIAN COFFEE CEREMONIES: TRADITION MEETS BUSINESS',
      slug: 'ethiopian-coffee-ceremony',
      keywords: ['Ethiopian coffee ceremony', 'jebena', 'coffee culture', 'traditional brewing', 'coffee hospitality'],
      desc: 'Ethiopia\'s traditional coffee ceremony is more than just brewing it\'s a cultural ritual that informs how coffee is respected and handled throughout the supply chain from farm to cup.'
    },
    {
      small_image_url: 'cofee-blog-7-1.png',
      large_image_url: 'cofee-blog-7-2.jpg',
      date: 'Feb 07, 2025',
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
      title: 'SOURCING GREEN COFFEE FROM ETHIOPIA',
      slug: 'how-to-source-green-coffee-from-ethiopia',
      category: 'Sourcing Guide',
      keywords: [
        'how to source green coffee from Ethiopia',
        'Ethiopian green coffee supplier',
        'buy green coffee beans wholesale',
        'Ethiopian coffee for importers',
        'green coffee importing',
        'wholesale Ethiopian coffee beans',
        'direct trade Ethiopian coffee',
        'specialty green coffee supplier'
      ],
      desc: 'A complete guide for importers on how to source green coffee from Ethiopia covering direct trade, quality grades, shipping logistics, and what to look for in an Ethiopian green coffee exporter.'
    },
    {
      small_image_url: 'ethiopian-harvest-2025.webp',
      large_image_url: 'ethiopian-harvest-2025.webp',
      date: 'May 01, 2025',
      title: 'ETHIOPIAN COFFEE HARVEST 2025: SEASON OUTLOOK, QUALITY EXPECTATIONS & BUYER PLANNING GUIDE',
      slug: 'ethiopian-coffee-harvest-2025-season-outlook',
      category: 'Market Insights / Harvest Reports',
      keywords: [
        'Ethiopian coffee harvest 2025',
        'Ethiopian coffee season',
        'Ethiopian green coffee crop report',
        'Ethiopia coffee production 2025',
        'Ethiopian coffee availability',
        'buy Ethiopian coffee 2025',
        'Ethiopian coffee forecast',
        'Yirgacheffe harvest 2025',
        'Sidamo crop 2025',
        'Guji coffee 2025',
        'Ethiopian coffee prices 2025',
        'specialty coffee harvest Ethiopia',
        'green coffee crop forecast',
        'Ethiopian coffee exporter update',
        'coffee harvest timeline Ethiopia'
      ],
      desc: 'Our comprehensive 2025 Ethiopian coffee harvest report covering regional outlooks for Yirgacheffe, Sidamo, Guji, and Harrar plus quality expectations, pricing trends, and a planning timeline for importers and roasters sourcing green coffee from Ethiopia.'
    },
    {
      small_image_url: 'coffee-quality-defects.webp',
      large_image_url: 'coffee-quality-defects.webp',
      date: 'Dec 08, 2025',
      title: 'GREEN COFFEE QUALITY CONTROL: DEFECTS, GRADING SYSTEMS & WHAT IMPORTERS SHOULD INSPECT',
      slug: 'green-coffee-quality-control-defects-grading',
      category: 'Quality & Sourcing',
      keywords: [
        'green coffee defects',
        'coffee quality control',
        'Ethiopian coffee grading',
        'specialty coffee grading system',
        'coffee defect count',
        'green coffee inspection',
        'SCA coffee grading',
        'Ethiopian coffee grades G1 G2 G3',
        'coffee quality assurance',
        'green bean defects',
        'coffee moisture content',
        'screen size coffee',
        'coffee cupping score',
        'specialty grade coffee requirements',
        'coffee QC for importers',
        'Ethiopian coffee quality standards'
      ],
      desc: 'A practical guide for importers and roasters on green coffee quality control understanding defect categories, Ethiopian grading standards, moisture and density testing, and what to inspect before committing to a lot from your Ethiopian coffee supplier.'
    },
    {
      small_image_url: 'yirgacheffe-vs-sidamo.webp',
      large_image_url: 'yirgacheffe-vs-sidamo.webp',
      date: 'May 23, 2025',
      title: 'YIRGACHEFFE VS SIDAMO VS GUJI: WHICH ETHIOPIAN COFFEE IS RIGHT FOR YOU?',
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
      desc: 'Compare Ethiopia\'s top coffee regions Yirgacheffe, Sidamo, and Guji to find the best origin for your needs. Includes flavor profiles, processing methods, and wholesale buying tips.'
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
      title: 'BEST ETHIOPIAN COFFEE EXPORTER FOR IMPORTERS WORLDWIDE',
      slug: 'best-ethiopian-coffee-exporter-for-importers',
      category: 'Company / Sourcing',
      keywords: [
        'ethio coffee',
        'ethiocoffee',
        'ethiopian coffee exporters',
        'ethiopian coffee suppliers',
        'ethiopian coffee for importers',
        'ethiopian coffee company',
        'coffee exporters ethiopia',
        'ethiopian coffee exporter',
        'green coffee exporter ethiopia',
        'best ethiopian coffee exporter',
        'wholesale ethiopian coffee',
        'ethiopian coffee beans wholesale',
        'buy ethiopian green coffee',
        'ethiopian coffee for importers',
        'direct trade ethiopian coffee',
        'specialty coffee ethiopia',
        'ethiopian arabica exporter',
        'yirgacheffe coffee exporter',
        'sidamo coffee exporter',
        'guji coffee exporter'
      ],
      desc: 'Looking for a trusted Ethiopian coffee exporter? Ethio Coffee Export PLC delivers premium green beans from Yirgacheffe, Sidamo, Guji, and more directly to importers worldwide with full traceability, professional documentation, and competitive pricing.'
    },
    {
      small_image_url: 'coffee-plant-taxonomy.webp',
      large_image_url: 'coffee-plant-taxonomy.webp',
      date: 'Feb 09, 2025',
      title: 'COFFEE IS A PLANT: UNDERSTANDING TAXONOMY, SPECIES & VARIETIES',
      slug: 'coffee-plant-taxonomy-species-varieties',
      category: 'Coffee Education',
      keywords: [
        'coffee plant',
        'coffee taxonomy',
        'Arabica vs Robusta',
        'coffee species',
        'coffee varieties',
        'coffee anatomy',
        'Coffea Arabica',
        'coffee genetics',
        'coffee botany',
        'heirloom coffee varieties',
        'Ethiopian coffee genetics',
        'coffee plant science'
      ],
      desc: 'Before coffee is ever a drink, it\'s a plant. Explore coffee\'s taxonomy, anatomy, the fascinating science behind Arabica and Robusta species, variety groups, and why understanding coffee as an agricultural product deepens your appreciation for every cup.'
    },
    {
      small_image_url: 'coffee-agriculture.webp',
      large_image_url: 'coffee-agriculture.webp',
      date: 'Feb 29, 2025',
      title: 'COFFEE IS AGRICULTURE: THE COMPLETE GUIDE TO COFFEE PRODUCTION AND FARMING',
      slug: 'coffee-is-agriculture-production-farming',
      category: 'Coffee Education',
      keywords: [
        'coffee agriculture',
        'coffee production',
        'coffee farming',
        'specialty coffee production',
        'coffee plant lifecycle',
        'Ethiopian coffee farming',
        'shade grown coffee',
        'coffee ecosystem',
        'climate change coffee',
        'coffee harvesting',
        'coffee soil science',
        'polyculture coffee',
        'monoculture coffee'
      ],
      desc: 'Dive deep into coffee as agriculture: from soil science and plant biology to harvesting techniques, farming systems, and the environmental challenges facing coffee production worldwide.'
    },
    {
      small_image_url: 'coffee-processing.webp',
      large_image_url: 'coffee-processing.webp',
      date: 'Mar 15, 2025',
      title: 'COFFEE IS A PROCESS: THE COMPLETE GUIDE TO COFFEE PROCESSING, DRYING, AND MILLING',
      slug: 'coffee-is-processing-drying-milling',
      category: 'Coffee Education',
      keywords: [
        'coffee processing',
        'coffee drying',
        'coffee milling',
        'washed coffee',
        'natural coffee',
        'honey process',
        'fermentation in coffee',
        'Ethiopian coffee processing',
        'specialty coffee processing',
        'coffee fermentation',
        'coffee parchment',
        'green bean processing'
      ],
      desc: 'Explore the transformative steps of coffee processing: from post-harvest methods like washed, honey, and natural processing to drying techniques, fermentation, and milling that prepare green beans for export and roasting.'
    },
    {
      small_image_url: 'coffee-commerce.webp',
      large_image_url: 'coffee-commerce.webp',
      date: 'Mar 30, 2025',
      title: 'COFFEE IS COMMERCE: THE COMPLETE GUIDE TO COFFEE EXPORTING, IMPORTING, AND BUYING',
      slug: 'coffee-is-commerce-exporting-importing-buying',
      category: 'Coffee Education',
      keywords: [
        'coffee commerce',
        'coffee exporting',
        'coffee importing',
        'C market',
        'specialty coffee',
        'green coffee buying',
        'coffee transparency',
        'coffee supply chain',
        'coffee pricing',
        'direct trade coffee',
        'coffee logistics',
        'Ethiopian coffee trade'
      ],
      desc: 'Navigate the global coffee market: understand the C market vs specialty coffee, exporting and importing logistics, green coffee buying strategies, and the importance of transparency in ethical coffee commerce.'
    },
    {
      small_image_url: 'coffee-science.webp',
      large_image_url: 'coffee-science.webp',
      date: 'Apr 15, 2025',
      title: 'COFFEE IS A SCIENCE: THE COMPLETE GUIDE TO COFFEE ANALYSIS, COMPOUNDS, AND EVALUATION',
      slug: 'coffee-is-science-analysis-compounds-evaluation',
      category: 'Coffee Education',
      keywords: [
        'coffee science',
        'green coffee analysis',
        'coffee compounds',
        'coffee evaluation',
        'cupping coffee',
        'coffee flavor',
        'coffee chemistry',
        'specialty coffee grading',
        'coffee sensory analysis',
        'coffee aroma compounds',
        'coffee tasting',
        'Ethiopian coffee quality'
      ],
      desc: 'Delve into the scientific foundations of coffee: physical characteristics of green beans, chemical compounds, flavor perception, sensory evaluation, and the systematic methods used to assess and grade specialty coffee.'
    },
    {
      small_image_url: 'coffee-art.webp',
      large_image_url: 'coffee-art.webp',
      date: 'Apr 30, 2025',
      title: 'COFFEE IS AN ART: THE COMPLETE GUIDE TO COFFEE ROASTING AND BREWING',
      slug: 'coffee-is-art-roasting-brewing',
      category: 'Coffee Education',
      keywords: [
        'coffee art',
        'coffee roasting',
        'coffee brewing',
        'coffee extraction',
        'roast curve',
        'brewing techniques',
        'coffee heat transfer',
        'espresso brewing',
        'pour over coffee',
        'coffee roasting science',
        'coffee brewing methods',
        'specialty coffee preparation'
      ],
      desc: 'Master the artistic and technical aspects of coffee: from heat transfer in roasting and roast curve development to brewing fundamentals, extraction theory, and the creative techniques that transform green beans into exceptional cups.'
    },
    {
      small_image_url: 'ecx-coffee-export.webp',
      large_image_url: 'ecx-coffee-export.webp',
      date: 'Jan 31, 2026',
      title: 'THE ETHIOPIA COMMODITY EXCHANGE (ECX) AND ETHIOPIAN COFFEE EXPORT',
      slug: 'ecx-and-ethiopian-coffee-export',
      category: 'Coffee Trade & Export',
      keywords: [
        'Ethiopia Commodity Exchange',
        'ECX coffee',
        'ECX coffee export',
        'ECX registered coffee exporter',
        'Ethiopian coffee grading system',
        'ECX coffee grades G1 G2 G3',
        'Ethiopian coffee export process',
        'ECX coffee traceability',
        'Ethiopian coffee quality control',
        'ECX coffee auction',
        'Ethiopian coffee regulations',
        'ECX direct specialty license',
        'Ethiopian coffee documentation',
        'how ECX works',
        'Ethiopian coffee trade'
      ],
      desc: 'A comprehensive guide to the Ethiopia Commodity Exchange (ECX), its role in Ethiopian coffee export, the grading system (G1, G2, G3), traceability, export process, and what international buyers need to know when sourcing from ECX-registered exporters.'
    }
]
