export type OfferingSpecifications = {
  grade: string | null
  screenSize: string | null
  processingMethod: string | null
  cropYear: string | null
  moisture: string | null
  defectCount: string | null
  cupScore: string | null
}

export type OfferingPricing = {
  fobPricePerKg: number // FOB price in USD per kg
  fobPricePerLb: number // FOB price in USD per lb
  priceYear: number // Year the price is based on (2025)
  minimumOrder: string | null // e.g., "1 container (275 bags)" or null if not specified
  priceNote: string // Additional pricing context
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
  // New fields for B2B buyers
  altitude: string | null
  region: string
  producer: string
  variety: string | null
  bagSize: string | null
  availableBags: number | null // null = contact for availability
  warehouseLocation: string
  lotNumber: string
  certifications: string[]
  flavorNotes: string[]
}

export const offerings: Offering[] = [
  {
    id: 'yirgacheffe',
    name: 'YIRGACHEFFE',
    image_url: 'product-img.png',
    desc: 'Bright, floral washed coffee with jasmine aromatics, citrus acidity, and a delicate tea-like body.',
    profile:
      'Yirgacheffe is renowned worldwide for its distinctive floral and citrus character. Expect pronounced jasmine and bergamot aromatics, vibrant lemon and lime acidity, with subtle notes of black tea, honey, and stone fruit. The body is typically light and silky with a clean, lingering finish. Washed processing enhances clarity and highlights the terroir-driven florals that make Yirgacheffe iconic.',
    origin:
      'Yirgacheffe is located within the Gedeo Zone of the Southern Nations, Nationalities, and Peoples\' Region (SNNPR). The area\'s high altitude (1,750-2,200m), fertile volcanic soil, and ideal climate create perfect conditions for slow cherry maturation. Coffee here is predominantly grown by smallholder farmers on plots averaging less than 2 hectares, with cherries delivered to local washing stations for wet processing.',
    specifications: {
      grade: 'G2',
      screenSize: null,
      processingMethod: 'Washed',
      cropYear: '2025',
      moisture: null,
      defectCount: null,
      cupScore: '84+',
    },
    pricing: {
      fobPricePerKg: 9.50,
      fobPricePerLb: 4.31,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025 crop  •  Washed G2  •   FCL Pricing - Inquire for Smaller Lots',
    },
    isSoldOut: false,
    altitude: '1,750 - 2,200 masl',
    region: 'Gedeo Zone, SNNPR, Ethiopia',
    producer: 'Smallholder farmers via local washing stations',
    variety: 'Indigenous Ethiopian Heirloom varieties (JARC selections, local landraces)',
    bagSize: '60 kg GrainPro lined jute bags',
    availableBags: null,
    warehouseLocation: 'Addis Ababa, Ethiopia',
    lotNumber: ' ETH-2025-YRG',
    certifications: [],
    flavorNotes: ['Jasmine', 'Bergamot', 'Lemon', 'Black Tea', 'Honey'],
  },
  {
    id: 'sidamo',
    name: 'SIDAMO',
    image_url: 'product-img.png',
    desc: 'Complex natural coffee with berry fruit, wine-like acidity, and rich chocolate undertones.',
    profile:
      'Sidamo (Sidama) coffees are celebrated for their remarkable fruit complexity and balanced sweetness. Natural processing amplifies the region\'s inherent berry characteristics expect ripe blueberry, strawberry jam, and blackcurrant notes alongside wine-like acidity and a cocoa-dusted finish. The body is medium with a syrupy mouthfeel and long, sweet aftertaste. Well-suited for both filter brewing and as a vibrant single-origin espresso.',
    origin:
      'Sidama is one of Ethiopia\'s largest and most established coffee-growing regions, located in the fertile highlands south of Addis Ababa. The region gained its own administrative status (Sidama Regional State) in 2020, reflecting its cultural and economic importance. Coffee cultivation here dates back centuries, with the region\'s name trademarked alongside Yirgacheffe and Harar as protected Ethiopian coffee origins. Growing conditions include rich volcanic soil, ample rainfall, and optimal temperatures.',
    specifications: {
      grade: 'G1',
      screenSize: null,
      processingMethod: 'Natural (Sun-dried)',
      cropYear: '2025',
      moisture: null,
      defectCount: null,
      cupScore: '86+',
    },
    pricing: {
      fobPricePerKg: 10.80,
      fobPricePerLb: 4.90,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025 crop  •  Natural G1  •   FCL Pricing - Inquire for Smaller Lots',
    },
    isSoldOut: false,
    altitude: '1,550 - 2,200 masl',
    region: 'Sidama Regional State, Ethiopia',
    producer: 'Sidama Coffee Farmers Cooperative Union (SCFCU)',
    variety: 'Indigenous Ethiopian Heirloom varieties',
    bagSize: '60 kg GrainPro lined jute bags',
    availableBags: null,
    warehouseLocation: 'Addis Ababa, Ethiopia',
    lotNumber: ' ETH-2025-SID',
    certifications: [],
    flavorNotes: ['Blueberry', 'Strawberry', 'Wine', 'Dark Chocolate', 'Brown Sugar'],
  },
  {
    id: 'guji',
    name: 'GUJI',
    image_url: 'product-img.png',
    desc: 'Intensely aromatic specialty coffee with stone fruit, floral complexity, and syrupy sweetness.',
    profile:
      'Guji has rapidly become one of Ethiopia\'s most sought-after specialty origins. The cup is defined by intense aromatics jasmine, honeysuckle, and tropical florals layered with ripe peach, apricot, and nectarine. Natural processing creates a pronounced fruit-forward character with winey acidity and a heavy, syrupy body. Washed lots emphasize clarity and tea-like elegance. Guji consistently produces some of Ethiopia\'s highest-scoring lots in competition.',
    origin:
      'Guji Zone was historically considered part of the broader Sidamo region but has gained recognition as a distinct origin due to its exceptional cup quality. Located in the Oromia Region of southern Ethiopia, Guji\'s coffee grows at some of the country\'s highest elevations. The zone includes famous sub-regions like Shakiso, Uraga, and Hambela, each producing distinct micro-lot profiles. Indigenous forest shade and heirloom genetics contribute to Guji\'s complex character.',
    specifications: {
      grade: 'G1',
      screenSize: null,
      processingMethod: 'Natural (Sun-dried)',
      cropYear: '2025',
      moisture: null,
      defectCount: null,
      cupScore: '87+',
    },
    pricing: {
      fobPricePerKg: 11.50,
      fobPricePerLb: 5.22,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025 crop  •  Natural G1  •   FCL Pricing - Inquire for Smaller Lots',
    },
    isSoldOut: false,
    altitude: '1,800 - 2,300 masl',
    region: 'Guji Zone, Oromia Region, Ethiopia',
    producer: 'Guji Highland Smallholder Farmers',
    variety: 'Indigenous Ethiopian Heirloom varieties (Kurume, Dega, Wolisho)',
    bagSize: '60 kg GrainPro lined jute bags',
    availableBags: null,
    warehouseLocation: 'Addis Ababa, Ethiopia',
    lotNumber: ' ETH-2025-GUJ',
    certifications: [],
    flavorNotes: ['Peach', 'Apricot', 'Jasmine', 'Honeysuckle', 'Syrupy'],
  },
  {
    id: 'harar',
    name: 'HARAR',
    image_url: 'product-img.png',
    desc: 'Historic dry-processed coffee with bold fruit, distinctive wine character, and mocha undertones.',
    profile:
      'Harar is one of the world\'s oldest and most legendary coffee origins, renowned for its distinctive "mocha" character. As a naturally processed coffee, Harar exhibits intense dried fruit notes raisins, figs, and dried apricot alongside wine-like complexity and a heavy, rustic body. Characteristic mocha flavors emerge as chocolate, spice, and fruity ferment notes. The cup is bold, full-bodied, and unmistakably unique. Best suited for those seeking a classic, traditional Ethiopian profile.',
    origin:
      'Harar (Harrar) coffee comes from the eastern highlands of Ethiopia, around the ancient walled city of Harar a UNESCO World Heritage Site and historically one of Islam\'s holiest cities. Coffee has been cultivated here for over 500 years, making it one of the oldest coffee trade names in existence. The region\'s dry climate necessitates natural (dry) processing, with cherries sun-dried on raised beds. Harar\'s unique terroir and processing traditions create its signature bold, fruity character.',
    specifications: {
      grade: 'G1',
      screenSize: null,
      processingMethod: 'Natural (Dry-processed)',
      cropYear: '2025',
      moisture: null,
      defectCount: null,
      cupScore: '85+',
    },
    pricing: {
      fobPricePerKg: 10.20,
      fobPricePerLb: 4.63,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025 crop  •  Natural G1  •   FCL Pricing - Inquire for Smaller Lots',
    },
    isSoldOut: false,
    altitude: '1,500 - 2,100 masl',
    region: 'Hararghe (East & West), Oromia Region, Ethiopia',
    producer: 'Harar Highland Coffee Farmers',
    variety: 'Indigenous Harar Heirloom varieties (Harar-type cultivars)',
    bagSize: '60 kg GrainPro lined jute bags',
    availableBags: null,
    warehouseLocation: 'Addis Ababa, Ethiopia',
    lotNumber: ' ETH-2025-HAR',
    certifications: [],
    flavorNotes: ['Dried Fruit', 'Wine', 'Dark Chocolate', 'Spice', 'Mocha'],
  },
  {
    id: 'limu',
    name: 'LIMU',
    image_url: 'product-img.png',
    desc: 'Balanced washed coffee with bright citrus, wine acidity, and sweet spice notes.',
    profile:
      'Limu coffees are prized for their exceptional balance and approachability. Washed processing yields a clean, well-structured cup with bright citrus acidity (lemon, grapefruit), subtle wine-like undertones, and a sweet finish reminiscent of raw sugar and mild spice. The body is medium with good sweetness and a pleasant, lingering aftertaste. Limu represents an excellent entry point for those exploring Ethiopian specialty coffee.',
    origin:
      'Limu is located in the Jimma Zone of the Oromia Region in southwestern Ethiopia. The area is characterized by lush, forested highlands with significant rainfall and rich, volcanic soil. Limu coffee has been commercially cultivated since the early 20th century and was among the first Ethiopian coffees to gain international recognition. The region\'s washed coffees are known for their consistency and quality, making Limu a reliable choice for roasters seeking dependable Ethiopian character.',
    specifications: {
      grade: 'G2',
      screenSize: null,
      processingMethod: 'Washed',
      cropYear: '2025',
      moisture: null,
      defectCount: null,
      cupScore: '84+',
    },
    pricing: {
      fobPricePerKg: 9.20,
      fobPricePerLb: 4.17,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025 crop  •  Washed G2  •   FCL Pricing - Inquire for Smaller Lots',
    },
    isSoldOut: false,
    altitude: '1,400 - 2,100 masl',
    region: 'Jimma Zone (Limu Woreda), Oromia Region, Ethiopia',
    producer: 'Limu Kosa Farmers Cooperative',
    variety: 'Indigenous Ethiopian Heirloom varieties',
    bagSize: '60 kg GrainPro lined jute bags',
    availableBags: null,
    warehouseLocation: 'Addis Ababa, Ethiopia',
    lotNumber: ' ETH-2025-LIM',
    certifications: [],
    flavorNotes: ['Lemon', 'Grapefruit', 'Wine', 'Raw Sugar', 'Spice'],
  },
  {
    id: 'lekempti',
    name: 'LEKEMPTI (WOLLEGA)',
    image_url: 'product-img.png',
    desc: 'Rich, fruity western Ethiopian coffee with tropical notes, cocoa depth, and gentle acidity.',
    profile:
      'Lekempti (also known as Wollega or Nekemte) offers a distinctive profile that differs from southern Ethiopian coffees. Expect tropical fruit notes mango, papaya, and ripe banana alongside cocoa-like depth and gentle, rounded acidity. The body is medium-to-full with a smooth, velvety mouthfeel. Natural processing intensifies fruit character, while washed lots emphasize sweetness and clarity. Lekempti is an excellent choice for roasters seeking unique Ethiopian character beyond the classic Yirgacheffe profile.',
    origin:
      'Lekempti coffee originates from the Wollega (Wellega) Zone in western Ethiopia\'s Oromia Region, centered around the town of Nekemte. This area represents one of Ethiopia\'s oldest coffee-producing regions, with wild coffee still growing in the indigenous forests. The western highlands receive abundant rainfall and feature rich, red volcanic soil ideal for coffee cultivation. Both natural and washed processing are common, with each method producing distinct cup profiles.',
    specifications: {
      grade: 'G2',
      screenSize: null,
      processingMethod: 'Washed',
      cropYear: '2025',
      moisture: null,
      defectCount: null,
      cupScore: '84+',
    },
    pricing: {
      fobPricePerKg: 9.00,
      fobPricePerLb: 4.08,
      priceYear: 2025,
      minimumOrder: null,
      priceNote: '2025 crop  •  Washed G2  •   FCL Pricing - Inquire for Smaller Lots',
    },
    isSoldOut: false,
    altitude: '1,500 - 2,100 masl',
    region: 'Wollega Zone (East & West), Oromia Region, Ethiopia',
    producer: 'Lekempti Area Smallholder Farmers',
    variety: 'Indigenous Ethiopian Heirloom varieties',
    bagSize: '60 kg GrainPro lined jute bags',
    availableBags: null,
    warehouseLocation: 'Addis Ababa, Ethiopia',
    lotNumber: ' ETH-2025-LEK',
    certifications: [],
    flavorNotes: ['Tropical Fruit', 'Mango', 'Cocoa', 'Brown Sugar', 'Smooth'],
  },
]
