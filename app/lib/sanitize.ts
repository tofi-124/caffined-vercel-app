/**
 * Escape HTML special characters to prevent XSS/injection in email templates.
 * Replace &, <, >, ", and ' with their HTML entity equivalents.
 */
export function escapeHtml(str: string | number | null | undefined): string {
  if (str === null || str === undefined) return ''
  const s = String(str)
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Validate that a string looks like a valid email address.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Validate PayPal order ID format (alphanumeric only).
 * Prevents path traversal / SSRF when interpolated into URLs.
 */
export function isValidPayPalOrderId(orderId: string): boolean {
  return /^[A-Za-z0-9]+$/.test(orderId)
}

/**
 * Enforce a maximum string length, returning a truncated version if exceeded.
 */
export function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str
  return str.slice(0, maxLen)
}
