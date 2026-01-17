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
  specifications: OfferingSpecifications
}

export const offerings: Offering[] = [
  {
    id: 'yirgacheffe',
    name: 'Ethiopia Gedeb 1 Washed Reku Habtamu',
    image_url: 'black.png',
    desc: 'Bright acidity, floral aroma with citrus notes',
    specifications: {
      grade: 'G1',
      screenSize: '15+',
      processingMethod: 'Washed',
      cropYear: '2024/25',
      moisture: '10.5%',
      defectCount: '<5 per 300g',
      cupScore: '86.5',
    },
  },
  {
    id: 'sidamo',
    name: 'SIDAMO',
    image_url: 'frappe.png',
    desc: 'Wine-like acidity with berry and citrus notes',
    specifications: {
      grade: 'G1',
      screenSize: '16+',
      processingMethod: 'Natural',
      cropYear: '2024/25',
      moisture: '10.2%',
      defectCount: '<3 per 300g',
      cupScore: '87.5',
    },
  },
  {
    id: 'harar',
    name: 'HARAR',
    image_url: 'nitro.png',
    desc: 'Rich body with fruity and winey characteristics',
    specifications: {
      grade: 'G1',
      screenSize: '15+',
      processingMethod: 'Natural',
      cropYear: '2024/25',
      moisture: '10.7%',
      defectCount: '<6 per 300g',
      cupScore: '85.0',
    },
  },
  {
    id: 'limu',
    name: 'LIMU',
    image_url: 'white.png',
    desc: 'Mild, balanced with winey and spicy notes',
    specifications: {
      grade: 'G1',
      screenSize: '15+',
      processingMethod: 'Washed',
      cropYear: '2024/25',
      moisture: '10.4%',
      defectCount: '<4 per 300g',
      cupScore: '84.5',
    },
  },
  {
    id: 'guji',
    name: 'GUJI',
    image_url: 'brew.png',
    desc: 'Complex flavor with floral jasmine notes',
    specifications: {
      grade: 'G1',
      screenSize: '16+',
      processingMethod: 'Natural',
      cropYear: '2024/25',
      moisture: '10.1%',
      defectCount: '<2 per 300g',
      cupScore: '88.0',
    },
  },
  {
    id: 'lekempti',
    name: 'LEKEMPTI',
    image_url: 'mocha.png',
    desc: 'Medium body with earthy and fruity nuances',
    specifications: {
      grade: 'G1',
      screenSize: '15+',
      processingMethod: 'Washed',
      cropYear: '2024/25',
      moisture: '10.3%',
      defectCount: '<5 per 300g',
      cupScore: '85.5',
    },
  },
]
