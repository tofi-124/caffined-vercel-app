"use client"
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import TopMessage from './TopMessage'
import NavLinks from './NavLinks'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import { usePathname } from 'next/navigation'

// Use useLayoutEffect on client to read scroll position before paint, preventing CLS
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTopMessage, setShowTopMessage] = useState(true);
    const headerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const isHome = pathname === '/';

    // Read scroll position synchronously before first paint to prevent CLS
    useIsomorphicLayoutEffect(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 50);
        setShowTopMessage(scrollY < 100);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);
            setShowTopMessage(scrollY < 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpened]);

    // Keep --header-height CSS variable in sync with actual header size
    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                document.documentElement.style.setProperty(
                    '--header-height',
                    `${headerRef.current.offsetHeight}px`
                );
            }
        };
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        const observer = new ResizeObserver(updateHeaderHeight);
        if (headerRef.current) observer.observe(headerRef.current);
        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
            observer.disconnect();
        };
    }, [scrolled, showTopMessage]);

    return (
        <>
            <header 
                ref={headerRef}
                id='header' 
                className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-500 ease-in-out ${
                    scrolled ? 'shadow-lg' : ''
                }`}
            >
                {/* Animated Top Message - hidden on home hero, shown once scrolled */}
                <div className={`transition-[max-height,transform] duration-500 ease-in-out overflow-hidden ${
                    isHome
                        ? (scrolled ? 'max-h-20 translate-y-0' : 'max-h-0 -translate-y-full')
                        : (showTopMessage ? 'max-h-20 translate-y-0' : 'max-h-0 -translate-y-full')
                }`}>
                    <TopMessage />
                </div>

                {/* Main Navigation */}
                <nav 
                    id='nav' 
                    className={`relative flex justify-between items-center transition-[background-color,padding] duration-300 ease-out will-change-[background-color,padding] ${
                        scrolled 
                            ? 'bg-white/95 backdrop-blur-md py-2 px-4 lg:px-20' 
                            : isHome
                                ? 'bg-transparent py-3 px-4 lg:px-32'
                                : 'bg-primary py-3 px-4 lg:px-32'
                    }`}
                >
                    {/* Left Navigation Links */}
                    <div id="nav-links-left" className='hidden lg:flex items-center gap-8'>
                        <NavLinks position="left" isHome={isHome} scrolled={scrolled} />
                    </div>

                    {/* Center Logo */}
                    <Link 
                        href="/" 
                        className={`flex items-center justify-center transition-transform duration-500 ${
                            scrolled ? 'scale-90' : 'scale-100'
                        }`}
                    >
                        <div className={`relative w-36 h-11 lg:w-44 lg:h-14 transition-[filter] duration-300 ${isHome && !scrolled ? 'brightness-0 invert' : ''}`}>
                            <ResponsiveImage
                                src='/images/new-logo.png'
                                alt='Ethio Coffee - Ethiopian Coffee Exporter'
                                fill
                                sizes='(max-width: 1024px) 144px, 176px'
                                objectFit='contain'
                                priority
                            />
                        </div>
                    </Link>

                    {/* Right Navigation Links + CTA */}
                    <div id='nav-links-right' className='hidden lg:flex items-center gap-8'>
                        <NavLinks position="right" isHome={isHome} scrolled={scrolled} />
                        <Link 
                            href="/contact-us"
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                                scrolled 
                                    ? 'bg-accent text-white hover:bg-dark shadow-md hover:shadow-lg' 
                                    : isHome
                                        ? 'bg-white/20 text-white hover:bg-white hover:text-dark'
                                        : 'bg-dark text-white hover:bg-accent'
                            }`}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={(e) => { e.preventDefault(); setIsOpened((prev) => !prev) }} 
                        className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${
                            scrolled 
                                ? 'bg-dark text-white hover:bg-accent' 
                                : 'bg-dark text-white hover:bg-accent'
                        }`}
                        aria-label={isOpened ? 'Close menu' : 'Open menu'}
                    >
                        {isOpened 
                            ? <AiOutlineClose className='text-xl' /> 
                            : <BiMenuAltRight className='text-xl' />
                        }
                    </button>
                </nav>

                {/* Decorative bottom border that appears on scroll */}
                <div className={`h-0.5 bg-gradient-to-r from-accent via-dark to-accent transition-opacity duration-300 ${
                    scrolled ? 'opacity-100' : 'opacity-0'
                }`} />
            </header>

            {/* Spacer to prevent content from going under fixed header (not on home - hero goes behind nav) */}
            {!isHome && <div className='h-28 lg:h-32' />}

            {/* Mobile Menu Overlay - CSS transitions instead of framer-motion to reduce JS bundle */}
            {/* Backdrop */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpened(false)}
            />
            {/* Drawer */}
            <div
                className={`lg:hidden fixed right-0 top-0 h-full w-4/5 max-w-sm bg-primary shadow-2xl z-50 transition-transform duration-300 ease-out ${
                    isOpened ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Mobile Menu Header */}
                <div className='flex items-center justify-between p-6 border-b border-dark/10'>
                    <Link href="/" onClick={() => setIsOpened(false)}>
                        <div className='relative w-28 h-10'>
                            <ResponsiveImage
                                src='/images/new-logo.png'
                                alt='Ethio Coffee - Ethiopian Coffee Exporter'
                                fill
                                sizes='112px'
                                objectFit='contain'
                            />
                        </div>
                    </Link>
                    <button 
                        onClick={() => setIsOpened(false)}
                        className='p-2 rounded-full bg-dark/5 hover:bg-dark/10 transition-colors'
                        aria-label='Close menu'
                    >
                        <AiOutlineClose className='text-xl text-dark' />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className='flex flex-col p-6 gap-1'>
                    <NavLinks mobile onLinkClick={() => setIsOpened(false)} />
                </div>

                {/* Mobile CTA */}
                <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary via-primary to-transparent'>
                    <Link 
                        href="/contact-us"
                        onClick={() => setIsOpened(false)}
                        className='block w-full py-4 bg-accent text-white text-center rounded-full font-semibold hover:bg-dark transition-colors shadow-lg'
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar