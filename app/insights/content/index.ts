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
  'importing-ethiopian-coffee-to-japan': () => 
    import('./importing-ethiopian-coffee-to-japan').then(mod => mod.default),
  'importing-ethiopian-coffee-to-germany': () => 
    import('./importing-ethiopian-coffee-to-germany').then(mod => mod.default),
  'importing-ethiopian-coffee-to-holland': () => 
    import('./importing-ethiopian-coffee-to-holland').then(mod => mod.default),
  // Add more insights here as you create them:
  // 'next-insight-slug': () => import('./next-insight-file').then(mod => mod.default),
}

// Helper function to check if an insight has a dedicated content file
export function hasContentFile(slug: string): boolean {
  return slug in insightContentMap;
}
