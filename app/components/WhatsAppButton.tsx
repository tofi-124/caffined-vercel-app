"use client"

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { COMPANY_EMAIL } from '../lib/constants'

/**
 * Floating contact FAB (bottom-right) that expands to show WhatsApp & Email options.
 */
export default function ContactFAB() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const pathname = usePathname()

  useEffect(() => {
    setIsVisible(true)
    // Detect mobile via screen width (< 768px)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // On homepage, hide FAB while user is in the hero viewport area
    const isHome = pathname === '/'
    if (isHome) {
      const handleScroll = () => {
        setHeroVisible(window.scrollY < window.innerHeight * 0.8)
      }
      setHeroVisible(true) // start hidden on homepage load
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('resize', checkMobile)
        window.removeEventListener('scroll', handleScroll)
      }
    } else {
      setHeroVisible(false)
    }
    return () => window.removeEventListener('resize', checkMobile)
  }, [pathname])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const whatsappUrl = whatsappNumber
    ? isMobile
      ? `https://wa.me/${whatsappNumber}?text=`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=`
    : null

  return (
    <div
      ref={containerRef}
      className={`fixed right-6 bottom-6 z-50 flex flex-col items-center gap-3 transition-all duration-300 ${
        isVisible && !(isMobile && heroVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Expanded options */}
      <div className={`flex flex-col items-center gap-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}>
        {/* WhatsApp */}
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
              <path d="M16.004 0C7.164 0 0 7.163 0 16.004c0 2.822.737 5.578 2.137 8.004L0 32l8.188-2.088A15.95 15.95 0 0016.004 32C24.836 32 32 24.837 32 16.004 32 7.163 24.836 0 16.004 0zm0 29.09a13.05 13.05 0 01-6.97-2.006l-.5-.296-5.18 1.322 1.384-5.05-.326-.517A13.02 13.02 0 012.91 16.004c0-7.225 5.87-13.095 13.094-13.095 7.226 0 13.096 5.87 13.096 13.095S23.23 29.09 16.004 29.09zm7.178-9.804c-.393-.197-2.326-1.147-2.687-1.277-.36-.131-.623-.197-.885.197-.262.393-1.016 1.277-1.246 1.54-.23.262-.459.295-.852.098-.393-.197-1.66-.612-3.163-1.95-1.17-1.04-1.96-2.326-2.19-2.72-.229-.393-.024-.606.173-.802.177-.177.393-.459.59-.689.197-.23.262-.393.393-.656.131-.262.066-.492-.033-.689-.098-.197-.885-2.133-1.213-2.92-.32-.766-.645-.663-.885-.675l-.754-.013c-.262 0-.689.098-1.05.492-.36.393-1.377 1.344-1.377 3.278s1.41 3.802 1.607 4.064c.197.262 2.775 4.236 6.726 5.94.94.406 1.673.648 2.244.83.943.3 1.8.258 2.479.157.756-.113 2.326-.951 2.655-1.869.328-.918.328-1.705.23-1.869-.099-.164-.362-.262-.755-.459z" />
            </svg>
          </a>
        )}

        {/* Email */}
        <a
          href={`mailto:${COMPANY_EMAIL}`}
          aria-label="Email us"
          className="w-12 h-12 rounded-full bg-dark shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Close contact options' : 'Contact us'}
        className={`w-14 h-14 rounded-full bg-accent shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-[135deg]' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}
