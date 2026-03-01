import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '../../../lib/rate-limit'
import { getShippingRate } from '../../../lib/dhl'

export async function POST(request: NextRequest) {
  // Rate limit: 15 rate lookups per IP per minute
  const ip = getClientIp(request)
  const { allowed } = rateLimit(`dhl-rate:${ip}`, 15, 60_000)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 })
  }

  try {
    const body = await request.json()
    const { countryCode, cityName, postalCode, weightGrams } = body

    if (!countryCode || !cityName || !postalCode || !weightGrams) {
      return NextResponse.json(
        { error: 'Missing required fields: countryCode, cityName, postalCode, weightGrams' },
        { status: 400 }
      )
    }

    // Validate countryCode is 2 uppercase letters
    if (typeof countryCode !== 'string' || !/^[A-Z]{2}$/.test(countryCode)) {
      return NextResponse.json({ error: 'Invalid country code. Must be 2 uppercase letters (e.g., US).' }, { status: 400 })
    }

    // Validate weightGrams is a positive number with an upper bound
    const numericWeight = Number(weightGrams)
    if (!Number.isFinite(numericWeight) || numericWeight <= 0) {
      return NextResponse.json({ error: 'Invalid weight' }, { status: 400 })
    }
    if (numericWeight > 100_000) {
      return NextResponse.json({ error: 'Weight exceeds maximum (100kg). Please contact us for large orders.' }, { status: 400 })
    }

    const rate = await getShippingRate({ countryCode, cityName, postalCode, weightGrams: numericWeight })
    return NextResponse.json(rate)
  } catch (error) {
    console.error('DHL rate calculation error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate shipping rate' },
      { status: 500 }
    )
  }
}
