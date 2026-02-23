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

// CTA templates - rotated for variety
const CTAS: string[] = [
  'Save this for your next sourcing season 📌',
  'Tag a roaster who needs to see this ☕',
  'Which origin is in your lineup? Drop it below 👇',
  'Bookmark this for later 🔖',
  'What questions do you have? Let us know below 👇',
  'Share this with your importing team 📤',
  'Save this and come back when you need it 📌',
  'What\'s your experience? Tell us in the comments 💬',
]

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

  // 3. CTA
  const cta = CTAS[hash % CTAS.length]

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
    const fonts = await getFonts()
    const imageSrc = await heroToDataUri(post.large_image_url)

    const titleLen = post.title.length
    const titleSize = titleLen > 70 ? 38 : titleLen > 50 ? 44 : titleLen > 35 ? 52 : 58

    const imgResponse = new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* ── Full-bleed hero image ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            width={1080}
            height={1080}
            alt=""
            style={{ objectFit: 'cover', width: '1080px', height: '1080px' }}
          />

          {/* ── Bottom gradient (strong, covers bottom 45%) ── */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '1080px',
              height: '540px',
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)',
            }}
          />

          {/* ── Bottom content overlay ── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              bottom: '48px',
              left: '52px',
              right: '52px',
            }}
          >
            {/* Title */}
            <div
              style={{
                display: 'flex',
                color: '#FFFFFF',
                fontFamily: 'Oswald',
                fontWeight: 700,
                fontSize: titleSize,
                lineHeight: 1.15,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              }}
            >
              {post.title}
            </div>

            {/* Thin separator */}
            <div
              style={{
                display: 'flex',
                width: '60px',
                height: '3px',
                backgroundColor: '#B45D38',
                marginTop: '20px',
                marginBottom: '18px',
              }}
            />

            {/* Brand footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontFamily: 'Inconsolata',
                  fontSize: 22,
                  color: 'rgba(255,255,255,0.8)',
                  letterSpacing: '2px',
                }}
              >
                ethiocoffee.co
              </div>
              <div
                style={{
                  display: 'flex',
                  fontFamily: 'Oswald',
                  fontWeight: 500,
                  fontSize: 20,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                Ethio Coffee Export
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
