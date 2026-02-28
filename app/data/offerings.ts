export type OfferingSpecifications = {
  grade: string | null
  screenSize: string | null
  processingMethod: string | null
  moisture: string | null
  defectCount: string | null
  cupScore: string | null
  washingStation: string | null
  harvestPeriod: string | null
  dryingMethod: string | null
  fermentationTime: string | null
  waterActivity: string | null
  density: string | null
  farmCoopId: string | null
  icoNumber: string | null
  cuppingNotes: string | null
  millName: string | null
}

export type SampleOption = {
  weight: string
  weightGrams: number
  priceUSD: number
  description: string
}

export type OfferingPricing = {
  fobPricePerKg: number
  fobPricePerLb: number
  priceYear: number
  minimumOrder: string | null
  priceNote: string
  sampleOptions: SampleOption[]
}

export type Offering = {
  id: string
  name: string
  image_url: string
  desc: string
  profile: string
  origin: string
  specifications: OfferingSpecifications
  pricing: OfferingPricing
  isSoldOut?: boolean
  altitude: string | null
  region: string
  subRegion: string | null
  producer: string | null
  variety: string | null
  bagSize: string | null
  availableBags: number | null
  warehouseLocation: string
  lotNumber: string | null
  certifications: string[]
  flavorNotes: string[]
}

