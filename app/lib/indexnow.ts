const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY!
const SITE_HOST = 'www.ethiocoffee.co'
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`

/**
 * Submit a single URL to IndexNow for immediate indexing.
 */
export async function submitUrlToIndexNow(url: string): Promise<{ success: boolean; status: number }> {
  const endpoint = `https://api.indexnow.org/IndexNow?url=${encodeURIComponent(url)}&key=${INDEXNOW_KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`

  const response = await fetch(endpoint, { method: 'GET' })
  return { success: response.ok, status: response.status }
}

/**
 * Submit multiple URLs to IndexNow in bulk via POST.
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<{ success: boolean; status: number }> {
  if (urls.length === 0) {
    return { success: false, status: 400 }
  }

  // IndexNow accepts max 10,000 URLs per request
  const batch = urls.slice(0, 10000)

  const response = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    }),
  })

  return { success: response.ok, status: response.status }
}
