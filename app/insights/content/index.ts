// Map of insight slugs to their content component paths
// This allows us to maintain individual files for each insight while supporting dynamic routing

export const insightContentMap: Record<string, () => Promise<any>> = {
  'ecx-and-ethiopian-coffee-export': () => 
    import('./ecx-and-ethiopian-coffee-export').then(mod => mod.default),
  'how-to-import-ethiopian-coffee-to-usa': () => 
    import('./how-to-import-ethiopian-coffee-to-usa').then(mod => mod.default),
  'importing-ethiopian-coffee-to-canada-guide': () => 
    import('./importing-ethiopian-coffee-to-canada-guide').then(mod => mod.default),
  'importing-ethiopian-coffee-to-saudi-arabia': () => 
    import('./importing-ethiopian-coffee-to-saudi-arabia').then(mod => mod.default),
  'importing-ethiopian-coffee-to-uae': () => 
    import('./importing-ethiopian-coffee-to-uae').then(mod => mod.default),
  'importing-ethiopian-coffee-to-south-korea': () => 
    import('./importing-ethiopian-coffee-to-south-korea').then(mod => mod.default),
  'importing-ethiopian-coffee-to-japan': () => 
    import('./importing-ethiopian-coffee-to-japan').then(mod => mod.default),
  'importing-ethiopian-coffee-to-germany': () => 
    import('./importing-ethiopian-coffee-to-germany').then(mod => mod.default),
  'importing-ethiopian-coffee-to-holland': () => 
    import('./importing-ethiopian-coffee-to-holland').then(mod => mod.default),
  'importing-ethiopian-coffee-to-uk': () => 
    import('./importing-ethiopian-coffee-to-uk').then(mod => mod.default),
  'importing-ethiopian-coffee-to-australia': () => 
    import('./importing-ethiopian-coffee-to-australia').then(mod => mod.default),
  'top-10-specialty-coffee-shops-world': () => 
    import('./top-10-specialty-coffee-shops-world').then(mod => mod.default),
  'new-sca-coffee-value-assessment': () => 
    import('./new-sca-coffee-value-assessment').then(mod => mod.default),
  'complete-guide-to-understanding-coffee': () => 
    import('./complete-guide-to-understanding-coffee').then(mod => mod.default),
  'rising-ethiopian-coffee-prices-explained': () => 
    import('./rising-ethiopian-coffee-prices-explained').then(mod => mod.default),
  'eu-deforestation-regulation-ethiopian-coffee-compliance': () => 
    import('./eu-deforestation-regulation-ethiopian-coffee-compliance').then(mod => mod.default),
  'afca-taste-of-harvest-ethiopian-coffee-competition': () => 
    import('./afca-taste-of-harvest-ethiopian-coffee-competition').then(mod => mod.default),
  'ethiopian-dry-coffee-production-quality-control': () => 
    import('./ethiopian-dry-coffee-production-quality-control').then(mod => mod.default),
  'sidama-coffee-production-productivity-export': () => 
    import('./sidama-coffee-production-productivity-export').then(mod => mod.default),
  'ethiopia-china-coffee-trade-partnership': () => 
    import('./ethiopia-china-coffee-trade-partnership').then(mod => mod.default),
  'ethiopian-coffee-certifications-organic-fairtrade-rainforest': () => 
    import('./ethiopian-coffee-certifications-organic-fairtrade-rainforest').then(mod => mod.default),
  'ethiopian-heirloom-coffee-varieties-landraces': () => 
    import('./ethiopian-heirloom-coffee-varieties-landraces').then(mod => mod.default),
  'minimum-order-quantities-ethiopian-coffee-moq': () => 
    import('./minimum-order-quantities-ethiopian-coffee-moq').then(mod => mod.default),
  'benefits-investing-ethiopian-coffee-production': () => 
    import('./benefits-investing-ethiopian-coffee-production').then(mod => mod.default),
  // Add more insights here as you create them:
  // 'next-insight-slug': () => import('./next-insight-file').then(mod => mod.default),
}

// Helper function to check if an insight has a dedicated content file
export function hasContentFile(slug: string): boolean {
  return slug in insightContentMap;
}
