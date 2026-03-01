/**
 * Shared DHL shipping rate calculation logic.
 * Used by both the DHL rate API route and PayPal create-order for server-side verification.
 */

const DHL_API_BASE = 'https://express.api.dhl.com/mydhlapi'

// Origin: Addis Ababa, Ethiopia
const ORIGIN = {
  countryCode: 'ET',
  cityName: 'Addis Ababa',
  postalCode: '1000',
}

export type ShippingRate = {
  totalPrice: number
  currency: string
  provider: 'dhl' | 'flat-rate'
  productName: string
  estimatedDays: string
}

/**
 * Calculate the flat-rate shipping cost (fallback when DHL credentials are unavailable).
 */
export function getFlatRate(weightGrams: number): ShippingRate {
  const ratePer500g = 45 // USD per 500g
  const floorFee = 45    // minimum shipping fee
  const totalPrice = Math.max(floorFee, Math.ceil(weightGrams / 500) * ratePer500g)
  return {
    totalPrice,
    currency: 'USD',
    provider: 'flat-rate',
    productName: 'Standard International Shipping',
    estimatedDays: '7-14',
  }
}

/**
 * Fetch a shipping rate from DHL Express API, or fall back to flat rate.
 * Returns a ShippingRate on success, or throws on unrecoverable error.
 */
export async function getShippingRate(params: {
  countryCode: string
  cityName: string
  postalCode: string
  weightGrams: number
}): Promise<ShippingRate> {
  const { countryCode, cityName, postalCode, weightGrams } = params

  const DHL_API_KEY = process.env.DHL_API_KEY || ''
  const DHL_API_SECRET = process.env.DHL_API_SECRET || ''

  // Fall back to flat rate if DHL credentials are not configured
  if (!DHL_API_KEY || !DHL_API_SECRET || DHL_API_KEY === 'your_dhl_username_here' || DHL_API_KEY === 'demo-key') {
    return getFlatRate(weightGrams)
  }

  const weight = weightGrams / 1000 // Convert grams to kg

  const auth = Buffer.from(`${DHL_API_KEY}:${DHL_API_SECRET}`).toString('base64')

  const now = new Date()
  const plannedShipDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000) // Ship in 2 days
  const shipDate = plannedShipDate.toISOString().split('T')[0]

  // Scale package dimensions based on weight
  const numSamples = Math.max(1, Math.ceil(weightGrams / 300))
  const length = 20  // cm
  const width = 15   // cm
  const height = Math.min(60, 10 + (numSamples - 1) * 5)

  const searchParams = new URLSearchParams({
    accountNumber: process.env.DHL_ACCOUNT_NUMBER || '',
    originCountryCode: ORIGIN.countryCode,
    originCityName: ORIGIN.cityName,
    originPostalCode: ORIGIN.postalCode,
    destinationCountryCode: countryCode,
    destinationCityName: cityName,
    destinationPostalCode: postalCode,
    weight: weight.toFixed(3),
    weightUnit: 'kg',
    length: length.toString(),
    width: width.toString(),
    height: height.toString(),
    dimensionsUnit: 'CM',
    plannedShippingDate: shipDate,
    isCustomsDeclarable: 'true',
    unitOfMeasurement: 'metric',
  })

  const response = await fetch(`${DHL_API_BASE}/rates?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${auth}`,
      'x-version': '3.2.0',
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('DHL rate error:', response.status, errorText)
    // Fall back to flat rate on DHL API errors
    return getFlatRate(weightGrams)
  }

  const data = await response.json()

  const products = data.products || []
  if (products.length === 0) {
    return getFlatRate(weightGrams)
  }

  // Sort by total price and pick cheapest
  const cheapest = products
    .filter((p: { totalPrice?: Array<{ price: number }> }) => p.totalPrice && p.totalPrice.length > 0)
    .sort((a: { totalPrice: Array<{ price: number }> }, b: { totalPrice: Array<{ price: number }> }) =>
      a.totalPrice[0].price - b.totalPrice[0].price
    )[0]

  if (!cheapest) {
    return getFlatRate(weightGrams)
  }

  const priceEntry = cheapest.totalPrice[0]
  const deliveryDays = cheapest.deliveryCapabilities?.totalTransitDays || '5-10'

  return {
    totalPrice: priceEntry.price,
    currency: priceEntry.priceCurrency || 'USD',
    provider: 'dhl',
    productName: cheapest.productName || 'DHL Express',
    estimatedDays: deliveryDays,
  }
}
