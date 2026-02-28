import { NextRequest, NextResponse } from 'next/server'

// DHL Express MyDHL API credentials (basicAuth only for /rates endpoint)
const DHL_API_KEY = process.env.DHL_API_KEY!
const DHL_API_SECRET = process.env.DHL_API_SECRET!
const DHL_API_BASE = 'https://express.api.dhl.com/mydhlapi'

// Origin: Addis Ababa, Ethiopia
const ORIGIN = {
  countryCode: 'ET',
  cityName: 'Addis Ababa',
  postalCode: '1000',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { countryCode, cityName, postalCode, weightGrams } = body

    if (!countryCode || !cityName || !postalCode || !weightGrams) {
      return NextResponse.json(
        { error: 'Missing required fields: countryCode, cityName, postalCode, weightGrams' },
        { status: 400 }
      )
    }

    const weight = weightGrams / 1000 // Convert grams to kg
    if (weight <= 0) {
      return NextResponse.json({ error: 'Invalid weight' }, { status: 400 })
    }

    // Verify DHL credentials are configured — fall back to flat rate if not
    if (!DHL_API_KEY || !DHL_API_SECRET || DHL_API_KEY === 'your_dhl_username_here' || DHL_API_KEY === 'demo-key') {
      const ratePer500g = 45 // USD per 500g
      const floorFee = 45   // minimum shipping fee
      const totalPrice = Math.max(floorFee, Math.ceil(weightGrams / 500) * ratePer500g)
      return NextResponse.json({
        totalPrice,
        currency: 'USD',
        provider: 'flat-rate',
        productName: 'Standard International Shipping',
        estimatedDays: '7-14',
      })
    }

    // DHL Express Rate Request
    const auth = Buffer.from(`${DHL_API_KEY}:${DHL_API_SECRET}`).toString('base64')

    const now = new Date()
    const plannedShipDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000) // Ship in 2 days
    const shipDate = plannedShipDate.toISOString().split('T')[0]

    // Scale package dimensions based on weight
    // Each 300g sample bag is ~18x12x8 cm; stack vertically for multiple samples
    const numSamples = Math.max(1, Math.ceil(weightGrams / 300))
    const length = 20  // cm
    const width = 15   // cm
    const height = Math.min(60, 10 + (numSamples - 1) * 5)  // grows with sample count, max 60cm

    const params = new URLSearchParams({
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

    const response = await fetch(`${DHL_API_BASE}/rates?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
        'x-version': '3.2.0',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('DHL rate error:', response.status, errorText)
      return NextResponse.json(
        { error: 'Unable to calculate shipping rate. Please try again or contact us for a quote.' },
        { status: 502 }
      )
    }

    const data = await response.json()

    // Find the cheapest express product
    const products = data.products || []
    if (products.length === 0) {
      return NextResponse.json(
        { error: 'No shipping options available for this destination. Please contact us for a quote.' },
        { status: 404 }
      )
    }

    // Sort by total price and pick cheapest
    const cheapest = products
      .filter((p: { totalPrice?: Array<{ price: number }> }) => p.totalPrice && p.totalPrice.length > 0)
      .sort((a: { totalPrice: Array<{ price: number }> }, b: { totalPrice: Array<{ price: number }> }) =>
        a.totalPrice[0].price - b.totalPrice[0].price
      )[0]

    if (!cheapest) {
      return NextResponse.json(
        { error: 'No shipping options available for this destination. Please contact us for a quote.' },
        { status: 404 }
      )
    }

    const priceEntry = cheapest.totalPrice[0]
    const deliveryDays = cheapest.deliveryCapabilities?.totalTransitDays || '5-10'

    return NextResponse.json({
      totalPrice: priceEntry.price,
      currency: priceEntry.priceCurrency || 'USD',
      provider: 'dhl',
      productName: cheapest.productName || 'DHL Express',
      estimatedDays: deliveryDays,
    })
  } catch (error) {
    console.error('DHL rate calculation error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate shipping rate' },
      { status: 500 }
    )
  }
}
