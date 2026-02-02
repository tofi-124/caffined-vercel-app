"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinksProps {
  position?: 'left' | 'right';
  mobile?: boolean;
  onLinkClick?: () => void;
}

const NavLinks = ({ position, mobile, onLinkClick }: NavLinksProps) => {
  const pathname = usePathname()
  
  const leftLinks = [
    { name: 'Home', path: '/' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'Ordering Info', path: '/ordering-info' },
  ]

  const rightLinks = [
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  const links = position === 'left' ? leftLinks : position === 'right' ? rightLinks : allLinks

  // Check if current path is active
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  // Mobile styling
  if (mobile) {
    return (
      <>
        {allLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.path}
            onClick={onLinkClick}
            className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
              isActive(link.path)
                ? 'bg-accent/10 text-accent border-l-4 border-accent'
                : 'text-dark hover:bg-dark/5 hover:text-accent hover:translate-x-1'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </>
    )
  }

  // Desktop styling
  return (
    <>
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.path}
          className={`relative text-base font-medium transition-all duration-300 group ${
            isActive(link.path) ? 'text-accent' : 'text-dark hover:text-accent'
          }`}
        >
          {link.name}
          {/* Animated underline */}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
            isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
      ))}
    </>
  )
}

export default NavLinks
