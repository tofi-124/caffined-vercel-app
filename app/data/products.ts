// Consumer e-commerce product data for ethiocoffee.co

export type ProductSize = {
  id: string
  weight: string
  weightGrams: number
  price: number
  compareAtPrice?: number
}

// Grind options for ordering
export type GrindOption = {
  id: string
  name: string
  description: string
}

export const grindOptions: GrindOption[] = [
  { id: 'whole-bean', name: 'Whole Bean', description: 'Unground beans for maximum freshness' },
  { id: 'espresso', name: 'Espresso (Fine)', description: 'For espresso machines' },
  { id: 'aeropress', name: 'AeroPress (Fine-Medium)', description: 'For AeroPress brewers' },
  { id: 'pour-over', name: 'Pour Over (Medium)', description: 'For Chemex, V60, Kalita' },
  { id: 'drip', name: 'Drip (Medium)', description: 'For automatic drip coffee makers' },
  { id: 'french-press', name: 'French Press (Coarse)', description: 'For French press and cold brew' },
]

export type Product = {
  id: string
  name: string
  slug: string
  shortName: string
  image: string
  images: string[]
  description: string
  longDescription: string
  origin: string
  region: string
  altitude: string
  process: string
  roastLevel: 'light' | 'medium' | 'medium-dark' | 'dark'
  flavorNotes: string[]
  sizes: ProductSize[]
  category: 'single-origin' | 'blend' | 'espresso' | 'decaf'
  isNew?: boolean
  isBestSeller?: boolean
  isFeatured?: boolean
  inStock: boolean
  rating: number
  reviewCount: number
}

// Placeholder image until real product images are added
const PLACEHOLDER_IMAGE = '/images/products/placeholder.svg'

