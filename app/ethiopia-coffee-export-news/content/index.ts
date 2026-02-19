// Map of news slugs to their content component paths

export const newsContentMap: Record<string, () => Promise<any>> = {
  'rename-coffee-arabica-ethiopian-coffee': () =>
    import('./rename-coffee-arabica-ethiopian-coffee').then(mod => mod.default),
  'african-coffee-week-addis-ababa': () =>
    import('./african-coffee-week-addis-ababa').then(mod => mod.default),
  'eu-acknowledges-tangible-progress-deforestation-rules': () =>
    import('./eu-acknowledges-tangible-progress-deforestation-rules').then(mod => mod.default),
  'ethiopia-coffee-production-foreign-exchange': () =>
    import('./ethiopia-coffee-production-foreign-exchange').then(mod => mod.default),
  'ecta-folur-workshop': () =>
    import('./ecta-folur-workshop').then(mod => mod.default),
  'disabled-peoples-coffee-development': () =>
    import('./disabled-peoples-coffee-development').then(mod => mod.default),
  // Add more news here:
    'sidama-6000-tons-supplied': () =>
      import('./sidama-6000-tons-supplied').then(mod => mod.default),
    'premium-price-international-standards': () =>
      import('./premium-price-international-standards').then(mod => mod.default),
    'improved-coffee-varieties-west-hararge': () =>
      import('./improved-coffee-varieties-west-hararge').then(mod => mod.default),
    'tea-seedling-training-gewata': () =>
      import('./tea-seedling-training-gewata').then(mod => mod.default),
    'coffee-exports-first-half-2018': () =>
      import('./coffee-exports-first-half-2018').then(mod => mod.default),
    'technologies-coffee-training-donated': () =>
      import('./technologies-coffee-training-donated').then(mod => mod.default),
    'government-support-coffee-competitiveness': () =>
      import('./government-support-coffee-competitiveness').then(mod => mod.default),
    'russia-ethiopia-trade-435-million': () =>
      import('./russia-ethiopia-trade-435-million').then(mod => mod.default),
    'coffee-interpretation-center-inauguration': () =>
      import('./coffee-interpretation-center-inauguration').then(mod => mod.default),
    'italian-delegation-visits-coffee-training-center': () =>
      import('./italian-delegation-visits-coffee-training-center').then(mod => mod.default),
    'ico-ethiopia-coffee-competitiveness': () =>
      import('./ico-ethiopia-coffee-competitiveness').then(mod => mod.default),
    'ecta-mou-vocational-training-institute': () =>
      import('./ecta-mou-vocational-training-institute').then(mod => mod.default),
  // 'slug': () => import('./slug').then(mod => mod.default),
}

export function hasNewsContent(slug: string): boolean {
  return slug in newsContentMap
}
