import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Offerings',
      path: '/shop' // We'll repurpose the existing shop page for product display
    },
    {
      name: 'Contact Us',
      path: '/wholesale-inquiry'
    },
    {
      name: 'Blog',
      path: '/blog'
    },
  ]
  return (
    <>
      {links.map((link, index) => <Link className=' hover:underline' key={index} href={link.path}> {link.name} </Link>)}
    </>
  )
}

export default NavLinks
