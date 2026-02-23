import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Post Generator | Ethio Coffee Export',
  robots: 'noindex, nofollow',
}

export default function InstaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