export const offerings: Offering[] = [
  // ─── 1. Washed Sidama Grade 1 ─────────────────────────────────────────────
  {
    id: 'sidama-washed-g1',
    name: 'WASHED SIDAMA GR. 1',
    image_url: 'product-img.png',
    desc: 'Premium washed Sidama with bright citrus acidity, floral elegance, and a clean, silky finish.',
    profile:
      'Top-tier washed Sidama Grade 1 showcases the region\'s renowned fruit complexity refined through meticulous wet processing. Expect bright lemon and lime acidity, delicate jasmine florals, and a clean, well-structured cup. The body is medium-light with a silky mouthfeel, sweet honey notes, and a lingering stone-fruit finish. Ideal for specialty roasters seeking an elegant, terroir-driven Ethiopian single origin.',
    origin:
      'Sidama is one of Ethiopia\'s largest and most established coffee-growing regions, located in the fertile highlands south of Addis Ababa. The region gained its own administrative status (Sidama Regional State) in 2020, reflecting its cultural and economic importance. Coffee cultivation here dates back centuries, with the region\'s name trademarked alongside Yirgacheffe and Harar as protected Ethiopian coffee origins.',
    specifications: {
      grade: 'G1',
      screenSize: null,
      processingMethod: 'Washed',
      moisture: null,
      defectCount: null,
      cupScore: '85+',
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 9.48,
      fobPricePerLb: 4.30,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Washed G1 - FOB Djibouti - 38.4 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Sidama',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Citrus', 'Jasmine', 'Honey', 'Stone Fruit', 'Silky'],
  },

  // ─── 2. Washed Yirgacheffe Grade 1 ────────────────────────────────────────
  {
    id: 'yirgacheffe-washed-g1',
    name: 'WASHED YIRGACHEFFE GR. 1',
    image_url: 'product-img.png',
    desc: 'Bright, floral washed coffee with jasmine aromatics, citrus acidity, and a delicate tea-like body.',
    profile:
      'Yirgacheffe is renowned worldwide for its distinctive floral and citrus character. Expect pronounced jasmine and bergamot aromatics, vibrant lemon and lime acidity, with subtle notes of black tea, honey, and stone fruit. The body is typically light and silky with a clean, lingering finish. Washed processing enhances clarity and highlights the terroir-driven florals that make Yirgacheffe iconic.',
    origin:
      'Yirgacheffe is located within the Gedeo Zone of the Southern Nations, Nationalities, and Peoples\' Region (SNNPR). The area\'s high altitude, fertile volcanic soil, and ideal climate create perfect conditions for slow cherry maturation. Coffee here is predominantly grown by smallholder farmers on plots averaging less than 2 hectares, with cherries delivered to local washing stations for wet processing.',
    specifications: {
      grade: 'G1',
      screenSize: null,
      processingMethod: 'Washed',
      moisture: null,
      defectCount: null,
      cupScore: '85+',
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 9.48,
      fobPricePerLb: 4.30,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Washed G1 - FOB Djibouti - 38.4 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Yirgacheffe',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Jasmine', 'Bergamot', 'Lemon', 'Black Tea', 'Honey'],
  },

  // ─── 3. Washed Sidama Grade 2 ─────────────────────────────────────────────
  {
    id: 'sidama-washed-g2',
    name: 'WASHED SIDAMA GR. 2',
    image_url: 'product-img.png',
    desc: 'Well-balanced washed Sidama with berry undertones, bright acidity, and sweet cocoa finish.',
    profile:
      'Sidama Grade 2 washed delivers a reliable, well-balanced cup that retains the signature berry and citrus character of the region. Clean processing highlights a sweet, approachable profile with notes of ripe berry, mild citrus, cocoa, and raw sugar. Medium body with smooth mouthfeel and a pleasant lingering aftertaste. An excellent workhorse single origin for filter roasts and blends seeking Ethiopian complexity.',
    origin:
      'Sidama coffee grows in the fertile highlands south of Addis Ababa. Rich volcanic soil, ample rainfall, and optimal temperatures create ideal growing conditions. Smallholder farmers deliver cherries to local washing stations where careful wet processing ensures clean, consistent cup quality.',
    specifications: {
      grade: 'G2',
      screenSize: null,
      processingMethod: 'Washed',
      moisture: null,
      defectCount: null,
      cupScore: '80-84',
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 9.04,
      fobPricePerLb: 4.10,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Washed G2 - FOB Djibouti - 38.4 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Sidama',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Berry', 'Citrus', 'Cocoa', 'Raw Sugar', 'Smooth'],
  },

  // ─── 4. Washed Limu Grade 2 ───────────────────────────────────────────────
  {
    id: 'limu-washed-g2',
    name: 'WASHED LIMU GR. 2',
    image_url: 'product-img.png',
    desc: 'Balanced washed coffee with bright citrus, wine acidity, and sweet spice notes.',
    profile:
      'Limu coffees are prized for their exceptional balance and approachability. Washed processing yields a clean, well-structured cup with bright citrus acidity (lemon, grapefruit), subtle wine-like undertones, and a sweet finish reminiscent of raw sugar and mild spice. The body is medium with good sweetness and a pleasant, lingering aftertaste. Limu represents an excellent entry point for those exploring Ethiopian specialty coffee.',
    origin:
      'Limu is located in the Jimma Zone of the Oromia Region in southwestern Ethiopia. The area is characterized by lush, forested highlands with significant rainfall and rich, volcanic soil. Limu coffee has been commercially cultivated since the early 20th century and was among the first Ethiopian coffees to gain international recognition.',
    specifications: {
      grade: 'G2',
      screenSize: null,
      processingMethod: 'Washed',
      moisture: null,
      defectCount: null,
      cupScore: '80-84',
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 8.69,
      fobPricePerLb: 3.94,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Washed G2 - FOB Djibouti - 76.8 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Limu',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Lemon', 'Grapefruit', 'Wine', 'Raw Sugar', 'Spice'],
  },

  // ─── 5. Natural Yirgacheffe Grade 1 ───────────────────────────────────────
  {
    id: 'yirgacheffe-natural-g1',
    name: 'NATURAL YIRGACHEFFE GR. 1',
    image_url: 'product-img.png',
    desc: 'Intensely fruity natural Yirgacheffe with blueberry, tropical florals, and heavy syrupy body.',
    profile:
      'Natural processing transforms Yirgacheffe\'s celebrated terroir into an explosively fruity experience. Grade 1 lots deliver intense blueberry and strawberry jam aromatics, tropical floral layers, and a heavy, syrupy body. The cup balances wine-like acidity with deep sweetness and a complex, lingering finish. One of Ethiopia\'s most sought-after natural lots for specialty roasters.',
    origin:
      'Yirgacheffe is located within the Gedeo Zone of the SNNPR. The area\'s high altitude, fertile volcanic soil, and ideal climate create perfect conditions for slow cherry maturation. For natural lots, ripe cherries are selectively picked and dried whole on raised African beds, developing intense fruit character.',
    specifications: {
      grade: 'G1',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: '85+',
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 9.92,
      fobPricePerLb: 4.50,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G1 - FOB Djibouti - 38.4 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Yirgacheffe',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Blueberry', 'Strawberry', 'Tropical Floral', 'Wine', 'Syrupy'],
  },

  // ─── 6. Natural Sidama Grade 1 ────────────────────────────────────────────
  {
    id: 'sidama-natural-g1',
    name: 'NATURAL SIDAMA GR. 1',
    image_url: 'product-img.png',
    desc: 'Complex natural coffee with berry fruit, wine-like acidity, and rich chocolate undertones.',
    profile:
      'Sidama coffees are celebrated for their remarkable fruit complexity and balanced sweetness. Natural processing amplifies the region\'s inherent berry characteristics - expect ripe blueberry, strawberry jam, and blackcurrant notes alongside wine-like acidity and a cocoa-dusted finish. The body is medium with a syrupy mouthfeel and long, sweet aftertaste.',
    origin:
      'Sidama coffee grows in the fertile highlands south of Addis Ababa. Rich volcanic soil, ample rainfall, and optimal temperatures create ideal growing conditions. For natural Grade 1, only the ripest cherries are selected and sun-dried whole on raised African beds.',
    specifications: {
      grade: 'G1',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: '85+',
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 9.92,
      fobPricePerLb: 4.50,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G1 - FOB Djibouti - 38.4 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Sidama',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Blueberry', 'Strawberry', 'Wine', 'Dark Chocolate', 'Brown Sugar'],
  },

  // ─── 7. Natural Sidama Grade 4 ────────────────────────────────────────────
  {
    id: 'sidama-natural-g4',
    name: 'NATURAL SIDAMA GR. 4',
    image_url: 'product-img.png',
    desc: 'Bold commercial-grade Sidama natural with earthy fruit, cocoa depth, and full body.',
    profile:
      'Sidama Grade 4 natural is a versatile commercial-grade coffee ideal for blends and price-sensitive markets. The cup delivers approachable fruit notes - dried berry, raisin, and mild citrus - alongside earthy cocoa depth and a full, rounded body. Natural processing adds sweetness and weight. Consistent quality at a competitive price point.',
    origin:
      'Sidama is one of Ethiopia\'s largest coffee-growing regions, producing both specialty and commercial grades. Grade 4 coffees are carefully sorted and processed to meet export standards while offering the distinctive Ethiopian character that buyers worldwide demand.',
    specifications: {
      grade: 'G4',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: null,
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 7.17,
      fobPricePerLb: 3.25,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G4 - FOB Djibouti - 192 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Sidama',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Dried Berry', 'Raisin', 'Cocoa', 'Earthy', 'Full Body'],
  },

  // ─── 8. Natural Guji Grade 4 ──────────────────────────────────────────────
  {
    id: 'guji-natural-g4',
    name: 'NATURAL GUJI GR. 4',
    image_url: 'product-img.png',
    desc: 'Aromatic commercial Guji natural with stone fruit, floral hints, and sweet chocolate finish.',
    profile:
      'Guji Grade 4 retains the region\'s characteristic aromatic complexity at a commercial price point. The cup features approachable stone-fruit notes, mild floral hints, and a sweet chocolate finish. Full body with pleasant sweetness makes this an excellent blending component or an affordable single-origin offering.',
    origin:
      'Guji Zone in the Oromia Region of southern Ethiopia has rapidly become one of the country\'s most recognized coffee origins. The zone\'s high elevations, indigenous forest shade, and heirloom genetics contribute to a distinctive aromatic profile.',
    specifications: {
      grade: 'G4',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: null,
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 7.17,
      fobPricePerLb: 3.25,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G4 - FOB Djibouti - 192 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Guji',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Stone Fruit', 'Floral', 'Chocolate', 'Sweet', 'Full Body'],
  },

  // ─── 9. Natural Yirgacheffe Grade 4 ───────────────────────────────────────
  {
    id: 'yirgacheffe-natural-g4',
    name: 'NATURAL YIRGACHEFFE GR. 4',
    image_url: 'product-img.png',
    desc: 'Accessible Yirgacheffe natural with berry sweetness, mild florals, and smooth chocolate notes.',
    profile:
      'Grade 4 natural Yirgacheffe brings the region\'s famous fruit-forward character to a commercial price point. Expect approachable berry sweetness, mild floral undertones, and smooth chocolate notes in a medium-bodied cup. Natural processing adds weight and sweetness.',
    origin:
      'Yirgacheffe is located within the Gedeo Zone of the SNNPR. Even at commercial grades, the region\'s high altitude, fertile volcanic soil, and indigenous heirloom varieties impart recognizable Yirgacheffe character.',
    specifications: {
      grade: 'G4',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: null,
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 7.17,
      fobPricePerLb: 3.25,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G4 - FOB Djibouti - 192 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Yirgacheffe',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Berry', 'Floral', 'Chocolate', 'Sweet', 'Medium Body'],
  },

  // ─── 10. Natural Lekempti Grade 4 ─────────────────────────────────────────
  {
    id: 'lekempti-natural-g4',
    name: 'NATURAL LEKEMPTI GR. 4',
    image_url: 'product-img.png',
    desc: 'Rich western Ethiopian natural with tropical fruit, cocoa depth, and gentle rounded acidity.',
    profile:
      'Lekempti (Wollega) Grade 4 natural brings the distinctive western Ethiopian profile to a commercial grade. Expect tropical fruit notes - mango, papaya, and ripe banana - alongside cocoa depth and gentle, rounded acidity. Natural processing intensifies fruit character and adds body.',
    origin:
      'Lekempti coffee originates from the Wollega (Wellega) Zone in western Ethiopia\'s Oromia Region, centered around the town of Nekemte. This area represents one of Ethiopia\'s oldest coffee-producing regions, with wild coffee still growing in the indigenous forests.',
    specifications: {
      grade: 'G4',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: null,
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 6.73,
      fobPricePerLb: 3.05,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G4 - FOB Djibouti - 192 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Lekempti',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Tropical Fruit', 'Mango', 'Cocoa', 'Gentle Acidity', 'Rounded'],
  },

  // ─── 11. Natural Djimmah Grade 4 ──────────────────────────────────────────
  {
    id: 'djimmah-natural-g4',
    name: 'NATURAL DJIMMAH GR. 4',
    image_url: 'product-img.png',
    desc: 'Classic Djimmah commercial coffee with earthy body, mild fruit, and warm spice notes.',
    profile:
      'Djimmah (Jimma) Grade 4 natural is one of Ethiopia\'s most well-known commercial-grade coffees, prized for its full body and earthy character. The cup features mild dried-fruit notes, warm spice, and a chocolatey base with low to moderate acidity. Djimmah is a proven performer in espresso blends and institutional coffee programs.',
    origin:
      'Djimmah (Jimma) coffee comes from the Jimma Zone in southwestern Ethiopia\'s Oromia Region. This is one of Ethiopia\'s largest and historically most important coffee-producing areas, with coffee forests that are believed to be part of the original birthplace of Arabica coffee.',
    specifications: {
      grade: 'G4',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: null,
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 6.53,
      fobPricePerLb: 2.96,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G4 - FOB Djibouti - 192 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Djimmah',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Earthy', 'Dried Fruit', 'Warm Spice', 'Chocolate', 'Full Body'],
  },

  // ─── 12. Natural Lekempti Grade 5 ─────────────────────────────────────────
  {
    id: 'lekempti-natural-g5',
    name: 'NATURAL LEKEMPTI GR. 5',
    image_url: 'product-img.png',
    desc: 'Value-grade Lekempti natural with earthy sweetness, mild fruit, and heavy body.',
    profile:
      'Lekempti Grade 5 natural offers Ethiopian origin character at the most accessible price point. The cup delivers earthy sweetness, mild tropical fruit, and a heavy, grounding body. Well-suited for commercial blends, institutional buyers, and markets where price sensitivity is paramount.',
    origin:
      'Lekempti coffee originates from the Wollega Zone in western Ethiopia\'s Oromia Region. Grade 5 lots are sourced from the broader production area and processed for consistency and volume.',
    specifications: {
      grade: 'G5',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: null,
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 6.48,
      fobPricePerLb: 2.94,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G5 - FOB Djibouti - 192 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Lekempti',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Earthy', 'Tropical Fruit', 'Sweet', 'Heavy Body', 'Mild'],
  },

  // ─── 13. Natural Djimmah Grade 5 ──────────────────────────────────────────
  {
    id: 'djimmah-natural-g5',
    name: 'NATURAL DJIMMAH GR. 5',
    image_url: 'product-img.png',
    desc: 'Budget-friendly Djimmah natural with earthy depth, mild sweetness, and robust body.',
    profile:
      'Djimmah Grade 5 natural is Ethiopia\'s most competitively priced export coffee, offering dependable origin character for high-volume commercial use. The cup features earthy depth, mild sweetness, and a robust, full body with low acidity. Ideal for large-scale espresso blends, instant coffee production, and institutional programs.',
    origin:
      'Djimmah (Jimma) coffee comes from the Jimma Zone in southwestern Ethiopia, one of the world\'s oldest and largest coffee-growing areas. Grade 5 lots offer the highest volume availability from this storied origin.',
    specifications: {
      grade: 'G5',
      screenSize: null,
      processingMethod: 'Natural',
      moisture: null,
      defectCount: null,
      cupScore: null,
      washingStation: null,
      harvestPeriod: 'December 2025 - February 2026',
      dryingMethod: null,
      fermentationTime: null,
      waterActivity: null,
      density: null,
      farmCoopId: null,
      icoNumber: null,
      cuppingNotes: null,
      millName: null,
    },
    pricing: {
      fobPricePerKg: 6.50,
      fobPricePerLb: 2.95,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025/26 crop - Natural G5 - FOB Djibouti - 192 MT available',
      sampleOptions: [
        { weight: '300g', weightGrams: 300, priceUSD: 5.00, description: 'Roast trial sample' },
      ],
    },
    isSoldOut: false,
    altitude: null,
    region: 'Djimmah',
    subRegion: null,
    producer: null,
    variety: 'Ethiopian Heirloom',
    bagSize: '60 kg jute bags',
    availableBags: null,
    warehouseLocation: 'Ethiopia',
    lotNumber: null,
    certifications: [],
    flavorNotes: ['Earthy', 'Mild Sweet', 'Robust Body', 'Low Acidity', 'Clean'],
  },
]
