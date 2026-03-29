import { NextRequest, NextResponse } from 'next/server'
import { submitUrlsToIndexNow } from '../../lib/indexnow'

export async function POST(request: NextRequest) {
  // Protect with a secret token stored in env
  const authHeader = request.headers.get('authorization')
  const expectedToken = process.env.INDEXNOW_SECRET

  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { urls?: string[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { urls } = body
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: 'urls array is required' }, { status: 400 })
  }

  // Validate all URLs belong to our domain
  const validUrls = urls.filter(
    (u) =>
      typeof u === 'string' &&
      (u === 'https://www.ethiocoffee.co' || u.startsWith('https://www.ethiocoffee.co/'))
  )

  if (validUrls.length === 0) {
    return NextResponse.json({ error: 'No valid URLs for this domain' }, { status: 400 })
  }

  const result = await submitUrlsToIndexNow(validUrls)

  return NextResponse.json({
    submitted: validUrls.length,
    status: result.status,
    success: result.success,
  })
}
