"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useRef, useEffect } from 'react'


interface NavLink {
  name: string;
  path: string;
  dropdown?: { name: string; path: string }[];
}

interface NavLinksProps {
  position?: 'left' | 'right';
  mobile?: boolean;
  onLinkClick?: () => void;
  isHome?: boolean;
  scrolled?: boolean;
}

const NavLinks = ({ position, mobile, onLinkClick, isHome, scrolled }: NavLinksProps) => {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const leftLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'How To Buy', path: '/ordering-info' },
  ]

  const rightLinks: NavLink[] = [
    { name: 'About', path: '/about' },
    {
      name: 'Journal',
      path: '/insights',
      dropdown: [
        { name: 'Insights', path: '/insights' },
        { name: 'News', path: '/ethiopia-coffee-export-news' },
        { name: 'Ethiopian Coffee Exporter', path: '/ethiopian-coffee-exporter' },
      ],
    },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  const links = position === 'left' ? leftLinks : position === 'right' ? rightLinks : allLinks

  // Check if current path is active
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  const isDropdownActive = (link: NavLink) => {
    if (!link.dropdown) return isActive(link.path)
    return link.dropdown.some((item) => isActive(item.path))
  }

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Mobile styling
  if (mobile) {
    return (
      <>
        {allLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link.dropdown ? (
              <div>
                <span
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  }
                  className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isDropdownActive(link)
                      ? 'bg-accent/10 text-accent border-l-4 border-accent'
                      : 'text-dark hover:bg-dark/5 hover:text-accent hover:translate-x-1'
                  }`}
                >
                  {link.name}
                </span>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openDropdown === link.name ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {link.dropdown.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subLink.path}
                      onClick={onLinkClick}
                      className={`block py-2.5 pl-8 pr-4 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActive(subLink.path)
                          ? 'text-accent'
                          : 'text-dark/70 hover:text-accent hover:translate-x-1'
                      }`}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
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
            )}
          </React.Fragment>
        ))}
      </>
    )
  }

  // Desktop styling
  return (
    <>
      {links.map((link, index) =>
        link.dropdown ? (
          <div
            key={index}
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setOpenDropdown(link.name)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span
              className={`relative text-base font-medium transition-all duration-300 group cursor-pointer ${
                isDropdownActive(link) ? 'text-accent' : isHome && !scrolled ? 'text-white hover:text-accent' : 'text-dark hover:text-accent'
              }`}
            >
              {link.name}
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  isDropdownActive(link) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </span>

            {/* Dropdown menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                openDropdown === link.name
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg border border-dark/10 py-2 min-w-[160px]">
                {link.dropdown.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subLink.path}
                    className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive(subLink.path)
                        ? 'text-accent bg-accent/5'
                        : 'text-dark hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link
            key={index}
            href={link.path}
            className={`relative text-base font-medium transition-all duration-300 group ${
              isActive(link.path) ? 'text-accent' : isHome && !scrolled ? 'text-white hover:text-accent' : 'text-dark hover:text-accent'
            }`}
          >
            {link.name}
            {/* Animated underline */}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        )
      )}
    </>
  )
}

export default NavLinks