export const products: Product[] = [
  {
    id: 'yirgacheffe-light',
    name: 'Yirgacheffe Light Roast',
    slug: 'yirgacheffe-light-roast',
    shortName: 'Yirgacheffe',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/yirgacheffe.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/yirgacheffe.webp', '/images/products/yirgacheffe-2.webp'],
    description: 'Bright, floral coffee with jasmine aromatics, citrus acidity, and a delicate tea-like body.',
    longDescription: `Our Yirgacheffe Light Roast showcases the legendary flavors of Ethiopia's most famous coffee region. Each sip reveals layers of jasmine and bergamot aromatics, vibrant lemon and lime acidity, with subtle notes of black tea and honey.

This washed coffee is grown by smallholder farmers in the Gedeo Zone at elevations between 1,750-2,200 meters. The high altitude and fertile volcanic soil create perfect conditions for slow cherry maturation, resulting in exceptional clarity and complexity.

Best enjoyed as a pour-over, Chemex, or AeroPress to fully experience the delicate floral notes and tea-like elegance.`,
    origin: 'Ethiopia',
    region: 'Gedeo Zone, SNNPR',
    altitude: '1,750 - 2,200 masl',
    process: 'Washed',
    roastLevel: 'light',
    flavorNotes: ['Jasmine', 'Bergamot', 'Lemon', 'Black Tea', 'Honey'],
    sizes: [
      { id: 'yirg-250', weight: '250g', weightGrams: 250, price: 18.99, compareAtPrice: 21.99 },
      { id: 'yirg-500', weight: '500g', weightGrams: 500, price: 34.99, compareAtPrice: 39.99 },
      { id: 'yirg-1000', weight: '1kg', weightGrams: 1000, price: 64.99, compareAtPrice: 74.99 },
    ],
    category: 'single-origin',
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 234,
  },
  {
    id: 'sidamo-natural',
    name: 'Sidamo Natural Process',
    slug: 'sidamo-natural-process',
    shortName: 'Sidamo',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/sidamo.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/sidamo.webp', '/images/products/sidamo-2.webp'],
    description: 'Complex natural coffee with berry fruit, wine-like acidity, and rich chocolate undertones.',
    longDescription: `Our Sidamo Natural Process is a fruit-forward masterpiece from one of Ethiopia's most celebrated coffee regions. Natural processing amplifies the inherent berry characteristics, creating an explosion of ripe blueberry, strawberry jam, and blackcurrant notes.

Grown in the fertile highlands of Sidama Regional State at 1,550-2,200 meters, this coffee is processed by the Sidama Coffee Farmers Cooperative Union using traditional sun-drying methods on raised beds.

The medium body delivers a syrupy mouthfeel with cocoa-dusted finish. Perfect for those who love bold, fruity coffees. Excellent as espresso or filter coffee.`,
    origin: 'Ethiopia',
    region: 'Sidama Regional State',
    altitude: '1,550 - 2,200 masl',
    process: 'Natural (Sun-dried)',
    roastLevel: 'medium',
    flavorNotes: ['Blueberry', 'Strawberry', 'Wine', 'Dark Chocolate', 'Brown Sugar'],
    sizes: [
      { id: 'sid-250', weight: '250g', weightGrams: 250, price: 19.99, compareAtPrice: 22.99 },
      { id: 'sid-500', weight: '500g', weightGrams: 500, price: 36.99, compareAtPrice: 42.99 },
      { id: 'sid-1000', weight: '1kg', weightGrams: 1000, price: 68.99, compareAtPrice: 79.99 },
    ],
    category: 'single-origin',
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 189,
  },
  {
    id: 'guji-espresso',
    name: 'Guji Espresso Roast',
    slug: 'guji-espresso-roast',
    shortName: 'Guji',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/guji.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/guji.webp', '/images/products/guji-2.webp'],
    description: 'Intensely aromatic specialty coffee with stone fruit, floral complexity, and syrupy sweetness.',
    longDescription: `Our Guji Espresso Roast is crafted from one of Ethiopia's most sought-after specialty origins. Roasted slightly darker to bring out the intense aromatics and syrupy body that make Guji legendary.

Jasmine, honeysuckle, and tropical florals layer with ripe peach, apricot, and nectarine notes. The natural processing creates a pronounced fruit-forward character with winey acidity.

From the highlands of Guji Zone at 1,800-2,300 meters, including famous sub-regions like Shakiso, Uraga, and Hambela. This coffee consistently produces competition-winning cup scores.

Designed for espresso but equally stunning as a bold pour-over.`,
    origin: 'Ethiopia',
    region: 'Guji Zone, Oromia',
    altitude: '1,800 - 2,300 masl',
    process: 'Natural',
    roastLevel: 'medium-dark',
    flavorNotes: ['Peach', 'Apricot', 'Jasmine', 'Honeysuckle', 'Syrupy'],
    sizes: [
      { id: 'guji-250', weight: '250g', weightGrams: 250, price: 20.99, compareAtPrice: 23.99 },
      { id: 'guji-500', weight: '500g', weightGrams: 500, price: 38.99, compareAtPrice: 44.99 },
      { id: 'guji-1000', weight: '1kg', weightGrams: 1000, price: 72.99, compareAtPrice: 84.99 },
    ],
    category: 'espresso',
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: 'harar-mocha',
    name: 'Harar Mocha Reserve',
    slug: 'harar-mocha-reserve',
    shortName: 'Harar',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/harar.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/harar.webp', '/images/products/harar-2.webp'],
    description: 'Historic dry-processed coffee with bold fruit, distinctive wine character, and mocha undertones.',
    longDescription: `Our Harar Mocha Reserve is from one of the world's oldest and most legendary coffee origins, cultivated for over 500 years around the ancient walled city of Harar.

This naturally processed coffee exhibits the signature "mocha" character - intense dried fruit notes of raisins, figs, and dried apricot alongside wine-like complexity. The heavy, rustic body reveals characteristic chocolate, spice, and fruity ferment notes.

The dry climate of the eastern Ethiopian highlands necessitates natural processing, with cherries sun-dried on raised beds. This traditional method creates Harar's bold, unmistakably unique profile.

A collector's choice for coffee connoisseurs seeking authentic Ethiopian heritage.`,
    origin: 'Ethiopia',
    region: 'Hararghe, Oromia',
    altitude: '1,500 - 2,100 masl',
    process: 'Natural (Dry-processed)',
    roastLevel: 'medium',
    flavorNotes: ['Dried Fruit', 'Wine', 'Dark Chocolate', 'Spice', 'Mocha'],
    sizes: [
      { id: 'har-250', weight: '250g', weightGrams: 250, price: 21.99, compareAtPrice: 24.99 },
      { id: 'har-500', weight: '500g', weightGrams: 500, price: 39.99, compareAtPrice: 45.99 },
      { id: 'har-1000', weight: '1kg', weightGrams: 1000, price: 74.99, compareAtPrice: 86.99 },
    ],
    category: 'single-origin',
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: 'limu-balanced',
    name: 'Limu Balanced Blend',
    slug: 'limu-balanced-blend',
    shortName: 'Limu',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/limu.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/limu.webp', '/images/products/limu-2.webp'],
    description: 'Balanced washed coffee with bright citrus, wine acidity, and sweet spice notes.',
    longDescription: `Our Limu Balanced Blend is the perfect everyday coffee for those who appreciate Ethiopian character without extremes. Clean, well-structured, and remarkably approachable.

Bright citrus acidity (lemon, grapefruit) pairs with subtle wine-like undertones and a sweet finish of raw sugar and mild spice. The medium body with good sweetness makes this an excellent all-day sipper.

From the Jimma Zone of southwestern Ethiopia, Limu has been recognized internationally since the early 20th century. The lush, forested highlands provide ideal growing conditions.

Perfect for drip coffee, French press, or cold brew.`,
    origin: 'Ethiopia',
    region: 'Jimma Zone, Oromia',
    altitude: '1,400 - 2,100 masl',
    process: 'Washed',
    roastLevel: 'medium',
    flavorNotes: ['Lemon', 'Grapefruit', 'Wine', 'Raw Sugar', 'Spice'],
    sizes: [
      { id: 'lim-250', weight: '250g', weightGrams: 250, price: 16.99, compareAtPrice: 19.99 },
      { id: 'lim-500', weight: '500g', weightGrams: 500, price: 31.99, compareAtPrice: 36.99 },
      { id: 'lim-1000', weight: '1kg', weightGrams: 1000, price: 59.99, compareAtPrice: 69.99 },
    ],
    category: 'single-origin',
    isBestSeller: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: 'ethiopia-house-blend',
    name: 'Ethiopia House Blend',
    slug: 'ethiopia-house-blend',
    shortName: 'House Blend',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/house-blend.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/house-blend.webp', '/images/products/house-blend-2.webp'],
    description: 'Our signature blend combining the best of Ethiopian origins for a rich, balanced cup.',
    longDescription: `Our Ethiopia House Blend is carefully crafted by our master roasters to deliver the quintessential Ethiopian coffee experience. We combine beans from multiple renowned regions to create a harmonious, complex cup.

Sidamo provides the fruity sweetness and body, Yirgacheffe adds floral brightness, and Limu contributes balance and citrus notes. The result is a coffee that works beautifully any time of day, any brew method.

Medium roasted to highlight the natural sweetness and complexity while maintaining drinkability. Notes of milk chocolate, caramel, citrus, and subtle berry create a crowd-pleasing profile.

Our most popular coffee - perfect for those new to Ethiopian coffee or looking for a reliable everyday roast.`,
    origin: 'Ethiopia',
    region: 'Multi-region blend',
    altitude: '1,500 - 2,200 masl',
    process: 'Washed & Natural blend',
    roastLevel: 'medium',
    flavorNotes: ['Milk Chocolate', 'Caramel', 'Citrus', 'Berry', 'Balanced'],
    sizes: [
      { id: 'house-250', weight: '250g', weightGrams: 250, price: 15.99, compareAtPrice: 18.99 },
      { id: 'house-500', weight: '500g', weightGrams: 500, price: 28.99, compareAtPrice: 33.99 },
      { id: 'house-1000', weight: '1kg', weightGrams: 1000, price: 52.99, compareAtPrice: 62.99 },
    ],
    category: 'blend',
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 567,
  },
  {
    id: 'dark-roast-ethiopian',
    name: 'Ethiopian Dark Roast',
    slug: 'ethiopian-dark-roast',
    shortName: 'Dark Roast',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/dark-roast.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/dark-roast.webp', '/images/products/dark-roast-2.webp'],
    description: 'Bold, smoky dark roast with intense chocolate, caramel, and roasted nut character.',
    longDescription: `Our Ethiopian Dark Roast is for those who prefer bold, intense coffee. We take premium Ethiopian beans and roast them to a rich, dark profile that brings out deep chocolate and caramel notes.

The longer roasting time creates a full body with low acidity, making this perfect for those who find light roasts too bright. Notes of dark chocolate, toasted almonds, brown sugar, and a hint of smokiness.

Despite the dark roast, the Ethiopian origin shines through with subtle fruit undertones that set this apart from typical dark roasts.

Excellent for espresso-based drinks, French press, or anyone who takes their coffee strong and bold.`,
    origin: 'Ethiopia',
    region: 'Sidamo & Limu',
    altitude: '1,500 - 2,100 masl',
    process: 'Washed',
    roastLevel: 'dark',
    flavorNotes: ['Dark Chocolate', 'Toasted Almond', 'Brown Sugar', 'Smoky', 'Full Body'],
    sizes: [
      { id: 'dark-250', weight: '250g', weightGrams: 250, price: 16.99, compareAtPrice: 19.99 },
      { id: 'dark-500', weight: '500g', weightGrams: 500, price: 31.99, compareAtPrice: 36.99 },
      { id: 'dark-1000', weight: '1kg', weightGrams: 1000, price: 59.99, compareAtPrice: 69.99 },
    ],
    category: 'single-origin',
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
  },
  {
    id: 'decaf-ethiopia',
    name: 'Ethiopian Decaf',
    slug: 'ethiopian-decaf',
    shortName: 'Decaf',
    image: PLACEHOLDER_IMAGE, // Replace with: '/images/products/decaf.webp'
    images: [PLACEHOLDER_IMAGE], // Replace with: ['/images/products/decaf.webp', '/images/products/decaf-2.webp'],
    description: 'Swiss Water Process decaf that preserves Ethiopian character with notes of chocolate and fruit.',
    longDescription: `Our Ethiopian Decaf proves you don't have to sacrifice flavor for a caffeine-free experience. We use the Swiss Water Process - a 100% chemical-free method that removes 99.9% of caffeine while preserving the delicate flavors.

Starting with premium Sidamo beans, this decaf maintains the characteristic Ethiopian fruitiness with notes of milk chocolate, dried cherry, and subtle citrus. The medium body and gentle sweetness make it a satisfying cup any time of day.

Perfect for evening enjoyment, caffeine-sensitive coffee lovers, or anyone who wants great Ethiopian coffee without the buzz.

Tastes like real Ethiopian coffee because it is - just without the caffeine.`,
    origin: 'Ethiopia',
    region: 'Sidamo',
    altitude: '1,550 - 2,100 masl',
    process: 'Washed, Swiss Water Decaf',
    roastLevel: 'medium',
    flavorNotes: ['Milk Chocolate', 'Dried Cherry', 'Citrus', 'Sweet', 'Smooth'],
    sizes: [
      { id: 'decaf-250', weight: '250g', weightGrams: 250, price: 18.99, compareAtPrice: 21.99 },
      { id: 'decaf-500', weight: '500g', weightGrams: 500, price: 34.99, compareAtPrice: 39.99 },
      { id: 'decaf-1000', weight: '1kg', weightGrams: 1000, price: 64.99, compareAtPrice: 74.99 },
    ],
    category: 'decaf',
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
  },
]

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured)
}

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.isBestSeller)
}

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category)
}

export const categories = [
  { id: 'all', name: 'All Coffee', slug: 'all' },
  { id: 'single-origin', name: 'Single Origin', slug: 'single-origin' },
  { id: 'blend', name: 'Blends', slug: 'blends' },
  { id: 'espresso', name: 'Espresso', slug: 'espresso' },
  { id: 'decaf', name: 'Decaf', slug: 'decaf' },
]
