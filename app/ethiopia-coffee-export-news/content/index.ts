// Map of news slugs to their content component paths

export const newsContentMap: Record<string, () => Promise<any>> = {
  'rename-coffee-arabica-ethiopian-coffee': () =>
    import('./rename-coffee-arabica-ethiopian-coffee').then(mod => mod.default),
  'african-coffee-week-2026-addis-ababa': () =>
    import('./african-coffee-week-2026-addis-ababa').then(mod => mod.default),
  'ethiopia-coffee-production-foreign-exchange-2018': () =>
    import('./ethiopia-coffee-production-foreign-exchange').then(mod => mod.default),
  'ecta-folur-workshop-2026': () =>
    import('./ecta-folur-workshop-2026').then(mod => mod.default),
  'disabled-peoples-coffee-development-2025': () =>
    import('./disabled-peoples-coffee-development-2025').then(mod => mod.default),
  // Add more news here:
    'sidama-6000-tons-supplied-2026': () =>
      import('./sidama-6000-tons-supplied-2026').then(mod => mod.default),
  // 'slug': () => import('./slug').then(mod => mod.default),
}

export function hasNewsContent(slug: string): boolean {
  return slug in newsContentMap
}
