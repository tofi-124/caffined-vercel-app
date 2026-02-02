"use client"
import React, { useState, useEffect } from 'react'
import TopMessage from './TopMessage'
import NavLinks from './NavLinks'
import { AnimatePresence, motion } from 'framer-motion'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTopMessage, setShowTopMessage] = useState(true);

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

    return (
        <>
            <header 
                id='header' 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                    scrolled ? 'shadow-lg' : ''
                }`}
            >
                {/* Animated Top Message */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    showTopMessage ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <TopMessage />
                </div>

                {/* Main Navigation */}
                <nav 
                    id='nav' 
                    className={`relative flex justify-between items-center transition-all duration-500 ease-in-out ${
                        scrolled 
                            ? 'bg-white/95 backdrop-blur-md py-2 px-4 lg:px-20' 
                            : 'bg-primary py-3 px-4 lg:px-32'
                    }`}
                >
                    {/* Left Navigation Links */}
                    <div id="nav-links-left" className='hidden lg:flex items-center gap-8'>
                        <NavLinks position="left" />
                    </div>

                    {/* Center Logo */}
                    <Link 
                        href="/" 
                        className={`flex items-center justify-center transition-all duration-500 ${
                            scrolled ? 'scale-90' : 'scale-100'
                        }`}
                    >
                        <div className='relative w-36 h-11 lg:w-44 lg:h-14'>
                            <ResponsiveImage
                                src='/images/new-logo.png'
                                alt='ethio-coffee-logo'
                                fill
                                sizes='(max-width: 1024px) 144px, 176px'
                                objectFit='contain'
                            />
                        </div>
                    </Link>

                    {/* Right Navigation Links + CTA */}
                    <div id='nav-links-right' className='hidden lg:flex items-center gap-8'>
                        <NavLinks position="right" />
                        <Link 
                            href="/contact-us"
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                                scrolled 
                                    ? 'bg-accent text-white hover:bg-dark shadow-md hover:shadow-lg' 
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
                <div className={`h-0.5 bg-gradient-to-r from-accent via-dark to-accent transition-all duration-500 ${
                    scrolled ? 'opacity-100' : 'opacity-0'
                }`} />
            </header>

            {/* Spacer to prevent content from going under fixed header */}
            <div className={`transition-all duration-500 ${showTopMessage ? 'h-28 lg:h-32' : 'h-16 lg:h-20'}`} />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpened && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='lg:hidden fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm'
                        onClick={() => setIsOpened(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className='absolute right-0 top-0 h-full w-4/5 max-w-sm bg-primary shadow-2xl'
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Mobile Menu Header */}
                            <div className='flex items-center justify-between p-6 border-b border-dark/10'>
                                <Link href="/" onClick={() => setIsOpened(false)}>
                                    <div className='relative w-28 h-10'>
                                        <ResponsiveImage
                                            src='/images/new-logo.png'
                                            alt='ethio-coffee-logo'
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
                                    Get a Quote
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar