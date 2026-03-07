import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '../../lib/rate-limit'

const INDEXNOW_KEY = '2b291c7d071cbc2adf71a93fd4d239a2'
const SITE_HOST = 'www.ethiocoffee.co'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

/**
 * POST /api/indexnow
 * Body: { urls?: string[] }
 * - If urls provided, submits those URLs.
 * - If no urls, fetches the sitemap and submits all URLs.
 *
 * Requires Authorization header: Bearer <INDEXNOW_ADMIN_SECRET>
 */
export async function POST(request: NextRequest) {
  // Authenticate with a server-side secret
  const adminSecret = process.env.INDEXNOW_ADMIN_SECRET
  if (!adminSecret) {
    return NextResponse.json(
      { error: 'INDEXNOW_ADMIN_SECRET not configured' },
      { status: 500 }
    )
  }

  const authHeader = request.headers.get('authorization')
  if (!authHeader || authHeader !== `Bearer ${adminSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Rate limit: 3 submissions per minute
  const ip = getClientIp(request)
  const { allowed } = rateLimit(`indexnow:${ip}`, 3, 60_000)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json().catch(() => ({}))
    let urls: string[] = body.urls || []

    // If no URLs provided, fetch from sitemap
    if (urls.length === 0) {
      const sitemapRes = await fetch(`https://${SITE_HOST}/sitemap.xml`)
      if (sitemapRes.ok) {
        const sitemapText = await sitemapRes.text()
        const locMatches = sitemapText.match(/<loc>(.*?)<\/loc>/g)
        if (locMatches) {
          urls = locMatches.map((m) => m.replace(/<\/?loc>/g, ''))
        }
      }
    }

    if (urls.length === 0) {
      return NextResponse.json(
        { error: 'No URLs to submit' },
        { status: 400 }
      )
    }

    // IndexNow accepts up to 10,000 URLs per request
    const payload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls.slice(0, 10_000),
    }

    const indexNowRes = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })

    return NextResponse.json({
      success: true,
      status: indexNowRes.status,
      submitted: payload.urlList.length,
    })
  } catch (error) {
    console.error('IndexNow submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit URLs' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/indexnow
 * Returns the IndexNow key for verification purposes.
 */
export async function GET() {
  return new NextResponse(INDEXNOW_KEY, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
