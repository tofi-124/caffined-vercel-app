import { ImageResponse } from 'next/og'
import { NextResponse } from 'next/server'
import { posts } from '@/app/data/data'
import sharp from 'sharp'
import { join } from 'path'
import { readFile } from 'fs/promises'

export const runtime = 'nodejs'

const SITE = 'https://www.ethiocoffee.co'

/* ---------- font loader (cached) ---------- */
let cachedFonts: {
  oswaldBold: ArrayBuffer
  oswaldMedium: ArrayBuffer
  inconsolata: ArrayBuffer
} | null = null

async function getFonts() {
  if (cachedFonts) return cachedFonts

  async function fetchFont(
    family: string,
    weight: number
  ): Promise<ArrayBuffer> {
    const api = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`
    const css = await fetch(api, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
      },
    }).then((r) => r.text())

    const match = css.match(/src:\s*url\(([^)]+)\)/)
    if (!match?.[1]) throw new Error(`Font URL not found for ${family}:${weight}`)
    return fetch(match[1]).then((r) => r.arrayBuffer())
  }

  const [oswaldBold, oswaldMedium, inconsolata] = await Promise.all([
    fetchFont('Oswald', 700),
    fetchFont('Oswald', 500),
    fetchFont('Inconsolata', 400),
  ])

  cachedFonts = { oswaldBold, oswaldMedium, inconsolata }
  return cachedFonts
}

/* ---------- convert any image to JPEG data-URI ---------- */
async function heroToDataUri(imageRelPath: string): Promise<string> {
  const absPath = join(process.cwd(), 'public', 'images', imageRelPath)
  const raw = await readFile(absPath)
  const jpegBuf = await sharp(raw)
    .resize(1080, 1080, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 92 })
    .toBuffer()
  return `data:image/jpeg;base64,${jpegBuf.toString('base64')}`
}

/* ---------- load logo as trimmed PNG data-URI ---------- */
let cachedLogo: string | null = null
async function getLogoDataUri(): Promise<string> {
  if (cachedLogo) return cachedLogo
  const logoPath = join(process.cwd(), 'public', 'images', 'new-logo.png')
  const raw = await readFile(logoPath)
  // Trim transparent whitespace around the logo so it sits flush
  const trimmed = await sharp(raw).trim().png().toBuffer()
  cachedLogo = `data:image/png;base64,${trimmed.toString('base64')}`
  return cachedLogo
}

/* ---------- build Instagram caption ---------- */

// Hook templates — rotated based on slug hash for variety
const HOOKS: ((title: string) => string)[] = [
  (t) => `${t} 👇`,
  (t) => `Here's what you need to know about ${extractCoreTopic(t).toLowerCase()}`,
  (t) => `${t}. Let's break it down ⬇️`,
  (t) => `Everything buyers need to know about ${extractCoreTopic(t).toLowerCase()}`,
  (t) => `The real guide to ${extractCoreTopic(t).toLowerCase()} 👇`,
  (t) => `${t}. Save this for later ☕`,
]

// Category-aware CTA map
const CTA_MAP: Record<string, string[]> = {
  sourcing: [
    'Save this for your next sourcing season 📌',
    'Share this with your importing team 📤',
    'Planning your next order? Bookmark this 🔖',
  ],
  comparison: [
    'Which origin is in your lineup? Drop it below 👇',
    'Have you tried both? Let us know your pick 👇',
    'Tag a buyer who sources both origins ☕',
  ],
  brewing: [
    'Try this method and let us know how it went ☕',
    'Tag someone who needs to level up their brew 👇',
    'Save this for your next brew session 📌',
  ],
  processing: [
    'Save this for your next quality review 📌',
    'Share this with your QC team 📤',
    'Which processing method do you prefer? 👇',
  ],
  trade: [
    'Bookmark this before your next contract negotiation 🔖',
    'Share this with your sourcing team 📤',
    'Save this for reference 📌',
  ],
  market: [
    'How is this affecting your buying plan? 👇',
    'Save this for your next pricing review 📌',
    'Share this with your trading desk 📤',
  ],
  culture: [
    'Share this with a fellow coffee lover ☕',
    'Save this for your coffee knowledge library 📌',
    'Tag someone who appreciates coffee heritage 👇',
  ],
  roasting: [
    'Tag a roaster who needs to see this ☕',
    'Save this for your next roast profile session 📌',
    'Which roast level works best for you? 👇',
  ],
  sustainability: [
    'How are you addressing this in your supply chain? 👇',
    'Save this for your sustainability planning 📌',
    'Share this with your sourcing partners 📤',
  ],
  general: [
    'Save this for later 📌',
    'Share this with someone in the coffee trade ☕',
    'Bookmark this for reference 🔖',
  ],
}

function getCategoryKey(category: string): string {
  const cat = category.toLowerCase()
  if (cat.includes('comparison') || cat.includes('origin comparison')) return 'comparison'
  if (cat.includes('brewing') || cat.includes('equipment') || cat.includes('how-to')) return 'brewing'
  if (cat.includes('roasting') || cat.includes('roaster')) return 'roasting'
  if (cat.includes('processing') || cat.includes('quality control') || cat.includes('storage')) return 'processing'
  if (cat.includes('contract') || cat.includes('payment') || cat.includes('trade guidance') || cat.includes('export guide')) return 'trade'
  if (cat.includes('market') || cat.includes('pricing') || cat.includes('trade data')) return 'market'
  if (cat.includes('climate') || cat.includes('sustainability') || cat.includes('gender') || cat.includes('social impact')) return 'sustainability'
  if (cat.includes('culture') || cat.includes('heritage')) return 'culture'
  if (cat.includes('sourcing') || cat.includes('harvest') || cat.includes('buying') || cat.includes('organic') || cat.includes('certification')) return 'sourcing'
  return 'general'
}

function pickCta(category: string, hash: number): string {
  const key = getCategoryKey(category)
  const pool = CTA_MAP[key]
  return pool[hash % pool.length]
}

// Simple hash from slug to pick template index consistently
function slugHash(slug: string): number {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = ((h << 5) - h + slug.charCodeAt(i)) | 0
  return Math.abs(h)
}

// Extract the core topic from a title (strip common patterns)
function extractCoreTopic(title: string): string {
  return title
    .replace(/:\s*A Buyer'?s? Comparison/i, '')
    .replace(/:\s*A Complete Guide/i, '')
    .replace(/:\s*Processing & Sourcing Guide/i, '')
    .replace(/for Buyers$/i, '')
    .replace(/for Importers$/i, '')
    .replace(/Guide$/i, '')
    .trim()
}

// Extract short, clean hashtags from SEO keyword phrases
function extractHashtags(keywords: string[], category: string): string[] {
  const seen = new Set<string>()
  const tags: string[] = []

  // Always include brand/industry tags first
  const brandTags = ['EthioCoffee', 'EthiopianCoffee', 'SpecialtyCoffee', 'GreenCoffee', 'CoffeeImporter']
  brandTags.forEach((t) => { seen.add(t.toLowerCase()); tags.push('#' + t) })

  // Extract meaningful individual words from keyword phrases
  const stopWords = new Set(['the', 'for', 'and', 'how', 'what', 'why', 'with', 'from', 'best', 'does', 'this', 'that', 'about', 'into', 'also', 'than', 'coffee'])

  for (const kw of keywords) {
    // Split compound phrases into individual words
    const words = kw.split(/\s+/)
    for (const raw of words) {
      const w = raw.replace(/[^a-zA-Z0-9]/g, '')
      if (w.length < 4 || stopWords.has(w.toLowerCase()) || seen.has(w.toLowerCase())) continue
      seen.add(w.toLowerCase())
      // Capitalize first letter for readability
      tags.push('#' + w.charAt(0).toUpperCase() + w.slice(1))
      if (tags.length >= 22) break
    }
    if (tags.length >= 22) break
  }

  // Add category-derived tags
  const catParts = category.split('/')
  for (const part of catParts) {
    const clean = part.trim().replace(/\s+/g, '')
    if (clean && !seen.has(clean.toLowerCase())) {
      seen.add(clean.toLowerCase())
      tags.push('#' + clean)
    }
    if (tags.length >= 25) break
  }

  // Add a few broad reach tags
  const broadTags = ['CoffeeBusiness', 'CoffeeIndustry', 'CoffeeRoaster', 'CoffeeSourcing']
  for (const t of broadTags) {
    if (!seen.has(t.toLowerCase()) && tags.length < 28) {
      seen.add(t.toLowerCase())
      tags.push('#' + t)
    }
  }

  return tags
}

// Build a short punchy body from the SEO desc
function buildBody(desc: string): string {
  // Try to extract key points from the desc
  // Most descs follow: "[topic]: [point1], [point2], [point3], and [point4]."
  const colonIdx = desc.indexOf(':')
  if (colonIdx > 0 && colonIdx < desc.length - 20) {
    const afterColon = desc.slice(colonIdx + 1).trim()
    // Split on commas and 'and'
    const points = afterColon
      .replace(/,\s*and\s+/g, ', ')
      .replace(/\.\s*$/, '')
      .split(/,\s*/)
      .map((p) => p.trim())
      .filter((p) => p.length > 3 && p.length < 60)
      .slice(0, 4)

    if (points.length >= 2) {
      return points.map((p) => `→ ${p.charAt(0).toUpperCase() + p.slice(1)}`).join('\n')
    }
  }

  // Fallback: just use a shortened desc
  const short = desc.length > 180 ? desc.slice(0, 177) + '...' : desc
  return short
}

function buildCaption(post: {
  title: string
  desc: string
  slug?: string
  category?: string
  keywords?: string[]
}) {
  const slug = post.slug || ''
  const hash = slugHash(slug)
  const link = `${SITE}/insights/${slug}`
  const category = post.category?.split('/')[0]?.trim() || ''

  // 1. Hook (first line — shows before "...more")
  const hook = HOOKS[hash % HOOKS.length](post.title)

  // 2. Body (short bullet-style value points)
  const body = buildBody(post.desc)

  // 3. CTA (category-aware)
  const cta = pickCta(post.category || '', hash)

  // 4. Link
  const linkLine = `Full guide → ${link}`

  // 5. Hashtags (clean, short)
  const hashtags = extractHashtags(post.keywords ?? [], post.category || '')

  return [
    hook,
    '',
    body,
    '',
    cta,
    '',
    linkLine,
    '',
    '·',
    '·',
    '·',
    '',
    hashtags.join(' '),
  ].join('\n')
}

/* ========== ROUTE ========== */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const url = new URL(request.url)
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
      return new Response('Insight not found', { status: 404 })
    }

    /* ── Caption-only mode ── */
    if (url.searchParams.get('caption') === '1') {
      return NextResponse.json({
        slug,
        title: post.title,
        link: `${SITE}/insights/${post.slug}`,
        caption: buildCaption(post),
        image: `${SITE}/api/insta/${slug}`,
      })
    }

    /* ── Image generation ── */
    const [fonts, imageSrc, logoSrc] = await Promise.all([
      getFonts(),
      heroToDataUri(post.large_image_url),
      getLogoDataUri(),
    ])

    const titleLen = post.title.length
    const titleSize = titleLen > 70 ? 36 : titleLen > 50 ? 42 : titleLen > 35 ? 48 : 54

    // Extract category label
    const categoryLabel = (post.category?.split('/')[0]?.trim() || '').toUpperCase()

    const imgResponse = new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '1080px',
            height: '1080px',
            position: 'relative',
          }}
        >
          {/* ── Full-bleed hero photo ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            width={1080}
            height={1080}
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1080px',
              height: '1080px',
              objectFit: 'cover',
            }}
          />

          {/* ── Top: thin terracotta accent stripe ── */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1080px',
              height: '5px',
              backgroundColor: '#B45D38',
            }}
          />

          {/* ── Top-left: category pill ── */}
          {categoryLabel ? (
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                top: '20px',
                left: '40px',
                backgroundColor: 'rgba(15,37,48,0.75)',
                padding: '8px 18px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontFamily: 'Inconsolata',
                  fontSize: 14,
                  color: '#B45D38',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                }}
              >
                {categoryLabel}
              </div>
            </div>
          ) : null}

          {/* ── Top-right: logo ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={100}
            height={100}
            alt=""
            style={{
              position: 'absolute',
              top: '12px',
              right: '40px',
              width: '100px',
              height: '100px',
              objectFit: 'contain',
              opacity: 0.7,
            }}
          />

          {/* ── Bottom gradient overlay (navy, not black) ── */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '1080px',
              height: '520px',
              background: 'linear-gradient(to bottom, rgba(15,37,48,0) 0%, rgba(15,37,48,0.85) 55%, rgba(15,37,48,0.97) 100%)',
            }}
          />

          {/* ── Bottom content overlay ── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '1080px',
              padding: '0 48px 48px 48px',
            }}
          >
            {/* Terracotta accent bar */}
            <div
              style={{
                display: 'flex',
                width: '52px',
                height: '4px',
                backgroundColor: '#B45D38',
                marginBottom: '20px',
              }}
            />

            {/* Title */}
            <div
              style={{
                display: 'flex',
                color: '#FFF9F5',
                fontFamily: 'Oswald',
                fontWeight: 700,
                fontSize: titleSize,
                lineHeight: 1.15,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                maxWidth: '980px',
              }}
            >
              {post.title}
            </div>

            {/* Spacer */}
            <div style={{ display: 'flex', height: '20px' }} />

            {/* Bottom row: brand + date */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {/* Teal dot + brand */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4A9B9B',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    fontFamily: 'Inconsolata',
                    fontSize: 16,
                    color: 'rgba(255,249,245,0.65)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  ethiocoffee.co
                </div>
              </div>

              {/* Date */}
              <div
                style={{
                  display: 'flex',
                  fontFamily: 'Inconsolata',
                  fontSize: 15,
                  color: 'rgba(255,249,245,0.4)',
                }}
              >
                {post.date}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1080,
        fonts: [
          {
            name: 'Oswald',
            data: fonts.oswaldBold,
            weight: 700 as const,
            style: 'normal' as const,
          },
          {
            name: 'Oswald',
            data: fonts.oswaldMedium,
            weight: 500 as const,
            style: 'normal' as const,
          },
          {
            name: 'Inconsolata',
            data: fonts.inconsolata,
            weight: 400 as const,
            style: 'normal' as const,
          },
        ],
      }
    )

    if (url.searchParams.get('download') === '1') {
      imgResponse.headers.set(
        'Content-Disposition',
        `attachment; filename="insta-${slug}.png"`
      )
    }

    return imgResponse
  } catch (error) {
    console.error('Instagram image generation error:', error)
    return new Response(
      `Error generating image: ${error instanceof Error ? error.message : error}`,
      { status: 500 }
    )
  }
}
