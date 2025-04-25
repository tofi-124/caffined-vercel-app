"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Component to restore scroll position to top when navigating between pages
 */
export default function ScrollToTop() {
  const pathname = usePathname()
  
  useEffect(() => {
    // When the pathname changes, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' to avoid competing with page content rendering
    })
  }, [pathname])

  // This component doesn't render anything visible
  return null
}