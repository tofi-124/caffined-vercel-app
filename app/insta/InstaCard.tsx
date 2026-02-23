'use client'

import { useState, useCallback } from 'react'
import type { Post } from '@/app/data/data'

const SITE = 'https://www.ethiocoffee.co'

/* ---------- Instagram caption builder ---------- */

const HOOKS: ((title: string) => string)[] = [
  (t) => `${t} 👇`,
  (t) => `Here's what you need to know about ${extractCoreTopic(t).toLowerCase()}`,
  (t) => `${t}. Let's break it down ⬇️`,
  (t) => `Everything buyers need to know about ${extractCoreTopic(t).toLowerCase()}`,
  (t) => `The real guide to ${extractCoreTopic(t).toLowerCase()} 👇`,
  (t) => `${t}. Save this for later ☕`,
]

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

function slugHash(slug: string): number {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = ((h << 5) - h + slug.charCodeAt(i)) | 0
  return Math.abs(h)
}

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

function extractHashtags(keywords: string[], category: string): string[] {
  const seen = new Set<string>()
  const tags: string[] = []

  const brandTags = ['EthioCoffee', 'EthiopianCoffee', 'SpecialtyCoffee', 'GreenCoffee', 'CoffeeImporter']
  brandTags.forEach((t) => { seen.add(t.toLowerCase()); tags.push('#' + t) })

  const stopWords = new Set(['the', 'for', 'and', 'how', 'what', 'why', 'with', 'from', 'best', 'does', 'this', 'that', 'about', 'into', 'also', 'than', 'coffee'])

  for (const kw of keywords) {
    const words = kw.split(/\s+/)
    for (const raw of words) {
      const w = raw.replace(/[^a-zA-Z0-9]/g, '')
      if (w.length < 4 || stopWords.has(w.toLowerCase()) || seen.has(w.toLowerCase())) continue
      seen.add(w.toLowerCase())
      tags.push('#' + w.charAt(0).toUpperCase() + w.slice(1))
      if (tags.length >= 22) break
    }
    if (tags.length >= 22) break
  }

  const catParts = category.split('/')
  for (const part of catParts) {
    const clean = part.trim().replace(/\s+/g, '')
    if (clean && !seen.has(clean.toLowerCase())) {
      seen.add(clean.toLowerCase())
      tags.push('#' + clean)
    }
    if (tags.length >= 25) break
  }

  const broadTags = ['CoffeeBusiness', 'CoffeeIndustry', 'CoffeeRoaster', 'CoffeeSourcing']
  for (const t of broadTags) {
    if (!seen.has(t.toLowerCase()) && tags.length < 28) {
      seen.add(t.toLowerCase())
      tags.push('#' + t)
    }
  }

  return tags
}

function buildBody(desc: string): string {
  const colonIdx = desc.indexOf(':')
  if (colonIdx > 0 && colonIdx < desc.length - 20) {
    const afterColon = desc.slice(colonIdx + 1).trim()
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
  const short = desc.length > 180 ? desc.slice(0, 177) + '...' : desc
  return short
}

function buildCaption(post: Post) {
  const slug = post.slug || ''
  const hash = slugHash(slug)
  const category = post.category?.split('/')[0]?.trim() || ''

  const hook = HOOKS[hash % HOOKS.length](post.title)
  const body = buildBody(post.desc)
  const cta = pickCta(post.category || '', hash)
  const link = `${SITE}/insights/${slug}`
  const linkLine = `Full guide → ${link}`
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

export default function InstaCard({ post }: { post: Post }) {
  const [copiedCaption, setCopiedCaption] = useState(false)
  const [showCaption, setShowCaption] = useState(false)
  const [sharing, setSharing] = useState(false)
  const caption = buildCaption(post)
  const imageUrl = `/api/insta/${post.slug}`

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
  }

  const handleCopyCaption = async () => {
    await copyToClipboard(caption)
    setCopiedCaption(true)
    setTimeout(() => setCopiedCaption(false), 2500)
  }

  /** Share to Instagram via Web Share API (mobile) or fallback (desktop) */
  const handleShareToInstagram = useCallback(async () => {
    setSharing(true)
    try {
      // Fetch the image as a blob
      const res = await fetch(imageUrl)
      const blob = await res.blob()
      const file = new File([blob], `insta-${post.slug}.png`, { type: 'image/png' })

      // Copy caption to clipboard so user can paste it in Instagram
      await copyToClipboard(caption)

      // Use Web Share API to open native share sheet with the image
      // On mobile this lets you pick Instagram directly with the image pre-loaded
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: post.title,
          text: caption,
          files: [file],
        })
      } else {
        // Fallback for browsers that don't support sharing files
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = `insta-${post.slug}.png`
        a.click()
        URL.revokeObjectURL(a.href)
        alert(
          '✅ Image downloaded & caption copied to clipboard!\n\n' +
          'Your browser doesn\'t support direct sharing.\n' +
          '1. Open Instagram and create a new post\n' +
          '2. Upload the downloaded image\n' +
          '3. Paste the caption (Ctrl+V / Cmd+V)'
        )
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Share failed:', err)
      }
    } finally {
      setSharing(false)
    }
  }, [imageUrl, caption, post.slug, post.title])

  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100'>
      {/* Image preview */}
      <div className='relative'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={post.title}
          loading='lazy'
          className='w-full aspect-square'
        />
      </div>

      {/* Actions area */}
      <div className='p-5 space-y-4'>
        {/* Title */}
        <h3 className='font-bold text-base leading-snug text-dark line-clamp-2'>
          {post.title}
        </h3>

        {/* Primary action: Share to Instagram */}
        <button
          onClick={handleShareToInstagram}
          disabled={sharing}
          className='w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-3 rounded-xl font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-60 shadow-md'
        >
          <svg width='22' height='22' viewBox='0 0 24 24' fill='white'>
            <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/>
          </svg>
          {sharing ? 'Preparing...' : 'Share to Instagram'}
        </button>

        {/* Secondary actions */}
        <div className='flex gap-2'>
          <a
            href={`${imageUrl}?download=1`}
            className='flex-1 text-center bg-dark text-white px-3 py-2.5 rounded-lg font-bold text-sm hover:bg-dark/90 transition-colors'
          >
            ↓ Save Image
          </a>
          <button
            onClick={handleCopyCaption}
            className={`flex-1 px-3 py-2.5 rounded-lg font-bold text-sm transition-all ${
              copiedCaption
                ? 'bg-secondary text-white'
                : 'bg-accent text-white hover:bg-accent/90'
            }`}
          >
            {copiedCaption ? '✓ Copied!' : '📋 Copy Caption'}
          </button>
        </div>

        {/* Caption preview toggle */}
        <button
          onClick={() => setShowCaption(!showCaption)}
          className='w-full text-xs text-gray-400 hover:text-dark transition-colors flex items-center gap-2'
        >
          <span className='flex-1 border-t border-gray-200' />
          <span>{showCaption ? '▲ Hide caption' : '▼ Preview caption'}</span>
          <span className='flex-1 border-t border-gray-200' />
        </button>

        {showCaption && (
          <div className='relative'>
            <pre className='text-xs text-gray-600 bg-gray-50 p-4 rounded-lg whitespace-pre-wrap max-h-64 overflow-y-auto border border-gray-200 font-inconsolata'>
              {caption}
            </pre>
            <button
              onClick={handleCopyCaption}
              className='absolute top-2 right-2 bg-white border border-gray-200 text-gray-500 hover:text-dark px-2 py-1 rounded text-xs shadow-sm transition-colors'
            >
              {copiedCaption ? '✓' : 'Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
