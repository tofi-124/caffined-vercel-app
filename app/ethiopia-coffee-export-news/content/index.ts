// Map of news slugs to their content component paths

export const newsContentMap: Record<string, () => Promise<any>> = {
  'rename-coffee-arabica-ethiopian-coffee': () =>
    import('./rename-coffee-arabica-ethiopian-coffee').then(mod => mod.default),
  'african-coffee-week-2026-addis-ababa': () =>
    import('./african-coffee-week-2026-addis-ababa').then(mod => mod.default),
  // Add more news here:
  // 'slug': () => import('./slug').then(mod => mod.default),
}

export function hasNewsContent(slug: string): boolean {
  return slug in newsContentMap
}
