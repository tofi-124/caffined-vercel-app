export type OfferingSpecifications = {
  grade: string
  screenSize: string
  processingMethod: string
  cropYear: string
  moisture: string
  defectCount: string
  cupScore: string
}

export type Offering = {
  id: string
  name: string
  image_url: string
  desc: string
  profile: string
  origin: string
  specifications: OfferingSpecifications
  isSoldOut?: boolean
}

export const offerings: Offering[] = [
  {
    id: 'yirgacheffe',
    name: 'YIRGACHEFFE GEDEB',
    image_url: 'product-img.png',
    desc: 'Washed Gedeb profile with florals, citrus, and a clean, tea-like finish.',
    profile:
      'In the cup, expect a bright and clean washed profile: jasmine-like florals, lemon/citrus zest, and a light honey sweetness. The body is typically silky and the finish is crisp and refreshing.',
    origin:
      'Gedeb (often associated with the wider Yirgacheffe area) is known for high-altitude lots that cup very clean when washed. Lot character can shift by kebele, washing-station practices, and drying conditions, so the exact notes may vary from shipment to shipment.',
    specifications: {
      grade: 'G1',
      screenSize: '15–18 (typical export screens)',
      processingMethod: 'Washed',
      cropYear: '2025',
      moisture: '≤12% (export target)',
      defectCount: 'Low (Grade 1 standard; lot-dependent)',
      cupScore: '86.0',
    },
    isSoldOut: false,
  },
  {
    id: 'sidamo',
    name: 'SIDAMO',
    image_url: 'product-img.png',
    desc: 'Fruity and sweet with berry notes, balanced acidity, and a cocoa-like finish.',
    profile:
      'Sidamo lots commonly present ripe berry fruit, gentle citrus brightness, and a rounded sweetness that can lean toward cocoa or brown sugar. Expect a medium body with a pleasantly long finish.',
    origin:
      'Sidama coffees come from a broad, diverse growing area. Flavor can vary by woreda and processing style; this offering is positioned as a high-grade, fruit-forward profile suitable for filter or as a lively component in espresso blends.',
    specifications: {
      grade: 'G1',
      screenSize: '15–18 (typical export screens)',
      processingMethod: 'Natural',
      cropYear: '2025',
      moisture: '≤12% (export target)',
      defectCount: 'Low (Grade 1 standard; lot-dependent)',
      cupScore: '86.0',
    },
    isSoldOut: true,
  },
  {
    id: 'harar',
    name: 'HARAR',
    image_url: 'product-img.png',
    desc: 'Bold, fruit-forward natural profile with winey aromatics and a heavier body.',
    profile:
      'Harar-style natural coffees are known for intense aromatics, dried-fruit character, and a fuller, rustic sweetness. The cup can be expressive and heavy-bodied, with a distinctly fruit-driven finish.',
    origin:
      'Harar is traditionally associated with naturally processed coffees from eastern Ethiopia. Natural processing and storage conditions can influence cup clarity, so we treat this as a lot-defined profile rather than a fixed flavor guarantee.',
    specifications: {
      grade: 'G1',
      screenSize: '14–18 (typical export screens)',
      processingMethod: 'Natural',
      cropYear: '2025',
      moisture: '≤12% (export target)',
      defectCount: 'Low (Grade 1 standard; lot-dependent)',
      cupScore: '85.0',
    },
    isSoldOut: true,
  },
  {
    id: 'limu',
    name: 'LIMU',
    image_url: 'product-img.png',
    desc: 'Clean, balanced washed cup with gentle citrus, spice, and caramel sweetness.',
    profile:
      'Limu is often appreciated for balance: a sweet, clean cup with mild-to-medium acidity and notes that can read as citrus, subtle spice, and caramel-like sweetness. Great for customers who prefer clarity without sharp brightness.',
    origin:
      'Limu coffees come from southwest Ethiopia and are commonly washed for a cleaner profile. As with all origins, seasonality and processing details affect flavor and physical specs lot-to-lot.',
    specifications: {
      grade: 'G1',
      screenSize: '15–18 (typical export screens)',
      processingMethod: 'Washed',
      cropYear: '2025',
      moisture: '≤12% (export target)',
      defectCount: 'Low (Grade 1 standard; lot-dependent)',
      cupScore: '84.5',
    },
    isSoldOut: true,
  },
  {
    id: 'guji',
    name: 'GUJI',
    image_url: 'product-img.png',
    desc: 'High-aroma Guji profile with florals, stone fruit, and a sweet, clean finish.',
    profile:
      'Guji coffees can be intensely aromatic. Expect floral lift (often jasmine-like), ripe stone fruit, and a syrupy sweetness. Natural lots tend to amplify fruit; washed lots emphasize clarity.',
    origin:
      'Guji is a zone in Oromia with many micro-regions producing standout specialty coffee. We treat this as a profile-led offering: final cup character depends on the specific washing station, sorting, and drying protocol.',
    specifications: {
      grade: 'G1',
      screenSize: '15–18 (typical export screens)',
      processingMethod: 'Natural',
      cropYear: '2025',
      moisture: '≤12% (export target)',
      defectCount: 'Low (Grade 1 standard; lot-dependent)',
      cupScore: '87.0',
    },
    isSoldOut: true,
  },
  {
    id: 'lekempti',
    name: 'LEKEMPTI',
    image_url: 'product-img.png',
    desc: 'Comforting, medium-bodied cup with cocoa, mild fruit, and gentle spice.',
    profile:
      'Lekempti/Wollega-style coffees are typically medium-bodied with cocoa-like depth, mild fruit, and a gentle spice note. This is a dependable profile for roasters seeking sweetness and structure rather than high-toned florals.',
    origin:
      'Lekempti is associated with western Ethiopia (Wollega). Washed processing generally increases clarity and sweetness; final cup and physical specs depend on the specific cooperative/collector network and preparation.',
    specifications: {
      grade: 'G1',
      screenSize: '14–18 (typical export screens)',
      processingMethod: 'Washed',
      cropYear: '2025',
      moisture: '≤12% (export target)',
      defectCount: 'Low (Grade 1 standard; lot-dependent)',
      cupScore: '84.5',
    },
    isSoldOut: true,
  },
]
