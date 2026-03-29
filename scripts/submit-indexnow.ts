/**
 * Submit all site URLs to IndexNow for immediate indexing.
 *
 * Usage:
 *   npx tsx scripts/submit-indexnow.ts
 *   npx tsx scripts/submit-indexnow.ts --dry-run   (preview URLs without submitting)
 */

import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import { offerings } from '../app/data/offerings'
import { posts } from '../app/data/data'
import { newsArticles } from '../app/data/news'

// Load .env.local if it exists (on Vercel, env vars are injected directly)
const envPath = resolve(__dirname, '..', '.env.local')
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIndex = trimmed.indexOf('=')
    if (eqIndex === -1) continue
    const key = trimmed.slice(0, eqIndex).trim()
    const val = trimmed.slice(eqIndex + 1).trim()
    if (!process.env[key]) process.env[key] = val
  }
}

const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY
if (!INDEXNOW_KEY) {
  console.error('❌ INDEXNOW_API_KEY env var is required')
  process.exit(1)
}
const SITE_HOST = 'www.ethiocoffee.co'
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`
const BASE_URL = `https://${SITE_HOST}`

function getAllUrls(): string[] {
  const staticPaths = [
    '',
    '/ethiopian-coffee-exporter',
    '/about',
    '/offerings',
    '/ordering-info',
    '/insights',
    '/contact-us',
    '/ethiopia-coffee-export-news',
    '/ethiopian-green-coffee-beans',
    '/buy-ethiopian-coffee-wholesale',
    '/coffee-grading-ethiopia',
    '/ethiopian-coffee-yirgacheffe',
    '/organic-ethiopian-coffee-export',
    '/ethiopian-coffee-sidamo',
    '/ethiopian-coffee-guji',
    '/ethiopian-coffee-harar',
    '/ethiopian-coffee-limu',
    '/ethiopian-coffee-jimma',
    '/terms',
  ]

  return [
    ...staticPaths.map((p) => `${BASE_URL}${p}`),
    ...offerings.map((o) => `${BASE_URL}/product/${o.id}`),
    ...posts.map((p) => `${BASE_URL}/insights/${p.slug}`),
    ...newsArticles.map((a) => `${BASE_URL}/ethiopia-coffee-export-news/${a.slug}`),
  ]
}

async function submitToIndexNow(urls: string[]) {
  console.log(`\n📤 Submitting ${urls.length} URLs to IndexNow...\n`)

  // Submit to Bing directly so it appears in Bing Webmaster Tools
  const response = await fetch('https://www.bing.com/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  })

  console.log(`Response status: ${response.status} ${response.statusText}`)

  if (response.ok) {
    console.log('✅ All URLs submitted successfully!')
  } else {
    const body = await response.text()
    console.error('❌ Submission failed:', body)
  }
}

async function main() {
  const dryRun = process.argv.includes('--dry-run')

  console.log('🔍 Collecting all site URLs...')
  const urls = getAllUrls()
  console.log(`Found ${urls.length} URLs\n`)

  if (dryRun) {
    console.log('DRY RUN — URLs that would be submitted:\n')
    urls.forEach((url) => console.log(`  ${url}`))
    console.log(`\nTotal: ${urls.length} URLs`)
    return
  }

  await submitToIndexNow(urls)
}

main().catch(console.error)
