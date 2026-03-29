/**
 * Auto-submit new/changed URLs to Bing IndexNow after each build.
 * Fetches the live sitemap to detect which URLs are new, then only submits those.
 *
 * Runs automatically via postbuild. Can also be used manually:
 *   npx tsx scripts/submit-indexnow.ts --all       (force submit all URLs)
 *   npx tsx scripts/submit-indexnow.ts --dry-run   (preview what would be submitted)
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

/** Fetch currently live sitemap and extract all URLs */
async function getLiveUrls(): Promise<Set<string>> {
  try {
    const res = await fetch(`${BASE_URL}/sitemap.xml`, { signal: AbortSignal.timeout(10000) })
    if (!res.ok) return new Set()
    const xml = await res.text()
    const urls = new Set<string>()
    // Extract <loc>...</loc> entries
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      urls.add(match[1].replace(/\/$/, '')) // normalize trailing slash
    }
    return urls
  } catch {
    // Site not reachable (first deploy, network issue) — treat as no existing URLs
    return new Set()
  }
}

async function submitToIndexNow(urls: string[]) {
  if (urls.length === 0) {
    console.log('✅ No new URLs to submit.')
    return
  }

  console.log(`\n📤 Submitting ${urls.length} URLs to Bing IndexNow...\n`)
  urls.forEach((u) => console.log(`  ${u}`))

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

  console.log(`\nResponse: ${response.status} ${response.statusText}`)

  if (response.ok) {
    console.log('✅ Submitted successfully!')
  } else {
    const body = await response.text()
    console.error('❌ Submission failed:', body)
  }
}

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const forceAll = process.argv.includes('--all')

  const currentUrls = getAllUrls()
  console.log(`📋 Current build has ${currentUrls.length} URLs`)

  let urlsToSubmit: string[]

  if (forceAll) {
    console.log('🔄 --all flag: submitting all URLs')
    urlsToSubmit = currentUrls
  } else {
    // Auto mode: diff against live sitemap
    console.log('🔍 Fetching live sitemap to detect new URLs...')
    const liveUrls = await getLiveUrls()
    console.log(`📡 Live sitemap has ${liveUrls.size} URLs`)

    urlsToSubmit = currentUrls.filter((u) => !liveUrls.has(u.replace(/\/$/, '')))

    if (urlsToSubmit.length === 0) {
      console.log('✅ No new URLs detected. Nothing to submit.')
      return
    }

    console.log(`🆕 Found ${urlsToSubmit.length} new URLs`)
  }

  if (dryRun) {
    console.log('\nDRY RUN — would submit:\n')
    urlsToSubmit.forEach((u) => console.log(`  ${u}`))
    return
  }

  await submitToIndexNow(urlsToSubmit)
}

main().catch(console.error)
